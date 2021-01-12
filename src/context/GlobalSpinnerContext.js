import React, { createContext, useState, useContext } from 'react'

const GlobalSpinnerContext = createContext();
const GlobalSpinerActionsContext = createContext();
// check that context is accessed within provides, throw error otherwise
export const useGlobalSpinnerContext = () => {
  const context = useContext(GlobalSpinnerContext);
  if (context === undefined) {
    throw new Error('useGlobalSpinnerContext must called be within GlobalSpinnerContext provider')
  }
  return context;
}

export const useGlobalSpinnerContextActions = () => {
  const context = useContext(GlobalSpinerActionsContext);
  if (context === undefined) {
    throw new Error('useGlobalSpinnerContextActions must called be within GlobalSpinerActionsContext provider')
  }
  return context;
}

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


