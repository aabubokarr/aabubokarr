import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import { fetchRepositories } from "@/services/github";

export const revalidate = 3600;

export default async function Home() {
  const repos = await fetchRepositories();
  const topRepos = repos.slice(0, 4); // Get top 4 recently updated

  return (
    <div className="flex flex-col w-full">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects projects={topRepos} />
      <Education />
      <Contact />
    </div>
  );
}
