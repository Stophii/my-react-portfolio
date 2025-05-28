import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-start justify-center text-center px-4 pt-24">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-6">
          Who is Christopher Savary?
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          Hello I am Christopher Savary but most people call me <em>Stoph</em>.
          This site is my digital journal — a space to document what I create,
          how I grow, and everything I learn along the way. In the{" "}
          <Link href="/blog" className="text-blue-400 hover:underline">
            Blog
          </Link>
          , you’ll find reflections on my journey. In{" "}
          <Link href="/projects" className="text-blue-400 hover:underline">
            Projects
          </Link>
          , you can explore the games I’ve built. And in{" "}
          <Link href="/about" className="text-blue-400 hover:underline">
            About Me
          </Link>
          , you’ll get to know a bit more about who I am and how I got here.
        </p>
      </div>
    </main>
  );
}
