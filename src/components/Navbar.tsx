import { Link } from "react-router-dom";

// Item can be either a router link (to) or an anchor link (href)
export type NavItem =
  | { label: string; to: string }
  | { label: string; href: string };

interface NavbarProps {
  items: NavItem[];
  className?: string;
}

export default function Navbar({ items, className }: NavbarProps) {
  const navClass = className ?? "bg-gray-900 text-white p-4 flex gap-4";

  return (
    <nav className={navClass}>
      {items.map((item, idx) =>
        "to" in item ? (
          <Link key={idx} to={item.to} className="hover:underline">
            {item.label}
          </Link>
        ) : (
          <a key={idx} href={item.href} className="hover:underline">
            {item.label}
          </a>
        )
      )}
    </nav>
  );
}
