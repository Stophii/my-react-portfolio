// app/blog/playnyc-2025/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Hangar — A Bingus Postmortem",
  description:
    "The six-month journey behind making my first successful video game in the Turbo engine.",
};

export default function Post() {
  return (
    <article className="mx-auto max-w-3xl">
      {/* Hero */}
      <div className="aspect-[16/9] overflow-hidden rounded-lg bg-neutral-800 mb-6">
        <img
          src="/blog/postmortem.jpg"
          alt="PlayNYC booth snapshot"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Title + Date */}
      <h1 className="text-3xl md:text-4xl font-bold">
        Hangar — A Bingus Postmortem
      </h1>
      <div className="text-neutral-400 text-sm mt-2 mb-6">Sep 15, 2025</div>

      {/* Intro */}
      <p className="text-neutral-300 leading-relaxed mb-6">
        I completed{" "}
        <Link href="/games" className="underline">
          Hangar
        </Link>{" "}
        in just six months. Here’s what I learned from the journey.
      </p>

      {/* Some Facts */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">Some Facts</h2>
      <ul className="list-disc pl-6 text-neutral-300 space-y-2 mb-6">
        <li>Hangar was made in six months.</li>
        <li>It’s the fifth game I’ve ever made.</li>
        <li>
          It was created with a team of three people covering Programming, Art,
          and Sound.
        </li>
      </ul>

      {/* The Journey */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">The Journey</h2>
      <p className="text-neutral-300 leading-relaxed mb-6">
        Hangar began with a game design document (GDD) that outlined the core
        concepts: types, enemies, locations, and mechanics. Writing this early
        GDD was a fun and important step — it helped me organize my creative
        thoughts. But when I started, I had no idea how to actually make a
        turn-based game.
      </p>
      <p className="text-neutral-300 leading-relaxed mb-6">
        Hangar started as an RPG and later shifted into a roguelite when I felt
        it wasn’t engaging enough. One of the hardest parts of development was
        being honest with myself and receiving feedback. While the feedback was
        incredibly helpful, there were plenty of moments where I had spent 40+
        hours on something only for people not to understand it, or to suggest a
        change I had already wrestled with.
      </p>
      <p className="text-neutral-300 leading-relaxed mb-6">
        Fast forward to the initial release on July 20, 2025: about 45 views and
        25 browser plays. It may not sound huge, but it was the most traction
        I’d ever gotten on a game — and it felt unbelievable. In the past,
        people played my games for maybe 10 minutes and never returned. With
        Hangar, people were still talking to me about it days later. That early
        traction inspired me to keep pushing forward.
      </p>
      <p className="text-neutral-300 leading-relaxed mb-6">
        Around update 0.5.0, Hangar was shown at Indie Dev Night in NYC, where
        the feedback was glowing. To this day, Hangar has never scored below a 3
        out of 5 in “fun factor,” and it consistently received more 5s than 3s.
        The positive feedback, combined with the knowledge that my effort wasn’t
        wasted, fueled my motivation to polish it for the next big milestone:
        PlayNYC. (I wrote a separate post about that event, so I’ll keep this
        short and encourage you to check it out!)
      </p>
      <p className="text-neutral-300 leading-relaxed mb-6">
        After PlayNYC, I kept working on Hangar for what was supposed to be three more months. But in
        the end, I had to ask myself: should I dive deeper, add more features,
        and risk getting lost in development — or move on? The answer was
        simple. Hangar had already taught me so much. If I finished it and
        started something new, I would only learn more. If Hangar gains traction
        in the future, I can always return to it. If not, I still have an
        amazing proof of concept that I’m proud of.
      </p>

       <p className="text-neutral-300 leading-relaxed mb-6">
        At the end of my journey, Hangar sits at just over 600 views and 300 browser plays on itch.io — with the potential for even more once it launches on platforms with larger audiences. While itch.io isn’t always the best place to get broad visibility, it’s an incredibly easy and reliable way to deploy and share a game.
      </p>

      {/* What’s Next */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">What’s Next?</h2>
      <p className="text-neutral-300 leading-relaxed mb-6">
        Hangar will be uploaded to a few more websites (CrazyGames and
        CoolmathGames) and will always remain playable on itch.io. I’ll continue
        fixing bugs as they come in and monitoring its progress.
      </p>
      <p className="text-neutral-300 leading-relaxed mb-6">
        Meanwhile, I’m shifting geirrs (haha) into a more laid-back project called{" "}
        <strong>ShelfCare</strong> — a mobile game inspired by self-care apps,
        where you take care of and trade plants. My wife creates houseplant
        content on YouTube, so we’ll be collaborating on this as a fun
        intermission project between larger games.
      </p>

      {/* Thanks & CTA */}
      <p className="text-neutral-300 leading-relaxed mb-6">
        I can’t say thank you enough. Hangar was a wild success for a
        self-taught developer’s fifth project, and I learned so many valuable
        skills from it. Everyone’s feedback, playtesting, and support means more
        than I can express. I have a passion for making games, and I’ll keep at
        it for as long as I can.
      </p>
      <p className="text-neutral-300 leading-relaxed mb-6">
        You can play Hangar on{" "}
        <a
          href="https://stophy.itch.io/hangar"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          itch.io
        </a>{" "}
        or on my{" "}
        <Link href="/games" className="underline">
          games page
        </Link>
        . The best way to support my journey is to share my Linktree or this
        website with friends and family — and help spread the word about Bingus
        Productions!
      </p>

      <p className="text-neutral-300 leading-relaxed mb-6">
        Look forward to blog posts and updates on ShelfCare and if you want to play the early demo it can be accessed {" "}
        <a
          href="https://stophy.itch.io/shelfcare"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
        on my itch.io
        </a>{" "}
        The people I met on the journey, the knowledge I gained, and the goals I reached... Thank you for everything and thank you for reading.
      </p>
    </article>
  );
}
