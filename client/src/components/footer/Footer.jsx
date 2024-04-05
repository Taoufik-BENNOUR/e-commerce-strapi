import styles from './footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.item}>
          <img src="https://scalebranding.com/wp-content/uploads/2022/02/Letter-BT-TB-Monogram-Logo.jpg" alt="" />
        </div>
        <div className={styles.item}>
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className={styles.item}>
          <h1>Links</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className={styles.item}>
          <h1>Contact</h1>
          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, asperiores! Aut impedit libero nemo quis, minus aperiam numquam, voluptatem autem fugiat at culpa iusto optio aliquid velit distinctio molestiae repellendus.</span>
        </div>
      </div>
      <hr className={styles.line} />
      <div className={styles.bottom}>
        <span>© Copyright 2024 One.All Rights Reserved.</span>
        <div className={styles.image}>
          <img src="https://s3-alpha.figma.com/hub/file/1659619545/e1f08393-359b-440d-8eba-75ac5c83168b-cover.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer