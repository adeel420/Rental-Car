import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Verify_Email from "./pages/Verify_Email";
import { Toaster } from "react-hot-toast";

function App() {
  const location = useLocation();

  const showHeaderPaths = ["/"];

  const shouldShowHeader = showHeaderPaths.includes(location.pathname);

  return (
    <>
      {shouldShowHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-email" element={<Verify_Email />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
