import React from 'react'
import s from './BurgerIngredient.module.css'
import PropTypes from 'prop-types'
import { burgerIngredientsEnum } from '../../../../types/types'

const BurgerIngredient = ({ type }) => {
  let ingredient

  if (type === burgerIngredientsEnum.BREAD_TOP) {
    ingredient = (
      <div className={s.breadTop}>
        <div className={s.seeds1}/>
        <div className={s.seeds2}/>
      </div>
    )
  } else {
    ingredient = <div className={s[type]}/>
  }

  return ingredient
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
}

export default BurgerIngredient
