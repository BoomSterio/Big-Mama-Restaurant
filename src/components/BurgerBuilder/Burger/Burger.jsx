import React, { useMemo } from 'react'
import s from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import { burgerIngredientsEnum } from '../../../types/types'

const Burger = ({ ingredients }) => {
  const { BREAD_BOTTOM, BREAD_TOP } = burgerIngredientsEnum

  let filling = useMemo(
    () =>
      Object.keys(ingredients)
        .map(igKey => [...Array(ingredients[igKey])].map((_, index) => <BurgerIngredient key={igKey + index} type={igKey} />))
        .reduce((arr, el) => arr.concat(el)),
    [ingredients]
  )

  if (filling.length === 0) {
    filling = <p>Add some ingredients!</p>
  }

  return (
    <div className={s.burger}>
      <BurgerIngredient type={BREAD_TOP} />
      {filling}
      <BurgerIngredient type={BREAD_BOTTOM} />
    </div>
  )
}

export default Burger
