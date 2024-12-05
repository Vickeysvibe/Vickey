import "./App.css";
import { Info } from "./components/Info";
import { Layout } from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Blog } from "./components/Blog";
import CursorFollower from "./components/CursorFollower";

function App() {
  return (
    <div className="App">
      <CursorFollower />
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Layout} />
          <Route path="/works" Component={Info} />
          <Route path="/blog/:slug" Component={Blog} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
