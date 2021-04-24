import React from 'react'
import s from './ProductControls.module.css'
import Button from '../../common/Button/Button'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'

const ProductControls = ({price, label, size, description, onSizeChange}) => {
  return (
    <div className={s.controls}>
      <h2>{label}</h2>
      <small>{description}</small>
      <RadioGroup name="size" value={Number(size)} onChange={onSizeChange}>
        <FormControlLabel value={70} control={<Radio color="default" size={'small'}/>} label="Маленький" />
        <FormControlLabel value={80} control={<Radio color="default" size={'small'}/>} label="Средний" />
        <FormControlLabel value={90} control={<Radio color="default" size={'small'}/>} label="Большой" />
      </RadioGroup>
      <Button type={'toCart'}>
        Добавить в корзину за {Math.floor(price * (size + 20) /100)}₴
      </Button>
    </div>
  )
}

export default ProductControls
