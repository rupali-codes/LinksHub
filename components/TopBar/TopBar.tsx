import { useRouter } from "next/router";
import { IconContext } from "react-icons";
import { FaGithub, FaSlackHash } from "react-icons/fa";
import { ThemeToggler } from "../ThemeToggler/themeToggler";

export const TopBar = ({ header }: { header?: string }) => {
  const router = useRouter();
  const category = router.asPath.replace("/", "");
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center text-3xl my-4 dark:text-gray-300">
        <FaSlackHash className="mt-1 mr-2 text-gray-600 dark:text-gray-300" />
        <span className="text-gray-900 dark:text-gray-100 uppercase font-bold">
          {header ?? category}
        </span>
      </div>
      <div className="items-center flex justify-center gap-6 px-10">
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
            <FaGithub />
          </IconContext.Provider>
        </a>
        <ThemeToggler />
      </div>
    </div>
  );
};
