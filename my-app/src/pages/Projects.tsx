import { useEffect, useMemo, useState } from "react";
import Footer from "../components/Footer";
import { projects } from "../data/profile";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  updated_at: string;
  fork: boolean;
}

export default function ProjectsPage() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadRepos() {
      try {
        setLoading(true);
        const response = await fetch(
          "https://api.github.com/users/and910805/repos?per_page=100",
          {
            signal: controller.signal,
            headers: {
              Accept: "application/vnd.github+json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`GitHub API 回傳 ${response.status}`);
        }

        const data: Repo[] = await response.json();
        const sorted = data
          .filter((repo) => !repo.fork)
          .sort(
            (a, b) =>
              new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
          );
        setRepos(sorted);
        setError(null);
      } catch (err) {
        if ((err as Error).name === "AbortError") return;
        console.error(err);
        setError("無法載入 GitHub 專案，請稍後再試。\n若要立即查看，可以直接造訪 GitHub 個人頁面。");
      } finally {
        setLoading(false);
      }
    }

    loadRepos();

    return () => controller.abort();
  }, []);

  const latestRepos = useMemo(() => repos.slice(0, 12), [repos]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="bg-slate-900/80 border-b border-slate-800">
        <div className="mx-auto max-w-5xl px-6 py-12 text-center space-y-4">
          <h1 className="text-4xl font-extrabold">GitHub Projects</h1>
          <p className="text-slate-300">
            精選幾個常態維護的開源作品與實作練習，持續記錄在資安領域的成長與探索。
          </p>
          <a
            href="https://github.com/and910805"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/60 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/20"
          >
            前往 GitHub 個人頁面
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-12 space-y-16">
        <section>
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <span className="text-cyan-300">🔖</span>
              Featured Projects
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              <span className="block">
                Mirrored from the homepage to spotlight representative work
                across security, AI, and automation.
              </span>
              <span className="block">
                與首頁同步的精選列表，快速瀏覽涵蓋資安、AI 與自動化領域的代表作品。
              </span>
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, idx) => (
              <article
                key={`${project.name}-${idx}`}
                className="rounded-xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-slate-900/30"
              >
                <h3 className="text-xl font-bold text-white">{project.name}</h3>
                <p className="mt-3 inline-flex items-center rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-200">
                  #{project.tag}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <span className="text-amber-300">🛰️</span>
              最新 GitHub 活動
            </h2>
            <p className="text-sm text-slate-400">
              依更新時間排序，僅顯示最近 12 個公開非 fork 專案。
            </p>
          </div>

          {loading && (
            <p className="text-center text-slate-300">正在同步 GitHub 專案資訊…</p>
          )}

          {error && (
            <div className="rounded-xl border border-rose-500/40 bg-rose-500/10 p-4 text-sm leading-relaxed text-rose-200">
              {error.split("\n").map((line, lineIdx) => (
                <span key={lineIdx} className="block">
                  {line}
                </span>
              ))}
            </div>
          )}

          {!loading && !error && latestRepos.length === 0 && (
            <p className="text-center text-slate-400">
              目前沒有可展示的公開專案，歡迎稍後再來看看！
            </p>
          )}

          <div className="grid gap-6 md:grid-cols-2">
            {latestRepos.map((repo) => (
              <article
                key={repo.id}
                className="group rounded-xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-slate-900/40 transition hover:border-cyan-400/70 hover:shadow-cyan-500/10"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-200">
                    {repo.name}
                  </h3>
                  <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                    ⭐ {repo.stargazers_count}
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-300/90">
                  {repo.description ?? "此專案尚未提供描述。"}
                </p>
                <p className="mt-4 text-xs text-slate-500">
                  最近更新：{new Date(repo.updated_at).toLocaleString("zh-TW")}
                </p>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 hover:text-cyan-200"
                >
                  查看專案
                  <span aria-hidden>→</span>
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
