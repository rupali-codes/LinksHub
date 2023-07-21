import { useEffect, useState } from 'react'
import { IData } from 'types'

// Source: https://dev.to/oussel/how-to-use-conditional-rendering-with-animation-in-react-1k20
const useDelayUnmount = (isMounted: boolean | IData | null, delay: number) => {
  const [showElement, setShowElement] = useState<boolean>(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined = undefined

    if (isMounted && !showElement) {
      setShowElement(true)
    } else if (!isMounted && showElement) {
      timeout = setTimeout(() => {
        setShowElement(false)
      }, delay)
    }

    return () => clearTimeout(timeout)
  }, [isMounted, delay, showElement])

  return showElement
}

export default useDelayUnmount
