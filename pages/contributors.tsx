import { FC, useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { GetStaticProps } from 'next'
import {
  maintainersData,
  Maintainers,
  Contributor,
  MaintainersDataInterface,
} from '../data/maintainersData'
import React from 'react'
import { Icons } from 'components/icons'
import { useInView } from 'react-intersection-observer'
import { Spinner } from 'components/Loader/Spinner'

enum Status {
  LOADING,
  SUCCESS,
  ERROR,
  DONE,
}

const fetchContributors = async (
  pageNumber: number
): Promise<Contributor[]> => {
  const contributorsList: Contributor[] = []
  try {
    const response = await fetch(
      `https://api.github.com/repos/rupali-codes/LinksHub/contributors?page=${pageNumber}&per_page=20`
    )
    if (!response.ok) {
      throw new Error('Failed to fetch contributors data from GitHub API')
    }
    contributorsList.push(...(await response.json()))
  } catch (error) {
    throw new Error('Failed to fetch contributors data from GitHub API')
  }

  // Fetch detailed information for each contributor
  const contributorDetailRequests = contributorsList.map((contributor) => {
    return fetch(`https://api.github.com/users/${contributor.login}`)
  })

  try {
    const contributorDetailResponses = await Promise.all(
      contributorDetailRequests
    )

    const contributorDetails = await Promise.all(
      contributorDetailResponses.map((response) => response.json())
    )

    const updatedContributors = contributorDetails.map((details, index) => {
      return {
        ...contributorsList[index],
        name: details.name ?? contributorsList[index].login,
      }
    })
    return updatedContributors
  } catch (error) {
    throw new Error('Failed to fetch contributor details from GitHub API')
  }
}

export const getStaticProps: GetStaticProps<{
  initialContributors: Contributor[]
}> = async () => {
  try {
    const initialContributors = await fetchContributors(1)
    return { props: { initialContributors } }
  } catch (error) {
    console.error(error)
  }
  return { props: { initialContributors: [] } }
}

const ContributorsPage: FC<{ initialContributors: Contributor[] }> = ({
  initialContributors,
}) => {
  const [contributors, setContributors] = useState(initialContributors)

  const [status, setStatus] = useState(Status.SUCCESS)

  const page = useRef(1)
  const { ref, inView } = useInView()

  useEffect(() => {
    ;(async () => {
      if (!inView || status === Status.DONE) return
      try {
        setStatus(Status.LOADING)
        const contributorsOnNextPage = await fetchContributors(page.current + 1)
        setContributors([...contributors, ...contributorsOnNextPage])
        page.current += 1
        if (contributorsOnNextPage.length === 0) {
          setStatus(Status.DONE)
          return
        }
      } catch (e) {
        console.error(e)
        setStatus(Status.ERROR)
      } finally {
        if (status === Status.LOADING) setStatus(Status.SUCCESS)
      }
    })()
  }, [inView])

  console.log(status)

  const linkProps = {
    target: '_blank',
    rel: 'noopener noreferrer',
  }

  const iconsComponents: { [key: string]: JSX.Element } = {
    GitHub: <Icons.faGithub />,
    Twitter: <Icons.faX />,
    Sponsor: <Icons.faHeart />,
    LinkedIn: <Icons.faLinkedin />,
    Website: <Icons.faStayLinked />,
  }

  const maintainersLogins = useMemo(() => {
    return maintainersData.map((maintainer) => maintainer.login)
  }, [])

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
      4: {
        bg: 'bg-[#ff9933] bg-opacity-5 dark:bg-opacity-10 dark:bg-[#ff9933]',
        text: 'text-[#ff9933]',
        role: 'bg-[#ff9933] bg-opacity-10 dark:bg-[#ff9933] dark:bg-opacity-50 border dark:border-none border-[#ff9933] border-opacity-50',
        hover:
          'hover:bg-[#ff9933] hover:bg-opacity-5 dark:hover:bg-[#ff9933] dark:hover:bg-opacity-20 hover:text-[#E672F9]',
        border: 'dark:border-[#ff9933] dark:border-opacity-20 border-[#ff9933]',
      },
    }

    return themeColor[id][check]
  }

  return (
    <div className="lg:m-8 sm:m-3">
      <div>
        <h2 className="pb-2 mt-14 text-2xl tracking-wide text-gray-600 dark:text-white lg:mt-2">
          Our Team
        </h2>
        <h4 className="text-[#A1A1A9]">
          Meet Our Team, Passionate About Open Source and Making LinksHub an
          Open Source Success Story
        </h4>
      </div>
      <div className="maintainers-our-team grid gap-5 mt-8 sm:grid-cols-1 xl:grid-cols-2">
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
                <div className="image-wrapper flex justify-center pt-4">
                  <Image
                    src={maintainer.avatarUrl}
                    alt={`image of ${maintainer.name}`}
                    width={110}
                    height={110}
                    priority={true}
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
                  <div className="mt-2 mb-1 text-2xl text-gray-800 dark:text-gray-300">
                    {maintainer.name}
                  </div>
                  <div className="pb-4 mb-2 text-gray-400">
                    {maintainer.designation}
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center mt-5 md:flex-col md:mx-1 md:mt-0 md:space-y-5 sm:mx-16">
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
                      className="flex flex-col justify-center items-center"
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
        {contributors.map((contributor) =>
          maintainersLogins.includes(contributor.login) ? null : (
            <div
              key={contributor.id}
              className="bg-gray-100 rounded-3xl p-4 border border-dashed border-violet-500 dark:border-[#BDBDBD40] shadow-lg dark:bg-[#293242] dark:text-gray-300 dark:shadow-sm flex flex-col hover:scale-105 transition-transform duration-300 cursor-pointer m-1"
            >
              <div className="bg-[#714EFF] bg-opacity-5 dark:bg-[#9F87FF] dark:bg-opacity-10 rounded-xl">
                <div className="image-wrapper flex justify-center pt-8 lg:pt-4">
                  <Image
                    src={contributor.avatar_url}
                    alt={contributor.login}
                    width={110}
                    height={110}
                    priority={true}
                    className="m-2 mb-4 rounded-full border-2 border-violet-500 transition-transform duration-300 dark:border-opacity-50 dark:border-violet-400 hover:border-dotted hover:scale-105"
                  />
                  <div className="bg-[#714EFF] bg-opacity-10 text-[#714EFF] dark:text-[#9F87FF] dark:bg-[#9F87FF] dark:bg-opacity-20 text-xs tracking-wide py-1 px-2 rounded-full absolute top-2 right-2 border border-[#714EFF] border-opacity-20 dark:border-none">
                    Developer
                  </div>
                </div>
                <div className="text-center">
                  <div className="mt-2 mb-1 text-2xl text-gray-800 dark:text-violet-400">
                    {contributor.name}
                  </div>
                  <div className="pb-4 mb-2 text-gray-400">Web Developer</div>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4 lg:mx-6">
                <div className="hover:bg-[#9F87FF1A] hover:text-gray-600 dark:hover:text-violet-300 py-1 lg:px-4 ml-0 rounded-md transition-all duration-300 ease-in-out">
                  <Link
                    href={`https://github.com/rupali-codes/LinksHub/commits?author=${contributor.login}`}
                    aria-label={`Commit History of ${contributor.login} in LinksHub`}
                    className="flex flex-col justify-center items-center"
                    {...linkProps}
                  >
                    <div className="pb-1 text-2xl">
                      {contributor.contributions}
                    </div>
                    <span className="text-sm">Contributions</span>
                  </Link>
                </div>
                <div className="mt-1 hover:bg-[#9F87FF1A] hover:text-gray-600 dark:hover:text-violet-300 py-1 lg:px-4 mx-2 rounded-md transition-all duration-300 ease-in-out text-sm">
                  <Link
                    href={`https://github.com/${contributor.login}`}
                    aria-label={`GitHub Profile of ${contributor.login}`}
                    className="flex flex-col justify-center items-center"
                    {...linkProps}
                  >
                    <div className="pb-2">
                      <Icons.faGithub className="text-2xl" />{' '}
                    </div>
                    GitHub
                  </Link>
                </div>
                {contributor.twitter_username && (
                  <div className="mt-1 hover:bg-[#9F87FF1A] hover:text-gray-600 dark:hover:text-violet-300 py-1 lg:px-4 mr-2 rounded-md transition-all duration-300 ease-in-out text-sm">
                    <Link
                      href={`https://twitter.com/${contributor.twitter_username}`}
                      aria-label={`Twitter Profile of ${contributor.twitter_username}`}
                      className="flex flex-col justify-center items-center"
                      {...linkProps}
                    >
                      <div className="pb-2">
                        <Icons.faX className="text-2xl" />
                      </div>
                      Twitter
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )
        )}
      </div>

      {status === Status.ERROR && (
        <div className="font-bol flex justify-center items-center my-12 text-xl text-gray-600 dark:text-violet-300">
          The GitHub API Limit is reached. Please try again later!
        </div>
      )}
      <div className="flex justify-center mt-10" ref={ref}>
        {status === Status.LOADING && <Spinner color="#8b5cf6" size={20} />}
      </div>
      <div className="bg-white dark:bg-[#293242] flex justify-between flex-col md:flex-row rounded-xl py-6 px-4 my-10">
        <div className="flex space-x-4">
          <div className="pr-3 pl-2">
            <Icons.faTrophy className="text-2xl text-[#FBD449]" />{' '}
          </div>
          <div className="flex flex-col">
            <div className="text-[#293242] dark:text-white text-lg pb-1">
              Join our awesome team!
            </div>
            <div className="pr-2 text-gray-400 md:pr-4">
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
            <div className="text-md flex justify-center items-center py-4">
              Join us now
              <span className="pl-2 text-sm">
                {' '}
                <Icons.faArrowRight />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ContributorsPage
