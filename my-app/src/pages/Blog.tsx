import { blogPosts } from "../data/blog";
import Footer from "../components/Footer";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-900 bg-slate-900/80 py-12">
        <div className="mx-auto max-w-4xl px-6 text-center space-y-3">
          <h1 className="text-4xl font-extrabold">Blog</h1>
          <p className="text-slate-300">
            記錄資安、攻防演練與自我成長的文章與筆記整理。
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-12 space-y-8">
        {blogPosts.map((post) => (
          <article
            key={post.url}
            className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-slate-900/40 transition hover:border-cyan-400/60 hover:shadow-cyan-500/10"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-2xl font-semibold text-white">{post.title}</h2>
              <span className="inline-flex items-center rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-200">
                {post.platform}
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-300/90">{post.description}</p>
            <p className="mt-4 text-xs text-slate-500">
              發佈時間：{new Date(post.publishedAt).toLocaleDateString("zh-TW")}
            </p>
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 hover:text-cyan-200"
            >
              閱讀文章
              <span aria-hidden>→</span>
            </a>
          </article>
        ))}
      </main>

      <Footer />
    </div>
  );
}
