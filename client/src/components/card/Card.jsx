import styles from './card.module.scss';
import {Link} from "react-router-dom";
const Card = ({el}) => {
  return (
        <Link to={`/products/${el.id}`}>
            <div className={styles.card}>
                <div className={styles.image}>
                 {el.isNew && <span>New</span>}
                    <img src={""} alt="" className={styles.primaryImg}/>
                    <img src={el.img2} alt="" className={styles.secondaryImg} />
                </div>
                <h2>{el.title}</h2>
                <div className={styles.prices}>
                    <h3>${el.oldPrice}</h3>
                    <h3>${el.price}</h3>
                </div>
            </div>
        </Link>
  )
}

export default Card