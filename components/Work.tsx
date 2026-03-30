"use client";
import { useState } from "react";
import Link from "next/link";
import type { Project } from "@/lib/projects";

const CATEGORY_COLORS: Record<string, string> = {
  ecommerce: "linear-gradient(135deg,#0d1a3a,#1a3d6b)",
  web:       "linear-gradient(135deg,#0a1628,#1a3558)",
  social:    "linear-gradient(135deg,#0d2a3a,#1a5a6b)",
  branding:  "linear-gradient(135deg,#2a0d1a,#6b1a4a)",
  video:     "linear-gradient(135deg,#0d2a1a,#1a5a3a)",
};

const CATEGORY_EMOJI: Record<string, string> = {
  ecommerce: "💪", web: "⛳", social: "⛵", branding: "🎨", video: "🎬",
};

const FILTERS = ["all", "web", "ecommerce", "social", "branding", "video"];

export default function Work({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? projects : projects.filter(p => p.category === active);

  return (
    <section id="work" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="mb-16 animate-fadeUp">
          <div className="mono text-xs mb-4" style={{ color: "rgba(0,229,255,0.6)", letterSpacing: "0.12em" }}>[ SELECTED WORK ]</div>
          <h2 className="syne font-black mb-6" style={{ fontSize: "clamp(36px,5vw,64px)", color: "var(--text)", letterSpacing: "-0.02em" }}>
            Results that<br /><span className="grad-text">speak.</span>
          </h2>

          <div className="flex flex-wrap gap-2 mt-8">
            {FILTERS.map(f => (
              <button key={f} onClick={() => setActive(f)}
                className="px-4 py-2 rounded-full text-sm transition-all capitalize"
                style={{
                  background: active === f ? "rgba(0,229,255,0.12)" : "rgba(255,255,255,0.03)",
                  border: `1px solid ${active === f ? "rgba(0,229,255,0.3)" : "rgba(255,255,255,0.08)"}`,
                  color: active === f ? "var(--accent)" : "var(--muted)",
                }}>
                {f === "all" ? "All Work" : f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p, i) => (
            <Link key={p.slug} href={`/work/${p.slug}`}
              className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 animate-fadeUp"
              style={{ animationDelay: `${i * 0.08}s`, border: "1px solid rgba(255,255,255,0.07)" }}>

              {/* Image / gradient cover */}
              <div className="relative h-52 overflow-hidden">
                {p.cover ? (
                  <img src={p.cover} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-5xl"
                    style={{ background: CATEGORY_COLORS[p.category] || CATEGORY_COLORS.web }}>
                    {CATEGORY_EMOJI[p.category] || "✦"}
                  </div>
                )}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  style={{ background: "rgba(0,0,0,0.5)" }}>
                  <span className="text-white font-medium text-sm px-4 py-2 rounded-full"
                    style={{ border: "1px solid rgba(255,255,255,0.3)" }}>
                    View Case Study →
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5" style={{ background: "rgba(13,18,32,0.95)" }}>
                <div className="mono text-xs mb-2 uppercase" style={{ color: "rgba(0,229,255,0.5)", letterSpacing: "0.1em" }}>
                  {p.category}
                </div>
                <h3 className="syne font-bold text-lg mb-2" style={{ color: "var(--text)" }}>{p.title}</h3>
                <p className="text-sm mb-4" style={{ color: "var(--muted)", lineHeight: 1.6 }}>{p.description}</p>

                <div className="grid grid-cols-3 gap-3 mb-4">
                  {(p.metrics || []).slice(0, 3).map((m) => (
                    <div key={m.label}>
                      <div className="syne font-bold text-base" style={{ color: "var(--text)" }}>{m.value}</div>
                      <div className="text-xs" style={{ color: "var(--muted)" }}>{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {(p.tags || []).map(t => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full mono"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "var(--muted)" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
