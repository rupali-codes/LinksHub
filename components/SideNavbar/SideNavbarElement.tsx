import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { SubCategories } from "../../types";

export const SideNavbarElement = ({ name, url }: SubCategories) => {
  const router = useRouter();
  const { closeNav } = useContext(GlobalContext);

  return (
    <Link
      href={url}
      onClick={closeNav}
      className={`${
        router.asPath === url
          ? "bg-gradient-to-r from-violet-900 to-violet-500 transition-all pl-5 text-gray-200"
          : ""
      } collapse w-full hover:bg-gradient-to-l hover:text-gray-200 from-violet-900 to-violet-500 text-start rounded `}
    >
      <div className="text-sm py-3 uppercase transition-all duration-300 hover:pl-5 dark:border-gray-600">{name}</div>
    </Link>
  );
};
