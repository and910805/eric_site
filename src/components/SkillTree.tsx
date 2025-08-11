import React from "react";

export default function SkillTree() {
  const tags = [
    "Python",
    "PHP",
    "AI",
    "C++",
    "MySQL",
    "Vmware",
    "Shell",
    "Linux",
  ];

  return (
    <section className="bg-slate-900/60 backdrop-blur-md rounded-xl p-8 shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">🛠️ Skill Tree</h2>
      <ul className="space-y-4">
        <li>
          <span className="font-semibold">Programming Languages</span>
          <ul className="ml-6 list-disc space-y-1">
            <li>C/C++</li>
            <li>Python</li>
            <li>PHP (basic)</li>
            <li>SQL (basic)</li>
          </ul>
        </li>
        <li>
          <span className="font-semibold">Operating Systems</span>
          <ul className="ml-6 list-disc space-y-1">
            <li>Windows</li>
            <li>
              Linux
              <ul className="ml-6 list-disc space-y-1">
                <li>RedHat</li>
                <li>Kali</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <span className="font-semibold">Tools & Others</span>
          <ul className="ml-6 list-disc space-y-1">
            <li>MySQL</li>
            <li>Vmware</li>
            <li>Shell</li>
            <li>AI</li>
          </ul>
        </li>
      </ul>
      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm"
          >
            #{tag}
          </span>
        ))}
      </div>
    </section>
  );
}

