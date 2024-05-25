import { useState } from "react";
import { Dashboard } from "./pages/dashboard";
import { Login } from "./pages/auth";

const App = () => {
  const [isLoggedIn] = useState(false);
  return (
    <div className="w-screen h-screen">
      {isLoggedIn ? <Dashboard /> : <Login />}
    </div>
  );
};
export default App;
