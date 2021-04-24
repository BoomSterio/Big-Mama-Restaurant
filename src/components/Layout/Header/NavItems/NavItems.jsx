import React from 'react'
import NavLink from '../../../common/NavLink/NavLink'

const NavItems = () => {
  const handleAnchor = anchorName => document.querySelector(`#${anchorName}`)?.scrollIntoView()

  return (
    <>
      {/*since reach router cant navigate to anchor, I will do it by myself :\ */}
      <NavLink to={'#pizzas'} onClick={() => handleAnchor('pizzas')}>
        Пицца
      </NavLink>
      <NavLink to={'#burgers'} onClick={() => handleAnchor('burgers')}>
        Бургеры
      </NavLink>
      <NavLink to={'#desserts'} onClick={() => handleAnchor('desserts')}>
        Десерты
      </NavLink>
      <NavLink to={'#drinks'} onClick={() => handleAnchor('drinks')}>
        Напитки
      </NavLink>
    </>
  )
}

export default NavItems
