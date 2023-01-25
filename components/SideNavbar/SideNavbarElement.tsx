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
          ? "bg-purple-50 text-primary transition-all pl-5"
          : ""
      } collapse py-3 w-full text-start border-b border-gray-300 hover:bg-purple-100 hover:pl-5 hover:text-primary transition-all duration-300 rounded dark:border-gray-600`}
    >
      <div className="text-md font-medium uppercase">{name}</div>
    </Link>
  );
};
