import React, { useEffect, useState } from 'react'
import s from './BurgerBuilder.module.css'
import Burger from './Burger/Burger'
import BuildControls from './BuildControls/BuildControls'
import { INGREDIENTS } from '../../data/burgerData'

const getInitialIngredients = available => available.reduce((ig, key) => ({ ...ig, [key.type]: 0}), {})

const BurgerBuilder = ({ availableIngredients = INGREDIENTS }) => {
  const [ingredients, setIngredients] = useState(getInitialIngredients(availableIngredients))
  const [totalPrice, setTotalPrice] = useState(12)
  const [purchasable, setPurchasable] = useState(false)

  useEffect(() => {
    updatePurchasable()
  }, [ingredients])

  const updatePurchasable = () => {
    const sum = Object.keys(ingredients)
      .map(igKey => ingredients[igKey])
      .reduce((sum, el) => sum + el, 0)

    setPurchasable(sum > 0)
  }

  const addIngredientHandler = type => {
    setIngredients({
      ...ingredients,
      [type]: ingredients[type] + 1,
    })
    setTotalPrice(totalPrice + INGREDIENTS.find(ig => ig.type === type).price)
  }

  const removeIngredientHandler = type => {
    if (ingredients[type] <= 0) return

    setIngredients({
      ...ingredients,
      [type]: ingredients[type] - 1,
    })
    setTotalPrice(totalPrice - INGREDIENTS.find(ig => ig.type === type).price)
  }

  let disabledInfo = { ...ingredients }
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0
  }

  return (
    <div className={s.burgerBuilder}>
      <Burger ingredients={ingredients} />
      <BuildControls
        price={totalPrice}
        disabledInfo={disabledInfo}
        purchasable={purchasable}
        handleAdd={addIngredientHandler}
        handleRemove={removeIngredientHandler}
      />
    </div>
  )
}

export default BurgerBuilder
