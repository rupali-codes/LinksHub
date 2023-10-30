import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, memo, useMemo } from 'react'

import CardsList from 'components/Cards/CardsList'
import { TopBar } from 'components/TopBar/TopBar'
import ComingSoon from 'components/NewIssue/NewIssue'
import { useResults } from 'hooks/ResultsContext'

import { database } from 'database/data'

const MemoizedCardsList = memo(CardsList)

const Search = () => {
  const { setResults } = useResults()

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

  const data = filteredCardsList
  useEffect(() => {
    if (data.length > 0 && data.length !== -1) {
      setResults(data.length)
    } else {
      setResults(0)
    }
  }, [data])

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
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
        <meta property="og:title" content={title} />
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
        <meta property="twitter:title" content={title} />
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
