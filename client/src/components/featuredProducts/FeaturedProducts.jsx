import { useEffect, useState } from 'react';
import Card from '../card/Card'
import styles from './featuredProducts.module.scss'
import axios from "axios";
import List from '../list/List';
const FeaturedProducts = ({type}) => {
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
  return (
    <div className={styles.container}>
        <div className={styles.top}>
          <h1>{type} products</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde deleniti quisquam distinctio laudantium ad at, eveniet dolorem dicta expedita, explicabo repudiandae debitis neque illum? Autem maxime earum vel voluptas nulla.</p>
        </div>
        <div className={styles.bottom}>
        <List type={type}/>
        </div>
    </div>
  )
}

export default FeaturedProducts