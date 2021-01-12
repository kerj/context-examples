import React, {useContext} from 'react'
import { GlobalSpinnerContext } from '../../context/GlobalSpinnerContext'
import './globalSpinner.css'

export const GlobalSpinner = () => {
  const isLoading = useContext(GlobalSpinnerContext)
  return isLoading ? (
    <div className="overlay">
      <p>Loading...</p>
    </div>
  ) : null
}
