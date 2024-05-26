import { Bell, Home, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import Searchbar from "./Searchbar";
import Profile from "./Profile";

type HeaderPropType = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
};

const Header = ({ isSidebarOpen, toggleSidebar }: HeaderPropType) => {
  const navigate = useNavigate();

  const navigateToHome = () => navigate("/dashboard");

  return (
    <div className="flex items-center justify-between px-3 py-2 shadow-sm">
      <div className="flex gap-2">
        <Button
          variant="secondary"
          className="p-2 group hover:bg-primary"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? (
            <PanelLeftClose size="19" className="group-hover:text-white" />
          ) : (
            <PanelLeftOpen size="19" className="group-hover:text-white" />
          )}
        </Button>

        <Button
          variant="secondary"
          className="p-2 group hover:bg-primary"
          onClick={navigateToHome}
        >
          <Home size="19" className="group-hover:text-white" />
        </Button>

        <Searchbar />
      </div>

      <div className="flex gap-2">
        <Button variant="secondary" className="p-2 group hover:bg-primary">
          <Bell size="19" className="group-hover:text-white" />
        </Button>

        <Profile />
      </div>
    </div>
  );
};
export default Header;
