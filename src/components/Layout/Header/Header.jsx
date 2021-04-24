import React, { useRef, useState } from 'react'
import s from './Header.module.css'
import logo from '../../../assets/images/logo.png'
import logoMini from '../../../assets/images/logo_small.jpg'
import Button from '../../common/Button/Button'
import { Divider, IconButton, useMediaQuery } from '@material-ui/core'
import { MenuRounded } from '@material-ui/icons'
import NavItems from './NavItems/NavItems'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Popover from '@material-ui/core/Popover'
import CompactCart from './CompactCart/CompactCart'

const Header = () => {
  const leftRef = useRef()
  const [showBurger, setShowBurger] = useState(false)
  const [cartAnchor, setCartAnchor] = useState(null)
  const mediaMd = useMediaQuery('(max-width: 767px)')

  window.onscroll = () => handleScroll()

  const handleScroll = () => {
    if (document.documentElement.scrollTop >= 90) {
      leftRef.current.classList.add(s.isLogoOpen)
      return
    }
    leftRef.current.classList.remove(s.isLogoOpen)
  }

  const toggleMenu = () => {
    setShowBurger(showBurger => !showBurger)
  }

  const handleCartHover = event => setCartAnchor(event.currentTarget)

  const handleCartOut = () => setCartAnchor(null)

  return (
    <>
      <div className={s.header}>
        <div className={s.main + ' content-wrapper'}>
          <img src={logo} alt={'logo'} />
          {!mediaMd ? (
            <>
              <div className={s.title}>
                <h1>Как Дома</h1>
                <small>Сеть ресторанов №1 в Украине</small>
              </div>
              <div className={s.block}>
                <p>Доставка в городе</p>
                <h4>Киев</h4>
              </div>
              <div className={s.block}>
                <p>+38-(095)-ххх-ххх</p>
                <p>+38-(066)-ххх-ххх</p>
                <small>Звонок бесплатный</small>
              </div>
            </>
          ) : null}
          <Button type={'secondary'}>Войти</Button>
        </div>
      </div>
      <div className={s.headerCompact}>
        <div className={s.mainCompact + ' content-wrapper'}>
          <div className={s.left} ref={leftRef}>
            <img src={logoMini} alt={'logo'} />
            <div className={s.options}>
              {!mediaMd ? (
                <NavItems />
              ) : (
                <>
                  <IconButton onClick={toggleMenu}>
                    <MenuRounded />
                  </IconButton>
                  <SwipeableDrawer anchor={'top'} open={showBurger} onClose={toggleMenu} onOpen={toggleMenu}>
                    <NavItems />
                  </SwipeableDrawer>
                </>
              )}
            </div>
          </div>
          <div style={{ marginLeft: 'auto' }} onMouseOver={handleCartHover}>
            <Button type={'toCart'}>
              Корзина
              <Divider style={{ backgroundColor: 'lightgrey', opacity: 0.7, margin: '0 10px' }} orientation={'vertical'} />0
            </Button>
          </div>
        </div>
        <CompactCart anchorEl={cartAnchor} handleClose={handleCartOut}/>
      </div>
    </>
  )
}

export default Header
