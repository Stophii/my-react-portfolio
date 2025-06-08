"use client";

import CodeToggle from "../../components/CodeToggle";

export default function WhyAWebApp() {
  const homepageCode = 
`import Link from "next/link";

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
          , you'll find reflections on my journey. In{" "}
          <Link href="/projects" className="text-blue-400 hover:underline">
            Projects
          </Link>
          , you can explore the games I've built. And in{" "}
          <Link href="/about" className="text-blue-400 hover:underline">
            About Me
          </Link>
          , you'll get to know a bit more about who I am and how I got here.
        </p>
      </div>
    </main>
  );
}`;

  const devserverCode = 
  `
  cd ~/my-react-app

  npm run dev

  http://localhost:3000
  `

  const gitpushCode =
  `
  cd ~/my-react-app

  git status

  git add .

  git commit -m "Updated blog post: Why A Web App"

  git push
  `

return (
  <main className="min-h-screen px-6 py-12 max-w-3xl mx-auto">
    <h1 className="text-4xl font-bold mb-6 text-center">🌐 Why A Web App?</h1>

    <p className="text-gray-300 text-lg leading-relaxed text-left">
      I learned how to make a web app in just a week. The skills I needed included some basic knowledge of TypeScript, React, and Vercel. I also had to know how to use Visual Studio Code, run a dev server, and GitHub. But most importantly, it took self-driven learning. I built this web app to test what I&apos;m capable of. While I have a strong passion for game design, I want my overall skill set to cast a wider net — I&apos;m not satisfied with just knowing one game engine or one language.
    </p>

    <p className="text-gray-300 text-lg leading-relaxed text-left mt-6">
      Let&apos;s start off by talking about React and TypeScript, since the majority of what makes this possible is done with those tools. TypeScript is a superset of JavaScript that adds static typing, helping catch errors earlier and making code easier to read and maintain. It still compiles down to regular JavaScript, so it can run anywhere JavaScript does. React, if you&apos;re familiar with the concept, is like a game engine but for your UI. This might be a crude way to explain it, but just like game engines allow sprites to be drawn and code to come to life, React fills that same role for UI elements.
    </p>

    <p className="text-gray-300 text-lg leading-relaxed text-left mt-6">
      Beyond just basic understanding of the language, I had to write a lot of functions. This was done inside Visual Studio Code, and typically inside a <code>page.tsx</code>.
    </p>

    <CodeToggle label="My Homepage Code Example" code={homepageCode} />

    <p className="text-gray-300 text-lg leading-relaxed text-left mt-6">
      Because of all the learning I was doing, it was imperative that I could test and see what was working in real time. Similar to how Turbo works, I needed to set up hot reloading and real-time updates. Thankfully, this was handled with a dev server and can be run with just three simple commands in the terminal:
    </p>

    <CodeToggle label="Dev Server Example" code={devserverCode} />

    <p className="text-gray-300 text-lg leading-relaxed text-left mt-6">
      With the dev server set up, every time I saved the project I could see the changes I made. Errors are easily caught this way as long as I saved often. I did all of the saving and writing inside Visual Studio Code, and thanks to the Explorer tab, it&apos;s very simple to keep track of file paths. File paths are important because when you&apos;re structuring your web app, you&apos;re creating folders and placing <code>page.tsx</code> files inside them. If you keep your file paths and folder structure clean, you&apos;ll have a much easier time working on your project.
    </p>

    <p className="text-gray-300 text-lg leading-relaxed text-left mt-6">
      After I had written everything, I needed to deploy it to Vercel to make it public. Vercel took my sloppily written code and said, &quot;That won&apos;t work.&quot; The deploy would fail if I had unused variables, incorrect file paths, or other issues. It also deployed everything directly from a GitHub repo, so I had to correctly create and connect a repo to launch my web app. Once I cleaned up the code, the deploy succeeded — and I felt very accomplished!
    </p>

    <p className="text-gray-300 text-lg leading-relaxed text-left mt-6">
      If you&apos;ve read my other blog post, then it&apos;s no surprise that I learned all of these skills by asking questions. AI is a powerful tool for gaining a foothold in any new knowledge climb. It&apos;s because of AI that I can move so quickly and isolate the skills I need to learn. Simple questions lead to new questions, which lead to important questions, yielding important answers. I don&apos;t claim to be an expert in TypeScript or React, but I have made a web app — and no one can take that away from me.
    </p>

    <p className="text-gray-300 text-lg leading-relaxed text-left mt-6">
      If I could go back and do things differently, I wouldn&apos;t have named it &quot;my-react-app&quot;, haha. I also would have started this entire journey with more emphasis on GitHub, but it has paved the way to valuable skills, like updating my project with Git through the terminal, which I think is a valuable skill to have picked up.
    </p>

    <CodeToggle label="Git Push Example" code={gitpushCode} />

    <p className="text-gray-300 text-lg leading-relaxed text-left mt-6">
      If you find yourself wanting to further your knowledge in game development, I encourage you to follow suit. Writing blogs, having a website where people can view your projects, talking about your journey, and learning more coding languages will only improve your abilities. Companies might see a ton of &quot;game developers&quot; apply, but the game dev who applies with multiple languages under their belt, a website, and an organized portfolio is bound to stand out.
    </p>

  </main>
);
}
