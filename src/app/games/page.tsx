// src/app/games/page.tsx

type Game = {
  slug: string;
  name: string;
  titleImage: string;   // wordmark image
  trailerId: string;    // YouTube video id
  blurb: string;
  itchUrl: string;
};

const games: Game[] = [
  {
    slug: "hangar",
    name: "Hangar",
    titleImage: "/games/hangar-title.png",
    trailerId: "F-ihwuTiAbE", // https://www.youtube.com/watch?v=F-ihwuTiAbE
    blurb:
      "Chart your course in Hangar. Lead S.P.E.A.R. operations across star systems, deploy Geirr mechs, and master tight, turn based tactics in fast, replayable runs.",
    itchUrl: "https://stophy.itch.io/hangar",
  },
];

export default function Games() {
  return (
    <main className="min-h-screen px-6 py-12">
      <h1 className="sr-only">Games</h1>

      <div className="mx-auto max-w-4xl space-y-16">
        {games.map((g) => (
          <section key={g.slug} className="space-y-6">
            {/* Title image (wordmark) */}
            <div className="flex justify-center">
              <img
                src={g.titleImage}
                alt={`${g.name} wordmark`}
                className="h-16 md:h-24 w-auto"
                loading="eager"
              />
            </div>

            {/* Two-column: video left, description + widget right */}
            <div className="grid gap-6 md:grid-cols-5 items-start">
              {/* Left: trailer (3/5 on desktop) */}
              <div className="relative aspect-video overflow-hidden rounded-lg bg-neutral-900 md:col-span-3 md:max-w-[560px]">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${g.trailerId}?rel=0&modestbranding=1&color=white`}
                  title={`${g.name} trailer`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Right: your write-up + itch widget (2/5 on desktop) */}
              <div className="md:col-span-2 space-y-4">
                {/* Write about the game here */}
                <p className="text-neutral-300 leading-relaxed">
                  {g.blurb}
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  Artist, Sam <a
                    href="https://www.instagram.com/shmoomples/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:opacity-90"
                    title="Schmoomples on Instagram"
                  >“Shmoomples”</a> Seifrit, is responsible for the artwork of the alpha build of Hangar!
                </p>

                {/* Itch.io widget/button */}
                <div className="pt-2">
                  <iframe
                    src="https://itch.io/embed/3738830?linkback=true&bg_color=000000&fg_color=ffffff&border_color=000000"
                    title="Hangar itch.io widget"
                    loading="lazy"
                    width={208}
                    height={167}
                    className="rounded-md border border-white/10"
                    frameBorder={0}
                  >
                    <a href="https://stophy.itch.io/hangar">Hangar by Bingus Productions</a>
                  </iframe>
                </div>

                {/* SoundCloud playlist (compact) */}
                <div className="pt-2">
                  <iframe
                    title="Hangar — SoundCloud playlist"
                    loading="lazy"
                    width="100%"
                    height="300"
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    className="rounded-md border border-white/10"
                    src={
                      "https://w.soundcloud.com/player/?url=" +
                      encodeURIComponent("https://soundcloud.com/user-935117366/sets/hangar") +
                      "&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true" +
                      "&show_user=true&show_reposts=false&show_teaser=true&visual=false"
                    }
                  />
                </div>

                <p className="text-neutral-400 text-xs mt-2">
                  Music was made and composed by Bingus Productions.
                </p>
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
