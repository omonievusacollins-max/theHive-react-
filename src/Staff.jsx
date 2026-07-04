import './Staff.css';
import menu from './components/Table/menu.json'
import Search from './components/Inputs/Search';
import { use, useState } from 'react';
import { capitalizeWords } from './Utils/capitalizeFirstWords';
import { generateUniquekey } from './Utils/generateUniqueKey';

function Staff(){
    const category = Object.keys(menu)
    const Menu = Object.entries(menu)

    // UseStates
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [activeState, setActiveState] = useState('All');
    const [searchValue, setSearchValue] = useState('');
    const [totalItems, setTotalItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [ticketDisplay, setTicketDisplay] = useState(false)
    const [displayDrawer, setDisplayDrawer] = useState(false)
    const [itemQuantity, setItemQuantity] = useState(prev => prev + 1)
    const [cart, setCart] = useState([]);
    const [countQty, setCountQty] = useState(cart)


    const handleClickedCategory = (category, index) => {
        setSelectedCategory(category);
        setActiveState(index);
    }

    // Filters
    const filteredMenu = selectedCategory === 'All' ? Menu : Menu.filter(([category, items])=> category === selectedCategory);

    const searchFilterMenu = filteredMenu.map(([category, items]) => {
        const filtereItems = items.filter(item => item.name.includes(searchValue.toLowerCase()))
        return [category, filtereItems]
    }).filter(([category, filtereItems]) => filtereItems.length > 0) // remove empty arrays

    let uid = 0

    // Add item to cart
    const addItem = (price, category, name) => {
        addOrIncrementItemQty({name: name, price: price})
        setTotalItems(prev=> prev + 1);
        setTotalPrice(prev => prev + price)
        setTicketDisplay(true)
    }

    //Handles meal clicked twice e.g Regular beef clicked twice
    const addOrIncrementItemQty = (newItem) => {
        setCart((prevCart) => {
            const itemIndex = prevCart.findIndex(item => item.name === newItem.name)
            if(itemIndex !== -1) {
                // item exists, incremment qty
                return prevCart.map((item, index) => index === itemIndex ? {...item, qty: item.qty + 1} : item)
            }else{
                // item does nor exist , add with qty 1 or newItem.qty
                return [...prevCart, {...newItem, qty: newItem.qty || 1}]
            }
        })
    }

    // Increment qty for a specific item
    const incrementQty = (name, price, itemIndex) => {
        setCart((prevCart) =>
            prevCart.map((item, index) => 
                index === itemIndex ? {...item, qty: item.qty + 1} : item
            ), setTotalPrice(prev => prev + price)
        )
    };

    const decrementQty = (name, price, itemIndex) => {
        setCart((prevCart) =>
        prevCart.map((item, index) => 
            index === itemIndex ? {...item, qty: item.qty - 1} : item
        ), setTotalPrice(prev => prev - price)
        )
    }


    // Manage Extra
    const [amtExtra, setAmtExtra] = useState(0)
    const [extra, setExtra] = useState([{name: 'sausage', price: 500, qty: 0}, {name: 'cheese', price: 500, qty: 0}])

    const IncrementExtra = (extraPrice, index) => {
        console.log(index)
        setTotalPrice(prev => prev + extraPrice)
        setAmtExtra(prev => prev + 1)

        setExtra(prevExtra => {
            const newExtra = [...prevExtra];
            newExtra[index] = {...newExtra[index], qty: newExtra[index].qty + 1}
            return newExtra;
        })

    }

    const decrementExtra = (extraPrice, index) => {
        setTotalPrice(prev => prev - extraPrice);
        setAmtExtra(prev => prev - 1);

        setExtra(prevExtra => {
            const newExtra = [...prevExtra];
            if(newExtra[index].qty > 0) {
                newExtra[index] = {...newExtra[index], qty: newExtra[index].qty - 1}
            }
            return newExtra;
        })
    }


    return(
        <div className='phone'>
            <div className="topbar">
                <div className="topbar-row">
                    <div className="brand-tag">
                        <div className="brand-mark">H</div>
                        <div className="brand-word">Hive Staff</div>
                    </div>
                    <div className="clock">4:32 PM</div>
                </div>
                <div className="topbar-title">New Order</div>
                <div className="topbar-sub">Tap an item to add it to the ticket</div>
            </div>

            
            {/* CONTROLS */}
            <div className="controls">
                <Search paddingValue={'11px 14px 11px 36px'} placeholder={'Search Menu...'} searchTerm={searchValue} setSearchTerm={setSearchValue}/>
                <div className="cat-rail">
                    <div className={activeState === 'All' ? 'active cat-pill' : 'cat-pill'} onClick={()=>{setActiveState('All'); setSelectedCategory('All')}}>All</div>

                    {category.map((category, index) => (
                    <div className={activeState === index ? 'active cat-pill' : 'cat-pill'} key={index} onClick={() => {handleClickedCategory(category, index);}} >{capitalizeWords(category)}</div>
                    ))}
                </div>
            </div>



            {/* MENU */}
            <div className="cat-block">
                {
                    searchFilterMenu.flatMap(([category, item]) => {
                        return [
                            <div className="cat-head" key={`${category}-`}>{capitalizeWords(category)}</div>,
                            ...item.map(meal => (
                                <div className="food-row" key={`${category}-${meal.name}`} onClick={()=> addItem(meal.price, category, meal.name)}>
                                    <div className="food-info">
                                        <div className="food-name">{capitalizeWords(meal.name)}</div>
                                        <div className="food-price">₦{meal.price}</div>
                                    </div>
                                    <div className="add-btn">+</div>
                                </div>
                            ))
                        ]
                    })

                }
            </div>


            {/* collapsed drawer tab */}
            <div className="drawer-tab" id="drawerTab" style={{display: ticketDisplay ? 'flex' : 'none'}} onClick={()=> setDisplayDrawer(true)}>
                <div className="drawer-tab-left">
                    <div className="ticket-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3"><path d="M6 2h9l5 5v13a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z"/></svg>
                    </div>
                    <div>
                        <div className="drawer-count" id="drawerCount">{totalItems} items</div>
                        <div className="drawer-total" id="drawerTotal">₦{totalPrice}</div>
                    </div>
                </div>
                <div className="drawer-chevron">
                    View ticket<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 15l-6-6-6 6"/></svg>
                </div>
            </div>

            <div className={displayDrawer ? 'sheet-overlay show' : 'sheet-overlay'} id="overlay" onClick={()=> setDisplayDrawer(false)}></div>

            <div className={displayDrawer ? 'sheet open' : 'sheet'} id="sheet">
                <div className="sheet-handle"><span></span></div>
                <div className="ticket-header">
                    <div className="ticket-title">Order Ticket</div>
                    <div className="ticket-sub" id="ticketSub">{totalItems}</div>
                    <div className="ticket-close" id="closeSheet" onClick={()=> setDisplayDrawer(false)}>✕</div>
                </div>

                {/* TICKET BODY */}
                <div className="ticket-body" id="ticketBody">
                    <div className="ticket-empty" style={{display: displayDrawer ? 'none' : 'flex'}}>No items yet</div>
                    {
                        cart.map((item, itemIndex)=> (
                            <div className="tline" key={generateUniquekey()}>

                                <div className="tline-top">

                                    <div className="tline-name">{item.name}</div>
                                    <div className="tline-price">₦{(item.price * item.qty)}</div>
                                </div>
                                <div className="tline-controls">
                                    <div className="tline-qty">
                                        <button onClick={()=> {decrementQty(item.name, item.price, itemIndex)}} disabled={item.qty === 1}>−</button>
                                        <span className="n">{item.qty}</span>
                                        <button onClick={() => incrementQty(item.name, item.price, itemIndex)}>+</button>
                                    </div>
                                    <button className="tline-remove">Remove</button>
                                </div>

                                {/* Extra */}
                                <div className="addon-row">
                                    {extra.map((extra, index) => (
                                        <div key={generateUniquekey()}>
                                            <button onClick={()=> decrementExtra(extra.price, index)} disabled={extra.qty === 0}>-</button>
                                            <span className='addon-pill' >{`${extra.name}: ${extra.qty}`}</span>
                                            <button onClick={()=> IncrementExtra(extra.price, index)}>+</button>
                                        </div> 
                                    ))}
                                </div>
                            </div>
                        ))
                    }
                    
                </div>

                <div className="ticket-footer">
                    <div className="total-line">
                        <div className="total-label">Total</div>
                        <div className="total-amt" id="totalAmt">₦{totalPrice}</div>
                    </div>
                    <div className="input-row">
                        <label className="input-label">Customer name</label>
                        <input type="text" id="custName" placeholder="e.g. Chioma"/>
                    </div>
                    <div className="input-row">
                        <label className="input-label">Phone <span className="opt">(optional)</span></label>
                        <input type="tel" id="custPhone" placeholder="e.g. 080..."/>
                    </div>
                    <button className="place-btn" id="placeBtn" disabled>Place order</button>
                </div>
            </div>

        </div>
    )
}
export default Staff