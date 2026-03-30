import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Project {
  slug: string;
  title: string;
  client: string;
  category: string;
  description: string;
  what_we_did: string;
  cover: string;
  url: string;
  metrics: { value: string; label: string }[];
  tags: string[];
  featured: boolean;
  order: number;
  content: string;
}

const projectsDir = path.join(process.cwd(), "content/projects");

export function getAllProjects(): Project[] {
  if (!fs.existsSync(projectsDir)) return [];
  const files = fs.readdirSync(projectsDir).filter(f => f.endsWith(".md"));
  return files
    .map(file => {
      const slug = file.replace(".md", "");
      const raw = fs.readFileSync(path.join(projectsDir, file), "utf8");
      const { data, content } = matter(raw);
      return { slug, content, ...data } as Project;
    })
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

export function getProjectBySlug(slug: string): Project | null {
  const filePath = path.join(projectsDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return { slug, content, ...data } as Project;
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter(p => p.featured);
}
