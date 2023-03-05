import React from "react";
import Cards from "components/cards";
import { TopBar } from "components/TopBar/TopBar";
import { useRouter } from "next/router";
import Head from "next/head";

const SubCategory = () => {
  const router = useRouter();
  const title: string = `LinksHub - ${router.asPath
    .charAt(1)
    .toUpperCase()}${router.asPath.slice(2)}`;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <TopBar className="shadow-black-500/50 fixed top-[76px] z-30 flex w-full -translate-x-4 items-center bg-gray-100 px-4 pt-6 pb-4 shadow-xl dark:bg-gray-900 md:hidden" />
      <Cards />
    </>
  );
};

export default SubCategory;
