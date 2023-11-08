export const maintainersData = [
  { login: 'rupali-codes', name: 'Rupali Haldiya' },
  { login: 'CBID2', name: 'Christine Belzie' },
  { login: 'Anmol-Baranwal', name: 'Anmol Baranwal' },
  { login: 'aftabrehan', name: 'Aftab Rehan' },
]

interface MaintainersDataInterface {
  name: string
  avatarUrl: string
  designation: string
  role: string
  linkedin?: string
  github?: string
  twitter?: string
  sponsor?: string
  website?: string
  themeColor: string
  txtTheme: string
}

const Maintainers: MaintainersDataInterface[] = [
  {
    name: 'Rupali Haldiya',
    avatarUrl: 'https://avatars.githubusercontent.com/u/78981177?v=4',
    designation: 'FullStack Developer',
    role: 'Founder',
    themeColor: '#EF60861A',
    txtTheme: '#EF6086',
    sponsor: 'https://github.com/sponsors/rupali-codes',
    github: 'https://github.com/rupali-codes',
    twitter: 'https://twitter.com/rupali_codes',
  },
  {
    name: 'Christine Belzie',
    avatarUrl: 'https://avatars.githubusercontent.com/u/105683440?v=4',
    designation: 'Technical Writer',
    role: 'Maintainer',
    themeColor: '#FFF',
    txtTheme: '#FFF',
    linkedin: 'https://www.linkedin.com/in/christinebelzie',
    sponsor: 'https://github.com/sponsors/CBID2',
    twitter: 'https://twitter.com/CodesChrissy',
  },
  {
    name: 'Anmol Baranwal',
    avatarUrl: 'https://avatars.githubusercontent.com/u/78981177?v=4',
    designation: 'Software Developer',
    role: 'Maintainer',
    themeColor: '#FFF',
    txtTheme: '#FFF',
    linkedin: 'https://www.linkedin.com/in/Anmol-Baranwal/',
    github: 'https://github.com/Anmol-Baranwal',
    twitter: 'https://twitter.com/Anmol_Codes',
  },
  {
    name: 'Aftab Rehan',
    avatarUrl: 'https://avatars.githubusercontent.com/u/93012310?v=4',
    designation: 'UI/UX Designer',
    role: 'Designer',
    themeColor: '#9655A033',
    txtTheme: '#E88DF6',
    linkedin: 'https://linkedin.com/in/aftabrehan',
    github: 'https://github.com/aftabrehan',
    twitter: 'https://twitter.com/aftabrehan_',
  },
]

export default Maintainers
