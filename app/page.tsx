"use client"

import Link from "next/link"
import { Twitter } from "lucide-react"
import { AnimatedShinyText } from "@/components/AnimatedShinyText"
import { BoxReveal } from "@/components/BoxReveal"
import { FlickeringGrid } from "@/components/FlickeringGrid"

export default function ComingSoonPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-cream text-black font-mono overflow-hidden">
      <FlickeringGrid
        className="absolute inset-0 z-0"
        color="rgb(0, 0, 0)"
        squareSize={4}
        gridGap={6}
      />
      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="p-6 flex justify-between items-center relative">
          <h1 className="text-2xl font-bold">Anyway</h1>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <img src="/256.png" alt="Anyway Logo" className="w-16 h-16" />
          </div>
          <AnimatedShinyText>
            <span>Coming Soon</span>
          </AnimatedShinyText>
        </header>

        <main className="flex-grow flex items-center justify-center px-4">
          <div className="text-center w-full max-w-2xl">
            <BoxReveal boxColor="#1a1a1a" duration={0.7}>
              <h2 className="text-4xl font-bold mb-6 tracking-tight">
                Anyway: Building Open Source for Everyone
              </h2>
            </BoxReveal>
            <BoxReveal boxColor="#1a1a1a" duration={0.7} width="100%">
              <p className="text-lg mb-8 leading-relaxed text-black/80">
                We're passionate about building decentralized technology that matters. Through open source, we're creating
                tools and solutions that empower developers and make the web more accessible for everyone.
              </p>
            </BoxReveal>
            <div className="mt-4 flex justify-center">
              <div className="relative inline-flex">
                <div className="w-12 h-12 border-2 border-black/40 animate-ping rounded-full"></div>
                <div className="absolute inset-0 w-12 h-12 border-2 border-black/60 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </main>

        <footer className="p-6 flex justify-end">
          <Link
            href="https://x.com/anyway"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black/80 hover:text-black transition-colors"
            aria-label="Follow us on X (formerly Twitter)"
          >
            <Twitter size={24} />
          </Link>
        </footer>
      </div>
    </div>
  )
}

