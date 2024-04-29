import "./App.css";
import { Info } from "./components/Info";
import { Layout } from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Layout} />
          <Route path="/works" Component={Info} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
