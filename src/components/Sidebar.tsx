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
        url: "masters/company",
      },
      {
        id: uid(),
        isParentMenu: false,
        parentMenu: "Masters",
        menuName: "Role",
        url: "masters/role",
      },
      {
        id: uid(),
        isParentMenu: false,
        parentMenu: "Masters",
        menuName: "Users",
        url: "masters/users",
      },
      {
        id: uid(),
        isParentMenu: false,
        parentMenu: "Masters",
        menuName: "Table",
        url: "masters/table",
      },
      {
        id: uid(),
        isParentMenu: false,
        parentMenu: "Masters",
        menuName: "Menus",
        url: "masters/menus",
      },
      {
        id: uid(),
        isParentMenu: false,
        parentMenu: "Masters",
        menuName: "Common Master",
        url: "masters/common-master",
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
        url: "configurations/roleMenuAllocation",
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
        url: "transactions/kot",
      },
      {
        id: uid(),
        isParentMenu: false,
        parentMenu: "Transactions",
        menuName: "Billing",
        url: "transactions/billing",
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
