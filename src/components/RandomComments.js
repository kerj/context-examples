import React, { useState, useEffect } from 'react'
import { useGlobalSpinnerContextActions } from '../context/GlobalSpinnerContext';

export const RandomComments = () => {
  const [comments, setComments] = useState([]);
  // no longer needs useContext here since it now is in GlobalSpinnerContext
  const setIsLoading = useGlobalSpinnerContextActions();

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
