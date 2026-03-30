"use client";
import Link from "next/link";

export default function Rates() {
  const rates = [
    { code: "WEB DESIGN & DEV",     from: "$2,500", desc: "Custom-built sites. No templates, no page builders. Coded from scratch to look like nothing else." },
    { code: "ECOMMERCE / SHOPIFY",  from: "$2,000", desc: "Full Shopify store builds, CRO, product pages, conversion flows and everything that makes people buy." },
    { code: "SOCIAL CONTENT",       from: "$800",   desc: "Reels, TikToks, brand content and social strategy. Platform-native creative that actually performs." },
    { code: "BRANDING & IDENTITY",  from: "$1,500", desc: "Logo, visual identity, brand guidelines and the full toolkit. Built around who you actually are." },
  ];

  return (
    <section id="rates" className="py-28 px-6" style={{ background: "var(--bg2)" }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fadeUp">
          <div className="mono text-xs mb-4" style={{ color: "rgba(0,229,255,0.6)", letterSpacing: "0.12em" }}>[ RATES ]</div>
          <h2 className="syne font-black mb-4" style={{ fontSize: "clamp(36px,5vw,64px)", color: "var(--text)", letterSpacing: "-0.02em" }}>
            Simple, honest<br /><span className="grad-text">project pricing.</span>
          </h2>
          <p className="text-base font-light max-w-lg mx-auto" style={{ color: "var(--muted)", lineHeight: 1.7 }}>
            No retainers. No monthly commitments. You come to me with a project — I tell you exactly what it costs to do it properly.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px mb-12" style={{ background: "rgba(255,255,255,0.06)" }}>
          {rates.map((r, i) => (
            <div key={r.code} className="flex flex-col sm:flex-row sm:items-center gap-4 p-6 animate-fadeUp"
              style={{ background: "var(--bg2)", animationDelay: `${i * 0.08}s` }}>
              <div className="mono text-xs w-48 flex-shrink-0" style={{ color: "rgba(0,229,255,0.5)", letterSpacing: "0.1em" }}>{r.code}</div>
              <div className="flex-1 text-sm" style={{ color: "var(--muted)", lineHeight: 1.6 }}>{r.desc}</div>
              <div className="syne font-bold text-xl flex-shrink-0" style={{ color: "var(--text)" }}>From {r.from}</div>
            </div>
          ))}
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          {[
            ["NO RETAINERS", "Project-based only. No lock-ins, no monthly minimums."],
            ["ONE PERSON",   "You deal with me directly, start to finish. No handoffs."],
            ["BESPOKE ALWAYS", "Nothing templated. Every deliverable built for your brand."],
          ].map(([title, desc]) => (
            <div key={title} className="text-center">
              <div className="mono text-xs font-bold mb-2" style={{ color: "var(--accent)", letterSpacing: "0.1em" }}>{title}</div>
              <div className="text-xs" style={{ color: "var(--muted)", lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/start" className="grad-btn inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold transition-opacity hover:opacity-90">
            Tell me about your project →
          </Link>
          <p className="text-xs mt-4" style={{ color: "rgba(255,255,255,0.25)" }}>No obligation. No pitch deck. Just an honest conversation.</p>
        </div>
      </div>
    </section>
  );
}
