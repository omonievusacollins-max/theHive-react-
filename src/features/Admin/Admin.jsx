import './Admin.css';
// import Button from './components/Button';
import Card from '../../components/Cards/Card.jsx';
import Logo from '../../components/Cards/Logo.jsx'
import NavItem from '../../components/Buttons/NavItem.jsx';
import CategoryCard from '../../components/Cards/CategoryCard.jsx';
import SaveItem from '../../components/Cards/SaveItem.jsx';
// import Button from '../components/Buttons/Button';
import Search from '../../components/Inputs/Search.jsx';
import CardList from '../../components/Cards/CardList.jsx';
import CategoryDropDown from '../../components/Inputs/CategoryDropDown.jsx';
import MenuTable from '../../components/Table/MenuTable.jsx';
import {useState} from 'react';
import menu from '../../components/Table/menu.json';
import EditModal from '../../components/Modals/EditModal.jsx';

// Pages
import MenuManagement from './MenuManagement.jsx'


function Admin() {

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

  const [searchTerm, setSearchTerm] = useState('');

  const filteredMenu = dropDownFilter.filter(item=> {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase())
  });



  return (
    <>
    <MenuManagement/>
    {/* <header>
      <Logo className="logo"/>
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
            <CategoryDropDown dropDown={dropDown} setDropDown={setDropdown}/>
          </div>

          <Button enableHover={false} text={'Add New Item'} iconSrc={false}/>
        </div>
        <AddITem class='AddItem'/>
        <MenuTable menu={filteredMenu}/>
        <EditModal/>

      </main>
    </div>
    <div className='footerContainer'>
      <div className='AdminInfo'>
        <img src="./assets/AdminImage.png" alt="" />
        <div>
          <h3 className='admin-name'>Admin Name</h3>
          <p className='admin-role'>Admin Manager</p>
        </div>
      </div>
      <footer className='footer'>
        <hr />
        <p>&copy; 2023 Menu Management. All rights reserved.</p>
      </footer>
    </div> */}

    </>
  )
}

export default Admin
