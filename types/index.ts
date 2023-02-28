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
  language?:string;
}

export type Category = "frontend" | "backend" | "youtube" | "resources";

export type SubCategory =
  | "images"
  | "icons"
  | "illustrations"
  | "colors"
  | "css"
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
  | "hosting"
  | "web3-metaverse";
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

export type DBType = {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  subcategory: string;
  language?:string;
};
