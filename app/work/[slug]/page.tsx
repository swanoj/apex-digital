import { getAllProjects, getProjectBySlug } from "@/lib/projects";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return getAllProjects().map(p => ({ slug: p.slug }));
}

export default function WorkPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <main>
      <Nav />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/#work" className="inline-flex items-center gap-2 text-sm mb-10 transition-colors"
            style={{ color: "var(--muted)" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}>
            ← Back to work
          </Link>

          <div className="mono text-xs mb-4 uppercase" style={{ color: "rgba(0,229,255,0.6)", letterSpacing: "0.12em" }}>
            {project.category}
          </div>
          <h1 className="syne font-black mb-4" style={{ fontSize: "clamp(36px,6vw,72px)", color: "var(--text)", letterSpacing: "-0.02em" }}>
            {project.title}
          </h1>
          <p className="text-lg mb-10 font-light" style={{ color: "var(--muted)", lineHeight: 1.7, maxWidth: "600px" }}>
            {project.description}
          </p>

          {/* Metrics */}
          {project.metrics?.length > 0 && (
            <div className="flex flex-wrap gap-8 mb-12 p-6 rounded-2xl" style={{ background: "var(--bg2)", border: "1px solid rgba(255,255,255,0.07)" }}>
              {project.metrics.map(m => (
                <div key={m.label}>
                  <div className="syne font-black text-3xl" style={{ color: "var(--text)" }}>{m.value}</div>
                  <div className="text-sm mt-1" style={{ color: "var(--muted)" }}>{m.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Cover image */}
          {project.cover && (
            <div className="rounded-2xl overflow-hidden mb-12" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
              <img src={project.cover} alt={project.title} className="w-full" />
            </div>
          )}

          {/* What we did */}
          <div className="mb-12">
            <div className="mono text-xs mb-6" style={{ color: "rgba(0,229,255,0.6)", letterSpacing: "0.12em" }}>[ WHAT WE DID ]</div>
            <div className="prose text-base font-light" style={{ color: "rgba(240,244,255,0.75)", lineHeight: 1.85, maxWidth: "680px" }}>
              <p style={{ whiteSpace: "pre-line" }}>{project.what_we_did}</p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-12">
            {project.tags?.map(t => (
              <span key={t} className="text-xs px-3 py-1.5 rounded-full mono"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "var(--muted)" }}>
                {t}
              </span>
            ))}
          </div>

          {/* Live link */}
          {project.url && (
            <a href={project.url} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm mb-16 transition-colors"
              style={{ color: "var(--accent)" }}>
              View live site →
            </a>
          )}

          {/* CTA */}
          <div className="p-10 rounded-2xl text-center" style={{ background: "var(--bg2)", border: "1px solid rgba(0,229,255,0.15)" }}>
            <h3 className="syne font-black text-2xl mb-3" style={{ color: "var(--text)" }}>Want results like this?</h3>
            <p className="text-sm mb-6 font-light" style={{ color: "var(--muted)" }}>Tell me about your project and I'll give you an honest quote.</p>
            <Link href="/start" className="grad-btn inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold transition-opacity hover:opacity-90">
              Start a Project →
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
