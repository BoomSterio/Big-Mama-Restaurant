import React from 'react'
import s from './BuildControl.module.css'
import Button from '../../../Button/Button'

const BuildControl = ({ label, image, price, add, remove }) => (
  <div className={s.buildControl + ' shadow'}>
    <div>
      <img src={image} alt={'ingr'} />
      <small>{label}</small>
    </div>
    <div className={s.controls}>
      <p>{price}₴</p>
      <Button onClick={remove}><i className="fas fa-minus" /></Button>
      <Button onClick={add}><i className="fas fa-plus" /></Button>
    </div>
  </div>
)
export default BuildControl
