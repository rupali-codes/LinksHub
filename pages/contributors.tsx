import { FC, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { GetStaticProps } from 'next'
import {
  maintainersData,
  Maintainers,
  Contributor,
  MaintainersDataInterface,
} from '../data/maintainersData'
import {
  FaArrowRight,
  FaGithub,
  FaHeart,
  FaLinkedin,
  FaTrophy,
} from 'react-icons/fa'
import { FaStaylinked, FaXTwitter } from 'react-icons/fa6'
import React from 'react'

export const getStaticProps: GetStaticProps<{
  contributors: Contributor[]
}> = async () => {
  try {
    const response = await fetch(
      'https://api.github.com/repos/rupali-codes/LinksHub/contributors'
    )
    if (response.ok) {
      const contributors: Contributor[] = await response.json()

      // Fetch contributor names
      const updatedContributors: Contributor[] = []
      for (const contributor of contributors) {
        try {
          const response = await fetch(
            `https://api.github.com/users/${contributor.login}`
          )
          if (response.ok) {
            const data = await response.json()
            const updatedContributor: Contributor = {
              ...contributor,
              name: data.name || contributor.login,
            }
            updatedContributors.push(updatedContributor)
          } else {
            console.error('Failed to fetch contributor name:', response.status)
          }
        } catch (error) {
          console.error(
            'Failed to fetch contributor name from GitHub API:',
            error
          )
        }
      }

      return { props: { contributors: updatedContributors } }
    } else {
      console.error('Failed to fetch contributors data:', response.status)
    }
  } catch (error) {
    console.error('Failed to fetch contributors data from GitHub API:', error)
  }

  return { props: { contributors: [] } }
}

const ContributorsPage: FC<{ contributors: Contributor[] }> = ({
  contributors,
}) => {
  const [displayedContributors, setDisplayedContributors] = useState(9)

  const filteredContributors = contributors.filter(
    (contributor) => contributor.contributions >= 1
  )

  const sortedContributors = filteredContributors.sort(
    (a, b) => b.contributions - a.contributions
  )

  const linkProps = {
    target: '_blank',
    rel: 'noopener noreferrer',
  }

  const iconsComponents: { [key: string]: JSX.Element } = {
    GitHub: <FaGithub />,
    Twitter: <FaXTwitter />,
    Sponsor: <FaHeart />,
    LinkedIn: <FaLinkedin />,
    Website: <FaStaylinked />,
  }

  const maintainersLogins = maintainersData.map(
    (maintainer) => maintainer.login
  )

  const contributorsWithoutMaintainers = sortedContributors.filter(
    (contributor) => !maintainersLogins.includes(contributor.login)
  )

  const generateLinksData = (maintainer: MaintainersDataInterface) => [
    {
      link: maintainer.firstLink,
      icon: maintainer.firstTxt,
      text: maintainer.firstTxt,
    },
    {
      link: maintainer.secondLink,
      icon: maintainer.secondTxt,
      text: maintainer.secondTxt,
    },
    {
      link: maintainer.thirdLink,
      icon: maintainer.thirdTxt,
      text: maintainer.thirdTxt,
    },
  ]

  interface ColorStyles {
    [key: number]: {
      bg: string
      text: string
      role: string
      hover: string
      border: string
    }
  }

  const getDarkBgColor = (
    id: number,
    check: 'bg' | 'text' | 'role' | 'hover' | 'border'
  ): string => {
    const themeColor: ColorStyles = {
      0: {
        bg: 'bg-[#EF6086] bg-opacity-5 dark:bg-opacity-10 dark:bg-[#EF6086]',
        text: 'text-[#EF6086]',
        role: 'bg-[#EF60861A] bg-opacity-10 dark:bg-[#EF6086] dark:bg-opacity-20 border dark:border-none border-[#EF6086] border-opacity-50',
        hover:
          'hover:bg-[#EF6086] hover:bg-opacity-5 dark:hover:bg-[#EF6086] dark:hover:bg-opacity-20 hover:text-[#EF6086]',
        border: 'dark:border-[#EF6086] dark:border-opacity-20 border-[#EF6086]',
      },
      1: {
        bg: 'bg-[#8184aa] bg-opacity-10 dark:bg-[#565990] dark:bg-opacity-30',
        text: 'text-[#565990] dark:text-[#1b1d49]',
        role: 'bg-[#565990] bg-opacity-10 dark:bg-[#8b8fca] dark:bg-opacity-90 border dark:border-none border-[#8b8fca] border-opacity-50',
        hover:
          'hover:bg-[#565990] hover:bg-opacity-5 dark:hover:bg-[#565990] dark:hover:bg-opacity-20 hover:text-[#292d64] dark:hover:text-[#fff]',
        border:
          'dark:border-[#565990] dark:border-opacity-20 border-opacity-50 border-[#565990]',
      },
      2: {
        bg: 'bg-[#20BA88] bg-opacity-5 dark:bg-[#20BA88] dark:bg-opacity-10',
        text: 'text-[#20BA88] dark:text-[#101623]',
        role: 'bg-[#20BA88] bg-opacity-10 dark:bg-[#20BA88] dark:bg-opacity-90 border dark:border-none border-[#20BA88] border-opacity-50',
        hover:
          'hover:bg-[#20BA88] hover:bg-opacity-5 dark:hover:bg-[#20BA88] dark:hover:bg-opacity-20 hover:text-[#20BA88]',
        border:
          'dark:border-[#20BA88] dark:border-opacity-20 border-opacity-50 border-[#20BA88]',
      },
      3: {
        bg: 'bg-[#9655A0] bg-opacity-5 dark:bg-opacity-10 dark:bg-[#9655A0]',
        text: 'text-[#E672F9]',
        role: 'bg-[#9655A0] bg-opacity-10 dark:bg-[#9655A0] dark:bg-opacity-50 border dark:border-none border-[#9655A0] border-opacity-50',
        hover:
          'hover:bg-[#9655A0] hover:bg-opacity-5 dark:hover:bg-[#9655A0] dark:hover:bg-opacity-20 hover:text-[#E672F9]',
        border: 'dark:border-[#9655A0] dark:border-opacity-20 border-[#9655A0]',
      },
    }

    return themeColor[id][check]
  }

  return (
    <div className="mx-4">
      <div>
        <h2 className="text-2xl text-gray-600 dark:text-white tracking-wide pb-2 mt-14 lg:mt-2">
          Our Team
        </h2>
        <h4 className="text-[#A1A1A9]">
          Meet Our Team, Passionate About Open Source and Making LinksHub an
          Open Source Success Story
        </h4>
      </div>
      <div className="maintainers-our-team grid sm:grid-cols-1 xl:grid-cols-2 gap-5 mt-8">
        {Maintainers.map((maintainer, id) => (
          <div
            key={id}
            className="bg-gray-100 rounded-3xl p-4 border border-dashed border-violet-500 dark:border-[#BDBDBD40] shadow-lg dark:bg-[#293242] dark:text-gray-300 dark:shadow-sm flex flex-col hover:scale-105 transition-transform duration-300 cursor-pointer m-1"
          >
            <div className="flex flex-col md:flex-row md:items-center">
              <div
                className={`rounded-xl flex-grow
                ${getDarkBgColor(id, 'bg')}`}
              >
                <div className="flex justify-center image-wrapper pt-4">
                  <Image
                    src={maintainer.avatarUrl}
                    alt={`image of ${maintainer.name}`}
                    width={110}
                    height={110}
                    className={`rounded-full mb-4 border-2 ${getDarkBgColor(
                      id,
                      'border'
                    )} transition-transform duration-300 hover:scale-105 hover:border-dotted m-2`}
                  />
                  <div
                    className={`${getDarkBgColor(id, 'role')} ${getDarkBgColor(
                      id,
                      'text'
                    )} text-xs tracking-wide py-1 px-2 rounded-full absolute top-2 right-2`}
                  >
                    {maintainer.role}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-gray-800 dark:text-gray-300 mt-2 mb-1">
                    {maintainer.name}
                  </div>
                  <div className="text-gray-400 mb-2 pb-4">
                    {maintainer.designation}
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col justify-between sm:mx-16 md:mx-1 md:space-y-5 items-center mt-5 md:mt-0">
                {generateLinksData(maintainer).map((linkData, idx) => (
                  <div
                    key={idx}
                    className={`${getDarkBgColor(
                      id,
                      'hover'
                    )} py-1 px-4 rounded-md transition-all duration-300 ease-in-out`}
                  >
                    <Link
                      href={linkData.link}
                      aria-label={`url of ${linkData.link}`}
                      className="flex flex-col items-center justify-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="pb-1 text-2xl">
                        {iconsComponents[linkData.icon]}
                      </div>
                      <span className={`text-sm`}>{linkData.text}</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="contributors-our-team grid gap-4 mt-8">
        {contributorsWithoutMaintainers
          .slice(0, displayedContributors)
          .map((contributor) => (
            <div
              key={contributor.id}
              className="bg-gray-100 rounded-3xl p-4 border border-dashed border-violet-500 dark:border-[#BDBDBD40] shadow-lg dark:bg-[#293242] dark:text-gray-300 dark:shadow-sm flex flex-col hover:scale-105 transition-transform duration-300 cursor-pointer m-1"
            >
              <div className="bg-[#714EFF] bg-opacity-5 dark:bg-[#9F87FF] dark:bg-opacity-10 rounded-xl">
                <div className="flex justify-center image-wrapper pt-4">
                  <Image
                    src={contributor.avatar_url}
                    alt={contributor.login}
                    width={110}
                    height={110}
                    className="rounded-full mb-4 border-2 border-violet-500 dark:border-violet-400 dark:border-opacity-50 transition-transform duration-300 hover:scale-105 hover:border-dotted m-2"
                  />
                  <div className="bg-[#714EFF] bg-opacity-10 text-[#714EFF] dark:text-[#9F87FF] dark:bg-[#9F87FF] dark:bg-opacity-20 text-xs tracking-wide py-1 px-2 rounded-full absolute top-2 right-2 border border-[#714EFF] border-opacity-20 dark:border-none">
                    Developer
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-gray-800 dark:text-violet-400 mt-2 mb-1">
                    {contributor.name}
                  </div>
                  <div className="text-gray-400 mb-2 pb-4">Web Developer</div>
                </div>
              </div>
              <div className="flex justify-between mx-6 items-center mt-4">
                <div className="hover:bg-[#9F87FF1A] hover:text-gray-600 dark:hover:text-violet-300 py-1 px-4 ml-0 rounded-md transition-all duration-300 ease-in-out">
                  <Link
                    href={`https://github.com/rupali-codes/LinksHub/commits?author=${contributor.login}`}
                    aria-label={`Commit History of ${contributor.login} in LinksHub`}
                    className="flex flex-col items-center justify-center"
                    {...linkProps}
                  >
                    <div className="pb-1 text-2xl">
                      {contributor.contributions}
                    </div>
                    <span className="text-sm">Contributions</span>
                  </Link>
                </div>
                <div className="mt-1 hover:bg-[#9F87FF1A] hover:text-gray-600 dark:hover:text-violet-300 py-1 px-4 mx-2 rounded-md transition-all duration-300 ease-in-out text-sm">
                  <Link
                    href={`https://github.com/${contributor.login}`}
                    aria-label={`GitHub Profile of ${contributor.login}`}
                    className="flex flex-col items-center justify-center"
                    {...linkProps}
                  >
                    <div className="pb-2">
                      <FaGithub className="text-2xl" />{' '}
                    </div>
                    GitHub
                  </Link>
                </div>
                {contributor.twitter_username && (
                  <div className="mt-1 hover:bg-[#9F87FF1A] hover:text-gray-600 dark:hover:text-violet-300 py-1 px-4 mr-2 rounded-md transition-all duration-300 ease-in-out text-sm">
                    <Link
                      href={`https://twitter.com/${contributor.twitter_username}`}
                      aria-label={`Twitter Profile of ${contributor.twitter_username}`}
                      className="flex flex-col items-center justify-center"
                      {...linkProps}
                    >
                      <div className="pb-2">
                        <FaXTwitter className="text-2xl" />
                      </div>
                      Twitter
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>
      <div className="bg-white dark:bg-[#293242] flex justify-between flex-col md:flex-row rounded-xl py-6 px-4 my-10">
        <div className="flex space-x-4">
          <div className="pl-2 pr-3">
            <FaTrophy className="text-2xl text-[#FBD449]" />{' '}
          </div>
          <div className="flex flex-col">
            <div className="text-[#293242] dark:text-white text-lg pb-1">
              Join our awesome team!
            </div>
            <div className="text-gray-400 pr-2 md:pr-4">
              Be a contributor and improve LinksHub and help fellow developers.
            </div>
          </div>
        </div>
        <div className="bg-[#714EFF] hover:bg-[#7560ca] rounded-2xl h-14 w-40 px-6 text-white mr-2 whitespace-nowrap mt-6 ml-[56px] md:mt-0 md:ml-0 duration-300 transition-all">
          <Link
            href={'https://github.com/rupali-codes/LinksHub'}
            aria-label="GitHub Link to LinksHub"
            {...linkProps}
          >
            <div className="flex items-center justify-center py-4 text-md">
              Join us now
              <span className="pl-2 text-sm">
                {' '}
                <FaArrowRight />
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center mb-8">
        <button
          className="bg-[#EBE5FF] dark:bg-[#293242] hover:bg-[#d0c8eb] dark:hover:bg-[#384355] text-[#714EFF] dark:text-gray-300 w-36 py-4 px-6 rounded-xl text-center cursor-pointer duration-300 transition-all"
          onClick={() => setDisplayedContributors(displayedContributors + 9)}
        >
          See More
        </button>
      </div>
    </div>
  )
}

export default ContributorsPage
