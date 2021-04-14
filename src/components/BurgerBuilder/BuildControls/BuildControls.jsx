import React from 'react'
import s from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'
import {INGREDIENTS} from '../../../data/burgerData'

const BuildControls = ({handleAdd, handleRemove}) => {
  return (
    <div className={s.buildControls}>
      {INGREDIENTS.map(c =>
        <BuildControl key={c.type} {...c} add={() => handleAdd(c.type)} remove={() => handleRemove(c.type)}/>)}
    </div>
  )
}

export default BuildControls
