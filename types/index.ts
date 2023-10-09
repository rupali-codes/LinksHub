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

export const subcategoryArray = [
  // devops
  'cicd',
  'devops-life-cycle',
  'devops-methodologies',
  'docker',
  'kubernetes',
  'microservices',
  //frontend
  'accessibility',
  'animations',
  'colors',
  'design-inspiration',
  'fonts',
  'icons',
  'illustrations',
  'images',
  'online-code-editors',
  'next-js',
  'three-js',
  'themes-templates',
  'ui-generators',
  //backend
  'api',
  'architecture',
  'authentication',
  'caching',
  'database',
  'email-providers',
  'security',
  'system-design',
  'testing',
  'validation',
  // languages
  'c-programming',
  'csharp',
  'golang',
  'java',
  'javascript',
  'kotlin',
  'python',
  'ruby',
  'typescript',
  'rust',
  'dart',
  //artificial intelligence
  'artificial-intelligence',
  'machine-learning',
  'data-science',
  'deep-learning',
  //Internet of Things
  'coursera',
  'raspberry',
  //cloud computing
  'gcp',
  'aws',
  'azure',
  'oracle',
  'ibm',
  // Open-source
  'articles',
  'projects',
  'tools',
  'os-tutorials',
  // resources
  'blogs',
  'e-book',
  'hosting',
  'officialdocs',
  'project-ideas',
  // youtube
  'android',
  'computer-science',
  'cp-platforms',
  'cp-tutorials',
  'css',
  'data-structures',
  'fintech',
  'game-development',
  'machine-learning',
  'tensorflow',
  'software-testing',
  'web-development',
  'web3-metaverse',
  // other
  'communities',
  'devtools',
  'events',
  'github',
  'other-resources',
  'podcasts',
  'roadmaps',
  // competitive programming
  'cp-platforms',
  'cp-tutorials',
  // technical-writing
  'technical-writing-tools',
]
