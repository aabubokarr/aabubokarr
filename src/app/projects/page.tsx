import { fetchRepositories } from "@/services/github";
import ProjectsList from "@/components/sections/ProjectsList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Abu Bokar",
  description: "A comprehensive list of repositories fetched directly from my GitHub.",
};

export const revalidate = 3600; // revalidate every hour

export default async function ProjectsPage() {
  const repos = await fetchRepositories();

  return <ProjectsList initialProjects={repos} />;
}
