import React, { useState } from 'react'
import s from './BurgerBuilder.module.css'
import Burger from './Burger/Burger'
import BuildControls from './BuildControls/BuildControls'
import { INGREDIENTS } from '../../data/burgerData'

const BurgerBuilder = () => {
  const [ingredients, setIngredients] = useState({
    bacon: 0,
    cheese: 0,
    salad: 0,
    meat: 0,
  })
  const [totalPrice, setTotalPrice] = useState(12)

  const addIngredientHandler = type => {
    setIngredients({
      ...ingredients,
      [type]: ingredients[type] + 1,
    })
    setTotalPrice(totalPrice + INGREDIENTS.find(ig => ig.type === type).price)
  }

  const removeIngredientHandler = type => {
    if(ingredients[type] === 0) return

    setIngredients({
      ...ingredients,
      [type]: ingredients[type] - 1,
    })
    setTotalPrice(totalPrice - INGREDIENTS.find(ig => ig.type === type).price)
  }

  return (
    <div className={s.burgerBuilder}>
      <Burger ingredients={ingredients} />
      <BuildControls handleAdd={addIngredientHandler} handleRemove={removeIngredientHandler} />
    </div>
  )
}

export default BurgerBuilder
