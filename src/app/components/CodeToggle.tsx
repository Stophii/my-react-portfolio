"use client";

import { useState } from "react";

type CodeToggleProps = {
  label: string;
  code: string;
};

export default function CodeToggle({ label, code }: CodeToggleProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-neutral-800 text-white px-4 py-2 rounded hover:bg-neutral-700 transition"
      >
        {isOpen ? `▼ ${label}` : `▶ ${label}`}
      </button>

      {isOpen && (
        <pre className="bg-gray-900 text-green-400 p-4 rounded my-6 overflow-auto">
          <code>{code}</code>
        </pre>
      )}
    </div>
  );
}
