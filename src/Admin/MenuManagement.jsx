
import { use, useState, useEffect } from 'react';
import CategoryDropDown from '../components/Inputs/CategoryDropDown';
import Logo from '../components/Cards/Logo'
import CardList from '../components/Cards/CardList';
import Button from '../components/Buttons/Button';
import Search from '../components/Inputs/Search';
import AddITem from '../components/Cards/ItemForm';
import MenuTable from '../components/Table/MenuTable';
import EditModal from '../components/Modals/EditModal';
import { capitalizeWords } from '../Utils/capitalizeFirstWords';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import SaveItem from '../components/Cards/SaveItem';
import {doc, updateDoc, deleteDoc} from 'firebase/firestore';
import { db } from '../firebase';
import Toast from 'react-hot-toast';


// import menuu from '../components/Table/menu.json';
import './MenuManagement.css'

// Menu
import useMenu from '../useMenu';

function MenuManagement() {
    
    const menu = useMenu();
    
    // const formattedMenu = Object.entries(menuu).flatMap(
    //     ([category, items]) =>
    //         items.map((item, index) => ({
    //         id: `${category}-${index}`,
    //         name: item.name,
    //         category,
    //         price: item.price
    //         }))
    //     ); // Flatten the menu into an array of items with category information
    //     //

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

        useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
                setUser(currentUser);
            });
            return () => unsubscribe();
        }, []);

        
    const [activeState, setActiveState] = useState('All');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchValue, setSearchValue] = useState('');
    const [toggle, setToggle] = useState(false);

    // Filters
    const filteredMenu = selectedCategory === 'All' ? Menu : Menu.filter(([category, items])=> category === selectedCategory);

    const searchFilterMenu = filteredMenu.map(([category, items]) => {
        const filtereItems = items.filter(item => item.name.includes(searchValue.toLowerCase()))
        return [category, filtereItems]
    }).filter(([category, filtereItems]) => filtereItems.length > 0) // remove empty arrays
    // console.log(`searchFilterMenu `, searchFilterMenu)

    const [displayEditModal, setDisplayEditModal] = useState(false);
    const [saveModal, setSaveModal] = useState(false)
    const [mealName, setMealName] = useState('')
    const [mealPrice, setMealPrice] = useState('')

    return(
        <>
            {(saveModal || displayEditModal) && <div className='overlay'></div>}
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
                                                <img src="../assets/redBinIcon.svg" alt="delete" onClick={() => (setSaveModal(true), setSelectedItem(meal))}/>
                                                <img src="../assets/greenEditIcon.svg" alt="edit" onClick={ ()=> {setDisplayEditModal(true); setMealName(meal.name); setMealPrice(meal.price); setSelectedItem(meal);}}/>
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
                {/* {displayEditModal && <EditModal onClose={()=> setDisplayEditModal(false)}/>}
                {saveModal && <SaveItem onClose={()=> setSaveModal(false)}/>} */}
                {/* <EditModal/> */}
                {displayEditModal && (
                    <EditModal
                        initialValues={selectedItem}
                        onSave={handleEditSave}
                        onClose={() => setDisplayEditModal(false)}
                    />
                )}
                {saveModal && (
                    <SaveItem
                        onSave={handleDeleteConfirm}
                        onClose={() => setSaveModal(false)}
                    />
                )}
            </main>
        </>
    )
}

export default MenuManagement