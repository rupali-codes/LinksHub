import { FC } from "react";
import { IconContext } from "react-icons";
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { useEffect } from "react";

export const SocialMediaIconsList: FC<{ className?: string }> = (props) => {
  const { className } = props;

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://buttons.github.io/buttons.js'
    script.async = true
    script.defer = true
    document.head.appendChild(script)
    return () => {
      document.head.removeChild(script)
    }
  }, [])
  return (
    <ul className={`flex items-center gap-6 ${className}`}>
      <li className="mt-2 mr-2 hidden md:block">
        <Link
          className="github-button"
          href="https://github.com/rupali-codes/LinksHub"
          data-icon="octicon-repo-forked"
          data-size="large"
          data-show-count="true"
          aria-label="Fork rupali-codes/LinksHub on GitHub"
        >
          Fork
        </Link>
      </li>
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
            value={{ className: "shared-class", size: "24" }}
          >
            <FaDiscord className="hover:text-violet-500 transition duration-300 ease-in-out " />
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
            value={{ className: "shared-class", size: "24" }}
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
            value={{ className: "shared-class", size: "24" }}
          >
            <FaTwitter className="hover:text-violet-500 transition duration-300 ease-in-out" />
          </IconContext.Provider>
        </a>
      </li>
    </ul>
  );
};
