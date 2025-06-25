import ProjectCard from "./ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">🕹️ My Projects</h1>

      <div className="grid gap-6 max-w-4xl mx-auto">
        <ProjectCard
          title="Dungeon Crashing"
          url="https://bingus-productions.itch.io/dungeon-crashing"
          linkLabel="➡️ Play on Itch.io"

        >
          A procedurally generated dungeon crawler made for the{" "}
          <a
            href="https://turbo.computer/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Turbo
          </a>{" "}
          &quot;Crashing Out&quot; game jam — can you make it to floor 40, or will you crash out?
        </ProjectCard>

        <ProjectCard
          title="Flight of the Ganderlleese"
          url="https://bingus-productions.itch.io/flight-of-the-ganderlleese"
          linkLabel="➡️ Play on Itch.io"

        >
          An arcade-style time attack built for the{" "}
          <a
            href="https://atari.com/pages/i-rebel-a-jeff-minter-game-jam?srsltid=AfmBOorsQpamEKE0kdzQZprXVhGXshbFyM_A78UFbQpdlxqEd5Nkce3m"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Atari
          </a>{" "}
          &quot;I, Rebel&quot; game jam — dodge hazards and race to the sun to save the world!
        </ProjectCard>

        <ProjectCard
          title="Turbo MCP Server"
          url="https://turbo-mcp-frontend-ktypjxsv4-stophiis-projects.vercel.app/"
          linkLabel="🧠 Ask me a question!"
        >
        An MCP server designed to help you develop Turbo games — upload your project&apos;s src folder and ask a question.       
        </ProjectCard>
      </div>
    </main>
  );
}
