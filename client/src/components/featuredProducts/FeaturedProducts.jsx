import Card from '../card/Card'
import styles from './featuredProducts.module.scss'

const FeaturedProducts = ({type}) => {
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
        <div className={styles.top}>
          <h1>{type} products</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde deleniti quisquam distinctio laudantium ad at, eveniet dolorem dicta expedita, explicabo repudiandae debitis neque illum? Autem maxime earum vel voluptas nulla.</p>
        </div>
        <div className={styles.bottom}>
          {data.map((el,i)=>
          <Card el={el} key={i} />
          )}
        </div>
    </div>
  )
}

export default FeaturedProducts