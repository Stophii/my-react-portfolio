// app/blog/playnyc-2025/page.tsx
import Link from "next/link";

export const metadata = {
  title: "PlayNYC 2025: My First Big Showcase as an Indie Dev",
  description:
    "Post-PlayNYC recap: what went well, what I learned, and where Hangar is heading next.",
};

export default function Post() {
  return (
    <article className="mx-auto max-w-3xl">
      {/* Hero */}
      <div className="aspect-[16/9] overflow-hidden rounded-lg bg-neutral-800 mb-6">
        <img
          src="/blog/playnyc.jpg"
          alt="PlayNYC booth snapshot"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Title + Date */}
      <h1 className="text-3xl md:text-4xl font-bold">
        PlayNYC 2025: My First Big Showcase as an Indie Dev
      </h1>
      <div className="text-neutral-400 text-sm mt-2 mb-6">Aug 28, 2025</div>

      {/* Intro */}
      <p className="text-neutral-300 leading-relaxed mb-6">
        I brought <Link href="/games" className="underline">Hangar</Link> to PlayNYC this year. It was my first time
        showcasing as an indie dev, and I wanted honest feedback from real players.
      </p>

      {/* Quick Recap */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">Quick Recap</h2>
      <ul className="list-disc pl-6 text-neutral-300 space-y-2 mb-6">
        <li>Hangar was available to be played on one computer (sometimes two!).</li>
        <li>Convention attendees stopped by to check out the Turbo booth and play my game and others, ranging from people who had no game knowledge to those who could tell me the specific i-frame to parry Havel the Rock in Dark Souls.</li>
        <li>Some people played it for 10 minutes, others sank hours into it. It was such an amazing experience to talk to all of these individuals and introduce myself afterward.</li>
      </ul>

      {/* Highlights / Moments */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">Highlights</h2>
      <p className="text-neutral-300 leading-relaxed mb-6">
        A few memorable moments made the weekend.
      </p>

      {/* Visuals Grid */}
      <div className="mt-6 grid gap-6 md:grid-cols-3 mb-6">
        {/* 1 */}
        <figure>
          <div className="relative overflow-hidden rounded-lg bg-neutral-900">
            <img
              src="/blog/booth.jpg"
              alt="Booth photo"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          <figcaption className="text-neutral-400 text-sm mt-2">
            Booth setup on day one.
          </figcaption>
        </figure>

        {/* 2 */}
        <figure>
          <div className="relative overflow-hidden rounded-lg bg-neutral-900">
            <img
              src="/blog/players.jpg"
              alt="Player trying Hangar"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          <figcaption className="text-neutral-400 text-sm mt-2">
            Live feedback from players helped prioritize fixes.
          </figcaption>
        </figure>

        {/* 3 */}
        <figure>
          <div className="relative overflow-hidden rounded-lg bg-neutral-900">
            <img
              src="/blog/grinding.jpg"
              alt="Game screenshot"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          <figcaption className="text-neutral-400 text-sm mt-2">
            Feedback was implemented asap to make the experience better.
          </figcaption>
        </figure>
      </div>

      {/* Feedback & Takeaways */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">What I Heard</h2>
      <ul className="list-disc pl-6 text-neutral-300 space-y-2 mb-6">
        <li>The learning curve could be a little easier to digest with more interactive descriptions and clarity.</li>
        <li>The vision for the game was accepted and people are eager for more. Pokémon meets Armored Core/mechs was a concept a lot of people liked!</li>
        <li>Save/Load data, achievements, and progression was a desired feature.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">What I Learned</h2>
      <p className="text-neutral-300 leading-relaxed mb-6">
        PlayNYC showed me that my game was fun — and only after five short months of development people enjoyed what I had made, and there was so much room to improve! This is a huge win especially for a new indie dev such as myself and I’m eager to jump back into development, while being vocal and bringing along new faces!
      </p>

      {/* Next Steps */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">What’s Next</h2>
      <ul className="list-disc pl-6 text-neutral-300 space-y-2 mb-6">
        <li>Build a roadmap of what I can add and what can improve the game over the next 3 months. I’ll be vocal about the updates and changes while this is happening and keep those following along clued in and a part of the process!</li>
        <li>Publish it on a public-facing site outside of itch.io (Coolmath Games/Crazy Games) to get more recognition as a developer and garner a larger following.</li>
        <li>Complete the game and start the next project that will improve my skills as a developer and help get my name out there as well as my personal growth to create even better projects even faster!</li>
      </ul>

      {/* Thanks & CTA */}
      <p className="text-neutral-300 leading-relaxed mb-6">
        Thanks again for those who came by at PlayNYC and showed genuine interest in my first public-facing project. I am eager to improve Hangar into the Pokémon-meets-Armored-Core mecha roguelite there is! Check out the{" "}
        <a
          href="https://stophy.itch.io/hangar"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
        itch.io
        </a>{" "}
        and my <Link href="/games" className="underline">games page</Link> to play the latest version! The best way to support my journey would just be to share my linktree or this website around. Tell your friends and family and let them know what Bingus Productions is about!
      </p>
    </article>
  );
}
