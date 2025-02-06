'use client'

import { SetStateAction, useEffect, useRef, useCallback } from 'react'
import { IData } from 'types'

export const useOnClickOutside = (
  onClick: React.Dispatch<SetStateAction<IData | null>>
): { popupRef: React.RefObject<HTMLDivElement> } => {
  const popupRef = useRef<HTMLDivElement | null>(null)

  const handleClickOutside = (e: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
      onClick(null)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [onClick])

  return { popupRef }
}
