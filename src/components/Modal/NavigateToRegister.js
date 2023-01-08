import React, { useContext } from 'react'
import NewsContext from '../../utils/context'

const NavigateToRegister = () => {
    const { setToggleModal } = useContext(NewsContext)
    const navigateToRegister = (e) => {
        e.preventDefault()
        setToggleModal({ login: false, register: true })
      }
  return (
    <button className='btnGoToRegister' onClick={(e) => navigateToRegister(e)}>
        Don't have an account? Register now
    </button>
  )
}

export default NavigateToRegister