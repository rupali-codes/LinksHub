import { useRouter } from "next/router";
import { IconContext } from "react-icons";
import { FaGithub, FaSlackHash } from "react-icons/fa";
import { ThemeToggler } from "../ThemeToggler/themeToggler";

export const TopBar = ({ header }: { header?: string }) => {
  const router = useRouter();
  const category = router.asPath.replace("/", "");
  return (
    <div className="xs:overflow-x-hidden mb-4 flex flex-col-reverse items-center md:flex-row md:justify-between md:py-4">
      <div className="my-2 flex items-center place-self-start text-lg dark:text-gray-300 sm:text-3xl">
        <FaSlackHash className="mt-1 mr-2 text-gray-600 dark:text-gray-300" />
        <span className="text-gray-900 dark:text-gray-100 uppercase font-bold">
          {header ?? category}
        </span>
      </div>
      <div className="xs:gap-5 flex items-center justify-center gap-6 place-self-end pt-4 pb-2 md:pt-2">
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
        <ThemeToggler />
      </div>
    </div>
  );
};
