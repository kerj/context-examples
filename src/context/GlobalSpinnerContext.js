import React, { createContext, useState } from 'react'

export const GlobalSpinnerContext = createContext();

export const GlobalSpinnerContextProvider = props => {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <GlobalSpinnerContext.Provider value={{isLoading, setIsLoading}}>
      {props.children}
    </GlobalSpinnerContext.Provider>
  )
}
 

