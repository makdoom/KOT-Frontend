import { v4 as uid } from "uuid";
import SidebarItem from "./SidebarItem";

const sidebarMenuData = [
  {
    id: uid(),
    isParentMenu: false,
    parentMenu: "Dashboard",
    menuName: "Dashboard",
    url: "/dashboard",
  },
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
        url: "master/company",
      },
      {
        id: uid(),
        isParentMenu: false,
        parentMenu: "Masters",
        menuName: "Role",
        url: "master/role",
      },
      {
        id: uid(),
        isParentMenu: false,
        parentMenu: "Masters",
        menuName: "Users",
        url: "master/users",
      },
      {
        id: uid(),
        isParentMenu: false,
        parentMenu: "Masters",
        menuName: "Table",
        url: "master/table",
      },
      {
        id: uid(),
        isParentMenu: false,
        parentMenu: "Masters",
        menuName: "Menus",
        url: "master/menus",
      },
      {
        id: uid(),
        isParentMenu: false,
        parentMenu: "Masters",
        menuName: "Common Master",
        url: "master/common-master",
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
      <h3 className="text-3xl font-bold tracking-wider text-center p-2 text-primary">
        KOT
      </h3>

      <div className={`my-6 ${isSidebarOpen ? "px-0" : "px-2"}`}>
        {sidebarMenuData.map((item) => (
          <SidebarItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
export default Sidebar;
