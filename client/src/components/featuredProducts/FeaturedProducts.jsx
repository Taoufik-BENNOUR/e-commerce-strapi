import { useEffect, useState } from 'react';
import Card from '../card/Card'
import styles from './featuredProducts.module.scss'
import axios from "axios";
import List from '../list/List';
import useFetch from '../../hooks/useFetch';
const FeaturedProducts = ({type}) => {

  const {data,loading,error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);

  return (
    <div className={styles.container}>
        <div className={styles.top}>
          <h1>{type} products</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde deleniti quisquam distinctio laudantium ad at, eveniet dolorem dicta expedita, explicabo repudiandae debitis neque illum? Autem maxime earum vel voluptas nulla.</p>
        </div>
        <div className={styles.bottom}>
        <List data={data}/>
        </div>
    </div>
  )
}

export default FeaturedProducts