
import { use, useState, useEffect } from 'react';
import CategoryDropDown from '../../components/Inputs/CategoryDropDown.jsx';
import Logo from '../../components/Cards/Logo.jsx'
import CardList from '../../components/Cards/CardList.jsx';
import Button from '../../components/Buttons/Button.jsx';
import Search from '../../components/Inputs/Search.jsx';
import AddITem from '../../components/Cards/ItemForm.jsx';
import MenuTable from '../../components/Table/MenuTable.jsx';
import EditModal from '../../components/Modals/EditModal.jsx';
import { capitalizeWords } from '../../Utils/capitalizeFirstWords.js';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../services/firebase.js';
import SaveItem from '../../components/Cards/SaveItem.jsx';
import {doc, updateDoc, deleteDoc} from 'firebase/firestore';
import { db } from '../../services/firebase.js';
import Toast from 'react-hot-toast';


// import menuu from '../components/Table/menu.json';
import './MenuManagement.css'

// Menu
import useMenu from '../../hooks/useMenu.js';

function MenuManagement() {
    
    const menu = useMenu();
    
    const handleClickedCategory = (category, index) => {
        setSelectedCategory(category);
        setActiveState(index);
    }

    const handleEditSave = async (updatedItem) => {
        console.log(`CurrentUSer`, user)
        try{
            const itemRef = doc(db, 'menu', selectedItem.id);
            await updateDoc(itemRef, {
                name: updatedItem.name,
                price: Number(updatedItem.price),
                category: updatedItem.category
            })
            setDisplayEditModal(false);
        }catch(error){
            console.error('Error updating item:', error);
             Toast.error('Failed to update item');
        }
    }

    const handleDeleteConfirm = async () => {
        try{
            const itemRef = doc(db, 'menu', selectedItem.id);
            await deleteDoc(itemRef);
            setSaveModal(false);
        }catch(error){
            console.error('Error deleting item:', error);
            Toast.error('Failed to delete item');
        }
    }

    const category = Object.keys(menu);
    const Menu = Object.entries(menu)
    const [searchTerm, setSearchTerm] = useState('');
    const [user, setUser] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const [activeState, setActiveState] = useState('All');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchValue, setSearchValue] = useState('');
    const [toggle, setToggle] = useState(false);
    const [displayEditModal, setDisplayEditModal] = useState(false);
    const [displayDeleteModal, setdDisplayDeleteModal] = useState(false)
    const [mealName, setMealName] = useState('')
    const [mealPrice, setMealPrice] = useState('')

        useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
                setUser(currentUser);
            });
            return () => unsubscribe();
        }, []);


    // Filters
    const filteredMenu = selectedCategory === 'All' ? Menu : Menu.filter(([category, items])=> category === selectedCategory);

    const searchFilterMenu = filteredMenu.map(([category, items]) => {
        const filtereItems = items.filter(item => item.name.includes(searchValue.toLowerCase()))
        return [category, filtereItems]
    }).filter(([category, filtereItems]) => filtereItems.length > 0) // remove empty arrays
    // console.log(`searchFilterMenu `, searchFilterMenu)

    return(
        <>
            {(displayDeleteModal || displayEditModal) && <div className='overlay'></div>}
            <header>
                <Logo className="logo"/>
                <div>
                    <h1>Menu Management</h1>
                    <p>Manage your restaurant's Offerings</p>
                </div>
            </header>

            <main>
                <div className='controlMenu'>
                    <div className='filter'>
                        <Search placeholder={'Search menu item'} searchTerm={searchValue} setSearchTerm={setSearchValue} widthValue={'349px'} heightValue={'39px'} className='search'/>

                        <div className="cat-rail">
                            <div className={activeState === 'All' ? 'active-state cat-pill' : 'cat-pill'} onClick={()=>{setActiveState('All'); setSelectedCategory('All')}}>All</div>
        
                            {category.map((category, index) => (
                            <div className={activeState === index ? 'active-state cat-pill' : 'cat-pill'} key={index} onClick={() => {handleClickedCategory(category, index);}}>{capitalizeWords(category)}</div>
                            ))}
                        </div>
                    </div>
                    <div>

                    <div className="cat-block" style={{display: toggle === false ? '' : 'none'}}>
                        {
                            searchFilterMenu.flatMap(([category, item]) => {
                                return [
                                    <div className="cat-head" key={`${category}-`}>{capitalizeWords(category)}</div>,
                                    ...item.map(meal => (
                                        <div className="meal-row" key={`${category}-${meal.name}`} >
                                            <div className='meal-info'>
                                                <img src="../assets/BugerImage.png" alt="Meal" className='meal-image'/>

                                                <div className="food">
                                                    <div className="food-name">{capitalizeWords(meal.name)}</div>
                                                    <div className="food-price">₦{meal.price}</div>
                                                </div>
                                            </div>
                                            

                                            <div className="update-btn">
                                                <img src="../assets/redBinIcon.svg" alt="delete" onClick={() => (setdDisplayDeleteModal(true), setSelectedItem(meal))}/>
                                                <img src="../assets/greenEditIcon.svg" alt="edit" onClick={ ()=> {setDisplayEditModal(true);
                                                    setMealName(meal.name); 
                                                    setMealPrice(meal.price);
                                                    setSelectedItem(meal);}}/>
                                            </div>
                                        </div>
                                    ))
                                ]
                            })

                        }
                    </div>
                </div>
                </div>
                <div>

                </div>
                {displayEditModal && (
                    <EditModal
                        initialValues={selectedItem}
                        onSave={handleEditSave}
                        onClose={() => setDisplayEditModal(false)}
                    />
                )}
                {displayDeleteModal && (
                    <SaveItem
                        onSave={handleDeleteConfirm}
                        onClose={() => setdDisplayDeleteModal(false)}
                    />
                )}
            </main>
        </>
    )
}

export default MenuManagement