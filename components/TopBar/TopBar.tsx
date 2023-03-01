import { useRouter } from "next/router";
import { IconContext } from "react-icons";
import {FaDiscord, FaGithub, FaSlackHash, FaTwitter} from "react-icons/fa";
import { ThemeToggler } from "../ThemeToggler/themeToggler";

export const TopBar = ({ header }: { header?: string }) => {
  const router = useRouter();
  const category = router.asPath.replace("/", "");
  return (
    <div className="sticky z-[1] top-0 dark:bg-[#101623] bg-gray-100 transition-all ease-in duration-300 w-full xs:overflow-x-hidden mb-4 flex flex-col-reverse items-center md:flex-row md:justify-between md:py-4">
      <div className="my-2 lg:pl-20 flex items-center place-self-start text-lg dark:text-gray-300 sm:text-3xl">
        <FaSlackHash className="mt-1 mr-2 text-gray-600 dark:text-gray-300" />
        <span className="text-gray-900 dark:text-gray-100 uppercase font-semmibold ">
          {header ?? category}
        </span>
      </div>
      <div className="xs:gap-5 flex items-center justify-center gap-6 place-self-end pt-4 pb-2 md:pt-2">
          <a
              title="Link to Discord server (External Link)"
              className="dark:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
              href="https://discord.com/invite/NvK67YnJX5"
          >
              <IconContext.Provider
                  value={{ className: "shared-class", size: "28" }}
              >
                  <FaDiscord className="hover:text-violet-500" />
              </IconContext.Provider>
          </a>
          <a
          title="Link to Github project (External Link)"
          className="dark:text-gray-300"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/rupali-codes/LinksHub"
        >
          <IconContext.Provider
            value={{ className: "shared-class", size: "28" }}
          >
              <FaGithub className="hover:text-violet-500" />
          </IconContext.Provider>
        </a>
          <a
          title="Link to Twitter page (External Link)"
          className="dark:text-gray-300"
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/the_linkshub"
        >
          <IconContext.Provider
            value={{ className: "shared-class", size: "28" }}
          >
              <FaTwitter className="hover:text-violet-500" />
          </IconContext.Provider>
        </a>
        <ThemeToggler />
      </div>
    </div>
  );
};
