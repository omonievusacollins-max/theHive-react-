import Card from './Card';
import styles from './CardList.module.css';
function CardList({ cards }) {
  return (
    <div className={styles.records}>
        <Card description={'Total items'}  amount={125} svg={'/assets/BurgerIcon.svg'}/>
        <Card description={'Categories'}  amount={8} svg={'/assets/BurgerIcon.svg'}/>
        <Card description={'Available'}  amount={'Coming soon'} svg={'/assets/checkGreen.svg'} color={'hsla(128, 100, 31, 16%)'}/>
        <Card description={'Out of Stock'}  amount={125} svg={'/assets/redBanIcon.svg'} color={'128, 100, 31, 16%'}/>
    </div>
  );
}
export default CardList;