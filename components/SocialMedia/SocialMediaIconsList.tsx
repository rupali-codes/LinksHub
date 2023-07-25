import { FC } from 'react'
import { IconContext } from 'react-icons'
import { FaDiscord, FaGithub, FaTwitter } from 'react-icons/fa'
import { GitHubForkButton } from 'components/ForkButton/GitHubForkButton'
import { GitHubStarButton } from 'components/StarButton/GitHubStarButton'

export const SocialMediaIconsList: FC<{
  className?: string
  showGithubButtons?: boolean
}> = (props) => {
  const { className, showGithubButtons } = props

  return (
    <ul className={`flex flex-wrap gap-6 ${className}`}>
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
      <div className="flex items-center gap-6">
        <li>
          <a
            title="Link to Discord server (External Link)"
            className="dark:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
            href="https://discord.com/invite/NvK67YnJX5"
            aria-label="Visit us on Discord"
          >
            <IconContext.Provider
              value={{ className: 'shared-class', size: '24' }}
            >
              <FaDiscord className="hover:text-violet-500 transition duration-300 ease-in-out" />
            </IconContext.Provider>
          </a>
        </li>
        <li>
          <a
            title="Link to Github project (External Link)"
            className="dark:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/rupali-codes/LinksHub"
            aria-label="Visit us on Github"
          >
            <IconContext.Provider
              value={{ className: 'shared-class', size: '24' }}
            >
              <FaGithub className="hover:text-violet-500 transition duration-300 ease-in-out" />
            </IconContext.Provider>
          </a>
        </li>
        <li>
          <a
            title="Link to Twitter page (External Link)"
            className="dark:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/linkshubdotdev"
            aria-label="Visit us on Twitter"
          >
            <IconContext.Provider
              value={{ className: 'shared-class', size: '24' }}
            >
              <FaTwitter className="hover:text-violet-500 transition duration-300 ease-in-out" />
            </IconContext.Provider>
          </a>
        </li>
      </div>
      {showGithubButtons && (
        <div className="flex">
          <li className="mr-4 sm:block">
            <GitHubForkButton repo="rupali-codes/LinksHub" />
          </li>
          <li className="mr-2 sm:block">
            <GitHubStarButton repo="rupali-codes/LinksHub" />
          </li>
        </div>
      )}
    </ul>
  )
}
