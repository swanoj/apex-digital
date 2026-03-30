"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}
        style={{ background: scrolled ? "rgba(8,12,20,0.92)" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="syne font-black text-xl tracking-tight" style={{ color: "var(--text)" }}>
            APEX<span style={{ color: "var(--accent)" }}>.</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {[["Work", "/#work"], ["Services", "/#services"], ["Rates", "/#rates"], ["Studio", "/#studio"]].map(([label, href]) => (
              <Link key={label} href={href} className="text-sm transition-colors duration-200"
                style={{ color: "var(--muted)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}>
                {label}
              </Link>
            ))}
          </div>
          <Link href="/start" className="hidden md:flex grad-btn px-5 py-2.5 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90">
            Start a Project →
          </Link>
          <button className="md:hidden text-white p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <div className={`w-5 h-0.5 bg-white mb-1.5 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <div className={`w-5 h-0.5 bg-white mb-1.5 transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <div className={`w-5 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
          style={{ background: "rgba(8,12,20,0.98)", backdropFilter: "blur(20px)" }}>
          {[["Work", "/#work"], ["Services", "/#services"], ["Rates", "/#rates"], ["Studio", "/#studio"]].map(([label, href]) => (
            <Link key={label} href={href} onClick={() => setMenuOpen(false)}
              className="syne text-3xl font-bold" style={{ color: "var(--text)" }}>{label}</Link>
          ))}
          <Link href="/start" onClick={() => setMenuOpen(false)}
            className="grad-btn px-8 py-4 rounded-xl text-lg font-semibold mt-4">
            Start a Project →
          </Link>
        </div>
      )}
    </>
  );
}
