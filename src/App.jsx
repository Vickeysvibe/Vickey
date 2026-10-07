import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Blog } from "./components/Blog";
import CursorFollower from "./components/CursorFollower";
import { Info } from "./components/Info";
import { Layout } from "./components/Layout";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <CursorFollower />
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/works" element={<Info standalone />} />
          <Route path="/blog/:slug" element={<Blog />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
