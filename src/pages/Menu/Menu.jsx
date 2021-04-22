import React, { useMemo } from 'react'
import s from './Menu.module.css'
import ProductCard from '../../components/ProductCard/ProductCard'
import { BURGERS, PIZZAS } from '../../data/menu'

const Menu = () => {
  const burgers = useMemo(() => BURGERS.map((b, i) => (
    <ProductCard key={b.label + i} {...b} />
  )), [BURGERS])

  const pizzas = useMemo(() => PIZZAS.map((p, i) => (
    <ProductCard key={p.label + i} {...p} />
  )), [PIZZAS])

  return (
    <div className={s.menu} style={{ width: '100%' }}>
      <div id={'burgers'}/>
      <h2>Бургеры</h2>
      <div className={s.productList}>
        <ProductCard
          type={'burgerBuilder'}
          image={
            'https://media.istockphoto.com/vectors/hamburger-vector-id165748460?k=6&m=165748460&s=612x612&w=0&h=rQkiEFNwBbfD6eHLuJaXVMUfkNU22djm2CXgEhl4-1w='
          }
          label={'Собери свой бургер'}
          price={20}
          description={'Основа: булочка, кетчуп, майонез, горчица, помидоры черри'}
        />
        {burgers}
      </div>
      <div id={'pizzas'}/>
      <h2>Пицца</h2>
      <div className={s.productList}>
        <ProductCard
          type={'pizzaBuilder'}
          image={'https://ecopizza.com.ua/files/products/dough.270x200.png?550d81d0750669d5bb0e8b8250a4aea5'}
          label={'Собери свою пиццу'}
          price={70}
          description={'Основа для пиццы: тесто, сыр моцарелла, соусы, свежая зелень'}
        />
        {pizzas}
      </div>
    </div>
  )
}

export default Menu
