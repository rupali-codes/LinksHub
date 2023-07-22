import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, memo, useMemo } from 'react'

import CardsList from 'components/Cards/CardsList'
import { TopBar } from 'components/TopBar/TopBar'
import ComingSoon from 'components/NewIssue/NewIssue'

import { database } from 'database/data'

const MemoizedCardsList = memo(CardsList)

const Search = () => {
  const router = useRouter()
  const title = `LinksHub - ${router.asPath
    .charAt(1)
    .toUpperCase()}${router.asPath.slice(2)}`

  const query = router.query.query
  const filteredCardsList = useMemo(
    () => getFilteredCardsList(query as string),
    [query]
  )

  useEffect(() => {
    if (!query || query === '') router.replace('/')
  }, [query, router])

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="theme-color" content="#202c46" />
      </Head>
      <TopBar className="shadow-black-500/50 fixed top-[76px] z-30 flex w-full -translate-x-4 items-center bg-gray-100 px-4 pt-6 pb-4 shadow-xl dark:bg-gray-900 md:hidden" />
      <div className="min-h-[calc(100%-68px)] w-full pt-[85px] pb-4 md:min-h-[calc(100%-76px)] md:px-10 md:pt-10">
        {filteredCardsList.length > 0 ? (
          <MemoizedCardsList cards={filteredCardsList} />
        ) : (
          <ComingSoon />
        )}
      </div>
    </>
  )
}

const getFilteredCardsList = (query: string) =>
  database
    .map((c) =>
      c.filter((r) => r.name.toLowerCase().includes(query?.toLowerCase()))
    )
    .flat()

export default Search
