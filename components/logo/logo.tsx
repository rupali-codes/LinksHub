import React from 'react'

const Logo = ({ className }: { className?: string }) => {
  return (
    <h1 className={`font-semibold  ${className}`}>
      <span className="border-b-4 border-primary-60 text-secondary-100 dark:text-light-primary">
        Links
      </span>
      <span className="text-primary-80 dark:text-primary-60 motion-safe:animate-pulse">
        Hub
      </span>
    </h1>
  )
}

export default Logo
