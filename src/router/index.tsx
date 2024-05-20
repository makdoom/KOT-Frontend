import NotFound from "@/pages/NotFound";
import { Login, Signup } from "@/pages/auth";
import { createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
        errorElement: <NotFound />
      },
      {
        path: "/signup",
        element: <Signup />,
      },
])

export default Router