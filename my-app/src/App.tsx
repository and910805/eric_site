// src/App.tsx
import { Routes, Route, Link } from "react-router-dom";
import ProjectPage from "./pages/Home"; // GitHub 專案頁（Home.tsx）
import IndexPage from "./pages/Index"; // 如果未來想保留，可以留著

function App() {
  return (
    <>
      <nav className="bg-gray-900 text-white p-4 flex gap-4">
        <Link to="/" className="hover:underline">首頁</Link>
        <Link to="/projects" className="hover:underline">GitHub 專案</Link>
      </nav>

      <Routes>
        {/* 將首頁直接設為 ProjectPage */}
        <Route path="/" element={<ProjectPage />} />

        {/* 若還想保留原本首頁可另外給個路由 */}
        <Route path="/intro" element={<IndexPage />} />
      </Routes>
    </>
  );
}

export default App;
