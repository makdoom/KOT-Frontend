import NotFound from "@/pages/NotFound";
// import { ForgotPassword, Login, Signup } from "@/pages/auth";
// import { Dashboard } from "@/pages/dashboard";
import App from "@/App";
import { ForgotPassword, Login, Signup } from "@/pages/auth";
import { Dashboard } from "@/pages/dashboard";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import DashboardLayout from "@/pages/DashboardLayout";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="forgot-password" element={<ForgotPassword />} />

      <Route path="dashboard" element={<DashboardLayout />}>
        <Route index path="" element={<Dashboard />} />
        <Route path="masters" element={<h1>Master</h1>} />
        <Route path="company" element={<h1>Company</h1>} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </>,
  ),
);

export default Router;
