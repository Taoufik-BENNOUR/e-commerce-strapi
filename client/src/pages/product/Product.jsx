import { useState } from 'react';
import styles from './product.module.scss';
import { FaBalanceScale, FaCartPlus, FaHeart } from "react-icons/fa";
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addTocart } from '../../components/redux/cartReducer';

const Product = () => {
  const [selectedImage, setSelectedImage] = useState("image");
  const [quantity, setQuantity] = useState(1);
  const images=[
"https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600",
"https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600",
"https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ]
  const dispatch = useDispatch();
  const id = useParams().id;
  const {data,loading,error} = useFetch(`/products/${id}?populate=*`);
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.images}>
          {images.map((img,i)=> <img src={img} alt="" onClick={()=>setSelectedImage(i)} /> )}
        </div>
        <div className={styles.selectedImg}>
          <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.image?.data?.attributes?.url} alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1>{data.attributes?.title}</h1>
        <span className={styles.price}>{data.attributes?.price}</span>
        <p>{data.attributes?.description}</p>
        <div className={styles.quantity}>
          <button onClick={()=>setQuantity((prev)=>prev===1?1:prev-1)}>-</button>
          <span>{quantity}</span>
          <button onClick={()=>setQuantity((prev)=>prev+1)}>+</button>
        </div>
        <button className={styles.add} onClick={()=>dispatch(addTocart({id:data.id,
          title:data.attributes.title,
          desc:data.attributes.description,
          price:data.attributes.price,
          img:data.attributes.image.data.attributes.url,
          quantity
          }))}>
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