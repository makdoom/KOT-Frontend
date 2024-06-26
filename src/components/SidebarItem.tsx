import { useEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { ChevronDown } from "lucide-react";
import { ItemType } from "@/types/sidebar.types";
import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

type SidebarPropType = {
  item: ItemType;
};

const SidebarItem = ({ item }: SidebarPropType) => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (item.child) return;

    if (item.url) navigate(item?.url);
  };

  useEffect(() => {
    if (location.pathname.includes(item.parentMenu.toLowerCase())) {
      setIsOpen(true);
    }
  }, [location, item.parentMenu]);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className={cn(
        `my-2 rounded-md`,
        item.isParentMenu ? "mb-5" : "my-1",
        isOpen ? "bg-primary-foreground" : "none",
      )}
    >
      <CollapsibleTrigger
        className={cn(
          `group w-full cursor-pointer flex justify-between items-center hover:bg-primary p-2 rounded-md`,
          item.isParentMenu ? "py-3 font-medium" : "py-3",
          !item.isParentMenu && item.menuName !== "Dashboard" && "pl-6",
          location.pathname.split("/").at(-1)?.toLowerCase() ==
            item.menuName.toLowerCase().replaceAll(" ", "") &&
            "bg-primary text-white",
        )}
        onClick={handleNavigate}
      >
        <p className="text-sm group-hover:text-white">{item.menuName}</p>
        {item?.child && (
          <ChevronDown
            size="20"
            className={`group-hover:text-white transition ${isOpen ? "rotate-180" : "rotate-0"}`}
          />
        )}
      </CollapsibleTrigger>
      <CollapsibleContent>
        {item?.child?.map((childItem) => (
          <SidebarItem key={childItem.id} item={childItem} />
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
};
export default SidebarItem;
