import Link from "next/link";

const posts = [
  {
    slug: "bingus-productions-site-launched",
    title: "Bingus Productions site is launched!",
    date: "2025-08-14",
    excerpt: "Hey there! I’m super excited, so here’s a quick hello and a bit about Bingus Productions. I’m a tiny indie studio in Boise, Idaho. For now, “studio” means me, Christopher Savary. I’ve been building games for a little under a year, and I’m lucky to have close friends in sound and animation who jump in on projects. The goal is simple: make a bunch of creative, and (hopefully!) fun games you can play and enjoy, while I keep growing as a developer.",
    image: "/blog/bingus.jpg",
  },
  {
    slug: "introducing-hangar",
    title: "Introducing Hangar",
    date: "2025-08-15",
    excerpt: "Hello! Hangar is my first proof of concept as a developer, so here’s what it is and where I’m taking it. My style leans toward clear systems, tight feel, and learning in public.",
    image: "/blog/bingus3.webp",
  },
  {
    slug: "playnyc-2025", // must match your folder name under app/blog/
    title: "PlayNYC 2025: My First Big Showcase as an Indie Dev",
    date: "2025-08-28",
    excerpt: "Post-PlayNYC recap: what went well, what I learned, and where Hangar is heading next.",
    image: "/blog/playnyc.jpg",
  },
//add more posts here
];

function formatDate(d: string) {
  // d is "YYYY-MM-DD"
  const [y, m, day] = d.split("-").map(Number);
  // Create a local Date (no timezone shift)
  const local = new Date(y, m - 1, day);
  return local.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogPage() {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main className="min-h-screen px-6 py-12">
      <h1 className="sr-only">Blog</h1>
      <div className="mx-auto max-w-4xl space-y-12">
        {sorted.map((post) => (
          <article key={post.slug} className="space-y-4">
            <Link href={`/blog/${post.slug}`} className="block group">
              <div className="aspect-[16/9] overflow-hidden rounded-lg bg-neutral-800">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-[1.08]"
                  loading="lazy"
                />
              </div>
              <h2 className="mt-4 text-2xl font-semibold">{post.title}</h2>
              <div className="text-neutral-400 text-sm">{formatDate(post.date)}</div>
              <p className="text-neutral-300 mt-2">{post.excerpt}</p>
              <span className="underline mt-3 inline-block">Read more</span>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
