import { MutableRefObject, useEffect } from 'react'

const useOnClickOutside = (
  ref: MutableRefObject<HTMLUListElement | null>,
  handler: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        event.target &&
        (event.target as HTMLElement)?.closest('[data-custom="restrict-click-outside"]') !== null) {
        return
      }

      if (
        ref.current &&
        !ref.current.classList.contains('copy-to-clipboard-button') &&
        !ref.current.contains(event.target as Node)
      ) {
        handler()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, handler])
}

export default useOnClickOutside
