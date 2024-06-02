import { useDispatch, useSelector } from 'react-redux';
import styles from './cart.module.scss';
import { FaTrash } from 'react-icons/fa';
import { removeItem, resetCart } from '../redux/cartReducer';

const Cart = () => {
  const products = useSelector(state=>state.cart.products)
const total = () =>{
  let total = 0;
  products.forEach(item =>total+= item.quantity * item.price)
  return total.toFixed(2);
}
const dispatch = useDispatch();
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
        {products?.map(item=>
        <div className={styles.item}>
            <img src={process.env.REACT_APP_UPLOAD_URL+item.img}alt="" />
            <div className={styles.detail}>
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
                <div className={styles.price}>{item.quantity} x ${item.price}</div>
            </div>
            <FaTrash onClick={()=>dispatch(removeItem(item.id))} className={styles.delete} />
        </div>
        )}
        <div className={styles.total}>
            <span>SUB TOTAL</span>
            <span>{total()}</span>
        </div>
        <button className={styles.checkout}>CHECKOUT</button>
        <span onClick={()=>dispatch(resetCart())} className={styles.reset}>Reset cart</span>
    </div>
  )
}

export default Cart