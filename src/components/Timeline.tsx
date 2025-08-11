import React from "react";

interface TimelineItem {
  date: string;
  content: string;
}

const items: TimelineItem[] = [
  { date: "", content: "NCPC 參加決賽" },
  { date: "", content: "ICPC 參加初賽" },
  { date: "", content: "AIS3 EOF 參加初賽" },
  { date: "", content: "AIS3 Club 參加" },
  { date: "", content: "台東大學資安研究社副社長 && 課程講師" },
  { date: "", content: "picoCTF 線上賽 參加" },
  { date: "", content: "CPE 最高排名 2.3%" },
  { date: "", content: "擔任演算法和資料結構助教" },
  { date: "2023-2024", content: "勤業眾信 Cyber Detect and Response" },
  {
    date: "2023",
    content:
      "TANET & NCS 台灣網際網路研討會暨全國計算機會議 發表論文：具意圖導向之人工智慧輔助文案生成方法建構－以台灣兩大黨政治文案為例",
  },
];

export default function Timeline() {
  return (
    <section className="bg-slate-900/60 backdrop-blur-md rounded-xl p-8 shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">📅 Timeline</h2>
      <ol className="relative border-l border-gray-700">
        {items.map((item, idx) => (
          <li key={idx} className="mb-10 ml-6">
            <span className="absolute -left-3 flex items-center justify-center w-3 h-3 bg-cyan-400 rounded-full mt-1.5" />
            {item.date && (
              <time className="mb-1 text-sm text-gray-400">{item.date}</time>
            )}
            <p className="text-lg leading-relaxed">{item.content}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

