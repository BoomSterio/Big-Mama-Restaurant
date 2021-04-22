import React, { useRef } from 'react'
import s from './Header.module.css'
import logo from '../../../assets/images/logo.png'
import logoMini from '../../../assets/images/logo_small.jpg'
import Button from '../../common/Button/Button'
import NavLink from '../../common/NavLink/NavLink'

const Header = () => {
  const compactRef = useRef()

  window.onscroll = () => handleScroll()

  const handleScroll = () => {
    if(document.documentElement.scrollTop >= 90) {
      compactRef.current.classList.add(s.isLogoOpen)
      return
    }
    compactRef.current.classList.remove(s.isLogoOpen)
  }

  const handleAnchor = (anchorName) => document.querySelector(`#${anchorName}`)?.scrollIntoView()

  return (
    <>
      <div className={s.header}>
        <div className={s.main + ' content-wrapper'}>
          <img src={logo} alt={'logo'} />
          <div className={s.title}>
            <h1>Как Дома</h1>
            <small>Сеть ресторанов №1 в Украине</small>
          </div>
          <div className={s.block}>
            <p>Доставка в городе <h4>Киев</h4></p>
          </div>
          <div className={s.block}>
            <p>+38-(095)-ххх-ххх</p>
            <p>+38-(066)-ххх-ххх</p>
            <small>Звонок бесплатный</small>
          </div>
          <Button type={'secondary'}>Войти</Button>
        </div>
      </div>
      <div className={s.headerCompact}>
        <div className={s.mainCompact + ' content-wrapper'} ref={compactRef}>
          <img src={logoMini} alt={'logo'} />
          <div className={s.options}>
            {/*since reach router cant navigate to anchor, I will do it by myself :\ */}
            <NavLink to={'/#pizzas'} onClick={() => handleAnchor('pizzas')}>Пицца</NavLink>
            <NavLink to={'#burgers'} onClick={() => handleAnchor('burgers')}>Бургеры</NavLink>
            <NavLink to={'#desserts'} onClick={() => handleAnchor('desserts')}>Десерты</NavLink>
            <NavLink to={'#drinks'} onClick={() => handleAnchor('drinks')}>Напитки</NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
