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
  themeColor: string
  txtTheme: string
  firstItem: string
  firstTxt: string
  secondItem: string
  secondTxt: string
  thirdItem: string
  thirdTxt: string
}

const Maintainers: MaintainersDataInterface[] = [
  {
    name: 'Rupali Haldiya',
    avatarUrl: 'https://avatars.githubusercontent.com/u/78981177?v=4',
    designation: 'FullStack Developer',
    role: 'Founder',
    themeColor: '#EF60861A',
    txtTheme: '#EF6086',
    firstItem: 'https://github.com/sponsors/rupali-codes',
    firstTxt: 'Sponsor',
    secondItem: 'https://github.com/rupali-codes',
    secondTxt: 'GitHub',
    thirdItem: 'https://twitter.com/rupali_codes',
    thirdTxt: 'Twitter',
  },
  {
    name: 'Christine Belzie',
    avatarUrl: 'https://avatars.githubusercontent.com/u/105683440?v=4',
    designation: 'Technical Writer',
    role: 'Maintainer',
    themeColor: '#FFF',
    txtTheme: '#FFF',
    firstItem: 'https://github.com/sponsors/CBID2',
    firstTxt: 'Sponsor',
    secondItem: 'https://www.linkedin.com/in/christinebelzie',
    secondTxt: 'LinkedIn',
    thirdItem: 'https://twitter.com/CodesChrissy',
    thirdTxt: 'Twitter',
  },
  {
    name: 'Anmol Baranwal',
    avatarUrl: 'https://avatars.githubusercontent.com/u/78981177?v=4',
    designation: 'Software Developer',
    role: 'Maintainer',
    themeColor: '#FFF',
    txtTheme: '#FFF',
    firstItem: 'https://www.linkedin.com/in/Anmol-Baranwal/',
    firstTxt: 'LinkedIn',
    secondItem: 'https://github.com/Anmol-Baranwal',
    secondTxt: 'GitHub',
    thirdItem: 'https://twitter.com/Anmol_Codes',
    thirdTxt: 'Twitter',
  },
  {
    name: 'Aftab Rehan',
    avatarUrl: 'https://avatars.githubusercontent.com/u/93012310?v=4',
    designation: 'UI/UX Designer',
    role: 'Designer',
    themeColor: '#9655A033',
    txtTheme: '#E88DF6',
    firstItem: 'https://linkedin.com/in/aftabrehan',
    firstTxt: 'LinkedIn',
    secondItem: 'https://github.com/aftabrehan',
    secondTxt: 'GitHub',
    thirdItem: 'https://twitter.com/aftabrehan_',
    thirdTxt: 'Twitter',
  },
]

export default Maintainers
