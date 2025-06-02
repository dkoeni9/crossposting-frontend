import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Settings from "./pages/Settings";
// import Subscription from "./pages/Subscription";
import Accounts from "./pages/Accounts";
import Calendar from "./pages/Calendar";
import Create from "./pages/CreatePost";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/accounts" element={<Accounts />} />
        <Route path="/dashboard/calendar" element={<Calendar />} />
        <Route path="/dashboard/create" element={<Create />} />
        {/*  <Route path="/dashboard/settings" element={<Settings />} />
        <Route path="/dashboard/subscription" element={<Subscription />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
