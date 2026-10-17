import {useState} from "react" // import useState

// import images and svgs
import logo from "/assets/LOGO.svg"
import avatar from "/assets/Avatar.svg"
import './Customer.css'

// Components imported
import BottomNav from './Component/BottomNav'
import CategoryPill from './Component/CategoryPill'
import SearchBar from '../../components/Inputs/SearchBar'

// Hooks imported
import useMenu from '../../hooks/useMenu.js'

// Images
const happyBurger = '/assets/newlyCroppedHappyBurger.png'
const addBtn = '/assets/figma.svg'

// Customer function
function Customer(){
  const menu = useMenu()
  const Menu = Object.entries(menu)
  
  // Filter menu with search and category pill
  const [selectedCategory, setSelectedCategory] = useState('all');
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
      border: '1px dashed grey',
      margin: 'auto',
      'border-radius': '50px',
      padding: '0 20px 0 40px'
    }
    
  return(
    <div className="body">
      <header className="logoContainer">
        <div>
          <img src={logo} alt="logo"/>
          <p>Menu</p>
        </div>
        <img src={avatar} alt="logo"/>
      </header>
      
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
      <CategoryPill activeState={ setSelectedCategory}/>
      <div className="mealList">
        {
          searchFilterMenu.flatMap(([category, item]) => (
              item.map(meal => (
                <div className="mealContainer">
                  <div className="mealDetails">
                    <div>{meal.name}</div>
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
      
      
      <BottomNav/>
    </div>
  )
}
export default Customer;