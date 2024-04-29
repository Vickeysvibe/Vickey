import "./App.css";
import { Home } from "./components/Home";
import { SideMini } from "./components/SideMini";
import { SidePanel } from "./components/SidePanel";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="inner">
                <Home />
                <SidePanel />
              </div>
            }
          />
          <Route
            path="/explore"
            element={
              <div className="inner">
                <SideMini />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
      <script src="https://cdn.tailwindcss.com"></script>
    </div>
  );
}

export default App;
