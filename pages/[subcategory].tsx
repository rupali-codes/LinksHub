import React from "react";
import Cards from "../components/cards";
import { TopBar } from "../components/TopBar/TopBar";
import { useRouter } from "next/router";
import Head from "next/head";

const SubCategory = () => {
  const router = useRouter();
  const title :any = `LinksHub - ${router.asPath.charAt(1).toUpperCase()}${router.asPath.slice(2)}`;
  return (
    <section>
      <Head>
        <title>{title}</title>
      </Head>
      <TopBar />
      <Cards />
    </section>
  );
};

export default SubCategory;
