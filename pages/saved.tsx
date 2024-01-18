import React from 'react'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link';

const Saved = () => {
  return (
    <>
      <div className="p-2 sm:p-8">
        <h1 className='text-2xl font-medium'>Saved</h1>
        <p className='text-[#A6ABBF]'>Your saved resources, ready when you are.</p>
      </div>
      <div className='flex min-h-[calc(100vh-256px)] justify-center items-center flex-col'>
        <Image src="/SaveRemove.png" width={120} height={120} alt={''} />
        <h1 className='mt-5 text-lg font-medium !text-center'>Your collection is empty! Start saving items for later reference.</h1>
        <Link className='mt-5' href={'/'}><button className='bg-[#714EFF] text-white flex p-3 rounded-lg items-center'>Explore now<FaArrowRight/></button></Link>
      </div>
    </>
  )
}

export default Saved