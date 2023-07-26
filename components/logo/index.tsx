import React from 'react'

const Logo = ({ className }: { className?: string }) => {
  return (
    <h1 className={`font-bold  ${className}`}>
      <span className="border-b-4 border-[--primary-80] text-[--primary-80] dark:text-[--secondary-20]">
        Links
      </span>
      <span className="text-[--primary-80] dark:text-[--primary-60] motion-safe:animate-pulse">
        Hub
      </span>
    </h1>
  )
}

export default Logo
