import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import withUnprotected from "./routes/withUnprotected";
import Login from "./pages/Login";
import withProtected from "./routes/withProtected";
import Signup from "./pages/Signup";
import AppLayout from "./layouts/AppLayout";

const ProtectedHome = withProtected(Home);
const UnprotectedLogin = withUnprotected(Login);
const UnprotectedSignup = withUnprotected(Signup);

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<ProtectedHome />} />
      </Route>
      <Route path="/login" element={<UnprotectedLogin />} />
      <Route path="/signup" element={<UnprotectedSignup />} />
    </Routes>
  );
}

export default App;
