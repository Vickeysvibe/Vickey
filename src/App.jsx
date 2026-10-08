import { MotionConfig } from "framer-motion";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Blog } from "./components/Blog";
import CursorFollower from "./components/CursorFollower";
import { Info } from "./components/Info";
import { Layout } from "./components/Layout";
import { Personal } from "./components/Personal";
import { ScrollToTop } from "./components/ScrollToTop";

// Keyed by path so each page re-runs its fade-in on navigation.
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <div className="page" key={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<Layout />} />
        <Route path="/works" element={<Info standalone />} />
        <Route path="/blog/:slug" element={<Blog />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <ScrollToTop />
        <CursorFollower />
        <div className="App">
          <AnimatedRoutes />
        </div>
      </BrowserRouter>
    </MotionConfig>
  );
}

export default App;
