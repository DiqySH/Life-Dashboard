import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import withUnprotected from "./routes/withUnprotected";
import Login from "./pages/Login";
import withProtected from "./routes/withProtected";
import Signup from "./pages/Signup";
import AppLayout from "./layouts/AppLayout";
import ThemeSelector from "./layouts/ThemeSelector";
import Profile from "./pages/Profile";

const ProtectedHome = withProtected(Home);
const UnprotectedLogin = withUnprotected(Login);
const UnprotectedSignup = withUnprotected(Signup);
const ProtectedProfile = withProtected(Profile)

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<ProtectedHome />} />
        <Route path="/profile" element={<ProtectedProfile />} />
      </Route>
      <Route element={<ThemeSelector />}>
        <Route path="/login" element={<UnprotectedLogin />} />
        <Route path="/signup" element={<UnprotectedSignup />} />
      </Route>
    </Routes>
  );
}

export default App;
