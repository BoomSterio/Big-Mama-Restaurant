import React from 'react'
import s from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'
import { INGREDIENTS } from '../../../data/burger-data'
import Button from '../../common/Button/Button'

const BuildControls = ({ price, disabledInfo, purchasable, handleAdd, handleRemove }) => {
  return (
    <div className={s.buildControls}>
      <h3>Создай свой бургер</h3>
      <div className={s.list}>
        <div className={s.ingredients}>
          {INGREDIENTS.map(c => (
            <BuildControl
              key={c.type}
              {...c}
              disabled={disabledInfo[c.type]}
              add={() => handleAdd(c.type)}
              remove={() => handleRemove(c.type)}
            />
          ))}
        </div>
      </div>
      <Button type={'toCart'} disabled={!purchasable}>
        Добавить в корзину за {price}₴
      </Button>
    </div>
  )
}

export default BuildControls
