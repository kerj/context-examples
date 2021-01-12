import React, { createContext, useState, useMemo } from 'react'

export const GlobalSpinnerContext = createContext();

export const GlobalSpinnerContextProvider = props => {
  const [isLoading, setIsLoading] = useState(false)

  const context = useMemo(() => ({
    isLoading,
    setIsLoading,
  }), [isLoading])
  return (
    <GlobalSpinnerContext.Provider value={context}>
      {props.children}
    </GlobalSpinnerContext.Provider>
  )
}
 

