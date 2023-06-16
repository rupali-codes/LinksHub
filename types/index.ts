export type DataList = {
  name: string
  description: string
  url: string
}

export interface ISideNavbarElement {
  title: string
}

export interface ICategoryData {
  name: string
  description: string
}

export interface IDBData {
  name: string
  description: string
  url: string
  category: string
  subcategory: string
  language?: string
}

export interface IData {
  id: string
  name: string
  description: string
  url: string
  category: string
  subcategory: string
  language?: string
}

export type Category =
  | 'frontend'
  | 'backend'
  | 'ml & ai'
  | 'youtube'
  | 'resources'
  | 'other'
  | 'languages'
  | 'online platform'
  | 'open source'

export type SubCategory =
  | 'images'
  | 'icons'
  | 'illustrations'
  | 'colors'
  | 'css'
  | 'fonts'
  | 'animations'
  | 'testing'
  | 'themes-templates'
  | 'design-inspiration'
  | 'validation'
  | 'security'
  | 'authentication'
  | 'caching'
  | 'ui-generators'
  | 'validation'
  | 'security'
  | 'authentication'
  | 'caching'
  | 'system-design'
  | 'ml'
  | 'data-science'
  | 'deep-learning'
  | 'online-code-editors'
  | 'web-development'
  | 'machine-learning'
  | 'tensorflow'
  | 'dsa'
  | 'android'
  | 'blogs'
  | 'hosting'
  | 'web3-metaverse'
  | 'Github'
  | 'devtools'
  | 'javascript'
  | 'python'
  | 'golang'
  | 'open-source-blogs'
  | 'open-source-projects'
  | 'open-source-tools'
  | 'officialdocs'
  | 'fintech'
export type SubCategories = {
  name: string
  url: string
}

export interface ISidebar {
  category: Category
  subcategory: SubCategories[]
}

export interface SearchbarProps {
  setSearch: (search: string) => void
}

export interface IContext {
  sidebar: boolean
  openNav?: () => void
  closeNav?: () => void
  toggleNav?: () => void
}

export interface IUseFilterDBResponse {
  filterSubCat: IData[][]
  filterDB: IData[][]
}
