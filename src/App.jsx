import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DateOfBirth from "./pages/DateOfBirth";
import VerificationPage from "./pages/VerificationPage";
import PageLayout from "./Layouts/PageLayout/PageLayout";
import HomePage from "./components/HomePage/HomePage";
import Search from "./components/Search/Search";
import Explore from "./components/Explore/Explore";
import Auth from "./pages/Auth";
import ForgetPassword from "./pages/ForgetPassword";

import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
      {/* Routes WITHOUT layout */}
      <Route path="/" element={<Auth />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dateOfbirth" element={<DateOfBirth />} />
      <Route path="/verification" element={<VerificationPage />} />
      <Route path="/forgetPassword" element={<ForgetPassword />} />

      {/* Route with PageLayout */}

      <Route element={<PageLayout />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/Profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
