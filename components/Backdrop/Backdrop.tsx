import { FC, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useTransition } from 'react-transition-state'

export const Backdrop: FC<{
  onClick: (() => void) | undefined
  className?: string | undefined
}> = (props) => {
  const { onClick, className } = props
  const [{ status }, toggle] = useTransition({
    timeout: 500,
    preEnter: true,
  })

  useEffect(() => {
    toggle(true)
  }, [toggle])

  const overlayRoot = document.getElementById('overlay-root')

  if (!overlayRoot) {
    return null
  }

  return createPortal(
    <div data-custom='restrict-click-outside'
      className={`fixed inset-0 z-50 h-full w-full cursor-pointer bg-black/80
         ${className}
         ${status === 'preEnter' || status === 'entering' ? '' : 'opacity-0'}
         ${status === 'entered' ? 'opacity-100' : ''}
         `}
      onClick={onClick}
    ></div>,
    overlayRoot
  )
}
