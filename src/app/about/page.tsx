export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-12 max-w-3xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-6">👤 About Me</h1>

      <p className="text-gray-300 text-lg leading-relaxed mb-8 text-left">
        I'm Christopher Savary — but please, call me Stoph. I'm a self-taught game developer, software developer, and computer specialist. I love robots — whether it’s Armored Cores, Gundams, or Transformers, I’m into all things mecha. I grew up with games and developed a deep passion for anything fantasy or game-related. Some of my favorite games include Dark Souls, Hollow Knight, Armored Core, and Final Fantasy. I’m also into Warhammer and anything artistic that fuels my creativity.

        <br /><br />

        I work every day to grow — not just to meet my own expectations, but to provide for my growing family. My life has been eventful, filled with ups and downs, and at 27, I feel like I’m learning life lessons a decade earlier than most. My dream is to create games that my loved ones — and the world — can enjoy. Technology and games have helped me see the magic in life, and I aim to channel that inspiration into everything I build. Sound, art, programming, fantasy, and creation — those are what I live for. My favorite color is white, and I love animals. If any of my work, words, or stories inspire you, I’d genuinely love to hear it.

      </p>

      <p className="text-gray-300 text-lg leading-relaxed mb-8 text-left">
        This site is both a personal hub and a learning project — my first steps into TypeScript and React. Here, I share the games I’ve made, blog about what I’ve learned, and reflect on the creative process as I continue to grow.
      </p>

      <div className="mt-10">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfHq90OA_X-O0tyP40vwdG1YDaJyX3GO8KGFb7mEVQX03dpxQ/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-blue-400 hover:underline text-lg"
        >
          ✉️ Leave Feedback on My Games
        </a>
      </div>
    </main>
  );
}

