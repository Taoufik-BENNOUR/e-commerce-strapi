import { useState } from 'react';
import styles from './products.module.scss';
import { useParams } from 'react-router-dom';
import List from '../../components/list/List';
import useFetch from '../../hooks/useFetch';

const Products = () => {

  const categoryId =  parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000)
  const [sort, setSort] = useState(null)

  const [first, setfirst] = useState([])

  const handleCategory = (e) =>{
    const {value} = e.target
  
    if (first.includes(value)){
      setfirst(first.filter(el=>el!==value))
    }else{
      setfirst([...first,value])
    }
  }
  const {data,loading,error} = useFetch(`/products?populate=*`);

  return (
    <div className={styles.products}>
      <div className={styles.left}>
        <div className={styles.filterItem}>
          <h2>Product Categories</h2>
          <div className={styles.inputItem} key={"item.id"}>
              <input
                type="checkbox"
                id={"item.id"}
                value={"item.id"}
              />
              <label htmlFor={"item.id"}>{"attributes.title"}</label>
            </div>
        </div>
        <div className={styles.filterItem}>
          <h2>Filter by price</h2>
          <div className={styles.inputItem}>
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className={styles.filterItem}>
          <h2>Sort by</h2>
          <div className={styles.inputItem}>
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className={styles.inputItem}>
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <img
          className={styles.catImg}
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <List data={data} catId={categoryId} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  )
}

export default Products