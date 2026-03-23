"use server"

import { fileExists, getUserPreviewsDirectory, safePathJoin } from "@/lib/files"
import { User } from "@/prisma/client"
import fs from "fs/promises"
import path from "path"
import os from "os"
import { execFile } from "child_process"
import { promisify } from "util"
import sharp from "sharp"
import config from "../config"

const execFileAsync = promisify(execFile)

async function findGhostscriptCommand(): Promise<string> {
  if (os.platform() === "win32") {
    try { await execFileAsync("gswin64c", ["--version"]); return "gswin64c"; } catch (e) {}
    try { await execFileAsync("gswin32c", ["--version"]); return "gswin32c"; } catch (e) {}
    try { await execFileAsync("gs", ["--version"]); return "gs"; } catch (e) {}
    
    const gsDirs = [
      "C:\\Program Files\\gs",
      "C:\\Program Files (x86)\\gs"
    ];
    for (const dir of gsDirs) {
      try {
        const subdirs = await fs.readdir(dir);
        for (const subdir of subdirs) {
          const binPath64 = path.join(dir, subdir, "bin", "gswin64c.exe");
          try { await fs.access(binPath64); return binPath64; } catch (e) {}
          const binPath32 = path.join(dir, subdir, "bin", "gswin32c.exe");
          try { await fs.access(binPath32); return binPath32; } catch (e) {}
        }
      } catch (e) {
        // Directory doesn't exist or is not readable, continue
      }
    }
  }
  return "gs";
}

export async function pdfToImages(user: User, origFilePath: string): Promise<{ contentType: string; pages: string[] }> {
  const userPreviewsDirectory = getUserPreviewsDirectory(user)
  await fs.mkdir(userPreviewsDirectory, { recursive: true })

  const basename = path.basename(origFilePath, path.extname(origFilePath))
  // Check if converted pages already exist
  const existingPages: string[] = []
  for (let i = 1; i <= config.upload.pdfs.maxPages; i++) {
    const convertedFilePath = safePathJoin(userPreviewsDirectory, `${basename}.${i}.webp`)
    if (await fileExists(convertedFilePath)) {
      existingPages.push(convertedFilePath)
    } else {
      break
    }
  }

  if (existingPages.length > 0) {
    return { contentType: "image/webp", pages: existingPages }
  }

  // If not — convert the file and store in previews folder
  const gsCommand = await findGhostscriptCommand()
  const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), "taxhacker-pdf-"))

  try {
    const pngPattern = path.join(tempDir, "page-%d.png")
    
    // 1. Run Ghostscript to extract PNGs directly (skips GM dependency)
    await execFileAsync(gsCommand, [
      "-dSAFER",
      "-dBATCH",
      "-dNOPAUSE",
      "-sDEVICE=png16m",
      `-r${config.upload.pdfs.dpi || 150}`,
      `-sOutputFile=${pngPattern}`,
      origFilePath
    ])

    const files = await fs.readdir(tempDir)
    const pngFiles = files.filter(f => f.endsWith(".png")).sort((a, b) => {
      const numA = parseInt(a.match(/page-(\d+)/)?.[1] || "0")
      const numB = parseInt(b.match(/page-(\d+)/)?.[1] || "0")
      return numA - numB
    })

    // 2. Process with sharp to WebP format limits
    const paths: string[] = []
    let i = 1
    for (const pngFile of pngFiles) {
      if (i > config.upload.pdfs.maxPages) break
      
      const pngPath = path.join(tempDir, pngFile)
      const webpPath = safePathJoin(userPreviewsDirectory, `${basename}.${i}.webp`)
      
      await sharp(pngPath)
        .resize({
          width: config.upload.pdfs.maxWidth,
          height: config.upload.pdfs.maxHeight,
          fit: "inside",
          withoutEnlargement: true
        })
        .webp({ quality: config.upload.pdfs.quality })
        .toFile(webpPath)
        
      paths.push(webpPath)
      i++
    }

    return {
      contentType: "image/webp",
      pages: paths,
    }
  } catch (error) {
    console.error("Error converting PDF to image:", error)
    throw error
  } finally {
    // Cleanup temporary PNGs
    await fs.rm(tempDir, { recursive: true, force: true }).catch(console.error)
  }
}
