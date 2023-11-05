import { SignUp } from "./components/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignIn } from "./components/SignIn";
import DashboardLayout from "./components/Dashoboard/DashboardLayout";
import PrivateRoute from "./components/PrivateRoute";
import CommonLayout from "./components/Layout/CommonLayout";
import { Users } from "./components/Dashoboard/Users";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<CommonLayout><SignUp /></CommonLayout>}/>
          <Route path="/login" element={<CommonLayout><SignIn /></CommonLayout>}/>
          <Route path="/"element={<PrivateRoute element={<DashboardLayout><Users /></DashboardLayout>} />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
