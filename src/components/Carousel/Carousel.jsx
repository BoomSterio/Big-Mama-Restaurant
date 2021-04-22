import React, { useState } from 'react'
import Slider from 'react-slick'
import s from './Carousel.module.css'
import { ArrowBackIosRounded, ArrowForwardIosRounded } from '@material-ui/icons'

const NextArrow = ({onClick}) => (
  <div className={`${s.arrow} ${s.next}`} onClick={onClick}>
    <ArrowForwardIosRounded/>
  </div>
)

const PrevArrow = ({onClick}) => (
  <div className={`${s.arrow} ${s.prev}`} onClick={onClick}>
    <ArrowBackIosRounded/>
  </div>
)

const Carousel = ({images}) => {
  const [imageIndex, setImageIndex] = useState(0)

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    focusOnSelect: true,
    adaptiveHeight: true,
    beforeChange: (current, next) => setImageIndex(next)
  }

  return (
    <Slider {...settings}>
      {images.map((img, i) =>
        <div className={s.slide + ' ' + (i === imageIndex && s.activeSlide)} key={img}>
          <img src={img} alt={'img'}/>
        </div>)}
    </Slider>
  )
}

export default Carousel
