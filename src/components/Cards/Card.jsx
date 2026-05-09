import styles from './card.module.css'
function Card({description, amount, svg, color}){
    return(
        <div className={styles.container}>
            <div className={styles.imageContainer} style={{background: color}}>
                <img src={svg} alt="svg" />
            </div>

            <div className={styles.descriptionAmount}>
                <p id={styles.description}>{description}</p>
                <h1 id={styles.amount}>{amount}</h1>
            </div>
        </div>
    )
}

export default Card