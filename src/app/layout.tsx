import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import Image from "next/image";
import Nav from "./components/Nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SubscribeForm from "./components/SubscribeForm";


export const metadata: Metadata = {
  title: "Bingus Productions",
  description: "Games & devlogs by Bingus Productions.",
  icons: {
  icon: [
    { url: "/icon.png", type: "image/png", sizes: "512x512" }, // your logo
  ],
  apple: "/apple-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-black text-white">
        {/* Header / Nav */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-900/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
          <div className="mx-auto max-w-4xl px-4 py-4 flex items-center justify-between">
          <Link href="/" aria-label="Bingus Productions — Home" className="flex items-center gap-2">
            <Image src="/logo.png" alt="" width={108} height={108} priority />
            <span className="sr-only">Bingus Productions</span>
          </Link>
            <Nav />


          {/* Socials in header */}
          <div className="flex items-center gap-3 ml-4 md:ml-6">
            <a href="https://discord.gg/EaEKEZ6AaB" aria-label="Discord" title="Discord" target="_blank" rel="noopener noreferrer">
              <img src="/icons/discord.svg" alt="" aria-hidden="true" className="h-5 w-5 opacity-90 hover:opacity-100 transition-opacity" />
            </a>
            <a href="https://instagram.com/stophy22" aria-label="Instagram" title="Instagram" target="_blank" rel="noopener noreferrer">
              <img src="/icons/instagram.svg" alt="" aria-hidden="true" className="h-5 w-5 opacity-90 hover:opacity-100 transition-opacity" />
            </a>
            <a href="https://x.com/Stophy22" aria-label="X (Twitter)" title="X (Twitter)" target="_blank" rel="noopener noreferrer">
              <img src="/icons/x.svg" alt="" aria-hidden="true" className="h-5 w-5 opacity-90 hover:opacity-100 transition-opacity" />
            </a>
            <a href="https://bsky.app/profile/stophy.itch.io" aria-label="Bluesky" title="Bluesky" target="_blank" rel="noopener noreferrer">
              <img src="/icons/bluesky.svg" alt="" aria-hidden="true" className="h-5 w-5 opacity-90 hover:opacity-100 transition-opacity" />
            </a>
            <a href="https://linktr.ee/BingusProductions" aria-label="Linktree" title="Linktree" target="_blank" rel="noopener noreferrer">
              <img src="/icons/linktree.svg" alt="" aria-hidden="true" className="h-5 w-5 opacity-90 hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
        </header>

        {/* Page content */}
        <main className="mx-auto max-w-4xl px-4 py-10">{children}</main>

{/* Footer */}
<footer className="border-t border-neutral-800 mt-16">
  <div className="mx-auto max-w-4xl px-4 py-10 grid gap-8 md:grid-cols-2">
    {/* Newsletter block */}
    <div>
      <h3 className="text-lg font-semibold">Subscribe to Devlog Diaries</h3>
      <p className="mt-2 text-sm text-neutral-400">
        Join our mailing list!
      </p>
      <div className="mt-4">
        <SubscribeForm />
      </div>
      <p className="mt-2 text-xs text-neutral-500">
        You can unsubscribe anytime.
      </p>
    </div>

    {/* Socials (your existing icons) */}
    <div className="md:justify-self-end">
      <div className="text-sm text-neutral-400 mb-3">Follow</div>
      <div className="flex items-center gap-4">
        <a
          href="https://discord.gg/EaEKEZ6AaB"
          aria-label="Discord"
          title="Discord"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/discord.svg" alt="" aria-hidden="true" className="h-6 w-6 hover:opacity-80 transition-opacity" />
        </a>
        <a
          href="https://instagram.com/stophy22"
          aria-label="Instagram"
          title="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/instagram.svg" alt="" aria-hidden="true" className="h-6 w-6 hover:opacity-80 transition-opacity" />
        </a>
        <a
          href="https://x.com/Stophy22"
          aria-label="X (Twitter)"
          title="X (Twitter)"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/x.svg" alt="" aria-hidden="true" className="h-6 w-6 hover:opacity-80 transition-opacity" />
        </a>
        <a
          href="https://bsky.app/profile/stophy.itch.io"
          aria-label="Bluesky"
          title="Bluesky"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/bluesky.svg" alt="" aria-hidden="true" className="h-6 w-6 hover:opacity-80 transition-opacity" />
        </a>
        <a
          href="https://linktr.ee/BingusProductions"
          aria-label="Linktree"
          title="Linktree"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/linktree.svg" alt="" aria-hidden="true" className="h-6 w-6 hover:opacity-80 transition-opacity" />
        </a>
      </div>
    </div>
  </div>

  <div className="mx-auto max-w-4xl px-4 py-4 text-xs text-neutral-500 text-center">
    © {new Date().getFullYear()} Bingus Productions
  </div>
</footer>


        {/* Vercel analytics */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
