import React from "react";
import { Menubar } from "./components/Menubar";
import { SignUp } from "./components/SignUp";
import { SocialSignIn } from "./components/SocialSignIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignIn } from "./components/SignIn";
import DashboardLayout from "./components/Dashoboard/DashboardLayout";
import PrivateRoute from "./components/PrivateRoute";

import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
function App() {
  const token = useSelector((state: RootState) => state.auth.token);
  console.log("token", token);
  return (
    <div>
    
      <BrowserRouter>
        <Routes>
        <Route path="/da" element={<DashboardLayout />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/" element={<PrivateRoute component={SignIn} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
