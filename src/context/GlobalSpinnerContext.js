import React, { createContext, useState, useContext } from 'react'

const GlobalSpinnerContext = createContext();
const GlobalSpinerActionsContext = createContext();
// place useContext here to consume context cleaner throughout app, see previous commit for diff
export const useGlobalSpinnerContext = () => useContext(GlobalSpinnerContext);
export const useGlobalSpinnerContextActions = () => useContext(GlobalSpinerActionsContext);
 
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


