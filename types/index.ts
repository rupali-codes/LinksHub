export type DataList = {
  name: string;
  description: string;
  url: string;
};

export interface ISideNavbarElement {
  title: string;
}

export interface IDescription {
  en: string,
  es: string
}

export interface IData {
  id: string;
  name: string;
  description: IDescription
  url: string;
  category: Category;
  subcategory_en: SubCategoryEn;
  subcategory_es: SubCategoryEs;
}

export type Category = "frontend" | "backend";

export type SubCategoryEn = "images" | "icons" | "illustrations" | "colors" | "fonts" | "animations" | "testing" | "themes-templates" | "design-inspiration" | "validation" | "security" | "authentication" | "caching" | "ui-generators" | "validation" | "security" | "authentication" | "caching"| "online-code-editors";
export type SubCategoryEs = "imagenes" | "iconos" | "ilustraciones" | "colores" | "fuentes" | "animaciones" | "testing" | "temas-plantillas" | "inspiraciones-diseno" | "validacion" | "seguridad" | "autenticacion" | "caching" | "generadores-ui" | "validacion" | "seguridad" | "autenticacion" | "caching"| "editores-codigo-online";

export type SubCategories = {
  name: string;
  url: string;
}
export interface ISidebar {
  category: Category;
  subcategory: SubCategories[];
  lang: string;
}

export interface IContext {
  sidebar: boolean;
  lang: string;
  openNav?:()=>void;
  closeNav?:()=>void;
  toggleNav?:()=>void;
  changeLang?:()=>void
}
