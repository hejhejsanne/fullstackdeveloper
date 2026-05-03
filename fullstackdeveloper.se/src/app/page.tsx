import { Suspense } from "react";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import { projects, skills } from "@/data";
import References from "@/components/References";
import ATS from "@/components/Ats";

export default function Home() {
  return (
    <>
      {/* <Nav /> */}
      <main>
        <Suspense fallback={null}>
          <Hero />
        </Suspense>
        <hr className="divider" />
        <About />
        <hr className="divider" />
        <Skills skills={skills} />
        <hr className="divider" />
        <section
          id="projects"
          className="section"
          aria-labelledby="projects-heading"
        >
          <div className="section-label" id="projects-heading">
            Selected projects – with process
          </div>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>
        <hr className="divider" />

        <ATS />
        <hr className="divider" />
        <References />
        <hr className="divider" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
