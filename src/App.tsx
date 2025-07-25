// src/App.tsx
import { Routes, Route, Link } from "react-router-dom";
import ProjectPage from "./pages/Home"; // 你的 GitHub 頁
import IndexPage from "./pages/Index"; // 新增首頁頁面

function App() {
  return (
    <>
      <nav className="bg-gray-900 text-white p-4 flex gap-4">
        <Link to="/" className="hover:underline">首頁</Link>
        <Link to="/projects" className="hover:underline">GitHub 專案</Link>
      </nav>

      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
    </>
  );
}

export default App;
