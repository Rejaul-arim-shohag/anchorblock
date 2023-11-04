import React from "react";
import { Menubar } from "./components/Menubar";
import { SignUp } from "./components/SignUp";
import { SocialSignIn } from "./components/SocialSignIn";
import { Route, Routes } from "react-router-dom";
import { SignIn } from "./components/SignIn";
import DashboardLayout from "./components/Dashoboard/DashboardLayout";
function App() {
  return (
    <div>
      {/* <Menubar /> */}
      <Routes>
        <Route path="/" element={<DashboardLayout />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
