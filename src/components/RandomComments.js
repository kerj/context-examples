import React, { useState, useEffect, useContext } from 'react'
import { GlobalSpinerActionsContext } from '../context/GlobalSpinnerContext';

export const RandomComments = () => {
  const [comments, setComments] = useState([]);
  const setIsLoading = useContext(GlobalSpinerActionsContext)

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const result = await fetch('https://jsonplaceholder.typicode.com/comments')
      const data = await result.json()
      setComments(data);
      setIsLoading(false);
    })()
  }, [setIsLoading])

  return (
    <>
      {comments.map((c) => {
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
