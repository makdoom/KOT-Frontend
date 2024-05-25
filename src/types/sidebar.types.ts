export type ItemType = {
  id: string;
  parentMenu: string;
  menuName: string;
  isParentMenu: boolean;
  child?: {
    id: string;
    isParentMenu: boolean;
    parentMenu: string;
    menuName: string;
  }[];
};
