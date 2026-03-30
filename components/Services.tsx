"use client";
export default function Services() {
  const services = [
    { num: "01", icon: "🎨", title: "Web Design & Dev", desc: "Custom-built from scratch. No templates, no page builders. Coded to look like nothing else and perform like a machine.", from: "$2,500" },
    { num: "02", icon: "🛒", title: "eCommerce / Shopify", desc: "Full store builds, CRO, product pages, conversion flows. Everything that turns browsers into buyers.", from: "$2,000" },
    { num: "03", icon: "📱", title: "Social Content & Video", desc: "Reels, TikToks, brand content and strategy. Platform-native creative built for the algorithm and the audience.", from: "$800" },
    { num: "04", icon: "✦", title: "Branding & Identity", desc: "Logo, visual identity, brand guidelines and the full toolkit. Built around who you actually are — not a template.", from: "$1,500" },
    { num: "05", icon: "⚙️", title: "Web Apps & Platforms", desc: "Custom web applications, dashboards, and tools. React + Node.js + Supabase. Built to scale.", from: "$3,500" },
    { num: "06", icon: "🤖", title: "AI Integration", desc: "AI-native features and automations baked into your products. Claude, OpenAI, custom pipelines — real competitive edges.", from: "$2,500" },
  ];

  return (
    <section id="services" className="py-28 px-6" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 animate-fadeUp">
          <div className="mono text-xs mb-4" style={{ color: "rgba(0,229,255,0.6)", letterSpacing: "0.12em" }}>[ CAPABILITIES ]</div>
          <h2 className="syne font-black" style={{ fontSize: "clamp(36px,5vw,64px)", color: "var(--text)", letterSpacing: "-0.02em" }}>
            Everything you need.<br /><span className="grad-text">Nothing you don't.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.05)" }}>
          {services.map((s, i) => (
            <div key={s.num} className="p-8 transition-all duration-200 animate-fadeUp group"
              style={{ background: "var(--bg)", animationDelay: `${i * 0.06}s` }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(0,229,255,0.03)")}
              onMouseLeave={e => (e.currentTarget.style.background = "var(--bg)")}>
              <div className="flex items-start justify-between mb-5">
                <span className="text-2xl">{s.icon}</span>
                <span className="mono text-xs" style={{ color: "rgba(0,229,255,0.35)", letterSpacing: "0.1em" }}>{s.num}</span>
              </div>
              <h3 className="syne font-bold text-lg mb-3" style={{ color: "var(--text)" }}>{s.title}</h3>
              <p className="text-sm mb-4" style={{ color: "var(--muted)", lineHeight: 1.7 }}>{s.desc}</p>
              <div className="mono text-sm" style={{ color: "var(--accent)" }}>From {s.from}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
