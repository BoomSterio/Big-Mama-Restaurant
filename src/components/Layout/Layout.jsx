import React from 'react'
import s from './Layout.module.css'
import Header from './Header/Header'

const Layout = ({ children }) => (
  <>
    <Header/>
    <main className={s.content + ' content-wrapper'}>{children}</main>
  </>
)

export default Layout
