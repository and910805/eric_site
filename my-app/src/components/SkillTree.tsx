// src/components/SkillTree.tsx
import React from "react";

type Skill = { name: string; level: number };
type Section = { title: string; items: Skill[] };

const Bar: React.FC<{ level: number }> = ({ level }) => {
  const pct = Math.min(100, Math.max(0, level * 20)); // 1~5 → 20%~100%
  return (
    <div className="h-2 rounded bg-slate-800/60">
      <div
        className="h-2 rounded bg-cyan-500"
        style={{ width: `${pct}%` }}
        aria-label={`level ${level}`}
      />
    </div>
  );
};

const SectionCard: React.FC<Section> = ({ title, items }) => (
  <div className="rounded-2xl border border-slate-700/60 bg-slate-900/60 p-5 shadow">
    <h3 className="mb-3 text-lg font-semibold text-cyan-300">{title}</h3>
    <ul className="space-y-3">
      {items.map((s) => (
        <li key={s.name}>
          <div className="mb-1 flex items-center justify-between">
            <span className="font-medium">{s.name}</span>
            <span className="text-xs text-slate-400">Lv.{s.level}/5</span>
          </div>
          <Bar level={s.level} />
        </li>
      ))}
    </ul>
  </div>
);

export const SkillTree: React.FC<{
  data: {
    languages: Skill[];
    os: Skill[];
    tools: Skill[];
    tags: string[];
  };
}> = ({ data }) => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">🧠 技能樹</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <SectionCard title="程式語言" items={data.languages} />
        <SectionCard title="作業系統 / 平台" items={data.os} />
        <SectionCard title="工具 / 生態" items={data.tools} />
      </div>

      <div className="rounded-2xl border border-slate-700/60 bg-slate-900/60 p-5">
        <h3 className="mb-3 text-lg font-semibold text-cyan-300"># Tags</h3>
        <div className="flex flex-wrap gap-2">
          {data.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-cyan-600/40 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300"
            >
              #{t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
