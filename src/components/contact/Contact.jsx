import styles from './contact.module.scss'

const Contact = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <span>GET IN TOUCH</span>
            <div className={styles.mail}>
                <input type="text" placeholder="Enter your email"/>
                <button>JOIN US</button>
            </div>
            <div className={styles.icons}>
                
            </div>
        </div>
    </div>
  )
}

export default Contact