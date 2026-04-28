import './App.css';
// import Button from './components/Button';
import Card from './components/Cards/Card';
import Logo from './components/Cards/Logo'
import NavItem from './components/Buttons/NavItem';
import CategoryCard from './components/Cards/CategoryCard';
import AddITem from './components/Cards/AddItem';
import SaveItem from './components/Cards/SaveItem';
import Button from './components/Buttons/Button';
function App() {

  return (
    <>
    <header>
      <Logo/>
      <div>
        <h1>Menu Management</h1>
        <p>Manage your restaurant's Offerings</p>
      </div>
    </header>
    {/* <Card description={'Total items'}  amount={125} svg={'/assets/BurgerIcon.svg'}/> */}
    {/* <Logo/> */}
    <NavItem/>
    <section>
      <div className=''>
        <Card description={'Total items'}  amount={125} svg={'/assets/BurgerIcon.svg'}/>
        <Card description={'Categories'}  amount={8} svg={'/assets/BurgerIcon.svg'}/>
        
        <Card description={'Available'}  amount={'Coming soon'} svg={'/assets/checkGreen.svg'} color={'hsla(128, 100, 31, 16%)'}/>
        <Card description={'Out of Stock'}  amount={125} svg={'/assets/redBanIcon.svg'} color={'128, 100, 31, 16%'}/>
      </div>
    </section>

    {/* <CategoryCard src={'/assets/Burger.svg'} color='red'/> */}
    {/* <AddITem/> */}
    {/* <SaveItem/> */}
    </>
  )
}

export default App
