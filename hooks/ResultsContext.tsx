import React, { createContext, useContext, useState, ReactNode } from 'react'

interface ResultsContextValue {
  results: number
  setResults: React.Dispatch<React.SetStateAction<number>>
}

const ResultsContext = createContext<ResultsContextValue | null>(null)

export const ResultsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [results, setResults] = useState<number>(-1)

  return (
    <ResultsContext.Provider value={{ results, setResults }}>
      {children}
    </ResultsContext.Provider>
  )
}

export const useResults = () => {
  const context = useContext(ResultsContext)
  if (!context) {
    throw new Error('useResults must be used within a ResultsProvider')
  }
  return context
}
