"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Sparkle, GlobeHemisphereWest, Layout, FileText, Gear, DownloadSimple } from "@phosphor-icons/react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white pb-24 overflow-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(400%); }
        }
        .scan-line {
          animation: scan 2.5s linear infinite;
        }
      `}} />
      
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-neutral-200/50 transition-all">
        <div className="mx-auto max-w-7xl px-6 h-[60px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-[17px] font-bold tracking-tight text-neutral-950">Timsfy</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/enter"
              className="text-[13px] font-medium text-neutral-500 hover:text-neutral-900 transition-colors hidden sm:block"
            >
              Sign In
            </Link>
            <Link
              href="/enter"
              className="text-[13px] font-medium bg-neutral-950 text-white hover:bg-neutral-800 transition-colors px-4 py-2 rounded-full shadow-sm"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative isolate pt-32 pb-20 sm:pt-44 border-b border-neutral-200/50 overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center relative z-10">
          <div className="mb-8 flex justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
            <div className="relative rounded-full px-3 py-1 text-[13px] font-medium text-neutral-600 ring-1 ring-neutral-200 hover:ring-neutral-300 transition-all bg-white">
              Intelligent accounting infrastructure.{" "}
              <a href="#" className="font-semibold text-neutral-950 ml-1">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <h1 className="text-[44px] leading-[1.1] sm:text-[64px] sm:leading-[1.05] font-semibold tracking-[-0.02em] text-neutral-950 max-w-[800px] animate-in fade-in slide-in-from-bottom-6 duration-700 ease-out delay-100">
            The accounting engine
            <br /> for modern startups.
          </h1>
          <p className="mt-8 text-[17px] leading-[1.6] text-neutral-500 max-w-[600px] animate-in fade-in slide-in-from-bottom-6 duration-700 ease-out delay-200 font-medium">
            Timsfy securely processes your documents, parses invoices with AI, and automates your transactions—giving you instant financial clarity with zero manual entry.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 animate-in fade-in slide-in-from-bottom-6 duration-700 ease-out delay-300">
            <Link
              href="/enter"
              className="rounded-full bg-neutral-950 px-6 py-3 text-[14px] font-medium text-white shadow-sm hover:bg-neutral-800 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
            >
              Start building
            </Link>
            <Link href="https://github.com/vas3k/TaxHacker" className="text-[14px] font-medium text-neutral-600 hover:text-neutral-950 transition-colors flex items-center gap-2 group">
              Explore Documentation <ArrowRight weight="bold" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Hero Image */}
          <div className="mt-20 sm:mt-28 w-full max-w-[1000px] animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out delay-500">
            <div className="relative rounded-[20px] bg-[#0A0A0A] p-2 ring-1 ring-inset ring-black/10 shadow-[0_30px_100px_-15px_rgba(0,0,0,0.3)] overflow-hidden group">
              {/* Single-color Neon Scanning Overlay */}
              <div className="absolute inset-0 bg-[#0070F3]/[0.02] mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
              <div className="hidden group-hover:block scan-line absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#0070F3]/20 z-20 pointer-events-none border-b border-[#0070F3]/40 shadow-[0_4px_30px_rgba(0,112,243,0.3)]" />
              
              <Image
                src="/landing/ai-scanner-big.webp"
                alt="App screenshot"
                width={2000}
                height={1200}
                className="rounded-xl ring-1 ring-white/10 w-full h-auto relative z-0 opacity-100 transition-all duration-500"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="mx-auto max-w-[1100px] px-6 lg:px-8 py-24 sm:py-32">
        <div className="mb-20 sm:mb-32">
          <h2 className="text-[15px] font-semibold text-[#0070F3] tracking-tight mb-3">Infrastructure</h2>
          <p className="text-[32px] leading-[1.2] font-semibold tracking-[-0.02em] text-neutral-950 sm:text-[40px] max-w-[600px]">
            Engineered for speed, precision, and complete data ownership.
          </p>
        </div>

        <div className="space-y-32 sm:space-y-40">
          {/* Feature 1 */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="order-2 md:order-1 relative rounded-2xl bg-[#0A0A0A] p-2 ring-1 ring-inset ring-neutral-200 shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-[#0070F3]/[0.02] mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
              <div className="hidden group-hover:block scan-line absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#0070F3]/20 z-20 pointer-events-none border-b border-[#0070F3]/40 shadow-[0_4px_30px_rgba(0,112,243,0.3)]" />
              <Image
                src="/landing/ai-scanner.webp"
                alt="AI Document Analyzer"
                width={1900}
                height={1524}
                className="rounded-xl ring-1 ring-white/10 w-full h-auto relative z-0"
              />
            </div>
            <div className="order-1 md:order-2 flex flex-col justify-center">
              <div className="h-10 w-10 rounded border border-neutral-200 bg-white shadow-sm flex items-center justify-center mb-6">
                <Sparkle weight="duotone" className="h-5 w-5 text-neutral-900" />
              </div>
              <h3 className="text-[22px] font-semibold tracking-tight text-neutral-950 mb-4">Precision intelligent extraction</h3>
              <p className="text-[15px] text-neutral-500 leading-[1.6]">
                Upload your receipts or invoices in PDF for immediate parsing. Timsfy securely extracts constraints like dates, items, and vendors with incredible accuracy, organizing the raw data into a structured format instantly.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="flex flex-col justify-center">
              <div className="h-10 w-10 rounded border border-neutral-200 bg-white shadow-sm flex items-center justify-center mb-6">
                <GlobeHemisphereWest weight="duotone" className="h-5 w-5 text-neutral-900" />
              </div>
              <h3 className="text-[22px] font-semibold tracking-tight text-neutral-950 mb-4">Global currency resolution</h3>
              <p className="text-[15px] text-neutral-500 leading-[1.6]">
                Timsfy automatically detects foreign currencies and reconciles them against historical exchange rates matching the exact moment of the transaction. Built-in support for 170+ global fiat currencies and major blockchains.
              </p>
            </div>
            <div className="relative rounded-2xl bg-[#0A0A0A] p-2 ring-1 ring-inset ring-neutral-200 shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-[#0070F3]/[0.02] mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
              <div className="hidden group-hover:block scan-line absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#0070F3]/20 z-20 pointer-events-none border-b border-[#0070F3]/40 shadow-[0_4px_30px_rgba(0,112,243,0.3)]" />
              <Image
                src="/landing/multi-currency.webp"
                alt="Currency Converter"
                width={1400}
                height={1005}
                className="rounded-xl ring-1 ring-white/10 w-full h-auto relative z-0"
              />
            </div>
          </div>

          {/* Feature 3 */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="order-2 md:order-1 relative rounded-2xl bg-[#0A0A0A] p-2 ring-1 ring-inset ring-neutral-200 shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-[#0070F3]/[0.02] mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
              <div className="hidden group-hover:block scan-line absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#0070F3]/20 z-20 pointer-events-none border-b border-[#0070F3]/40 shadow-[0_4px_30px_rgba(0,112,243,0.3)]" />
              <Image
                src="/landing/transactions.webp"
                alt="Transactions Table"
                width={2000}
                height={1279}
                className="rounded-xl ring-1 ring-white/10 w-full h-auto relative z-0"
              />
            </div>
            <div className="order-1 md:order-2 flex flex-col justify-center">
              <div className="h-10 w-10 rounded border border-neutral-200 bg-white shadow-sm flex items-center justify-center mb-6">
                <Layout weight="duotone" className="h-5 w-5 text-neutral-900" />
              </div>
              <h3 className="text-[22px] font-semibold tracking-tight text-neutral-950 mb-4">Absolute hierarchical freedom</h3>
              <p className="text-[15px] text-neutral-500 leading-[1.6]">
                Design your organization architecture using fully customizable categories, distinct project boundaries, and custom metadata fields. Filter logs with uncompromised operational speed.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="flex flex-col justify-center">
              <div className="h-10 w-10 rounded border border-neutral-200 bg-white shadow-sm flex items-center justify-center mb-6">
                <FileText weight="duotone" className="h-5 w-5 text-neutral-900" />
              </div>
              <h3 className="text-[22px] font-semibold tracking-tight text-neutral-950 mb-4">Native invoice synthesis</h3>
              <p className="text-[15px] text-neutral-500 leading-[1.6]">
                Deploy professional, localized invoices dynamically. Override core fields natively, compute accurate regional tax buffers (VAT, GST), and cache output frameworks as operational templates.
              </p>
            </div>
            <div className="relative rounded-2xl bg-[#0A0A0A] p-2 ring-1 ring-inset ring-neutral-200 shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-[#0070F3]/[0.02] mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
              <div className="hidden group-hover:block scan-line absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#0070F3]/20 z-20 pointer-events-none border-b border-[#0070F3]/40 shadow-[0_4px_30px_rgba(0,112,243,0.3)]" />
              <Image
                src="/landing/invoice-generator.webp"
                alt="Invoice Generator"
                width={1800}
                height={1081}
                className="rounded-xl ring-1 ring-white/10 w-full h-auto relative z-0"
              />
            </div>
          </div>

          {/* Feature 5 */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
             <div className="order-2 md:order-1 relative rounded-2xl bg-[#0A0A0A] p-2 ring-1 ring-inset ring-neutral-200 shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-[#0070F3]/[0.02] mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
              <div className="hidden group-hover:block scan-line absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#0070F3]/20 z-20 pointer-events-none border-b border-[#0070F3]/40 shadow-[0_4px_30px_rgba(0,112,243,0.3)]" />
              <Image
                src="/landing/custom-llm.webp"
                alt="Custom LLM promts"
                width={1800}
                height={1081}
                className="rounded-xl ring-1 ring-white/10 w-full h-auto relative z-0"
              />
            </div>
            <div className="order-1 md:order-2 flex flex-col justify-center">
              <div className="h-10 w-10 rounded border border-neutral-200 bg-white shadow-sm flex items-center justify-center mb-6">
                <Gear weight="duotone" className="h-5 w-5 text-neutral-900" />
              </div>
              <h3 className="text-[22px] font-semibold tracking-tight text-neutral-950 mb-4">Complete infrastructure control</h3>
              <p className="text-[15px] text-neutral-500 leading-[1.6]">
                Programatically override core LLM vectors to isolate exact data variants. Instruct system protocols to flag internal project codes or enforce strict compliance checks on edge-case document structures.
              </p>
            </div>
          </div>

          {/* Feature 6 */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="flex flex-col justify-center">
              <div className="h-10 w-10 rounded border border-neutral-200 bg-white shadow-sm flex items-center justify-center mb-6">
                <DownloadSimple weight="duotone" className="h-5 w-5 text-neutral-900" />
              </div>
              <h3 className="text-[22px] font-semibold tracking-tight text-neutral-950 mb-4">Unyielding data portability</h3>
              <p className="text-[15px] text-neutral-500 leading-[1.6]">
                Host your own operational instance of Timsfy to ensure absolute data privacy. Offload complete transactional repositories to raw CSV assets for isolated tax analysis, unbound by platform lock-in.
              </p>
            </div>
             <div className="relative rounded-2xl bg-[#0A0A0A] p-2 ring-1 ring-inset ring-neutral-200 shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-[#0070F3]/[0.02] mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
              <div className="hidden group-hover:block scan-line absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#0070F3]/20 z-20 pointer-events-none border-b border-[#0070F3]/40 shadow-[0_4px_30px_rgba(0,112,243,0.3)]" />
              <Image
                src="/landing/export.webp"
                alt="Export"
                width={1200}
                height={1081}
                className="rounded-xl ring-1 ring-white/10 w-full h-auto relative z-0"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mx-auto max-w-[1100px] px-6 lg:px-8 mt-12 mb-24">
        <div className="relative isolate overflow-hidden bg-neutral-950 px-6 py-24 text-center shadow-2xl sm:rounded-[24px] sm:px-16 border border-neutral-800">
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Upgrade your financial stack.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[16px] text-neutral-400">
            Start pushing your automated ledger directly to Timsfy today. Uncompromised speed and complete local control.
          </p>
          <div className="mt-8 flex items-center justify-center gap-x-6 relative z-10">
            <Link
              href="/enter"
              className="rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-neutral-950 shadow-sm hover:bg-neutral-200 transition-colors"
            >
              Start Building
            </Link>
            <Link href="https://github.com/vas3k/TaxHacker" className="text-[14px] font-medium text-neutral-300 hover:text-white flex items-center gap-2 group transition-colors">
              Deploy Locally <ArrowRight weight="bold" className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      <footer className="border-t border-neutral-200/50 py-10 px-6 bg-white">
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-[15px] font-semibold tracking-tight text-neutral-950">Timsfy Inc.</span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[13px] font-medium text-neutral-500">
            <Link href="mailto:support@example.com" className="hover:text-neutral-900 transition-colors">API Docs</Link>
            <Link href="/docs/privacy_policy" className="hover:text-neutral-900 transition-colors">Privacy</Link>
            <Link href="/docs/terms" className="hover:text-neutral-900 transition-colors">Terms</Link>
            <Link href="https://github.com/vas3k/TaxHacker" className="hover:text-neutral-900 transition-colors">GitHub</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
