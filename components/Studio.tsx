"use client";
export default function Studio() {
  const testimonials = [
    { quote: "I got mine last week and trained arms with the grips — I'm shocked with how much more muscle gets activated! My arms are so sore today! Crazy how well they work, highly recommend.", name: "Andy K.", role: "Verified Buyer · Sniperform", emoji: "💪" },
    { quote: "Never realised how out of sync I was — the level insert humbled me to reduce weight and slow my reps, but the even pumps after the first set were incredible. Very impressed!", name: "Danny", role: "Verified Buyer · Sniperform", emoji: "💪" },
    { quote: "Used them on arm day and had to reduce the weight — my grip and forearms had the most insane pump with no tendon strain. Crazy how well they work.", name: "Mark R.", role: "Verified Buyer · Sniperform", emoji: "💪" },
  ];

  return (
    <section id="studio" className="py-28 px-6" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-fadeUp">
            <div className="mono text-xs mb-4" style={{ color: "rgba(0,229,255,0.6)", letterSpacing: "0.12em" }}>[ THE STUDIO ]</div>
            <h2 className="syne font-black mb-6" style={{ fontSize: "clamp(36px,5vw,56px)", color: "var(--text)", letterSpacing: "-0.02em" }}>
              Not an agency.<br /><span className="grad-text">A studio of one.</span>
            </h2>
            <p className="text-base mb-6 font-light" style={{ color: "var(--muted)", lineHeight: 1.8 }}>
              APEX is a one-person digital studio based in Melbourne. No account managers, no junior teams, no templates.
              Every project is bespoke, built by me, start to finish.
            </p>
            <p className="text-base font-light" style={{ color: "var(--muted)", lineHeight: 1.8 }}>
              I work with small brands that have personality — the kind of businesses that care deeply about how they look
              and want a digital presence that actually reflects that.
            </p>

            <div className="flex gap-8 mt-10">
              {[["3", "Active clients"], ["3+", "Industries"], ["2024", "Est."]].map(([n, l]) => (
                <div key={l}>
                  <div className="syne font-black text-3xl" style={{ color: "var(--text)" }}>{n}</div>
                  <div className="text-xs mono mt-1" style={{ color: "var(--muted)", letterSpacing: "0.08em" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fadeUp delay-200 p-8 rounded-2xl" style={{ background: "var(--bg2)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <blockquote className="text-base italic mb-6 font-light" style={{ color: "rgba(240,244,255,0.7)", lineHeight: 1.8 }}>
              "I don't do retainers, packages or account managers. Just one person who knows what they're doing —
              building things that actually look different."
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center syne font-black text-sm"
                style={{ background: "linear-gradient(135deg,rgba(0,229,255,0.2),rgba(124,58,255,0.2))", border: "1px solid rgba(0,229,255,0.2)", color: "var(--accent)" }}>
                AX
              </div>
              <div>
                <div className="text-sm font-medium" style={{ color: "var(--text)" }}>APEX Digital</div>
                <div className="text-xs" style={{ color: "var(--muted)" }}>Melbourne, AU</div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <div className="mono text-xs mb-8" style={{ color: "rgba(0,229,255,0.6)", letterSpacing: "0.12em" }}>[ CLIENT RESULTS ]</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div key={i} className="p-6 rounded-2xl animate-fadeUp"
                style={{ background: "var(--bg2)", border: "1px solid rgba(255,255,255,0.07)", animationDelay: `${i * 0.1}s` }}>
                <div className="flex gap-1 mb-4">
                  {"★★★★★".split("").map((s, j) => <span key={j} style={{ color: "var(--accent)" }}>{s}</span>)}
                </div>
                <p className="text-sm mb-5 font-light" style={{ color: "rgba(240,244,255,0.75)", lineHeight: 1.75 }}>"{t.quote}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
                    style={{ background: "rgba(0,229,255,0.1)", border: "1px solid rgba(0,229,255,0.15)" }}>
                    {t.emoji}
                  </div>
                  <div>
                    <div className="text-sm font-medium" style={{ color: "var(--text)" }}>{t.name}</div>
                    <div className="text-xs" style={{ color: "var(--muted)" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
