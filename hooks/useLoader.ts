import React, { useEffect, useState } from 'react'

const useLoader = () => {
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 2000)
  })

  return { loader }
}

export default useLoader
