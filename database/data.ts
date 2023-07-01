import { IDBData, IData, ISidebar } from '../types'
import * as DB from 'database'
import { v4 as uuidv4 } from 'uuid'

export const database: IData[][] = Object.values(DB).map((item: IDBData[]) =>
  item.map((subcat) => ({ ...subcat, id: uuidv4() }))
)

export const sidebarData: ISidebar[] = [
  {
    category: 'frontend',
    subcategory: [
      { name: 'react js', url: '/react', resources: DB.react },
      { name: 'images', url: '/images', resources: DB.images },
      { name: 'fonts', url: '/fonts', resources: DB.fonts },
      { name: 'colors', url: '/colors', resources: DB.colors },
      {
        name: 'illustrations',
        url: '/illustrations',
        resources: DB.illustrations,
      },
      { name: 'animations', url: '/animations', resources: DB.animations },
      { name: 'icons', url: '/icons', resources: DB.icons },
      {
        name: 'design inspiration',
        url: '/design-inspiration',
        resources: DB.designInspirations,
      },
      {
        name: 'themes & templates',
        url: '/themes-templates',
        resources: DB.themesTemplates,
      },
      {
        name: 'UI Generators',
        url: '/ui-generator',
        resources: DB.uiGenerators,
      },
      {
        name: 'online code editors',
        url: '/online-code-editors',
        resources: DB.onlineCodeEditors,
      },
      {
        name: 'accessibility',
        url: '/accessibility',
        resources: DB.accessibility,
      },
      { name: 'videos', url: '/videos', resources: DB.videos },
    ],
  },
  {
    category: 'backend',
    subcategory: [
      {
        name: 'architecture',
        url: '/architecture',
        resources: DB.architecture,
      },
      { name: 'validation', url: '/validation', resources: DB.validation },
      { name: 'security', url: '/security', resources: DB.security },
      {
        name: 'authentication',
        url: '/authentication',
        resources: DB.authentication,
      },
      { name: 'caching', url: '/caching', resources: DB.caching },
      { name: 'testing', url: '/testing', resources: DB.testing },
      {
        name: 'system design',
        url: '/system-design',
        resources: DB.systemDesign,
      },
      { name: 'database', url: '/database', resources: DB.database },
    ],
  },
  {
    category: 'languages',
    subcategory: [
      { name: 'JavaScript', url: '/javascript', resources: DB.javascript },
      { name: 'Python', url: '/python', resources: DB.python },
      { name: 'Csharp (C#)', url: '/csharp', resources: DB.csharp },
      { name: 'Go', url: '/golang', resources: DB.golang },
      { name: 'TypeScript', url: '/typescript', resources: DB.typescript },
      { name: 'Ruby', url: '/ruby', resources: DB.ruby },
      { name: 'C Programming', url: '/c-programming', resources: DB.CProgramming },
      { name: 'Java', url: '/java', resources: DB.java },
      { name: 'Kotlin', url: '/kotlin', resources: DB.kotlin },
    ],
  },
  {
    category: 'ml & ai',
    subcategory: [
      { name: 'machine learning', url: '/ml', resources: DB.machineLearning },
      { name: 'data science', url: '/data-science', resources: DB.dataScience },
      {
        name: 'deep learning',
        url: '/deep-learning',
        resources: DB.deepLearning,
      },
    ],
  },
  {
    category: 'open source',
    subcategory: [
      {
        name: 'Blogs',
        url: '/open-source-blogs',
        resources: DB.openSourceBlogs,
      },
      {
        name: 'Projects',
        url: '/open-source-projects',
        resources: DB.openSourceProjects,
      },
      {
        name: 'Tools',
        url: '/open-source-tools',
        resources: DB.openSourceTools,
      },
    ],
  },
  {
    category: 'resources',
    subcategory: [
      { name: 'blogs', url: '/blogs', resources: DB.blogs },
      {
        name: 'Official Docs',
        url: '/officialdocs',
        resources: DB.officialdocs,
      },
      { name: 'hosting', url: '/hosting', resources: DB.hosting },
      { name: 'e-book', url: '/e-book', resources: DB.ebook },
      { name: 'project ideas', url: '/project-ideas', resources: DB.project },
    ],
  },
  {
    category: 'youtube',
    subcategory: [
      {
        name: 'web development',
        url: '/web-development',
        resources: DB.webDevelopment,
      },
      { name: 'CSS', url: '/css', resources: DB.css },
      {
        name: 'machine learning',
        url: '/machine-learning',
        resources: DB.machineLearning,
      },
      { name: 'tensorflow', url: '/tensorflow', resources: DB.tensorflow },
      { name: 'data structures', url: '/dsa', resources: DB.dataStructures },
      { name: 'Android', url: '/android', resources: DB.android },
      {
        name: 'Web3 & Metaverse',
        url: '/web3-metaverse',
        resources: DB.web3metaverse,
      },
      {
        name: 'Testing',
        url: '/youtube-testing',
        resources: DB.youtubeTesting,
      },
      {
        name: 'Computer Science',
        url: '/computer-science',
        resources: DB.computerScience,
      },
      {
        name: 'Competitive Programming',
        url: '/competitive-programming',
        resources: DB.competitiveProgramming,
      },
      { name: 'FinTech', url: '/fintech', resources: DB.fintech },
      {
        name: 'Game Development',
        url: '/game-development',
        resources: DB.gameDevelopment,
      },
    ],
  },
  {
    category: 'other',
    subcategory: [
      { name: 'events', url: '/events', resources: DB.events },
      { name: 'Github', url: '/github', resources: DB.github },
      { name: 'Dev Tools', url: '/devtools', resources: DB.devtools },
      { name: 'Podcasts', url: '/podcasts', resources: DB.podcasts },
      {
        name: 'Other Resources',
        url: '/other-resources',
        resources: DB.otherResources,
      },
      { name: 'communities', url: '/communities', resources: DB.communities },
    ],
  },
]
