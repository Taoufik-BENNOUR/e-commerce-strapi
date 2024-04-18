import { Link } from 'react-router-dom';
import styles from './navbar.module.scss'
import { FaAngleDown, FaCartShopping, FaRegUser  } from "react-icons/fa6";
import { FaRegHeart, FaSearch } from "react-icons/fa";
import Cart from '../cartPopUp/Cart';
import { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.item}>
            <img width={50} src="https://www.pngkey.com/png/detail/333-3336892_american-and-british-english-language-icon-sticker-british.png" alt="" />
            <FaAngleDown />
          </div>
          <div className={styles.item}>
            <span>USD</span>
            <FaAngleDown />
          </div>
          <div className={styles.item}>
            <Link to="/products/2">Woman</Link>
          </div>
          <div className={styles.item}>
            <Link to="/products/1">Men</Link>
          </div>
          <div className={styles.item}>
            <Link to="/products/1">Children</Link>
          </div>
        </div>
        <div className={styles.center}>
          <Link to="/">STORE</Link>
        </div>
        <div className={styles.right}>
          <div className={styles.item}>
            <Link to="/">Home</Link>
          </div>
          <div className={styles.item}>
            <Link to="/">About</Link>
          </div>
          <div className={styles.item}>
            <Link to="/">Contact</Link>
          </div>
          <div className={styles.item}>
            <Link to="/">Stores</Link>
          </div>
          <div className={styles.icons}>
            <FaSearch/>
            <FaRegUser />
            <FaRegHeart />
            <div className={styles.cartIcon} onClick={()=>setOpen(prev=>!prev)}>
              <FaCartShopping/>
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart/>}
    </div>
  )
}

export default Navbar