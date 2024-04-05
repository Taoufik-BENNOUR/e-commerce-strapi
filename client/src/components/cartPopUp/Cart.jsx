import styles from './cart.module.scss';
import { FaTrash } from 'react-icons/fa';

const Cart = () => {
    const data =[
        {
          id:1,
          img:"https://cdn.dummyjson.com/product-images/1/1.jpg",
          img2:"https://cdn.dummyjson.com/product-images/2/3.jpg",
          title:"Product 1",
          isNew:true,
          desc:"desc",
          oldPrice:19,
          price:12
        },
        {
          id:1,
          img:"https://cdn.dummyjson.com/product-images/1/2.jpg",
          img2:"https://cdn.dummyjson.com/product-images/2/2.jpg",
          title:"Product 1",
          isNew:true,
          desc:"desc",
          oldPrice:19,
          price:12
        },
        {
          id:1,
          img:"https://cdn.dummyjson.com/product-images/1/1.jpg",
          img2:"https://cdn.dummyjson.com/product-images/2/1.jpg",
          title:"Product 1",
          isNew:true,
          oldPrice:19,
          price:12
        }
      ]
  return (
    <div className={styles.container}>
        <h1>Cart</h1>
        {data?.map(item=>
        <div className={styles.item}>
            <img src={item.img}alt="" />
            <div className={styles.detail}>
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
                <div className={styles.price}>{item.price}</div>
            </div>
            <FaTrash className={styles.delete} />
        </div>
        )}
        <div className={styles.total}>
            <span>SUB TOTAL</span>
            <span>{data.reduce((a,b)=>a+ b.price,0)}</span>
        </div>
        <button className={styles.checkout}>CHECKOUT</button>
    </div>
  )
}

export default Cart