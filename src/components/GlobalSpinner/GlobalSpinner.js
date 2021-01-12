import React from 'react'
import { useGlobalSpinnerContext } from '../../context/GlobalSpinnerContext'
import './globalSpinner.css'

export const GlobalSpinner = () => {
  // no longer needs useContext here since it now is in GlobalSpinnerContext
  const {isLoading} = useGlobalSpinnerContext();
  return isLoading ? (
    <div className="overlay">
      <p>Loading...</p>
    </div>
  ) : null
}
