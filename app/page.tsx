import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Services from "@/components/Services";
import Rates from "@/components/Rates";
import Studio from "@/components/Studio";
import Footer from "@/components/Footer";
import { getAllProjects } from "@/lib/projects";

export default function Home() {
  const projects = getAllProjects();
  return (
    <main>
      <Nav />
      <Hero />
      <Work projects={projects} />
      <Services />
      <Rates />
      <Studio />
      <Footer />
    </main>
  );
}
