import React from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { projects, skills } from "@/data";

export default function Home() {
  return (
    <>
      <Nav />

      <main>
        <Hero />

        <hr className="divider" />

        {/* ── Projekt ───────────────────────────────────────── */}
        <section
          id="projekt"
          className="section"
          aria-labelledby="projekt-heading"
        >
          <div className="section-label" id="projekt-heading">
            Utvalda projekt – med process
          </div>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>

        <hr className="divider" />

        <Skills skills={skills} />

        <hr className="divider" />

        <About />

        <hr className="divider" />

        <Contact />
      </main>

      <Footer />
    </>
  );
}
