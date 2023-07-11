import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import useFilterDB from 'hooks/useFilterDB'
import CardsList from 'components/Cards/CardsList'
import ComingSoon from 'components/NewIssue/NewIssue'

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
    content = <ComingSoon />
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="theme-color" content="#202c46" />
      </Head>
      <div className="min-h-[calc(100%-68px)] w-full pt-[85px] pb-4 md:min-h-[calc(100%-76px)] md:px-10 md:pt-10">
        {content}
      </div>
    </>
  )
}

export default SubCategory
