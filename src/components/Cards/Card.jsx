import styles from './card.module.css'
import { useState } from 'react'
function Card({description, amount, svg, backgroundColor}){
    
    return(
        <div className={styles.container}>
            <div className={styles.imageContainer} style={{backgroundColor: backgroundColor}}>
                <img src={svg} alt="svg" />
            </div>

            <div className={styles.descriptionAmount}>
                <p id={styles.description}>{description}</p>
                <h1 id={styles.amount} style={{fontSize: typeof(amount) == 'string' ? '15px' : '20px'}}> {amount}</h1>
            </div>
        </div>
    )
}

export default Card