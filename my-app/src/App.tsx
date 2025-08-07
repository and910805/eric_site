import { Routes, Route, Link } from "react-router-dom";
import ProjectPage from "./pages/Home";   // GitHub 專案頁
import IndexPage from "./pages/Index";    // 個人簡介頁

function App() {
  return (
    <>
      <nav className="bg-gray-900 text-white p-4 flex gap-4">
        <Link to="/" className="hover:underline">首頁</Link>
        <Link to="/projects" className="hover:underline">GitHub 專案</Link>
      </nav>

      <Routes>
        {/* ✅ 設定首頁顯示 IndexPage */}
        <Route path="/" element={<IndexPage />} />

        {/* ✅ /projects 顯示專案 */}
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
    </>
  );
}

export default App;
