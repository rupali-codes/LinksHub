import React from 'react'
import { TopBar } from 'components/TopBar/TopBar'
import Head from 'next/head'
import useFilterDB from 'hooks/useFilterDB'
import CardsList from 'components/Cards/CardsList'
import ComingSoon from 'components/NewIssue/NewIssue'
import { sidebarData } from 'database/data'
import { GetStaticProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { usePagination } from 'hooks/usePagination'
import Pagination from 'components/Pagination/Pagination'

interface PageProps {
  category: string
  subcategory: string
}

interface Params extends ParsedUrlQuery, PageProps {}

const SubCategory: NextPage<PageProps> = ({ subcategory }) => {
  const { filterDB, pageCategory } = useFilterDB(subcategory[0])
  const title = `LinksHub - ${
    pageCategory[0].toUpperCase() + pageCategory.slice(1)
  }`
  const { totalPages, currentPage, startIndex, endIndex, handlePageChange } =
    usePagination(filterDB.length ? filterDB[0].length : 0)
  let content: JSX.Element[] | JSX.Element
  let filterData

  if (filterDB && filterDB.length > 0) {
    filterData = filterDB[0].slice(startIndex, endIndex)
    content = <CardsList cards={filterData} />
  } else {
    content = <ComingSoon />
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content="LinksHub" />
        <meta
          name="description"
          content="LinksHub is the ultimate hub of ready-to-use tech resources. Discover free tools and libraries to streamline your development process and build better projects."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="LinksHub, developers, free resources, tools, software, libraries, frameworks, applications, websites"
        />
        <meta name="author" content="Rupali Haldiya" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />

        {/* Open Graph */}
        <meta property="og:url" content="https://linkshub.dev" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="LinksHub: A hub of ready-to-use tech resources"
        />
        <meta
          property="og:description"
          content="LinksHub aims to provide developers with access to a wide range of free resources and tools that they can use in their work."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dhnkuonev/image/upload/v1683805184/linkshub_gcahgs.png"
        />
        <meta property="og:site_name" content="LinksHub" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://linkshub.dev" />
        <meta
          property="twitter:title"
          content="LinksHub: A hub of ready-to-use tech resources"
        />
        <meta
          property="twitter:description"
          content="LinksHub aims to provide developers with access to a wide range of free resources and tools that they can use in their work."
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/dhnkuonev/image/upload/v1683805184/linkshub_gcahgs.png"
        />
        <meta name="language" content="English" />
        <meta
          name="twitter:site"
          content="https://twitter.com/linkshubdotdev"
        />
        <meta property="discord:server" content="1064977356198006805" />
        <meta
          property="discord:invite"
          content="https://discord.com/invite/NvK67YnJX5"
        />
      </Head>
      <TopBar className="shadow-black-500/50 fixed top-[76px] z-30 flex w-full -translate-x-4 items-center bg-gray-100 px-4 pt-6 pb-4 shadow-xl dark:bg-gray-900 md:hidden" />
      <div
        data-custom="restrict-click-outside"
        className="relative min-h-[calc(100%-68px)] w-full pt-[85px] pb-4 md:min-h-[calc(100%-76px)] md:px-10 md:pt-10"
      >
        {content}
        <div className="min-w-full h-10 py-5"/>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>
    </>
  )
}

export const getStaticPaths = async () => {
  const paths = sidebarData.flatMap(({ category, subcategory }) =>
    subcategory.map(({ url }) => ({
      params: { category, subcategory: url.replace('/', '').split('/') },
    }))
  )

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<PageProps, Params> = async (
  context
) => {
  const { category, subcategory } = context.params as PageProps

  return {
    props: {
      category,
      subcategory,
    },
  }
}

export default SubCategory
