import './App.css';
// import Button from './components/Button';
import Card from './components/Cards/Card';
import Logo from './components/Cards/Logo'
import NavItem from './components/Buttons/NavItem';
import CategoryCard from './components/Cards/CategoryCard';
function App() {

  return (
    <>
    <Card description={'Total items'}  amount={125} svg={'/assets/BurgerIcon.svg'}/>
    <Logo/>
    <NavItem text={'Caterogy'} src={'/assets/Stack.svg'}/>
    <CategoryCard src={'/assets/Burger.svg'} color='red'/>
    </>
  )
}

export default App
