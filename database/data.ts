import { IDBData, IData, ISidebar } from '../types'
import * as DB from 'database'
import { v4 as uuidv4 } from 'uuid'
export const database: IData[][] = Object.values(DB).map((item: IDBData[]) =>
  item.map((subcat: IDBData) => ({ ...subcat, id: uuidv4() }))
)

export const sidebarData: ISidebar[] = [
  {
    category: 'frontend',
    subcategory: [
      { name: 'next js', url: '/next-js', resources: DB.next },
      { name: 'three js', url: '/three-js', resources: DB.three },
      { name: 'images', url: '/images', resources: DB.images },
      { name: 'fonts', url: '/fonts', resources: DB.fonts },
      { name: 'colors', url: '/colors', resources: DB.colors },
      { name: 'react', url: '/react', resources: DB.react },
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
        url: '/ui-generators',
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
      {
        name: 'ui Libraries',
        url: '/ui-libraries',
        resources: DB.uilibraries,
      },
      { name: 'angular', url: '/angular', resources: DB.angular },
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
      {
        name: 'email providers',
        url: '/email-providers',
        resources: DB.emailProviders,
      },
      { name: 'caching', url: '/caching', resources: DB.caching },
      { name: 'testing', url: '/testing', resources: DB.testing },
      {
        name: 'system design',
        url: '/system-design',
        resources: DB.systemDesign,
      },
      { name: 'database', url: '/database', resources: DB.database },
      {
        name: 'APIs',
        url: '/api',
        resources: DB.api,
      },
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
      {
        name: 'C Programming',
        url: '/c-programming',
        resources: DB.CProgramming,
      },
      { name: 'C++ Programming', url: '/cpp', resources: DB.cpp },
      { name: 'Java', url: '/java', resources: DB.java },
      { name: 'Kotlin', url: '/kotlin', resources: DB.kotlin },
      { name: 'Rust', url: '/rust', resources: DB.Rust },
      { name: 'Dart', url: '/dart', resources: DB.dart },
      { name: 'Solidity', url: '/solidity', resources: DB.solidity },
      { name: 'Swift', url: '/swift', resources: DB.swift },
    ],
  },
  {
    category: 'open-source',
    subcategory: [
      {
        name: 'Articles',
        url: '/articles',
        resources: DB.openSourceArticles,
      },
      {
        name: 'Programs',
        url: '/os-programs',
        resources: DB.openSourcePrograms,
      },
      {
        name: 'Projects',
        url: '/projects',
        resources: DB.openSourceProjects,
      },
      {
        name: 'Tools',
        url: '/tools',
        resources: DB.openSourceTools,
      },
      {
        name: 'Tutorials',
        url: '/tutorials',
        resources: DB.openSourceTutorials,
      },
    ],
  },
  {
    category: 'devops',
    subcategory: [
      { name: 'CI/CD', url: '/cicd', resources: DB.cicd },
      {
        name: 'DevOps Life Cycle',
        url: '/devops-life-cycle',
        resources: DB.devopsLifecycle,
      },
      {
        name: 'DevOps Methodologies',
        url: '/devops-methodologies',
        resources: DB.devopsMethodologies,
      },
      { name: 'docker', url: '/docker', resources: DB.docker },
      { name: 'jenkins', url: '/jenkins', resources: DB.jenkins },
      {
        name: 'kubernetes',
        url: '/kubernetes',
        resources: DB.kubernetes,
      },
      {
        name: 'microservices',
        url: '/microservices',
        resources: DB.microservices,
      },
      {
        name: 'IaC',
        url: '/iac',
        resources: DB.iac,
      },
    ],
  },
  {
    category: 'ai',
    subcategory: [
      {
        name: 'artificial intelligence',
        url: '/artificial-intelligence',
        resources: DB.artificialIntelligence,
      },
      {
        name: 'machine learning',
        url: '/machine-learning',
        resources: DB.machineLearning,
      },
      { name: 'data science', url: '/data-science', resources: DB.dataScience },
      {
        name: 'deep learning',
        url: '/deep-learning',
        resources: DB.deepLearning,
      },
      {
        name: 'NLP',
        url: '/natural-language-processing',
        resources: DB.naturalLanguageProcessing,
      },
    ],
  },
  {
    category: 'cyber-security',
    subcategory: [
      {
        name: 'Offensive security',
        url: '/offensive-security',
        resources: DB.offensiveSecurity,
      },
      {
        name: 'Defensive Security',
        url: '/defensive-security',
        resources: DB.defensiveSecurity,
      },
      {
        name: 'Malware Analysis',
        url: '/malware-analysis',
        resources: DB.malwareAnalysis,
      },
      {
        name: 'Web Security',
        url: '/web-security',
        resources: DB.webSecurity,
      },
    ],
  },

  {
    category: 'cloud-computing',
    subcategory: [
      { name: 'google cloud', url: '/google-cloud', resources: DB.googleCloud },
      {
        name: 'AWS cloud',
        url: '/aws-cloud',
        resources: DB.awsCloud,
      },
      { name: 'Microsoft cloud', url: '/microsoft-cloud', resources: DB.microsoftCloud },
      { name: 'Oracle cloud', url: '/oracle-cloud', resources: DB.oracleCloud },
      { name: 'IBM cloud', url: '/ibm-cloud', resources: DB.ibmCloud },
    ],
  },
  {
    category: 'internet-of-things',
    subcategory: [
      { name: 'coursera', url: '/coursera', resources: DB.coursera },
      { name: 'raspberrypi', url: '/raspberrypi', resources: DB.raspberrypi },
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
      { name: 'dsa', url: '/dsa', resources: DB.dsa },
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
        name: 'kubernetes',
        url: '/kubernetes',
        resources: DB.Kubernetes,
      },
      {
        name: 'machine learning',
        url: '/machine-learning',
        resources: DB.machineLearning,
      },
      { name: 'tensorflow', url: '/tensorflow', resources: DB.tensorflow },
      { name: 'Android', url: '/android', resources: DB.android },
      {
        name: 'Web3 & Metaverse',
        url: '/web3-metaverse',
        resources: DB.web3metaverse,
      },
      {
        name: 'Software Testing',
        url: '/software-testing',
        resources: DB.softwareTesting,
      },
      {
        name: 'Computer Science',
        url: '/computer-science',
        resources: DB.computerScience,
      },
      { name: 'FinTech', url: '/fintech', resources: DB.fintech },
      {
        name: 'Game Development',
        url: '/game-development',
        resources: DB.gameDevelopment,
      },
      {
        name: 'UI/UX Designing',
        url: '/ui-ux-designing',
        resources: DB.uiUxDesigning,
      },
    ],
  },
  {
    category: 'data-structures',
    subcategory: [
      { name: 'DSA Articles', url: '/dsa-articles', resources: DB.dsaArticles },
      {
        name: 'DSA Tutorials',
        url: '/dsa-tutorials',
        resources: DB.dsaTutorials,
      },
      { name: 'DSA Courses', url: '/dsa-courses', resources: DB.dsaCourses },
    ],
  },
  {
    category: 'competitive-programming',
    subcategory: [
      { name: 'Platforms', url: '/cp-platforms', resources: DB.cpPlatforms },
      { name: 'Tutorials', url: '/cp-tutorials', resources: DB.cpTutorials },
    ],
  },
  {
    category: 'Placement-Prep',
    subcategory: [
      {
        name: 'Interview Preparation',
        url: '/interview-preparation',
        resources: DB.interviewPreparation,
      },
      {
        name: 'Job Portals',
        url: '/job-portals',
        resources: DB.jobPortals,
      },
      {
        name: 'Resume Building',
        url: '/resume-building',
        resources: DB.resumeBuilding,
      },
      {
        name: 'Portfolio Building',
        url: '/portfolio-building',
        resources: DB.portfolioBuilding,
      },
      {
        name: 'Cover Letters',
        url: '/cover-letters',
        resources: DB.coverLetters,
      },
      {
        name: 'Certifications',
        url: '/certifications',
        resources: DB.certifications,
      },
    ],
  },
  {
    category: 'technical-writing',
    subcategory: [
      {
        name: 'Technical Writing Tools',
        url: '/technical-writing-tools',
        resources: DB.technicalWritingTools,
      },
    ],
  },
  {
    category: 'BlockChain',
    subcategory: [
      {
        name: 'Smart Contracts',
        url: '/smart-contracts',
        resources: DB.smartContracts,
      },
      {
        name: 'Truffle',
        url: '/truffle',
        resources: DB.truffle,
      },
      {
        name: 'Hardhat',
        url: '/hardhat',
        resources: DB.hardhat,
      },
      {
        name: 'Ethers',
        url: '/ethers',
        resources: DB.ethers,
      },
    ],
  },
  {
    category: 'other',
    subcategory: [
      { name: 'events', url: '/events', resources: DB.events },
      { name: 'Github', url: '/github', resources: DB.github },
      { name: 'Git', url: '/git', resources: DB.git },
      { name: 'Dev Tools', url: '/devtools', resources: DB.devtools },
      { name: 'Podcasts', url: '/podcasts', resources: DB.podcasts },
      {
        name: 'Other Resources',
        url: '/other-resources',
        resources: DB.otherResources,
      },
      { name: 'Communities', url: '/communities', resources: DB.communities },
      { name: 'Roadmaps', url: '/roadmaps', resources: DB.roadmaps },
      { name: 'Domains', url: '/domains', resources: DB.domains },
      {
        name: 'Text Formatting',
        url: '/text-formatting',
        resources: DB.textFormatting,
      },
    ],
  },
]

export const subCategories = sidebarData.flatMap(({ category, subcategory }) =>
  subcategory.map(({ url }) => ({
    category,
    subcategory: url.replace('/', ''),
  }))
)
