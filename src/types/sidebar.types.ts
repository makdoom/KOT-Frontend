export type ItemType = {
  id: string;
  parentMenu: string;
  menuName: string;
  isParentMenu: boolean;
  url?: string;
  child?: {
    id: string;
    isParentMenu: boolean;
    parentMenu: string;
    menuName: string;
    url?: string;
  }[];
};
