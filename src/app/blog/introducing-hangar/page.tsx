import Link from "next/link";

export default function Post() {
  return (
    <article className="mx-auto max-w-3xl">
      <div className="aspect-[16/9] overflow-hidden rounded-lg bg-neutral-800 mb-6">
        <img
          src="/blog/bingus3.webp"
          alt="Introducing Hangar"
          className="h-full w-full object-cover"
        />
      </div>

      <h1 className="text-3xl md:text-4xl font-bold">Introducing Hangar</h1>
      <div className="text-neutral-400 text-sm mt-2 mb-6">Aug 15, 2025</div>

      <p className="text-neutral-300 leading-relaxed mb-6">
        Hello! As Hangar is my first proof of concept as a developer, I am so excited to share it with you and where I plan to take it. My style leans toward clear systems, tight feel, and learning in public.
      </p>

      <p className="text-neutral-300 leading-relaxed mb-6">
        Hangar is set in a science fiction universe where spacefaring is normal. You play as an operative for S.P.E.A.R., the Solar Peacekeepers of Exploration and Retribution, in command of a mobile base called a Hangar. You hop from star system to star system, deploy Geirr mechs, complete missions, and keep everyday people safe. Finish the objective, bring your squad home, and gear up for the next sortie.
      </p>

      <p className="text-neutral-300 leading-relaxed mb-6">
        A playable proof of concept is live on{" "}
        <a
          href="https://stophy.itch.io/hangar"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          itch.io
        </a>
        , and I’m eager to push it further if it finds traction. Hangar draws inspiration from Pokémon, Slay the Spire, Armored Core, Helldivers, and more, but I’m chasing my own mix: quick sessions, readable tactics, and a little humor along the way. About five months of active development brought it to where it is today, and I’m just getting started. If giant robots and space adventures sound like your thing, come along for the ride.
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-3 mb-6">
        {/* 1 */}
        <figure>
          <div className="relative overflow-hidden rounded-lg bg-neutral-900">
            <img
              src="/blog/hangar/hangar-01.gif"
              alt="Hangar alpha art — combat slice"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          <figcaption className="text-neutral-400 text-sm mt-2">
            Sam “Shmoomples” Seifrit has done an amazing job on the artwork of the alpha build of Hangar.
          </figcaption>
        </figure>

        {/* 2 */}
        <figure>
          <div className="relative overflow-hidden rounded-lg bg-neutral-900">
            <img
              src="/blog/hangar/hangar-02.gif"
              alt="Hangar alpha art — traversal slice"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          <figcaption className="text-neutral-400 text-sm mt-2">
            Follow Sam on{" "}
            <a
              href="https://www.instagram.com/shmoomples/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              title="Schmoomples on Instagram"
            >
              Instagram
            </a>{" "}
            to support his career as an artist.
          </figcaption>
        </figure>

        {/* 3 */}
        <figure>
          <div className="relative overflow-hidden rounded-lg bg-neutral-900">
            <img
              src="/blog/hangar/hangar-03.gif"
              alt="Hangar alpha art — third slice"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          <figcaption className="text-neutral-400 text-sm mt-2">
            From left to right: Decapod, Orca, elephant Geirrs.
          </figcaption>
        </figure>
      </div>

      <p className="text-neutral-300 leading-relaxed mb-6">
        I’ve learned a lot from past projects, and I want development to be an open book. No shortcuts on the work or the quality. I’ll stay vocal and present, share both progress and stumbles, and earn your trust by building in the open. Your reviews and thoughts matter; when you share your opinions, it genuinely makes my day. I’m fueled by passion and the drive to learn and improve, and my goal is to deliver the best version of{" "}
        <Link href="/games" className="underline">Hangar</Link>, something you’re proud to support and I’m proud to ship.
      </p>
    </article>
  );
}
