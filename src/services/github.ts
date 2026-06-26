const GITHUB_USERNAME = 'aabubokarr';

export interface GithubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string | null;
  topics: string[];
  updated_at: string;
  language: string;
  stargazers_count: number;
  default_branch: string;
}

export async function fetchRepositories(): Promise<GithubRepo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!res.ok) {
      console.error('Failed to fetch repositories:', res.statusText);
      return [];
    }

    const repos: GithubRepo[] = await res.json();
    
    // Filter out forks and profile README repo
    return repos.filter(repo => !repo.name.toLowerCase().includes(GITHUB_USERNAME.toLowerCase()) && repo.name !== 'aabubokarr.github.io');
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
}

export async function fetchReadme(repoName: string): Promise<string | null> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}/readme`,
      {
        headers: {
          Accept: 'application/vnd.github.v3.raw',
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!res.ok) {
      if (res.status === 404) return null; // No README found
      console.error(`Failed to fetch README for ${repoName}:`, res.statusText);
      return null;
    }

    return await res.text();
  } catch (error) {
    console.error(`Error fetching README for ${repoName}:`, error);
    return null;
  }
}
