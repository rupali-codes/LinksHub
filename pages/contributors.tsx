import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { GetStaticProps } from 'next'
// import { useTheme } from 'next-themes'
import {
  maintainersData,
  Maintainers,
  dummyContributors,
  Contributor,
} from '../data/maintainersData'
// import { useState } from 'react'
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
  // const { resolvedTheme } = useTheme()
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

  // const isDarkMode = resolvedTheme === 'dark'

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

  return (
    <div className="mx-4">
      <div>
        <h2 className="text-2xl text-violet-600 dark:text-white tracking-wide pb-2 mt-14 lg:mt-2">
          Our Team
        </h2>
        <h4 className="text-[#A6ABBF]">
          Meet Our Team, Passionate About Open Source and Making LinksHub an
          Open Source Success Story
        </h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
        {Maintainers.map((maintainer, id) => (
          <div
            key={id}
            className="bg-gray-100 rounded-3xl p-4 border border-dashed border-violet-500 dark:border-[#BDBDBD40] shadow-lg dark:bg-[#293242] dark:text-gray-300 dark:shadow-sm flex flex-col hover:scale-105 transition-transform duration-300 cursor-pointer m-1"
          >
            <div
              className={`rounded-xl dark:bg-[${maintainer.themeColor}] dark:bg-[#3D3749]`}
            >
              <div className="flex justify-center image-wrapper pt-4">
                <Image
                  src={maintainer.avatarUrl}
                  alt={`image of ${maintainer.name}`}
                  width={110}
                  height={110}
                  className="rounded-full mb-4 border-2 border-violet-500 dark:border-violet-400 transition-transform duration-300 hover:scale-105 hover:border-dotted m-2"
                />
                <div
                  className={`bg-text-[${maintainer.roleBg}] text-[${maintainer.txtTheme}] text-xs tracking-wide py-1 px-2 rounded-full absolute top-2 right-2`}
                >
                  {maintainer.role}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-violet-600 dark:text-gray-300 mt-2 mb-1">
                  {maintainer.name}
                </div>
                <div className="text-gray-400 mb-2 pb-4">
                  {maintainer.designation}
                </div>
              </div>
            </div>
            <div className="flex justify-between mx-4 items-center mt-4">
              <div
                className={`hover:bg-[${maintainer.roleBg}] py-1 px-4 rounded-md transition-all duration-300 ease-in-out`}
              >
                <Link
                  href={`${maintainer.firstLink}`}
                  aria-label={`url of ${maintainer.firstLink}`}
                  className="flex flex-col items-center justify-center"
                  {...linkProps}
                >
                  <div
                    className={`pb-1 text-2xl hover:text-[${maintainer.txtTheme}]`}
                  >
                    {iconsComponents[maintainer.firstTxt]}
                  </div>
                  <span
                    className={`text-sm hover:text-[${maintainer.txtTheme}]`}
                  >
                    {maintainer.firstTxt}
                  </span>
                </Link>
              </div>
              <div
                className={`mt-1 hover:bg-[${maintainer.themeColor}] py-1 px-4 rounded-md transition-all duration-300 ease-in-out text-sm`}
              >
                <Link
                  href={`${maintainer.secondLink}`}
                  aria-label={`url of ${maintainer.secondLink}`}
                  className="flex flex-col items-center justify-center"
                  {...linkProps}
                >
                  <div
                    className={`pb-2 text-2xl hover:text-[${maintainer.txtTheme}]`}
                  >
                    {iconsComponents[maintainer.secondTxt]}
                  </div>
                  <span className={`hover:text-[${maintainer.txtTheme}]`}>
                    {maintainer.secondTxt}
                  </span>
                </Link>
              </div>
              <div
                className={`mt-1 hover:bg-[${maintainer.themeColor}] py-1 px-4 rounded-md transition-all duration-300 ease-in-out text-sm`}
              >
                <Link
                  href={`${maintainer.thirdLink}`}
                  aria-label={`url of ${maintainer.thirdLink}`}
                  className="flex flex-col items-center justify-center"
                  {...linkProps}
                >
                  <div
                    className={`pb-2 text-2xl hover:text-[${maintainer.txtTheme}]`}
                  >
                    {iconsComponents[maintainer.thirdTxt]}
                  </div>
                  <span className={`hover:text-[${maintainer.txtTheme}]`}>
                    {maintainer.thirdTxt}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="contributors-our-team grid gap-4 mt-8">
        {dummyContributors.map((contributor) => (
          <div
            key={contributor.id}
            className="bg-gray-100 rounded-3xl p-4 border border-dashed border-violet-500 dark:border-[#BDBDBD40] shadow-lg dark:bg-[#293242] dark:text-gray-300 dark:shadow-sm flex flex-col hover:scale-105 transition-transform duration-300 cursor-pointer m-1"
          >
            <div className="bg-gray-200 dark:bg-[#9F87FF1A] rounded-xl">
              <div className="flex justify-center image-wrapper pt-4">
                <Image
                  src={contributor.avatar_url}
                  alt={contributor.login}
                  width={110}
                  height={110}
                  className="rounded-full mb-4 border-2 border-violet-500 dark:border-violet-400 transition-transform duration-300 hover:scale-105 hover:border-dotted m-2"
                />
                <div className="bg-[#9F87FF] text-violet-200 text-xs tracking-wide py-1 px-2 rounded-full absolute top-2 right-2">
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
            <div className="flex justify-between mx-4 items-center mt-4">
              <div className="hover:bg-[#9F87FF1A] hover:text-gray-600 dark:hover:text-violet-300 py-1 px-4 rounded-md transition-all duration-300 ease-in-out">
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
              <div className="mt-1 hover:bg-[#9F87FF1A] hover:text-gray-600 dark:hover:text-violet-300 py-1 px-4 rounded-md transition-all duration-300 ease-in-out text-sm">
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
              <div className="mt-1 hover:bg-[#9F87FF1A] hover:text-gray-600 dark:hover:text-violet-300 py-1 px-4 rounded-md transition-all duration-300 ease-in-out text-sm">
                <Link
                  href={`https://github.com/${contributor.login}`}
                  aria-label={`GitHub Profile of ${contributor.login}`}
                  className="flex flex-col items-center justify-center"
                  {...linkProps}
                >
                  <div className="pb-2">
                    {/* <div className="bg-black rounded-full p-2"> */}
                    <FaXTwitter className="text-2xl" /> {/* </div> */}
                  </div>
                  Twitter
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[#293242] flex justify-between flex-col md:flex-row rounded-xl py-6 px-4 my-10">
        <div className="flex space-x-4">
          <div className="pl-2 pr-3">
            <FaTrophy className="text-2xl text-[#FBD449]" />{' '}
          </div>
          <div className="flex flex-col">
            <div className="text-white text-lg pb-1">
              Join our awesome team!
            </div>
            <div className="text-gray-400 pr-2 md:pr-4">
              Be a contributor and improve LinksHub and help fellow developers.
            </div>
          </div>
        </div>
        <div className="bg-[#714EFF] rounded-2xl h-14 w-40 px-6 text-white mr-2 whitespace-nowrap mt-6 ml-[56px] md:mt-0 md:ml-0">
          <Link href={''} aria-label="" {...linkProps}>
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
        <button className="bg-[#293242] text-gray-300 w-36 py-4 px-6 rounded-xl text-center cursor-pointer">
          See More
        </button>
      </div>
    </div>
  )
}

export default ContributorsPage
