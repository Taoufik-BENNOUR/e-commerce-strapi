import { useState } from 'react';
import styles from './product.module.scss';
import { FaBalanceScale, FaCartPlus, FaHeart } from "react-icons/fa";

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const images=[
"https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600",
"https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600",
"https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ]
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.images}>
          {images.map((img,i)=> <img src={img} alt="" onClick={()=>setSelectedImage(i)} /> )}
        </div>
        <div className={styles.selectedImg}>
          <img src={images[selectedImage]} alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1>tat</h1>
        <span className={styles.price}>50</span>
        <p>TEXT</p>
        <div className={styles.quantity}>
          <button onClick={()=>setQuantity((prev)=>prev===1?1:prev-1)}>-</button>
          <span>{quantity}</span>
          <button onClick={()=>setQuantity((prev)=>prev+1)}>+</button>
        </div>
        <button className={styles.add}>
          <FaCartPlus />  ADD TO CART
        </button>
        <div className={styles.link}>
          <div className={styles.item}>
            <FaHeart/>ADD TO WISH LIST
          </div>
          <div className={styles.item}>
            <FaBalanceScale/>ADD TO COMPARE
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product