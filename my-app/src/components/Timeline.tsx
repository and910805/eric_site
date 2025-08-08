// src/components/Timeline.tsx
import React from "react";

type Item = { date: string; title: string; type?: string; detail?: string };

const colorByType = (type?: string) => {
  switch (type) {
    case "work":
      return "bg-emerald-500";
    case "paper":
      return "bg-amber-500";
    case "contest":
      return "bg-cyan-500";
    case "course":
    case "club":
      return "bg-indigo-500";
    case "award":
      return "bg-pink-500";
    case "cert":
      return "bg-rose-500";
    default:
      return "bg-slate-500";
  }
};

export const Timeline: React.FC<{ items: Item[] }> = ({ items }) => {
  // 按日期逆序（新→舊）
  const sorted = [...items].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">📅 經歷 Timeline</h2>
      <ol className="relative border-s-2 border-slate-700/60 ps-5">
        {sorted.map((it, idx) => (
          <li key={idx} className="mb-8 ms-2">
            <span
              className={`absolute -start-[11px] mt-1 h-5 w-5 rounded-full ring-4 ring-slate-900/60 ${colorByType(
                it.type
              )}`}
            />
            <time className="text-sm text-slate-400">{it.date}</time>
            <h3 className="text-lg font-semibold">{it.title}</h3>
            {it.detail && (
              <p className="text-sm text-slate-300/90">{it.detail}</p>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
};
