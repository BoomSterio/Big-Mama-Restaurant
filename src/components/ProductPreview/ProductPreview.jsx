import React, { useState } from 'react'
import s from './ProductPreview.module.css'
import ProductControls from './ProductControls/ProductControls'

const SMALL = 70
const MEDIUM = 80
const LARGE = 90

const ProductPreview = ({image, label, description, price, additions = [], sizeable = false}) => {
  const [size, setSize] = useState(MEDIUM)

  const onSizeChange = e => setSize(Number(e.target.value))

  return (
    <div className={s.productPreview}>
      <div className={s.product}>
        <img style={{width: `${size}%`}} src={image} alt={'product'}/>
      </div>
      <ProductControls label={label} description={description} price={price} size={size} onSizeChange={onSizeChange}/>
    </div>
  )
}

export default ProductPreview
