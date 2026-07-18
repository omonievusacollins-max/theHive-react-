import './App.css';
// import Button from './components/Button';
import Card from './components/Cards/Card';
import Logo from './components/Cards/Logo'
import NavItem from './components/Buttons/NavItem';
import CategoryCard from './components/Cards/CategoryCard';
import SaveItem from './components/Cards/SaveItem';
import Button from './components/Buttons/Button';
import Search from './components/Inputs/Search';
import CardList from './components/Cards/CardList';
import CategoryDropDown from './components/Inputs/CategoryDropDown';
import MenuTable from './components/Table/MenuTable';
import {useState} from 'react';
import menu from '../src/components/Table/menu.json';
import EditModal from './components/Modals/EditModal';
import Staff from './Staff'
import Admin from './Admin'
// Authentication
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import OwnerLogin from './OwnerLogin';
import { useEffect } from 'react';

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

  const [searchTerm, setSearchTerm] = useState('');

  const filteredMenu = dropDownFilter.filter(item=> {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase())
  });

  const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

  return (
    <>
    {user ? <Staff /> : <OwnerLogin />};
    {/* <Admin /> */}
    </>
  )
}

export default App
