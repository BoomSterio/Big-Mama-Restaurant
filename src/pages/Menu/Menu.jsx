import React, { useMemo } from 'react'
import s from './Menu.module.css'
import ProductCard from '../../components/ProductCard/ProductCard'
import { BURGERS, PIZZAS } from '../../data/menu'
import Carousel from '../../components/Carousel/Carousel'

const images = [
  'https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1616406700_08c002d3bdd7400e9759272aad19566e.jpeg',
  'https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1616998629_ec3d6a3864ce4f5d937d80acb2005c83.jpeg',
  'https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1615063943_1a6c222c93d742e9b369396d68cd129e.jpeg',
  'https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1613129207_e09fd61190da469ca40bb54b7b6a7403.jpeg',
  'https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1612145101_e2948ab8099b4bfdb420a125f0b454d9.jpeg',
  'https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1611874578_aee0ebc9ca5b4e5a955a8205a5800f78.jpeg',
  'https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1611871031_fcfb6a4d00c74c4894ebc4d74e4f14e2.jpeg',
]

const Menu = () => {
  const burgers = useMemo(() => BURGERS.map((b, i) => (
    <ProductCard key={b.label + i} {...b} />
  )), [])

  const pizzas = useMemo(() => PIZZAS.map((p, i) => (
    <ProductCard key={p.label + i} {...p} />
  )), [])

  return (
    <div className={s.menu}>
      <Carousel images={images}/>
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
