import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Logo from 'components/logo/logo'
import TypewriterComponent from 'typewriter-effect'
import { sidebarData } from '../database/data'
import Link from 'next/link'

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);


  //storing sub categories names for using in typewriter effect
  const subCategoriesNames: string[] = []
  sidebarData.forEach((c) => {
    c.subcategory.forEach((a) => {
      subCategoriesNames.push(a.name.toUpperCase())
    })
  })
  const subCategoriesUrl: string[] = []
  sidebarData.forEach((c) => {
    c.subcategory.forEach((a) => {
      subCategoriesUrl.push(c.category+a.url)
    })
  })
  useEffect(() => {
    const typewriterInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % subCategoriesNames.length);
    }, 4000); // Adjust the interval as needed

    return () => clearInterval(typewriterInterval);
  }, []);
  return (
    <>
      <Head>
        <title>LinksHub</title>
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

        <link rel="icon" href="/icon.png" className="rounded-full" />
      </Head>
      <section data-custom='restrict-click-outside' className="flex min-h-[calc(100vh-165px)] flex-col">
        <div className=" m-auto flex flex-col  items-start gap-2">
          <div className="m-auto md:text-7xl text-5xl gap-2 flex items-center justify-center">
            <Logo />
            <span>👾</span>
          </div>
          <div className="flex flex-col mt-6 justify-center items-start w-96 max-md:w-64">
            <p className="text-md">
              {' '}
              LinksHub aims to provide developers with access to a wide range of
              free resources and tools that they can use in their work. These
              resources include links to free software, libraries, frameworks,
              and other tools that can be used to build and deploy applications
              and websites.
            </p>
            <br />
            <p className="text-md">Navigate through menu for</p>
            <Link href={subCategoriesUrl[currentIndex]}>
            <TypewriterComponent
              options={{
                strings: subCategoriesNames[currentIndex],
                wrapperClassName:
                  'text-md text-violet-600 dark:text-violet-400',
                cursorClassName: 'text-md text-violet-600 dark:text-violet-400',
                autoStart: true,
              }}
            />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
