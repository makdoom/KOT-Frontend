// import Layout from "@/Layout";
import { Login, Signup } from "@/pages";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/singup",
    element: <Signup />,
  },
]);

export default router;
