import React from 'react'
import s from './Layout.module.css'
import Header from './Header/Header'
import Carousel from '../Carousel/Carousel'

const images = [
  'https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1616406700_08c002d3bdd7400e9759272aad19566e.jpeg',
  'https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1615063943_1a6c222c93d742e9b369396d68cd129e.jpeg',
  'https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1613129207_e09fd61190da469ca40bb54b7b6a7403.jpeg',
  'https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1612145101_e2948ab8099b4bfdb420a125f0b454d9.jpeg',
  'https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1611874578_aee0ebc9ca5b4e5a955a8205a5800f78.jpeg',
  'https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1611871031_fcfb6a4d00c74c4894ebc4d74e4f14e2.jpeg',
]

const Layout = ({ children }) => {
  return (
  <>
    <Header/>
    <Carousel images={images}/>
    <main className={s.content + ' content-wrapper'}>
      {children}
    </main>
  </>
)}

export default Layout
