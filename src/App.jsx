import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { SettingsProvider } from "./context/SettingsContext";
import { HabitManagerProvider } from "./context/HabitManagerContext";
import { useAuth } from "./context/AuthContext";
import Navbar from "./components/NavBar";
import HabitTracker from "./pages/HabitTracker";
import Habits from "./pages/Habits";
import Overview from "./pages/Overview";
import Settings from "./pages/Settings";
import LoginPage from "./pages/LoginPage";
import About from "./pages/About";

function App() {
  const { authLoading } = useAuth();

  if (authLoading) {
    return (
      <div className="flex items-center justify-center py-6">
        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  
  return (
    <SettingsProvider>
      <HabitManagerProvider>
        <Router>
          <div className="bg-[#121212] min-h-screen pb-6">
            <div className="max-w-5xl mx-auto">
              <Navbar />
              <Routes>
                <Route path="/" element={<HabitTracker />} />
                <Route path="/habits" element={<Habits />} />
                <Route path="/overview" element={<Overview />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/login" element={<LoginPage />} />
              </Routes>
            </div>
          </div>
          <div className="bg-[#ededed]">
            <About />
          </div>
        </Router>
      </HabitManagerProvider>
    </SettingsProvider>
  );
}

export default App;