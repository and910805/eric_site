// src/App.tsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProjectsPage from "./pages/Projects"; // 你的 GitHub 頁
import IndexPage from "./pages/Index"; // 新增首頁頁面

function App() {
  const navItems = [
    { label: "首頁", to: "/" },
    { label: "GitHub 專案", to: "/projects" },
  ];

  return (
    <>
      <Navbar items={navItems} />

      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </>
  );
}

export default App;
