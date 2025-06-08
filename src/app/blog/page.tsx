import Link from "next/link";

const posts = [
  {
    slug: "my-game-dev-journey",
    title: "🛠️ My Game Dev Journey",
    excerpt: "How I never gave up, learned from my mistakes, and found my groove.",
  },
  {
    slug: "chatgpt-and-me",
    title: "🤖 ChatGPT and Me",
    excerpt: "The AI rubber duck method — how it helped me learn to code for the first time.",
  },
  {
    slug: "why-a-web-app",
    title: "🌐 Why A Web App?",
    excerpt: "Skills I had to learn and the goals I'm trying to reach and why you should follow suit",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">📚 Blog</h1>

      <div className="grid gap-6 max-w-4xl mx-auto">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="bg-neutral-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
          >
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-300 mb-4">{post.excerpt}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-400 hover:underline"
            >
              ➡️ Read More
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}