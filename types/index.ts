export type DataList = {
  name: string;
  description: string;
  url: string;
};

export interface ISideNavbarElement {
  title: string;
}

export interface IData {
  id: string;
  name: string;
  description: string;
  url: string;
  category: Category;
  subcategory: SubCategory;
}

export type Category = "frontend" | "backend";

export type SubCategory = "images" | "illustrations" | "colors" | "fonts";
export type SubCategories = {
  name: string;
  url: string;
};

export interface ISidebar {
  category: Category;
  subcategory: SubCategories[];
}

export interface IContext {
  sidebar: boolean;
  openNav?:()=>void;
  closeNav?:()=>void;
  toggleNav?:()=>void
}
