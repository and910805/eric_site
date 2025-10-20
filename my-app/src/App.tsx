import { Routes, Route } from "react-router-dom";
import { TopNav } from "./components/TopNav";
import BlogPage from "./pages/Blog";
import ContactPage from "./pages/Contact";
import IndexPage from "./pages/Index";
import ProjectsPage from "./pages/Projects";

function App() {
  return (
    <>
      <TopNav />

      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<IndexPage />} />
      </Routes>
    </>
  );
}

export default App;
