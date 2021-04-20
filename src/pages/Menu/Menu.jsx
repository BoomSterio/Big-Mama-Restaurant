import React from 'react'
import BurgerBuilder from '../../components/BurgerBuilder/BurgerBuilder'
import Modal from '../../components/common/Modal/Modal'

const Menu = () => {
  return (
    <div>
      <Modal show modalClosed={() => {}}>
        <BurgerBuilder />
      </Modal>
    </div>
  )
}

export default Menu
