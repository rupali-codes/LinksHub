import Head from 'next/head'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

import CardsList from 'components/Cards/CardsList'
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
      <div className="min-h-[calc(100%-68px)] w-full pt-[85px] pb-4 md:min-h-[calc(100%-76px)] md:px-10 md:pt-10">
        {content}
      </div>
    </>
  )
}

export default Search
