import Card from './Card';
import styles from './CardList.module.css';
function CardList({ cards }) {
  return (
    <div className={styles.records}>
        <Card description={'Total items'}  amount={125} svg={'/assets/BurgerIcon.svg'} backgroundColor={'rgba(255, 26, 0, 16%)'}/>
        <Card description={'Categories'}  amount={8} svg={'/assets/categoryPurple.svg'} backgroundColor={'rgba(55, 0, 255, 16%)'} />
        <Card description={'Available'}  amount={'Coming soon'} svg={'/assets/checkGreen.svg'} backgroundColor={'rgba(128, 100, 31, 16%)'}/>
        <Card description={'Out of Stock'}  amount={125} svg={'/assets/redBanIcon.svg'} backgroundColor={'rgba(255, 0, 0, 16%)'}/>
    </div>
  );
}
export default CardList;