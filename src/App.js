import "./App.css";
import { Home } from "./components/Home";
import { SidePanel } from "./components/SidePanel";

function App() {
  return (
    <div className="App">
      <div className="inner">
        <Home />
        <SidePanel />
      </div>
      <script src="https://cdn.tailwindcss.com"></script>
    </div>
  );
}

export default App;
