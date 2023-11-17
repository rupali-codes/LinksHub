import React from 'react'
import { SVGProps } from 'react'
const ArrowIcon = ({ ...rest }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-0 group-hover:opacity-100 duration-300 w-8"
    >
      <path
        d="M14.4299 5.92993L20.4999 11.9999L14.4299 18.0699"
        stroke="white"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.5 12H20.33"
        stroke="white"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default ArrowIcon
