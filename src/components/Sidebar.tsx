import { v4 as uid } from "uuid";
import SidebarItem from "./SidebarItem";

const sidebarMenuData = [
  {
    id: uid(),
    isParentMenu: true,
    parentMenu: "Masters",
    menuName: "Masters",
    child: [
      {
        id: uid(),
        isParentMenu: false,
        parentMenu: "Masters",
        menuName: "Company",
      },
      {
        id: uid(),
        isParentMenu: false,
        parentMenu: "Masters",
        menuName: "Role",
      },
      {
        id: uid(),
        isParentMenu: false,
        parentMenu: "Masters",
        menuName: "Users",
      },
      {
        id: uid(),
        isParentMenu: false,
        parentMenu: "Masters",
        menuName: "Company",
      },
      {
        id: uid(),
        isParentMenu: false,
        parentMenu: "Masters",
        menuName: "Menus",
      },
      {
        id: uid(),
        isParentMenu: false,
        parentMenu: "Masters",
        menuName: "Common Master",
      },
    ],
  },
  {
    id: uid(),
    isParentMenu: true,
    parentMenu: "Configurations",
    menuName: "Configurations",
    child: [
      {
        id: uid(),
        isParentMenu: false,
        parentMenu: "Configurations",
        menuName: "Role Menu Allocation",
      },
    ],
  },
  {
    id: uid(),
    isParentMenu: true,
    parentMenu: "Transactions",
    menuName: "Transactions",
    child: [
      {
        id: uid(),
        isParentMenu: false,
        parentMenu: "Transactions",
        menuName: "KOT",
      },
      {
        id: uid(),
        isParentMenu: false,
        parentMenu: "Transactions",
        menuName: "Billing",
      },
    ],
  },
];

type SidebarProp = {
  isSidebarOpen: boolean;
};
const Sidebar = ({ isSidebarOpen }: SidebarProp) => {
  return (
    <div className={`${isSidebarOpen ? "block" : "hidden"}`}>
      <h3 className="text-3xl font-bold tracking-wider text-center p-2">KOT</h3>

      <div className={`my-6 ${isSidebarOpen ? "px-0" : "px-2"}`}>
        {sidebarMenuData.map((item) => (
          <SidebarItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
export default Sidebar;
