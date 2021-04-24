import React from 'react'
import s from './IngredientsList.module.css'
import Chip from '@material-ui/core/Chip'

const IngredientsList = ({ ingredients }) => {
  if (ingredients == null) return

  const items = Object.keys(ingredients)
    .map(
      (igKey, i) =>
        ingredients[igKey] > 0 &&
          <Chip key={igKey + i} size={'small'} variant={'outlined'} label={`${igKey.toLocaleUpperCase()} X${ingredients[igKey]}`} />)
    .filter(chip => chip !== false)

  return <div className={s.list}>{items}</div>
}

export default IngredientsList
