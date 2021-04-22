import React from 'react'
import { Link } from '@reach/router'
import s from './NavLink.module.css'

const NavLink = (props) => (
  <Link
    {...props}
    className={s.link}
    getProps={({ isCurrent }) => {
      return {
        style: { color: isCurrent ? '#d15700' : 'black'},
      }
    }}
  />
)

export default NavLink
