"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-16 px-6" style={{ borderTop: "1px solid rgba(255,255,255,0.07)", background: "var(--bg2)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
          <div>
            <div className="syne font-black text-2xl mb-3" style={{ color: "var(--text)" }}>
              APEX<span style={{ color: "var(--accent)" }}>.</span>
            </div>
            <p className="text-sm max-w-xs font-light" style={{ color: "var(--muted)", lineHeight: 1.7 }}>
              A one-person digital studio. Bespoke websites, eCommerce, brands and content — built for businesses that care about how they look.
            </p>
          </div>

          <div className="flex flex-wrap gap-12">
            <div>
              <div className="mono text-xs mb-4" style={{ color: "rgba(0,229,255,0.5)", letterSpacing: "0.1em" }}>WORK</div>
              <div className="flex flex-col gap-2">
                {[["Web Design", "/#services"], ["eCommerce", "/#services"], ["Social Content", "/#services"], ["Branding", "/#services"]].map(([l, h]) => (
                  <Link key={l} href={h} className="text-sm transition-colors" style={{ color: "var(--muted)" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}>{l}</Link>
                ))}
              </div>
            </div>
            <div>
              <div className="mono text-xs mb-4" style={{ color: "rgba(0,229,255,0.5)", letterSpacing: "0.1em" }}>STUDIO</div>
              <div className="flex flex-col gap-2">
                {[["Portfolio", "/#work"], ["Rates", "/#rates"], ["About", "/#studio"], ["Start a Project", "/start"]].map(([l, h]) => (
                  <Link key={l} href={h} className="text-sm transition-colors" style={{ color: "var(--muted)" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}>{l}</Link>
                ))}
              </div>
            </div>
            <div>
              <div className="mono text-xs mb-4" style={{ color: "rgba(0,229,255,0.5)", letterSpacing: "0.1em" }}>CONTACT</div>
              <div className="flex flex-col gap-2">
                <a href="mailto:hello@apexdigital.com.au" className="text-sm" style={{ color: "var(--muted)" }}>hello@apexdigital.com.au</a>
                <span className="text-sm" style={{ color: "var(--muted)" }}>Melbourne, AU</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="text-xs mono" style={{ color: "rgba(255,255,255,0.2)", letterSpacing: "0.06em" }}>
            © 2026 APEX Digital · Melbourne, AU
          </div>
          <div className="flex gap-6">
            {["Privacy", "Terms"].map(l => (
              <Link key={l} href="#" className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
