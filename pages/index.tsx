import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Logo from 'assets/icons/svg/logo.svg'
import { RxCaretDown, RxCaretRight } from 'react-icons/rx'
import { IoMdGitBranch, IoIosStar } from 'react-icons/io'
import {
  FaDiscord,
  FaGithub,
  FaXTwitter,
  FaArrowRightLong,
} from 'react-icons/fa6'
import StarIcon from '../assets/icons/svg/starIcon.svg'
import HeartIcon from '../assets/icons/svg/heart.svg'
import Link from 'next/link'
import Button from 'components/Button'
import { sidebarData } from '../database/data'

interface SocialLinkProps {
  href: string
  icon: React.ReactNode
  title: React.ReactNode
  description: React.ReactNode
}

interface RatingForkProps {
  type: 'star' | 'fork'
  count: number
  link: string
  bgColor: string
  iconBgColor: string
  btnBgColor: string
  btnTextColor: string
  btnText: string
}

const SocialLink: React.FC<SocialLinkProps> = ({
  href,
  icon,
  title,
  description,
}) => (
  <div className="md:w-1/3 w-full dark:bg-slate-800 bg-light-white hover:bg-light-silver dark:hover:bg-slate-700 hover:border border-[#BDBDBD14] p-6 mb-4 rounded-lg">
    <Link href={href}>
      <div className="flex items-center dark:text-text-quinary gap-2 mb-3">
        <div>{icon}</div>
        <span className="sm:inline">{title}</span>
      </div>
      <p className="text-sm sm:text-base text-text-quinary sm:h-24 h-fit lg:h-fit overflow-hidden font-sans text-ellipsis line-clamp-4">{description}</p>
    </Link>
  </div>
)

const RatingForkComponent: React.FC<RatingForkProps> = ({
  type,
  count,
  link,
  bgColor,
  iconBgColor,
  btnBgColor,
  btnTextColor,
  btnText,
}) => {
  const containerStyle = { backgroundColor: bgColor }
  const iconStyle = { backgroundColor: iconBgColor }

  return (
    <div
      className={`dark:text-white rounded-lg md:w-[160px] text-3xl p-4 dark:bg-[rgba(255,255,255,0.1)] bg-[rgba(0,0,0,0.05)] w-full`}
      
    >
      {type === 'star' ? (
        <IoIosStar
          className={`rounded-full text-black text-3xl p-1`}
          style={iconStyle} // Add style={iconStyle}
        />
      ) : (
        <IoMdGitBranch
          className={`rounded-full text-white text-3xl p-1`}
          style={iconStyle} // Add style={iconStyle}
        />
      )}
      <div className="text-3xl my-1">
        {count}
        <span className="text-lg m-1">
          {type === 'star' ? 'Stars' : 'Fhorks'}
        </span>
      </div>
      <Link href={link}>
        <button
          className={`text-base p-2 w-32 rounded-lg text-center w-full`}
          style={{ backgroundColor: btnBgColor, color: btnTextColor }}
        >
          {btnText}
        </button>
      </Link>
    </div>
  )
}

export default function Home() {
  const [welcome, setWelcome] = useState(true)
  const [community, setCommunity] = useState(true)
  const [resources, setResources] = useState(true)

  const [starCount, setStarCount] = useState(0)
  const [forkCount, setForkCount] = useState(0)

  useEffect(() => {
    const getStarForkCount = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/rupali-codes/LinksHub`)
        const data = await response.json()
        setStarCount(data.stargazers_count)
        setForkCount(data.forks)
      } catch (error) {
        console.error('Error fetching fork count:', error)
      }
    }

    getStarForkCount()
  }, [starCount, forkCount])

  const handleWelcome = () => {
    setWelcome((prev) => !prev)
  }
  const handleCommunity = () => {
    setCommunity((prev) => !prev)
  }
  const handleResources = () => {
    setResources((prev) => !prev)
  }

  return (
    <>
      <Head>
        <title>LinksHub</title>
        <meta name="title" content="LinksHub" />
        <meta
          name="description"
          content="LinksHub is the ultimate hub of ready-to-use tech resources made for and by the community. Whether you are professional or enthusiast, we have what you need to help you grow."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="LinksHub, developers, free resources, tools, software, libraries, frameworks, applications, websites"
        />
        <meta name="author" content="Rupali Haldiya" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />

        {/* Open Graph */}
        <meta property="og:url" content="https://linkshub.dev" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="LinksHub: A hub of ready-to-use tech resources"
        />
        <meta
          property="og:description"
          content="LinksHub aims to provide people with access to a wide range of free resources and tools that they can use in their work and projects."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dhnkuonev/image/upload/v1683805184/linkshub_gcahgs.png"
        />
        <meta property="og:site_name" content="LinksHub" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://linkshub.dev" />
        <meta
          property="twitter:title"
          content="LinksHub: A hub of ready-to-use tech resources"
        />
        <meta
          property="twitter:description"
          content="LinksHub aims to provide people with access to a wide range of free resources and tools that they can use in their work and projects."
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/dhnkuonev/image/upload/v1683805184/linkshub_gcahgs.png"
        />
        <meta name="language" content="English" />
        <meta
          name="twitter:site"
          content="https://twitter.com/linkshubdotdev"
        />
        <meta property="discord:server" content="1064977356198006805" />
        <meta
          property="discord:invite"
          content="https://discord.com/invite/NvK67YnJX5"
        />

        <link rel="icon" href="/new-icon.png" className="rounded-full" />
      </Head>
      <section
        data-custom="restrict-click-outside"
        className="flex flex-col max-h-[calc(100vh - 165px)] max-w-[calc(100% - 165px)] flex-col sm:m-3 lg:m-8"
      >
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl dark:text-text-tertiary mb-0 mt-6 md:mt-0">
              Welcome!
            </h2>
            <div className="hidden sm:flex" onClick={handleWelcome}>
              {welcome ? <RxCaretDown size={50} /> : <RxCaretRight size={50} />}
            </div>
          </div>
          {welcome && (
            <>
              <p className="text-md text-text-quinary">
                Welcome aboard, we&apos;re excited to have you at LinksHub!
              </p>
              <div
                className={
                  'min-h-52 p-8 rounded-3xl dark:bg-slate-800 bg-light-white mt-4 mb-6 border border-[#BDBDBD14]'
                }
              >
                <div
                  className={
                    'h-full flex flex-col lg:flex-row items-center justify-around'
                  }
                >
                  <div className={'mr-0 lg:mr-8'}>
                    <div className="flex justify-center lg:justify-start">
                      <Logo />
                    </div>
                    <p className={'my-2 text-base text-text-quinary pt-3'}>
                      LinksHub aims to provide people access to a wide
                      range of free resources and tools that they can use to learn and develop their tech skills.
       These resources include links to free
                      software, libraries, frameworks, and other tools that can
                      be used to build and deploy applications, website, and other projects.
                    </p>
                  </div>
                  <div
                    className={
                      'flex sm:flex-row flex-col items-center justify-center gap-10 mt-4 lg:mt-0 w-full '
                    }
                  >
                    <RatingForkComponent
                      type="star"
                      count={starCount}
                      link="https://github.com/rupali-codes/LinksHub"
                      bgColor="#575448"
                      iconBgColor="#FBD449"
                      btnBgColor="#FBD449"
                      btnTextColor="black"
                      btnText="Give a star"
                    />

                    <RatingForkComponent
                      type="fork"
                      count={forkCount}
                      link="https://github.com/rupali-codes/LinksHub"
                      bgColor="#403B56"
                      iconBgColor="#714EFF"
                      btnBgColor="#714EFF"
                      btnTextColor="white"
                      btnText="Contribute now"
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <div>
          <div className="flex items-center justify-between mt-4">
            <div className="text-2xl dark:text-text-tertiary">Community</div>
            <div className="hidden sm:flex" onClick={handleCommunity}>
              {community ? (
                <RxCaretDown size={50} />
              ) : (
                <RxCaretRight size={50} />
              )}
            </div>
          </div>
          {community && (
            <>
              <div className="text-text-quinary">
                Get involved!  Everyone is welcome!
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
                <SocialLink
                  href="https://twitter.com/linkshubdotdev"
                  icon={<FaXTwitter size={30} />}
                  title="Twitter"
                  description="Follow us on X (twitter) to get updates, announcements, and general information."
                />
                <SocialLink
                  href="https://discord.com/invite/NvK67YnJX5"
                  icon={<FaDiscord size={30} />}
                  title="Discord"
                  description="Join our community for updates, ask questions, and share tips."
                />
                <SocialLink
                  href="https://github.com/rupali-codes/LinksHub"
                  icon={<FaGithub size={30} />}
                  title="Github"
                  description="Join us here to report bugs & issues, and suggest features."
                />
              </div>
            </>
          )}
        </div>
        <div>
          <div className="flex items-center justify-between mt-4">
            <div className="text-2xl dark:text-text-tertiary">Resources</div>
            <div className="hidden sm:flex" onClick={handleResources}>
              {resources ? (
                <RxCaretDown size={50} />
              ) : (
                <RxCaretRight size={50} />
              )}
            </div>
          </div>
          <div>
            {resources && (
              <>
                <span className="text-text-quinary">
                  We&apos;ve curated a wealth of resources just for you. Go
                  ahead and explore at your own pace.
                </span>
                <ul className="flex flex-wrap mt-4 gap-5">
                  {resources &&
                    sidebarData.map((el, i) => (
                      <Link
                        key={i}
                        href={`/${el.category}`}
                        className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] lg:w-[calc(33.33%-1rem)] group"
                      >
                        <div className="border-solid border-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 bg-light-white hover:bg-light-silver flex items-center justify-between rounded-xl sm:h-16 h-fit">
                          <div className="p-5 truncate ...">{el.category.toUpperCase()}</div>
                          <div>
                            <FaArrowRightLong className="m-4 hidden group-hover:block" />
                          </div>
                        </div>
                      </Link>
                    ))}
                </ul>
              </>
            )}
          </div>
        </div>
        <div className="mt-10 mb-6 md:mb-0">
          <div className="dark:bg-slate-800 bg-light-white rounded-lg border border-[#BDBDBD14] sm:flex-row items-center justify-between md:p-7 md:pr-12 p-5">
            <div className="md:flex items-center gap-4">
              <div className="text-yellow-400 ml-4 lg:ml-0">
                <StarIcon />
              </div>
              <h1 className="text-xl dark:text-text-tertiary">
                More awesome resources are coming soon!
              </h1>
            </div>
            <div className="lg:w-full flex flex-col lg:flex-row items-center justify-between mt-6 sm:mt-0">
              <div className="text-text-quinary pt-1 md:pl-4 lg:mx-8 text-md">
                Discover valuable resources without extensive research. We have
                diligently curated a wealth of materials to make your journey
                smoother. Show us some love and support our efforts in
                simplifying your path to success.
              </div>
              <Button
                label="Sponsor"
                icon={<HeartIcon />}
                variant="pale"
                link="https://github.com/sponsors/rupali-codes"
                className="w-full sm:w-auto mt-4 mt-4 lg:mt-0 md:ml-4 md:mr-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
