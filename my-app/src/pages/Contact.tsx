import Footer from "../components/Footer";
import { contactLinks } from "../data/profile";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-900 bg-slate-900/80 py-12">
        <div className="mx-auto max-w-4xl px-6 text-center space-y-3">
          <h1 className="text-4xl font-extrabold">Contact</h1>
          <p className="text-slate-300">
            如果你對資安、滲透測試或合作機會有興趣，歡迎透過下列方式聯繫我。
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-12 space-y-8">
        <section className="grid gap-6 md:grid-cols-2">
          {contactLinks.map((link) => (
            <article
              key={link.label}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-slate-900/40"
            >
              <h2 className="text-lg font-semibold text-white">{link.label}</h2>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="mt-2 block text-cyan-300 hover:text-cyan-200"
              >
                {link.value}
              </a>
            </article>
          ))}
        </section>

        <section className="rounded-2xl border border-cyan-500/40 bg-cyan-500/10 p-6 text-sm text-cyan-100">
          <h2 className="text-lg font-semibold text-cyan-200">目前關注的主題</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-cyan-100/90">
            <li>企業資安制度導入與風險評估</li>
            <li>攻防演練、自動化滲透測試工具整合</li>
            <li>AI 輔助的威脅偵測與應變流程</li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}
