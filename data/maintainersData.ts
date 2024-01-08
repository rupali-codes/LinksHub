export const maintainersData = [
  { login: 'rupali-codes', name: 'Rupali Haldiya' },
  { login: 'CBID2', name: 'Christine Belzie' },
  { login: 'Anmol-Baranwal', name: 'Anmol Baranwal' },
  { login: 'aftabrehan', name: 'Aftab Rehan' },
]

export interface MaintainersDataInterface {
  name: string
  avatarUrl: string
  login: string
  designation: string
  role: string
  firstLink: string
  firstTxt: string
  secondLink: string
  secondTxt: string
  thirdLink: string
  thirdTxt: string
}

export const Maintainers: MaintainersDataInterface[] = [
  {
    name: 'Rupali Haldiya',
    avatarUrl: 'https://avatars.githubusercontent.com/u/78981177?v=4',
    login: 'rupali-codes',
    designation: 'FullStack Developer',
    role: 'Founder',
    firstLink: 'https://github.com/sponsors/rupali-codes',
    firstTxt: 'Sponsor',
    secondLink: 'https://github.com/rupali-codes',
    secondTxt: 'GitHub',
    thirdLink: 'https://twitter.com/rupali_codes',
    thirdTxt: 'Twitter',
  },
  {
    name: 'Anmol Baranwal',
    avatarUrl: 'https://avatars.githubusercontent.com/u/74038190?v=4',
    login: 'Anmol-Baranwal',
    designation: 'Software Developer',
    role: 'Maintainer',
    firstLink: 'https://www.linkedin.com/in/Anmol-Baranwal',
    firstTxt: 'LinkedIn',
    secondLink: 'https://github.com/Anmol-Baranwal',
    secondTxt: 'GitHub',
    thirdLink: 'https://twitter.com/Anmol_Codes',
    thirdTxt: 'Twitter',
  },
  {
    name: 'Christine Belzie',
    avatarUrl: 'https://avatars.githubusercontent.com/u/105683440?v=4',
    login: 'CBID2',
    designation: 'Technical Writer',
    role: 'Maintainer',
    firstLink: 'https://github.com/sponsors/CBID2',
    firstTxt: 'Sponsor',
    secondLink: 'https://www.linkedin.com/in/christinebelzie',
    secondTxt: 'LinkedIn',
    thirdLink: 'https://twitter.com/CodesChrissy',
    thirdTxt: 'Twitter',
  },
  {
    name: 'Aftab Rehan',
    avatarUrl: 'https://avatars.githubusercontent.com/u/93012310?v=4',
    login: 'aftabrehan',
    designation: 'UI/UX Designer',
    role: 'Maintainer',
    firstLink: 'https://aftabrehan.com',
    firstTxt: 'Website',
    secondLink: 'https://github.com/aftabrehan',
    secondTxt: 'GitHub',
    thirdLink: 'https://twitter.com/aftabrehan_',
    thirdTxt: 'Twitter',
  },
]

export interface Contributor {
  twitter_username?: string
  id: number
  avatar_url: string
  name: string
  login: string
  contributions: number
}

export const dummyContributors: Contributor[] = [
  {
    id: 1,
    avatar_url: 'https://avatars.githubusercontent.com/u/74038190?v=4',
    name: 'John Doe',
    login: 'johndoe',
    contributions: 15,
  },
  {
    id: 2,
    avatar_url: 'https://avatars.githubusercontent.com/u/74038190?v=4',
    name: 'Jane Smith',
    login: 'janesmith',
    contributions: 10,
  },
  {
    id: 3,
    avatar_url: 'https://avatars.githubusercontent.com/u/74038190?v=4',
    name: 'Bob Johnson',
    login: 'bobjohnson',
    contributions: 5,
  },
  {
    id: 4,
    avatar_url: 'https://avatars.githubusercontent.com/u/74038190?v=4',
    name: 'Bob Johnson',
    login: 'bobjohnson',
    contributions: 5,
  },
  {
    id: 5,
    avatar_url: 'https://avatars.githubusercontent.com/u/74038190?v=4',
    name: 'Bob Johnson',
    login: 'bobjohnson',
    contributions: 5,
  },
  {
    id: 6,
    avatar_url: 'https://avatars.githubusercontent.com/u/74038190?v=4',
    name: 'Bob Johnson',
    login: 'bobjohnson',
    contributions: 5,
  },
  {
    id: 7,
    avatar_url: 'https://avatars.githubusercontent.com/u/74038190?v=4',
    name: 'Bob Johnson',
    login: 'bobjohnson',
    contributions: 5,
  },
  {
    id: 8,
    avatar_url: 'https://avatars.githubusercontent.com/u/74038190?v=4',
    name: 'Bob Johnson',
    login: 'bobjohnson',
    contributions: 5,
  },
  {
    id: 9,
    avatar_url: 'https://avatars.githubusercontent.com/u/74038190?v=4',
    name: 'Bob Johnson',
    login: 'bobjohnson',
    contributions: 5,
  },
  {
    id: 10,
    avatar_url: 'https://avatars.githubusercontent.com/u/74038190?v=4',
    name: 'Bob Johnson',
    login: 'bobjohnson',
    contributions: 5,
  },
  {
    id: 11,
    avatar_url: 'https://avatars.githubusercontent.com/u/74038190?v=4',
    name: 'Bob Johnson',
    login: 'bobjohnson',
    contributions: 5,
  },
]
