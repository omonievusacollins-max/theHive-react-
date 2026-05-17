import './App.css';
// import Button from './components/Button';
import Card from './components/Cards/Card';
import Logo from './components/Cards/Logo'
import NavItem from './components/Buttons/NavItem';
import CategoryCard from './components/Cards/CategoryCard';
import AddITem from './components/Cards/AddItem';
import SaveItem from './components/Cards/SaveItem';
import Button from './components/Buttons/Button';
import Search from './components/Inputs/Search';
import CardList from './components/Cards/CardList';
import CategoryDropDown from './components/Inputs/CategoryDropDown';
import MenuTable from './components/Table/MenuTable';
import {useState} from 'react';
import menu from '../src/components/Table/menu.json'


function App() {

    const formattedMenu = Object.entries(menu).flatMap(
    ([category, items]) =>
        items.map((item, index) => ({
        id: `${category}-${index}`,
        name: item.name,
        category,
        price: item.price
        }))
    ); // Flatten the menu into an array of items with category information
    //

  const category = Object.keys(menu);

  const [dropDown, setDropdown] = useState('all');

  const dropDownFilter = dropDown === "all" ? formattedMenu : formattedMenu.filter(list => list.category === dropDown)

  // console.log(dropDownFilter)

  const [searchTerm, setSearchTerm] = useState('');

  const filteredMenu = dropDownFilter.filter(item=> {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase())
  });



  return (
    <>
    <header>
      <Logo/>
      <div>
        <h1>Menu Management</h1>
        <p>Manage your restaurant's Offerings</p>
      </div>
    </header>

    <div className='dashboard'>
      <NavItem/>

      <main>
        <CardList/>
        <div className='controlMenu'>
          <div className='filter'>
            <Search placeholder={'Search menu item'} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <CategoryDropDown/>
          </div>

          <Button enableHover={false} text={'Add New Item'} iconSrc={false}/>
        </div>
      </main>

    </div>


    {/* <CategoryCard src={'/assets/Burger.svg'} color='red'/> */}
    {/* <AddITem/> */}
    {/* <SaveItem/> */}
    </>
  )
}

export default App
