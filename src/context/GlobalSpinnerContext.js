import React, { createContext, useState, useContext } from 'react'

const GlobalSpinnerContext = createContext();
const GlobalSpinerActionsContext = createContext();

const contextFactory = (name, context) => {
  return () => {
    const ctx = useContext(context);
    if (ctx === undefined) {
      throw new Error(`use${name}Context must be used within a ${name}ContextProvider.`)
    }
    return ctx
  }
}

export const useGlobalSpinnerContext = contextFactory('GlobalSpinnerContext', GlobalSpinnerContext);
export const useGlobalSpinerActionsContext = contextFactory('GlobalSpinnerContextActions', GlobalSpinerActionsContext);

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


