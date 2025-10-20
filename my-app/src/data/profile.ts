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
    { name: "React", level: 3 },
  ],
  tags: ["Python", "PHP", "AI", "C++", "MySQL", "VMware", "Shell", "Linux"],
};

export const timeline = [
  // 你可以把日期寫得更精準，排序時會更穩
  {
    date: "2025-01",
    displayDate: "2025~現在",
    title: "台灣精材 資安專責人員",
    type: "work",
  },
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
  {
    icon: "🍽️",
    name: "食物轉盤",
    nameEn: "Food Wheel",
    description: "🎡 不知道吃什麼？轉一下！",
    descriptionEn: "🎡 Can't decide what to eat? Give it a spin!",
    href: "https://and910805.github.io/food-wheel/",
  },
  {
    icon: "🎲",
    name: "猜數字遊戲",
    nameEn: "Number Guessing Game",
    description: "1 ~ 1000 的隨機數字，來挑戰看看！",
    descriptionEn: "Take on a random number between 1 and 1000 and see how fast you can guess it!",
    href: "https://and910805.github.io/Binary-Search-game/",
  },
  {
    icon: "📝",
    name: "Kuanlin Word Game",
    nameEn: "Kuanlin Word Game",
    description: "類似 Wordle 的小遊戲，挑戰每日單字！",
    descriptionEn: "A Wordle-inspired daily puzzle that keeps your vocabulary sharp.",
    href: "https://and910805.github.io/kuanlin-word-game/",
  },
  {
    icon: "🌾",
    name: "FarmGame",
    nameEn: "FarmGame",
    description: "農場經營遊戲，可以種植、養動物、建設農場！",
    descriptionEn: "Manage crops, raise animals, and build out your dream digital homestead.",
    href: "https://and910805.github.io/FarmGame/",
  },
];

export const contactLinks = [
  {
    label: "Email",
    value: "goole910805@gmail.com",
    href: "mailto:goole910805@gmail.com",
  },
  {
    label: "GitHub",
    value: "and910805",
    href: "https://github.com/and910805",
  },
  {
    label: "HackMD",
    value: "資安筆記",
    href: "https://hackmd.io/@LKanFpXQTUSJayug7EHeiA",
  },
];
