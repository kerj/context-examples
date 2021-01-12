import React, { createContext, useState, useContext, useEffect } from 'react'

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
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const result = await fetch('https://jsonplaceholder.typicode.com/comments')
      setData(await result.json());
      setIsLoading(false);
    })()
  }, [setIsLoading])

  return (
    <GlobalSpinnerContext.Provider value={{isLoading, data}}>
      <GlobalSpinerActionsContext.Provider value={setIsLoading}>
        {props.children}
      </GlobalSpinerActionsContext.Provider>
    </GlobalSpinnerContext.Provider>
  )
}


