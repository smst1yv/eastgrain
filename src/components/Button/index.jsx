import React from 'react'
import styles from '../../styled/global.module.css'
const Button = ({children,className,...props}) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  )
}

export default Button
