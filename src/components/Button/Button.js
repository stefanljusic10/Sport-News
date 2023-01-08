import React from 'react'

const Button = ({ text, btnClass, method }) => {
  return (
    <button className={btnClass} onClick={method}>
      {text}
    </button>
  )
}

export default Button