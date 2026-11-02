import {useState} from "react" // import useState

// Import Components
import CategoryPill from './Component/CategoryPill'
import SearchBar from '../../components/Inputs/SearchBar';

// import UTILS
import { capitalizeWords } from '../../Utils/capitalizeFirstWords.js';

// Import Hooks
import useMenu from '../../hooks/useMenu.js'
import usePersistenceState from '../../hooks/usePersistenceState'

// import Context
import {useCart} from '../../Context/CartProvider';

// Get Images
const happyBurger = '/assets/newlyCroppedHappyBurger.png'
const addBtn = '/assets/figma.svg'

function Menu(){
  
  const menu = useMenu()
  const Menu = Object.entries(menu)
  
  // FUNCTION TO ADD ITEM TO CART
  // const addToCart = (itemId) => {
    
  //   // Find the tapped item
  //   const allItems = Menu.flatMap(([, items]) => items)
  //   const menuItem = allItems.find(e => e.id === itemId)
  //   if(!menuItem) return // bad id: stop, change nothing
    
  //   // Build the cart line for this item
  //   const line = {
  //     itemId: menuItem.id,
  //     name: menuItem.name,
  //     price: menuItem.price,
  //     category: menuItem.category,
  //     qty: 1,
  //     lineId: `${itemId}|||`
  //   }
    
  //   // Read the saves cart (fallback to an empty array)
  //   const cart = JSON.parse(localStorage.getItem('hive-cart') || "[]");
    
  //   let newCart;
  //   // Decide to merge into an existing cart or create a new one
  //   const alreadyInCart = cart.some(e => e.lineId === line.lineId);
    
  //   if(alreadyInCart) {
  //     newCart = cart.map(l => l.lineId === line.lineId ? {...l, qty: l.qty + 1} : l)
  //   }else{
  //     newCart = [...cart, line]
  //   }
  //   // Save and log
  //   localStorage.setItem('hive-cart', JSON.stringify(newCart))
  //   console.log(newCart)
  // }
  
  const {addToCart} = useCart()
  
  // Filter menu with search and category pill
  const [selectedCategory, setSelectedCategory] = usePersistenceState('all');
  const [Query, setQuery] = useState('')
  
  const filteredMenu = selectedCategory === 'all' ? Menu : Menu.filter(([category, items]) => category === selectedCategory);
  
  const searchFilterMenu = filteredMenu.map(([category, items]) => {
        const filtereItems = items.filter(item => item.name.includes(Query.toLowerCase()))
        return [category, filtereItems]
    }).filter(([category, filtereItems]) => filtereItems.length > 0)
    // remove empty arrays
    
    // COMPONENT STYLE
  const searchStyle = {
    height: '50px',
    width: `calc(100vw - 20px)`,
    border: 'none',
    margin: '10px auto',
    'border-radius': '50px',
    padding: '0 20px 0 40px'
  }
    
  return(
    <div>
      <div className="banner">
          <img src={happyBurger} alt="A happy smiling burger" className="happyBurger"/>
          <div className="taste">
            <span>Fast</span>
            <span>&middot;</span>
            <span>Fresh</span>
            <span>&middot;</span>
            <span>Creamy</span>
          </div>
          <h1>Order Tasty, <br/> Take home, Delivery</h1>
          <p>Authentic Benin sharwarmas, creamy stir-fry <br/> pasta, and juicy flame burger</p>
      </div>
      <div className="searchContainer">
        <SearchBar 
          placeholder={'what are you craving'}
           searchQuery={Query}
           setSearchQuery = {setQuery}
           searchstyle = {searchStyle}
           />
      </div>
      <CategoryPill setSelectedCategory={setSelectedCategory}  selectedCategory = {selectedCategory}/>
        <div className="mealList">
          {
            searchFilterMenu.flatMap(([category, item]) => (
                item.map(meal => (
                  <div className="mealContainer" onClick={()=> addToCart(meal)} key={meal.id}>
                    <div className="mealDetails">
                      <div>{capitalizeWords( meal.name)}</div>
                      <div className="mealPrice">N{meal.price}</div>
                    </div>
                    <div className="addBtnContainer">
                      <img src={addBtn} alt="plus sign" className="addBtn"/>
                    </div>
                    
                  </div>
                ))
            ))
          }
        </div>
      </div>
    )
}

export default Menu