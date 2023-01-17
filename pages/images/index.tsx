import React from 'react'
import { FaSlackHash } from 'react-icons/fa'
import { LinkContainer } from '../../components/LinksConatiners/LinkContainer'
import { data } from '../../database/data'
import { IData } from '../../types'

const Images = () => {
  return (
    <section className='md:mt-0 mt-20 md:p-0 p-5'>
    <div className="flex itmes-center text-white text-3xl my-4 font-bold uppercase">
          <FaSlackHash className="mt-1 text-gray-400" />
          <h2 className="">Images</h2>
        </div>

        <div className="flex flex-col md:flex-row lg:flex-row w-full md:justify-between gap-5 items-center">
          {data.map((d:IData, key:number) => (
            <LinkContainer
              name={d.name}
              description={d.description}
              url={d.url}
              key={key}
            />
          ))}
        </div>
        </section>
  )
}

export default Images