import { useEffect, useState } from 'react'
import { Spinner } from './Spinner'

const LOADER_TIMEOUT = 2000

export const Preloader = ({
  backgroundColor,
  children,
  ...spinnerProps
}: {
  children: JSX.Element
  backgroundColor: string
  color: string
  size: number
}): JSX.Element => {
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    const timerId = setTimeout(() => {
      setShowLoader(false)
    }, LOADER_TIMEOUT)

    return () => {
      clearTimeout(timerId)
    }
  }, [])

  return (
    <>
      {children}
      {showLoader && (
        <div
          className={`loader ${backgroundColor} fixed z-30 top-0 left-0 w-full h-screen flex justify-center items-center`}
        >
          <Spinner {...spinnerProps} />
        </div>
      )}
    </>
  )
}
