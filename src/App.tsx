// src/App.tsx
import { Routes, Route, Link } from "react-router-dom";
import ProjectsPage from "./pages/Projects"; // GitHub 專案頁面
import IndexPage from "./pages/Index"; // 首頁
import BlogPage from "./pages/Blog";
import ContactPage from "./pages/Contact";

function App() {
  return (
    <>
      <nav className="bg-gray-900 text-white p-4 flex gap-4">
        <Link to="/" className="hover:underline">HOME</Link>
        <Link to="/blog" className="hover:underline">BLOG</Link>
        <Link to="/projects" className="hover:underline">PROJECTS</Link>
        <Link to="/contact" className="hover:underline">CONTACT</Link>
      </nav>

      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
