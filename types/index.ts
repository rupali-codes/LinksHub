export type DataList = {
  name: string;
  description: string;
  url: string;
};

export interface IDescription {
  "en": string;
  "es": string;
}

export interface ISideNavbarElement {
  title: string;
}

export interface IData {
  id: string;
  name: string;
  description: IDescription;
  url: string;
  category: Category;
  subcategory: SubCategory;
}

export type Category = "frontend" | "backend" | "youtube" | "resources" | "recursos";

export type SubCategory =
  | "images"
  | "imagenes"
  | "icons"
  | "ilustraciones"
  | "illustrations"
  | "colors"
  | "colores"
  | "fonts"
  | "fuentes"
  | "animations"
  | "animaciones"
  | "testing"
  | "themes-templates"
  | "temas-plantillas"
  | "design-inspiration"
  | "inspiraciones-diseño"
  | "validation"
  | "validacion"
  | "security"
  | "seguridad"
  | "authentication"
  | "autenticacion"
  | "caching"
  | "ui-generators"
  | "generadores-ui"
  | "validation"
  | "validacion"
  | "security"
  | "seguridad"
  | "authentication"
  | "autenticacion"
  | "caching"
  | "online-code-editors"
  | "editores-codigo-online"
  | "web-development"
  | "machine-learning"
  | "dsa"
  | "android"
  | "blogs"
  | "hosting";

export type SubCategories = {
  name: string;
  url: string;
};

export interface ISidebar {
  category: Category;
  subcategory: SubCategories[];
  lang: string;
}

export interface SearchbarProps {
  setSearch: (search: string) => void;
}

export interface IContext {
  sidebar: boolean;
  lang: string;
  openNav?: () => void;
  closeNav?: () => void;
  toggleNav?: () => void;
  changeLang?:()=>void;
}
