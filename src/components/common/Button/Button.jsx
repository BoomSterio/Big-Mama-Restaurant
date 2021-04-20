import React from 'react'
import s from './Button.module.css'

const Button = ({ type = 'primary', children, ...props }) => (
  <button {...props} className={s[type]}>
    {children}
  </button>
)

export default React.memo(Button)
