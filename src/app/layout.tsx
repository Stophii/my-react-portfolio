import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";


export const metadata: Metadata = {
  title: "Chris’s Game Dev Portfolio",
  description: "Games, blogs, and adventures.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&family=Space+Grotesk:wght@400;700&family=Fira+Code&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-neutral-900 text-white">
        <header className="flex justify-between items-center p-4 border-b border-neutral-700">
          <div>
            <Link href="/">🏠 Home</Link>
          </div>
          <nav className="flex gap-8 text-lg">
            <Link href="/projects">Projects</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about">About Me</Link>
          </nav>
        </header>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}


