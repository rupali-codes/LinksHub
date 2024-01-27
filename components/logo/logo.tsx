import React from 'react'

const Logo = ({ className }: { className?: string }) => {
  return (
    <h1 className={`font-semibold  ${className}`}>
      <span className="border-b-4 border-theme-primary text-text-secondary dark:text-light-primary">
        Links
      </span>
      <span className="text-theme-secondary dark:text-theme-primary motion-safe:animate-pulse">
        Hub
      </span>
    </h1>
  )
}

export default Logo
