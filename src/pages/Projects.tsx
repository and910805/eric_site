import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

// 定義 Repo 的型別
interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  updated_at: string;
  fork: boolean;
}

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/and910805/repos")
      .then((res) => res.json())
      .then((data: Repo[]) => {
        const sorted = data
          .filter((r) => !r.fork)
          .sort(
            (a, b) =>
              new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
          );
        setRepos(sorted);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 text-white font-sans">
      {/* Hero 區塊 */}
      <header className="py-12 text-center">
        <h1 className="text-5xl font-extrabold mb-2 drop-shadow-lg">莊冠霖</h1>
        <p className="text-lg">資安筆記、GitHub 專案展示</p>
        <Navbar
          items={[
            { label: "HOME", href: "#" },
            { label: "BLOG", href: "#" },
            { label: "PROJECTS", href: "#" },
            { label: "CONTACT", href: "#" },
          ]}
          className="mt-4 space-x-6 text-sm"
        />
      </header>

      {/* Projects 區 */}
      <main className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          📁 GitHub Projects
        </h2>

        {repos.length === 0 ? (
          <p className="text-white/90 text-center">🚧 專案讀取中，或暫無公開 Repo。</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {repos.map((repo) => (
              <article
                key={repo.id}
                className="bg-white text-gray-800 rounded-xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl hover:scale-[1.01] transition-transform"
              >
                <h3 className="text-xl font-bold text-indigo-700 mb-2">
                  {repo.name}
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  📅 更新於 {new Date(repo.updated_at).toLocaleDateString()} · ⭐{" "}
                  {repo.stargazers_count} Stars
                </p>
                <p className="mb-4">
                  {repo.description || "此專案尚未提供描述。"}
                </p>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-indigo-600 text-white px-4 py-2 text-sm rounded hover:bg-indigo-700 transition"
                >
                  🔍 查看專案 →
                </a>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
