import Head from 'next/head'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

import CardsList from 'components/Cards/CardsList'
import { TopBar } from 'components/TopBar/TopBar'
import ComingSoon from 'components/NewIssue/NewIssue'

import useFilterSearch from 'hooks/useFilterSearch'

const Search = () => {
  const router = useRouter()
  const title = `LinksHub - ${router.asPath
    .charAt(1)
    .toUpperCase()}${router.asPath.slice(2)}`
  const query = router.query.query
  const { filterSearch } = useFilterSearch()

  useEffect(() => {
    if (!query || query === '') router.replace('/')
  }, [query, router])

  let content: JSX.Element[] | JSX.Element

  const data = filterSearch(query as string)

  if (data.length > 0) {
    content = <CardsList cards={data} />
  } else {
    content = <ComingSoon />
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

export default Search
