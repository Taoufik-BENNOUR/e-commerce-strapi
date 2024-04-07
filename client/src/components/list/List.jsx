import styles from './list.module.scss'
import Card from '../card/Card'
import { useEffect, useState } from 'react';
import  axios from 'axios';

const List = ({data}) => {

  return (
    <div className={styles.container}>
      {data.map((el,i)=>
          <Card el={el} key={i} />
          )}
    </div>
  )
}

export default List