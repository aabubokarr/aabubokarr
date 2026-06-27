import { fetchReadme, fetchRepositories, GithubRepo } from "@/services/github";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Star, Calendar } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { format } from "date-fns";
import { Metadata } from "next";

export const revalidate = 3600;

interface Props {
  params: Promise<{ repo: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = await params;
  return {
    title: `${p.repo} | Abu Bokar`,
    description: `Details and README for ${p.repo}`,
  };
}

export default async function RepoDetailsPage({ params }: Props) {
  const p = await params;
  const { repo } = p;
  const [repos, readme] = await Promise.all([
    fetchRepositories(),
    fetchReadme(repo)
  ]);

  const repoDetails = repos.find(r => r.name === repo);

  if (!repoDetails) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-primary py-24 px-6 md:px-16 pt-32">
      <div className="max-w-4xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12 border-b border-border-subtle pb-8">
          <Link href="/projects" className="inline-flex items-center gap-2 text-text-secondary hover:text-accent font-mono mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>
          
          <h1 className="font-display text-4xl md:text-6xl font-bold text-text-primary mb-4">
            {repoDetails.name}
          </h1>
          <p className="text-text-secondary text-lg mb-6 leading-relaxed">
            {repoDetails.description || "No description provided for this repository."}
          </p>

          <div className="flex flex-wrap gap-4 text-sm font-mono text-text-dim mb-8">
            {repoDetails.language && (
              <div className="px-3 py-1 bg-surface border border-border-subtle rounded-full text-accent font-bold">
                {repoDetails.language}
              </div>
            )}
            <div className="flex items-center gap-1.5 px-3 py-1 bg-surface border border-border-subtle rounded-full">
              <Star className="w-4 h-4" /> {repoDetails.stargazers_count}
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-surface border border-border-subtle rounded-full">
              <Calendar className="w-4 h-4" /> Updated {format(new Date(repoDetails.updated_at), 'MMM dd, yyyy')}
            </div>
          </div>

          <div className="flex gap-4">
            <a 
              href={repoDetails.html_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-accent text-primary font-bold rounded-lg hover:shadow-[0_0_15px_var(--color-accent-glow)] transition-all font-mono"
            >
              <GithubIcon className="w-5 h-5" /> View on GitHub
            </a>
            {repoDetails.homepage && (
              <a 
                href={repoDetails.homepage} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-surface border border-border-subtle text-text-primary hover:text-accent hover:border-accent rounded-lg transition-all font-mono"
              >
                <ExternalLink className="w-5 h-5" /> Live Demo
              </a>
            )}
          </div>
        </div>

        {/* README Section */}
        <div className="bg-surface border border-border-subtle rounded-xl p-8 md:p-12 prose prose-invert max-w-none prose-pre:bg-primary prose-pre:border prose-pre:border-border-subtle prose-a:text-accent hover:prose-a:text-accent-hover prose-img:rounded-lg prose-headings:font-display prose-headings:text-text-primary prose-p:text-text-secondary prose-li:text-text-secondary">
          {readme ? (
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                img: ({ node, ...props }) => {
                  let src = props.src;
                  if (typeof src === 'string' && !src.startsWith("http") && !src.startsWith("data:")) {
                    src = src.replace(/^(\.\/|\/)/, '');
                    src = `https://raw.githubusercontent.com/aabubokarr/${repoDetails.name}/${repoDetails.default_branch || 'main'}/${src}`;
                  }
                  return <img {...props} src={src} alt={props.alt || ''} />;
                }
              }}
            >
              {readme}
            </ReactMarkdown>
          ) : (
            <div className="text-center py-12 text-text-dim font-mono">
              <p>No README.md found in this repository.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
