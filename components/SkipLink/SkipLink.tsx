import { FC } from 'react'

export const SkipLink: FC = () => (
  <div className="z-40 flex absolute left-1/2 transform -translate-x-1/2">
    <a
      href="#main"
      className="-translate-y-20 focus:transform-none mt-2 flex items-center justify-center gap-2 rounded-2xl border border-dashed border-transparent bg-theme-secondary px-6 py-2 text-center text-light-primary"
    >
      Skip to main content
    </a>
  </div>
)
