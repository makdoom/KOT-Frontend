import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { Button } from "./ui/button";

type HeaderPropType = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
};

const Header = ({ isSidebarOpen, toggleSidebar }: HeaderPropType) => {
  return (
    <div className="p-3 border-b">
      <Button
        variant="secondary"
        className="p-2 group hover:bg-primary"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? (
          <PanelLeftClose size="20" className="group-hover:text-white" />
        ) : (
          <PanelLeftOpen size="20" className="group-hover:text-white" />
        )}
      </Button>
    </div>
  );
};
export default Header;
