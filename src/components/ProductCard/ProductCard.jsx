import React, { useState } from 'react'
import s from './ProductCard.module.css'
import BurgerBuilder from '../BurgerBuilder/BurgerBuilder'
import Modal from '../common/Modal/Modal'
import Button from '../common/Button/Button'

const BASIC = 'basic'
const PIZZA_BUILDER = 'pizzaBuilder'
const BURGER_BUILDER = 'burgerBuilder'

const ProductCard = ({ type = BASIC, image, label, description, price }) => {
  const [showModal, setShowModal] = useState(false)

  const open = () => setShowModal(true)
  const close = () => setShowModal(false)

  return (
    <>
      <Modal show={showModal} modalClosed={close}>
        {type === BURGER_BUILDER && <BurgerBuilder startPrice={price}/>}
        {type === PIZZA_BUILDER && <p>Pizza Builder!</p>}
        {type === BASIC && <p>Simple Product!</p>}
      </Modal>
      <div className={s.productCard}>
        <img className={s.image} onClick={open} src={image} alt={'product'} />
        <h2 style={{ margin: '8px 0' }}>{label}</h2>
        <small>{description}</small>
        <div className={s.bottom}>
          <h3>от {price}₴</h3>
          <Button onClick={open} type={type !== BASIC ? 'toCart' : 'primary'}>
            {type !== BASIC ? 'Собрать' : <p style={{padding: '6px 10px'}}>Выбрать</p>}
          </Button>
        </div>
      </div>
    </>
  )
}

export default ProductCard
