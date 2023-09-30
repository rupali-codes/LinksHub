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
  'react',
  'next-js',
  'three-js',
  'themes-templates',
  'ui-generators',
  //backend
  'architecture',
  'authentication',
  'caching',
  'database',
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
  //artificial intelligence
  'artificial-intelligence',
  //Internet of Things
  'coursera',
  'Esp-32',
  'Sensors',
  'Raspberry pi',
  //cloud computing
  'google cloud',
  'aws',
  'azure',
  'oracle',
  'ibm',
  // machin learning
  'data-science',
  'deep-learning',
  'machine-learning',
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
  'github',
  'other-resources',
  'podcasts',
  'roadmaps',
  // competitive programming
  'platforms',
  // technical-writing
  'technical-writing-tools',
]
