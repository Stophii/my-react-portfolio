type Props = {
  title: string;
  url: string;
  children: React.ReactNode;
  linkLabel?: string;

};

export default function ProjectCard({ title, url, children, linkLabel = "➡️ Play on Itch.io" }: Props) {
  return (
    <div className="bg-neutral-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <div className="text-gray-300 mb-4 text-base leading-relaxed">
        {children}
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline"
      >
        {linkLabel}
      </a>
    </div>
  );
}

