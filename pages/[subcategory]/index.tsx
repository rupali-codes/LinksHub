import React from 'react'
import { TopBar } from 'components/TopBar/TopBar'
import { useRouter } from 'next/router'
import Head from 'next/head'
import useFilterDB from 'hooks/useFilterDB'
import CardsList from 'components/Cards/CardsList'
// import ComingSoon from 'components/NewIssue/NewIssue'
import ErrorPage from 'components/Errorpage/not-found'

const SubCategory = () => {
  const router = useRouter()
  const title = `LinksHub - ${router.asPath
    .charAt(1)
    .toUpperCase()}${router.asPath.slice(2)}`
  const { filterDB } = useFilterDB()

  let content: JSX.Element[] | JSX.Element

  if (filterDB.length > 0) {
    content = <CardsList cards={filterDB[0]} />
  } else {
    content = <ErrorPage />
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="theme-color" content="#202c46" />
      </Head>
      <TopBar className="shadow-black-500/50 fixed top-[76px] z-30 flex w-full -translate-x-4 items-center bg-gray-100 px-4 pt-6 pb-4 shadow-xl dark:bg-gray-900 md:hidden" />
      <div className="min-h-[calc(100%-68px)] w-full pt-[85px] pb-4 md:min-h-[calc(100%-76px)] md:px-10 md:pt-10">
        {content}
      </div>
    </>
  )
}

export default SubCategory
