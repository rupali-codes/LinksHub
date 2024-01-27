import React from 'react'

const MySvgIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="50"
      height="28"
      viewBox="0 0 50 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M23.2595 9.68845L24.1578 10.6238C26.0706 12.6156 26.0086 15.7827 24.0192 17.6978L17.2785 24.1872C15.2892 26.1023 12.1259 26.0402 10.2131 24.0485L3.73161 17.2995C1.81881 15.3078 1.88083 12.1407 3.87015 10.2255L10.6109 3.73619C12.6002 1.82107 15.7635 1.88317 17.6763 3.8749L18.4669 4.69815"
        stroke="#714EFF"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M18.535 18.3116L17.6367 17.3762C15.7239 15.3844 15.7859 12.2173 17.7752 10.3022L24.5159 3.81284C26.5052 1.89771 29.6685 1.95982 31.5813 3.95155L38.0628 10.7005C39.9756 12.6922 39.9136 15.8593 37.9243 17.7745L31.1836 24.2638C29.1942 26.1789 26.031 26.1168 24.1181 24.1251L23.3275 23.3019"
        stroke="#B9C0DA"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={'flex items-center'}>
      <MySvgIcon />
      <h1 className={`${className} text-2xl`}>
        <span className="text-theme-secondary dark:theme-primary">
          Links
        </span>
        <span className="text-text-primary dark:gray-text motion-safe:animate-pulse">
          Hub
        </span>
      </h1>
    </div>
  )
}

export default Logo
