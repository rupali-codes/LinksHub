import React from 'react';
import { TopBar } from 'components/TopBar/TopBar';
import Head from 'next/head';
import useFilterDB from 'hooks/useFilterDB';
import CardsList from 'components/Cards/CardsList';
import ComingSoon from 'components/NewIssue/NewIssue';
import { sidebarData } from 'database/data';
import { GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { usePagination } from 'hooks/usePagination';
import Pagination from 'components/Pagination/Pagination';

interface PageProps {
  category: string;
  subcategory: string;
}

interface Params extends ParsedUrlQuery, PageProps {}

const SubCategory: NextPage<PageProps> = ({ subcategory }) => {
  const { filterDB, results, pageCategory } = useFilterDB(subcategory[0]);
  const title = `LinksHub - ${pageCategory[0].toUpperCase() + pageCategory.slice(1)}`;

  const { totalPages, currentPage, startIndex, endIndex, handlePageChange } = usePagination(filterDB.length ? filterDB[0].length : 0);

  const filterData = filterDB && filterDB.length > 0 ? filterDB[0].slice(startIndex, endIndex) : null;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content="LinksHub" />
        <meta name="description" content="LinksHub is the ultimate hub of ready-to-use tech resources. Discover free tools and libraries to streamline your development process and build better projects." />
        {/* ... other meta tags ... */}
      </Head>
      <TopBar
        className="shadow-black-500/50 fixed top-[76px] z-30 flex w-full -translate-x-4 items-center bg-gray-100 px-4 pt-6 pb-4 shadow-xl dark:bg-gray-900 md:hidden"
        results={results}
      />
      <div data-custom="restrict-click-outside" className="relative min-h-[calc(100%-68px)] w-full pt-[85px] pb-4 md:min-h-[calc(100%-76px)] md:px-10 md:pt-10">
        {filterData ? <CardsList cards={filterData} /> : <ComingSoon />}
        <Pagination totalPages={totalPages} currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const paths = sidebarData.flatMap(({ category, subcategory }) =>
    subcategory.map(({ url }) => ({
      params: { category, subcategory: url.replace('/', '').split('/') },
    }))
  );

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<PageProps, Params> = async (context) => {
  const { category, subcategory } = context.params as PageProps;

  return {
    props: {
      category,
      subcategory,
    },
  };
};

export default SubCategory;
