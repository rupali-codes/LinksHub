import React from "react";
import Head from "next/head";
import Logo from "components/logo";
import { TopBar } from "components/TopBar/TopBar";
import TypewriterComponent from "typewriter-effect";
import { sidebarData } from "../database/data";
export default function Home() {
  //storing sub categories names for using in typewriter effect
  let subCategoriesNames:string[] = [];
  sidebarData.forEach((c) => {
      c.subcategory.forEach((a) =>{
        subCategoriesNames.push(a.name.toUpperCase());
      });
    })
  return (
    <>
      <Head>
        <title>LinksHub</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" className="rounded-full" />
      </Head>
      <main className="lg:h-[calc(100vh-99px)] h-[calc(100vh-150px)] flex flex-col">
        <TopBar header="Home" />
        <article className=" m-auto flex flex-col  items-start gap-2">
            <article className="m-auto md:text-7xl text-5xl gap-2 flex items-center justify-center">
              <Logo />
              <span>👾</span> 

            </div>
            <div className=" flex flex-col mt-6 justify-center items-start">
            <p className="text-xl  ">Navigate through menu for</p>
            <p className='text-xl text-violet-500'><TypewriterComponent  
                  options={{
                    strings: subCategoriesNames,
                    autoStart: true,
                    loop: true,
                  }}
                /></p>
            </div>
        </div>
      </main>
    </>
  );
}
