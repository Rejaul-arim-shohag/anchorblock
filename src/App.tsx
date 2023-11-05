import { SignUp } from "./components/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignIn } from "./components/SignIn";
import DashboardLayout from "./components/Dashoboard/DashboardLayout";
import PrivateRoute from "./components/PrivateRoute";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/da" element={<DashboardLayout />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/" element={<PrivateRoute component={DashboardLayout} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
