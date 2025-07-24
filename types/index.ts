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
  | 'CMS-toolkit'
  | 'languages'
  | 'ai'
  | 'ai-tools'
  | 'internet-of-things'
  | 'cyber-security'
  | 'cloud-computing'
  | 'open-source'
  | 'resources'
  | 'theory-of-computation'
  | 'other'
  | 'devops'
  | 'competitive-programming'
  | 'technical-writing'
  | 'Placement-Prep'
  | 'data-structures'
  | 'BlockChain'
  | 'newsletters'
  | 'design'
  | 'tech-articles'
  | 'mobile'
  | 'game-development'
  | 'quality-assurance'
  | 'ethical-hacking'
  | 'Backend-Frameworks'

export type SubCategories = {
  name: string
  url: string
  resources: IDBData[]
}

export type SearchOption = SubCategories & {
  category: string
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
