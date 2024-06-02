import styles from './card.module.scss';
import {Link} from "react-router-dom";
const Card = ({el}) => {
  return (
        <Link to={`/product/${el.id}`}>
            <div className={styles.card}>
                <div className={styles.image}>
                 {el.attributes.isNew && <span>New</span>}
                    <img src={process.env.REACT_APP_UPLOAD_URL + el.attributes?.image?.data?.attributes?.url} alt="" className={styles.primaryImg}/>
                    <img src={el.attributes.img2} alt="" className={styles.secondaryImg} />
                </div>
                <h2>{el.attributes.title}</h2>
                <div className={styles.prices}>
                    <h3>${el.attributes.oldPrice}</h3>
                    <h3>${el.attributes.price}</h3>
                </div>
            </div>
        </Link>
  )
}

export default Card