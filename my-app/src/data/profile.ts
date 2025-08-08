// src/data/profile.ts
export const skills = {
  languages: [
    { name: "C/C++", level: 4 },
    { name: "Python", level: 4 },
    { name: "PHP (基本語法)", level: 2 },
    { name: "SQL (基本語法)", level: 2 },
  ],
  os: [
    { name: "Windows", level: 4 },
    { name: "Linux - RedHat", level: 3 },
    { name: "Linux - Kali", level: 3 },
  ],
  tools: [
    { name: "MySQL", level: 3 },
    { name: "VMware", level: 3 },
    { name: "Shell", level: 3 },
    { name: "Git/GitHub", level: 3 },
  ],
  tags: ["Python", "PHP", "AI", "C++", "MySQL", "VMware", "Shell", "Linux"],
};

export const timeline = [
  // 你可以把日期寫得更精準，排序時會更穩
  { date: "2023-2024", title: "勤業眾信 Cyber Detect and Response", type: "work" },
  { date: "2023-10", title: `TANET & NCS 論文：具意圖導向之 AI 輔助文案生成方法`, type: "paper",
    detail: `王忍成、莊冠霖、陳奕翔、黃致瑜、陳建智` },
  { date: "2023", title: "NCPC 參加決賽", type: "contest" },
  { date: "2023", title: "ICPC 參加初賽", type: "contest" },
  { date: "2023", title: "AIS3 EOF 初賽", type: "contest" },
  { date: "2023", title: "AIS3 Club 參加", type: "course" },
  { date: "2023", title: "台東大學資安研究社 副社長/講師", type: "club" },
  { date: "2023", title: "picoCTF 線上賽 參加", type: "contest" },
  { date: "2023", title: "CPE 最高排名 2.3%", type: "award" },
  { date: "2023", title: "擔任演算法與資料結構助教", type: "ta" },
  { date: "2025-07", title: "Certified Ethical Hacker (CEH) 通過", type: "cert" },
];

export const projects = [
  { name: "ATT&CK APT29（模擬攻擊）", tag: "Security" },
  { name: "AI 攻擊手法研究與工具整合（ART）", tag: "AI/Sec" },
  { name: "Python RAT", tag: "Security" },
  { name: "系上面試網站（PHP）", tag: "Web/PHP" },
  { name: "Linux 各種 server 部署", tag: "DevOps" },
  { name: "Blog（PHP）", tag: "Web/PHP" },
  { name: "蝦皮自動簽到", tag: "Automation" },
  { name: "PTT 新聞爬蟲 + Discord Bot", tag: "Crawler/Bot" },
  { name: "Google 關鍵字 TF-IDF 分析", tag: "NLP" },
];
