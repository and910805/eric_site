import cehCertImg from '../assets/ceh-cert.png';
import Footer from '../components/Footer';
import SkillTree from '../components/SkillTree';
import Timeline from '../components/Timeline';

export default function Index() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* 介紹區塊 */}
        <section className="bg-slate-900/60 backdrop-blur-md rounded-xl p-8 shadow-lg">
          <h1 className="text-4xl font-extrabold mb-6 text-center">Hello 👋</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 英文版 */}
            <ul className="space-y-3 text-lg leading-relaxed">
              <li>👨‍💻 My name is <strong>Zhuang Guanlin</strong>.</li>
              <li>🏢 I currently work as a cybersecurity lead in a small-to-medium-sized company.</li>
              <li>🛡️ I am responsible for planning and implementing information security measures.</li>
              <li>🌱 I'm passionate about AI, cybersecurity, web development, and web scraping.</li>
              <li>❤️ I enjoy exploring and analyzing data through scripting and automation.</li>
              <li>📫 Reach me at <a href="mailto:goole910805@gmail.com" className="underline hover:text-cyan-400">goole910805@gmail.com</a>.</li>
            </ul>

            {/* 中文版 */}
            <ul className="space-y-3 text-lg leading-relaxed">
              <li>👨‍💻 我的名字是 <strong>莊冠霖</strong>。</li>
              <li>🏢 目前於一間中小型公司擔任資安專責人員。</li>
              <li>🛡️ 負責規劃與執行資訊安全相關措施。</li>
              <li>🌱 我對人工智慧、資訊安全、網頁開發與網路爬蟲充滿熱情。</li>
              <li>❤️ 我熱衷於透過腳本與自動化技術進行資料探索與分析。</li>
              <li>📫 歡迎透過電子郵件 <a href="mailto:goole910805@gmail.com" className="underline hover:text-cyan-400">goole910805@gmail.com</a> 與我聯繫。</li>
            </ul>
          </div>
        </section>
        {/* 技能樹 */}
        <SkillTree />

        {/* 時間軸 */}
        <Timeline />

        {/* 證照區塊 */}
        <section className="flex flex-col md:flex-row items-center gap-8 bg-slate-900/60 backdrop-blur-md rounded-xl p-8 shadow-lg">
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl font-bold mb-2">📜 Certification</h2>
            <p className="text-lg">
              ✅ <strong>Certified Ethical Hacker (CEH)</strong><br />
              📅 Passed in July 2025
            </p>
            <p className="text-sm text-gray-400">Issued by EC-Council</p>
          </div>
          <img
            src={cehCertImg}
            alt="CEH Certification"
            className="w-full md:w-1/2 rounded-xl border border-gray-600 shadow-md"
          />
        </section>

        {/* 社群連結區塊 */}
        <section className="text-center space-y-4">
          <h2 className="text-2xl font-bold">🔗 關注我</h2>
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-8 text-lg">
            <a
              href="https://github.com/and910805"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-cyan-400 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.3c-3.3.7-4-1.5-4-1.5-.6-1.4-1.4-1.7-1.4-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.9 1.3 3.6 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.6-1.3-5.6-5.9 0-1.3.5-2.3 1.2-3.2 0-.3-.5-1.4.1-2.9 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.5.1 2.6.1 2.9.8.9 1.2 1.9 1.2 3.2 0 4.6-2.9 5.6-5.6 5.9.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6A12 12 0 0 0 12 0z" />
              </svg>
              GitHub
            </a>

            <a
              href="https://hackmd.io/@LKanFpXQTUSJayug7EHeiA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-green-400 transition"
            >
              📝 HackMD 筆記
            </a>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
