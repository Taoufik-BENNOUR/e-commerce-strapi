import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
import styles from './slider.module.scss'
import { useState } from 'react';

const Slider = () => {
  const imgs =[
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ]
  const [currentSlide, setCurrentSlide] = useState(0);
  const prevSlide=()=>{
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  }
  const nextSlide=()=>{
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  }
  console.log(currentSlide);
  return (
    <div className={styles.container}>
      <div className={styles.slider} style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src={imgs[0]} alt="" />
        <img src={imgs[1]} alt="" />
        <img src={imgs[2]} alt="" />
      </div>
      <div className={styles.icons}>
        <div className={styles.icon}>
          <FaArrowAltCircleLeft onClick={prevSlide}/>
        </div>
        <div className={styles.icon}>
          <FaArrowAltCircleRight onClick={nextSlide}/>
        </div>
      </div>
    </div>
  )
}

export default Slider