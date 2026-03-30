"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let animId: number;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);

    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random(), y: Math.random(),
      r: Math.random() * 1.2 + 0.2,
      o: Math.random() * 0.5 + 0.1,
      tw: Math.random() * 3 + 1,
    }));
    let t = 0;

    const draw = () => {
      ctx.fillStyle = "#080C14"; ctx.fillRect(0, 0, canvas.width, canvas.height);
      stars.forEach(s => {
        const tw = 0.5 + 0.5 * Math.sin(t * 0.018 * s.tw + s.x * 99);
        ctx.beginPath(); ctx.arc(s.x * canvas.width, s.y * canvas.height * 0.85, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,220,255,${s.o * tw})`; ctx.fill();
      });
      t++; animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Glows */}
      <div className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] rounded-full glow-cyan animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-[-150px] left-[-100px] w-[500px] h-[500px] rounded-full glow-purple animate-pulse-slow pointer-events-none" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="mono text-xs mb-6 animate-fadeUp" style={{ color: "rgba(0,229,255,0.6)", letterSpacing: "0.12em" }}>
          [ APEX DIGITAL STUDIO v1.0 — MELBOURNE, AU ]
        </div>

        <h1 className="syne font-black leading-none mb-6 animate-fadeUp delay-100"
          style={{ fontSize: "clamp(52px,9vw,110px)", letterSpacing: "-0.03em", color: "var(--text)" }}>
          We Build.<br />
          <span className="grad-text">We Launch.</span><br />
          We Dominate.
        </h1>

        <p className="text-lg font-light mb-10 animate-fadeUp delay-200 max-w-xl mx-auto"
          style={{ color: "var(--muted)", lineHeight: 1.7 }}>
          Websites. eCommerce. Brands. Content. — Built properly, for small brands
          that give a damn about how they look.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeUp delay-300">
          <Link href="/start" className="grad-btn px-8 py-4 rounded-xl text-base font-semibold transition-opacity hover:opacity-90 inline-flex items-center gap-2">
            Start a Project →
          </Link>
          <a href="#work" className="px-8 py-4 rounded-xl text-base font-medium transition-all inline-flex items-center gap-2"
            style={{ border: "1px solid rgba(255,255,255,0.12)", color: "var(--muted)" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,229,255,0.3)"; (e.currentTarget as HTMLElement).style.color = "var(--text)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)"; (e.currentTarget as HTMLElement).style.color = "var(--muted)"; }}>
            View Work ↓
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-16 animate-fadeUp delay-400">
          {[
            ["3", "Active Clients"],
            ["3+", "Industries"],
            ["2024", "Est. Melbourne"],
          ].map(([val, label]) => (
            <div key={label} className="text-center">
              <div className="syne font-black text-3xl" style={{ color: "var(--text)" }}>{val}</div>
              <div className="text-xs mt-1 mono" style={{ color: "var(--muted)", letterSpacing: "0.08em" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fadeUp delay-500">
        <div className="w-5 h-8 rounded-full flex justify-center pt-2" style={{ border: "1px solid rgba(255,255,255,0.15)" }}>
          <div className="w-0.5 h-2 rounded-full" style={{ background: "var(--accent)", animation: "bounce 1.5s infinite" }} />
        </div>
      </div>
    </section>
  );
}
