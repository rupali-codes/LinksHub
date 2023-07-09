import { FC, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useTransition } from 'react-transition-state'

export const Backdrop: FC<{
  onClick: (() => void) | undefined
  className?: string | undefined
}> = (props) => {
  const { onClick, className } = props
  const [{ status }, toggle] = useTransition({
    preEnter: true,
    unmountOnExit: true,
  })

  useEffect(() => {
    toggle(true)
  }, [toggle])

  return createPortal(
    <div
      className={`fixed inset-0 z-50 h-full w-full cursor-pointer bg-black/80
      ${status === 'preEnter' ? '' : 'opacity-0'}
      ${className}`}
      onClick={onClick}
    ></div>,
    document.getElementById('backdrop-root')!
  )
}
