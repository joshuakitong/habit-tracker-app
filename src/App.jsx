import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import HabitTracker from "./pages/HabitTracker";
import Habits from "./pages/Habits";
import Overview from "./pages/Overview";
import Settings from "./pages/Settings";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div className="bg-[#121212] min-h-screen">
        <div className="max-w-5xl mx-auto">
          <Navbar />
          <Routes>
            <Route path="/" element={<HabitTracker />} />
            <Route path="/habits" element={<Habits />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
      <div className="bg-[#ededed]">
        <About />
      </div>
    </Router>
  );
}

export default App;