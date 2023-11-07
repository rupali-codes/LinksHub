import { sidebarData } from 'database/data'

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
  | 'languages'
  | 'ai'
  | 'internet-of-things'
  | 'cyber-security'
  | 'cloud-computing'
  | 'open-source'
  | 'resources'
  | 'youtube'
  | 'other'
  | 'devops'
  | 'competitive-programming'
  | 'technical-writing'
  | 'Placement-Prep'
  | 'data-structures'
  | 'BlockChain'

export type SubCategories = {
  name: string
  url: string
  resources: IDBData[]
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

export const subcategoryArray = sidebarData
  .map((item) => item.subcategory.flat())
  .flat()
