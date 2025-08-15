import Link from "next/link";

export default function Post() {
  return (
    <article className="mx-auto max-w-3xl">
      <div className="aspect-[16/9] overflow-hidden rounded-lg bg-neutral-800 mb-6">
        <img
          src="/blog/bingus.jpg"
          alt="Bingus Productions site is launched!"
          className="h-full w-full object-cover"
        />
      </div>

      <h1 className="text-3xl md:text-4xl font-bold">
        Bingus Productions site is launched!
      </h1>
      <div className="text-neutral-400 text-sm mt-2 mb-6">Aug 14, 2025</div>

    <p className="text-neutral-300 leading-relaxed mb-6">
      Hey there! I’m super excited, so here’s a quick hello and a bit about Bingus Productions. I’m a tiny indie studio in Boise, Idaho. For now, “studio” means me, Christopher Savary. I’ve been building games for a little under a year, and I’m lucky to have close friends in sound and animation who jump in on projects. The goal is simple: make a bunch of creative, and (hopefully!) fun games you can play and enjoy, while I keep growing as a developer.
    </p>

    <p className="text-neutral-300 leading-relaxed mb-6">
      Currently I’m working on <strong>Hangar</strong>, a 2D, turn based roguelite about piloting a mech I call a Geirr (pronounced “gear”) in a science fiction setting.
      The current build lives on
      {" "}
      <a href="https://stophy.itch.io/hangar" target="_blank" rel="noopener noreferrer" className="underline">itch.io</a>
      {" "}
      for now, and I may explore other platforms, including mobile, as the project grows.
      For a quick primer on what Hangar is and why I’m excited about it, read the
      {" "}
      <Link href="/blog/hangar-introduced" className="underline">Introducing Hangar</Link>
      {" "}
      post and take a look at the
      {" "}
      <Link href="/games" className="underline">Games</Link>
      {" "}
      page for more info, art, and audio.
    </p>

    <p className="text-neutral-300 leading-relaxed mb-6">
      I’ll use this site to document the development of Hangar and the broader Bingus Productions journey. I’ll post updates with art, audio, and devlogs about design and structure. If my brain ever hits a wall, you’ll probably see that too.
    </p>

    <p className="text-neutral-300 leading-relaxed mb-6">
      I want as many people as possible to play the game, so I’d love your support. Follow along on X, Bluesky, and Instagram for regular updates and screenshots, or join wherever you like to hang out. Comments and thoughtful feedback help shape the game in real time.
    </p>

    <p className="text-neutral-300 leading-relaxed">
      Thanks for reading. This is the beginning of something great. I have features to implement and bugs to squash. Until next time!
    </p>

    </article>
  );
}
