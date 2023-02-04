import { useRouter } from "next/router";
import Head from "next/head";
import Cards from "../components/Cards/Cards";
import TopBar from "../components/TopBar/TopBar";

const SubCategory = () => {
  const router = useRouter();
  const title: any = `LinksHub - ${router.asPath
    .charAt(1)
    .toUpperCase()}${router.asPath.slice(2)}`;
  return (
    <section className="px-4">
      <Head>
        <title>{title}</title>
      </Head>
      <TopBar />
      <Cards />
    </section>
  );
};

export default SubCategory;
