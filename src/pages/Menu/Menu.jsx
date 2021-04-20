import React from 'react'
import s from './Menu.module.css'
import ProductCard from '../../components/ProductCard/ProductCard'

const Menu = () => {
  return (
    <div className={'content-wrapper'}>
      <div className={s.productList}>
        <ProductCard
          type={'basic'}
          image={'https://dodopizza-a.akamaihd.net/static/Img/Products/78e732c620334b5e8e5d821685c1c4b5_584x584.jpeg'}
          label={'Чиззи Пицца'}
          price={100}
          description={'Бекон, цыпленок, ветчина, сыр блю чиз, сыры чеддер и пармезан, соус песто, кубики брынзы, томаты черри, красный лук, моцарелла, соус альфредо, чеснок, итальянские травы'}
        />
        <ProductCard
          type={'pizzaBuilder'}
          image={'https://ecopizza.com.ua/files/products/dough.270x200.png?550d81d0750669d5bb0e8b8250a4aea5'}
          label={'Собери свою пиццу'}
          price={70}
          description={'Основа для пиццы: тесто, сыр моцарелла, соусы, свежая зелень'}
        />
        <ProductCard
          type={'burgerBuilder'}
          image={'https://media.istockphoto.com/vectors/hamburger-vector-id165748460?k=6&m=165748460&s=612x612&w=0&h=rQkiEFNwBbfD6eHLuJaXVMUfkNU22djm2CXgEhl4-1w='}
          label={'Собери свой бургер'}
          price={20}
          description={'Основа: булочка, кетчуп, майонез, горчица, помидоры черри'}
        />
      </div>
    </div>
  )
}

export default Menu
