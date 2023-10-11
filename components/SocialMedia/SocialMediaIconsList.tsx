import { FC } from 'react'
import { IconContext } from 'react-icons'
import { FaDiscord, FaGithub, FaXTwitter } from 'react-icons/fa6'
import { GitHubForkButton } from 'components/ForkButton/GitHubForkButton'
import { GitHubStarButton } from 'components/StarButton/GitHubStarButton'

export const SocialMediaIconsList: FC<{
  className?: string
  showGithubButtons?: boolean
  sidebar?: boolean
}> = (props) => {
  const { className, showGithubButtons } = props

  return (
    <ul
      className={`flex ${
        props.sidebar ? 'flex-col' : ''
      } flex-wrap gap-3 justify-center ${className}`}
    >
      {!showGithubButtons && (
        <>
          <li className="pt-6 hidden md:block">
            <GitHubForkButton repo="rupali-codes/LinksHub" />
          </li>
          <li className="mr-2 pt-6 hidden md:block">
            <GitHubStarButton repo="rupali-codes/LinksHub" />
          </li>
        </>
      )}
      <ol className="flex items-center gap-6">
        <li>
          <a
            title="Discord"
            className="dark:text-light-primary text-text-secondary"
            target="_blank"
            rel="noopener noreferrer"
            href="https://discord.com/invite/NvK67YnJX5"
            aria-label="Visit us on Discord"
          >
            <IconContext.Provider
              value={{ className: 'shared-class', size: '24' }}
            >
              <FaDiscord className="hover:text-theme-primary transition duration-300 ease-in-out" />
            </IconContext.Provider>
          </a>
        </li>
        <li>
          <a
            title="Github"
            className="dark:text-light-primary text-text-secondary"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/rupali-codes/LinksHub"
            aria-label="Visit us on Github"
          >
            <IconContext.Provider
              value={{ className: 'shared-class', size: '24' }}
            >
              <FaGithub className="hover:text-theme-primary transition duration-300 ease-in-out" />
            </IconContext.Provider>
          </a>
        </li>
        <li>
          <a
            title="X (Twitter)"
            className="dark:text-light-primary text-text-secondary"
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/linkshubdotdev"
            aria-label="Visit us on X (Twitter)"
          >
            <IconContext.Provider
              value={{ className: 'shared-class', size: '20' }}
            >
              <FaXTwitter className="hover:text-theme-primary transition duration-300 ease-in-out" />
            </IconContext.Provider>
          </a>
        </li>
      </ol>

      {showGithubButtons && (
        <ol className="flex">
          <li className="mr-4 sm:block">
            <GitHubForkButton repo="rupali-codes/LinksHub" />
          </li>
          <li className="mr-2 sm:block">
            <GitHubStarButton repo="rupali-codes/LinksHub" />
          </li>
        </ol>
      )}
    </ul>
  )
}
