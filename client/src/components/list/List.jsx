import styles from './list.module.scss'
import Card from '../card/Card'
import { useEffect, useState } from 'react';
import  axios from 'axios';

const List = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async()=>{
      try {
        const response = await axios.get(process.env.REACT_APP_API_URL+"/products?populate=*",{headers:{'Authorization': `Bearer ${process.env.REACT_APP_API_TOKEN}`},
      })
      setProducts(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, [])
    const data =[
        {
          id:1,
          img:"https://cdn.dummyjson.com/product-images/1/1.jpg",
          img2:"https://cdn.dummyjson.com/product-images/2/3.jpg",
          title:"Product 1",
          isNew:true,
          oldPrice:19,
          price:12
        },
        {
          id:1,
          img:"https://cdn.dummyjson.com/product-images/1/2.jpg",
          img2:"https://cdn.dummyjson.com/product-images/2/2.jpg",
          title:"Product 1",
          isNew:true,
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
      {products.map((el,i)=>
          <Card el={el} key={i} />
          )}
    </div>
  )
}

export default List