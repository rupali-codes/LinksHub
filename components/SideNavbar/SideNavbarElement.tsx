import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { SubCategories } from "../../types";

export const SideNavbarElement = ({ name, url }: SubCategories) => {
  const router = useRouter();

  return (
    <Link
      href={url}
      className={`${
        router.asPath === url
          ? "bg-gradient-to-r from-violet-900 to-violet-500 transition-all pl-5 text-gray-200"
          : ""
      } collapse py-3 w-full hover:bg-gradient-to-l from-violet-900 to-violet-500 text-start border-b hover:pl-5 transition-all duration-300 rounded dark:border-gray-600`}
    >
      <div className="text-md font-medium uppercase">{name}</div>
    </Link>
  );
};
