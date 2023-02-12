import React from 'react'
import Slide from '../slide/Slide'
import slide1 from '../../assets/img/slide1.jpg'
import slide2 from '../../assets/img/slide2.webp'
import slide3 from '../../assets/img/slide3.png'

import './imageCraousel.scss'
import { GrNext, GrPrevious } from 'react-icons/gr'

const ImageCraousel = () => {
  let pressNextBtn = () => {
    let box = document.querySelector('.craousel')
    let width = box.clientWidth;
    box.scrollLeft += width
  }
  let pressPrevBtn = () => {
    let box = document.querySelector('.craousel')
    let width = box.clientWidth;
    box.scrollLeft += -width
  }
  return (
    <div className='main'>
      <div className='craousel'>
        <Slide img={slide1} alt={'slide-one'} />
        <Slide img={slide2} alt={'slide-two'} />
        <Slide img={slide3} alt={'slide-three'} />
      </div>
      <GrPrevious className='prev-btn' onClick={pressPrevBtn} />
      <GrNext className='next-btn' onClick={pressNextBtn} />
      <div className="dots">
        <div className="dot" onClick={pressNextBtn}></div>
        <div className="dot" onClick={pressNextBtn}></div>
        <div className="dot" onClick={pressNextBtn}></div>
        <div className="dot" onClick={pressNextBtn}></div>
        <div className="dot" onClick={pressNextBtn}></div>
      </div>
    </div>
  )
}

export default ImageCraousel
