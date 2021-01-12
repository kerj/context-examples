import React from 'react'
import { useGlobalSpinnerContext } from '../context/GlobalSpinnerContext';

export const RandomComments = () => {
  const { data } = useGlobalSpinnerContext()

  return (
    <>
      {data.map((c) => {
        const { name, body, id } = c
        return (
          <div key={id}>
            <h3>{name}</h3>
            <p>{body}</p>
          </div>
        )
      })}
    </>
  )
}
