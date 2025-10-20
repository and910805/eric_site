import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "HOME", to: "/" },
  { label: "BLOG", to: "/blog" },
  { label: "PROJECTS", to: "/projects" },
  { label: "CONTACT", to: "/contact" },
];

export function TopNav() {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur border-b border-slate-900 shadow-lg">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-lg font-semibold text-white">
          Zhuang Guanlin
        </Link>
        <ul className="flex items-center gap-4 text-sm font-medium text-slate-300">
          {navItems.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`rounded-full px-3 py-2 transition ${
                    isActive
                      ? "bg-cyan-500/20 text-cyan-200"
                      : "hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
