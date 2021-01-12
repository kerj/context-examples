import React, { createContext, useState } from 'react'

export const GlobalSpinnerContext = createContext();
export const GlobalSpinerActionsContext = createContext();

export const GlobalSpinnerContextProvider = props => {
  const [isLoading, setIsLoading] = useState(false)


  return (
    <GlobalSpinnerContext.Provider value={isLoading}>
      <GlobalSpinerActionsContext.Provider value={setIsLoading}>
        {props.children}
      </GlobalSpinerActionsContext.Provider>
    </GlobalSpinnerContext.Provider>
  )
}


