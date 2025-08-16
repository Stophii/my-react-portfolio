"use client";
import { useState } from "react";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] =
    useState<"idle" | "loading" | "ok" | "error">("idle");
  const [err, setErr] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErr("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, botfield: "" }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus("ok");
        setEmail("");
      } else {
        // Show the exact error returned by your API route
        setErr(data?.error || `Error ${res.status}`);
        setStatus("error");
      }
    } catch {
      setErr("Network error. Check your connection and try again.");
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex items-center gap-2">
      {/* Honeypot */}
      <input name="botfield" className="hidden" tabIndex={-1} autoComplete="off" />
      <input
        type="email"
        autoComplete="email"
        required
        placeholder="you@site.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-white/10 bg-white/5 text-white rounded-xl px-3 py-2 w-64 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/40"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="group inline-flex items-center gap-1 rounded-2xl px-4 py-2
                   border border-white/10 bg-white/10 text-white font-medium
                   cursor-pointer select-none
                   hover:bg-white/20 active:bg-white/25
                   focus:outline-none focus:ring-2 focus:ring-white/40
                   disabled:opacity-50 disabled:cursor-not-allowed
                   transition-colors"
      >
        {status === "loading" ? "Subscribing…" : "Subscribe"}
        <span className="transition-transform group-hover:translate-x-0.5">→</span>
      </button>

      <span
        aria-live="polite"
        className="text-sm ml-2"
      >
        {status === "ok" && <span className="text-green-400">Subscribed! Check your inbox soon.</span>}
        {status === "error" && <span className="text-red-400">{err}</span>}
      </span>
    </form>
  );
}
