import React from "react";
import { Menubar } from "./components/Menubar";
import { SignUp } from "./components/SignUp";
import { SocialSignIn } from "./components/SocialSignIn";
function App() {
  return (
    <div>
      <Menubar />
      <SignUp />
    </div>
  );
}

export default App;
