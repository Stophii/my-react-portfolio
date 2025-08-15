// src/app/about/page.tsx
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-12 max-w-3xl mx-auto">
      {/* Header block: logo + studio name */}
      <div className="flex flex-col items-center text-center">
        <Image
          src="/logo.png"
          alt="Bingus Productions logo"
          width={128}
          height={128}
          priority
        />
        <h1 className="mt-4 text-4xl font-bold tracking-wide">Bingus Productions</h1>
        <p className="mt-2 text-neutral-400">Learning · Dreaming · Creating</p>
      </div>

      {/* Studio blurb */}
      <section className="mt-10 text-left">
        <p className="text-neutral-300 text-lg leading-relaxed">
          Bingus Productions is an indie games developer in Boise, Idaho. My mission is to create amazing, honest, and silly games people will enjoy for years to come; learning and sharing the journey along the way.
        </p>
      </section>

      {/* Team (just you) */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-center">The Team</h2>

        <article className="mt-6 rounded-lg border border-white/10 p-5">
          {/* Your portrait goes here, above your name */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/about/stoph.webp"
              alt="Christopher “Stoph” Savary"
              width={160}
              height={160}
              className="rounded-full object-cover ring-1 ring-white/10"
            />
            <h3 className="mt-4 text-xl font-medium">
              Christopher &rdquo;Stoph&rdquo; Savary
              <span className="text-neutral-400 text-base font-normal"> — Founder / Developer</span>
            </h3>
          </div>

          <p className="mt-4 text-neutral-300 leading-relaxed">
            Christopher is the founder of Bingus Productions who goes by &rdquo;Stoph&rdquo;. He&apos;s excited to share the continued journey of his career as a game developer with whoever is interested. Growing up with Playstation 2, N64, and computer games has fueled his passion for turning ideas into playable slices for people to explore. Having fell in love with games early on, he wants to share that magic with others. He aims to craft adventures that feel rewarding and full of enjoyement, with a soft spot for mechs, fantasy, and humor. As a husband and a father, he strives to build games and a future his family can be proud of.
          </p>
        </article>
      </section>
    </main>
  );
}
