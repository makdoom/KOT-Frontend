import { Home, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

type HeaderPropType = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
};

const Header = ({ isSidebarOpen, toggleSidebar }: HeaderPropType) => {
  const navigate = useNavigate();

  const navigateToHome = () => navigate("/dashboard");

  return (
    <div className="flex gap-2 p-3 border-b">
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
    </div>
  );
};
export default Header;
