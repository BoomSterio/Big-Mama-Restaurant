import React from 'react'
import s from './Layout.module.css'

const Layout = ({ children }) => (
  <>
    <div>Header</div>
    <main className={s.content}>{children}</main>
  </>
)

export default Layout
