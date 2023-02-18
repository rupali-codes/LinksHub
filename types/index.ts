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

export type Category = "frontend" | "backend" | "youtube" | "resources";

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ddc92ccc1a0daf4f0b297892b6108f0d0bc0d8c5
export type SubCategory =
  | "images"
  | "icons"
  | "illustrations"
  | "colors"
  | "fonts"
  | "animations"
  | "testing"
  | "themes-templates"
  | "design-inspiration"
  | "validation"
  | "security"
  | "authentication"
  | "caching"
  | "ui-generators"
  | "validation"
  | "security"
  | "authentication"
  | "caching"
  | "online-code-editors"
  | "web-development"
  | "machine-learning"
  | "dsa"
  | "android"
  | "blogs"
  | "hosting";
<<<<<<< HEAD
=======
export type SubCategory = "images" | "icons" | "illustrations" | "colors" | "fonts" | "animations" | "testing" | "themes-templates" | "design-inspiration" | "validation" | "security" | "authentication" | "caching" | "ui-generators" | "validation" | "security" | "authentication" | "caching"| "online-code-editors";
>>>>>>> 52a3e736b30c5fe748e896bc28da2bfc846b402c
=======
>>>>>>> ddc92ccc1a0daf4f0b297892b6108f0d0bc0d8c5
export type SubCategories = {
  name: string;
  url: string;
};

export interface ISidebar {
  category: Category;
  subcategory: SubCategories[];
}

export interface SearchbarProps {
  setSearch: (search: string) => void;
}

export interface IContext {
  sidebar: boolean;
  openNav?: () => void;
  closeNav?: () => void;
  toggleNav?: () => void;
}
