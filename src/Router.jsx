import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import AddTrainer from "./pages/add-trainer";
import ProtectedRoute from "./protectet-route";
import Afzal from "./pages/add-student";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Login /> } />
        <Route path="signup" element={<Signup />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="add-student" element={
          <ProtectedRoute>
<Afzal />
          </ProtectedRoute>
          
          } />
        <Route path="add-trainer" element={
          <ProtectedRoute>
<AddTrainer />
          </ProtectedRoute>
          } />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
