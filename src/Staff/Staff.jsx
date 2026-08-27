import './Staff.css';
import useMenu from '../useMenu';
import Search from '../components/Inputs/Search';
import { use, useState, useEffect } from 'react';
import { capitalizeWords } from '../Utils/capitalizeFirstWords';
import { generateUniquekey } from '../Utils/generateUniqueKey';
import OrderQueue from './OrderQueue';

// import firebase/firestore
import { collection, onSnapshot, addDoc } from "firebase/firestore";
import { db } from "../firebase";

function Staff(){
    const menu = useMenu();
    const category = Object.keys(menu)
    const Menu = Object.entries(menu)

    // UseStates
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [activeState, setActiveState] = useState('All');
    const [searchValue, setSearchValue] = useState('');
    const [ticketDisplay, setTicketDisplay] = useState(false)
    const [displayDrawer, setDisplayDrawer] = useState(false)
    const [cart, setCart] = useState([]);

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

    // Add item to cart
    const addItem = (price, category, name) => {
        const extra = [{name: 'sausage', price: 500, qty: 0}, {name: 'cheese', price: 500, qty: 0}]
        addOrIncrementItemQty({name: name, price: price, extra: extra})
        setTicketDisplay(true)
    }

    //Handles meal clicked twice e.g Regular beef clicked twice
    const addOrIncrementItemQty = (newItem) => {
        setCart((prevCart) => {
            const itemIndex = prevCart.findIndex(item => item.name === newItem.name && item.extra.every(extraItem => extraItem.qty === 0))
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
        const item = cart[itemIndex];
        setCart((prevCart) =>
            prevCart.map((item, index) => 
                index === itemIndex ? {...item, qty: item.qty + 1} : item
            )
        )
    };

    const decrementQty = (name, price, itemIndex) => {
        const item = cart[itemIndex];
        setCart((prevCart) =>
            prevCart.map((item, index) => 
                index === itemIndex ? {...item, qty: item.qty - 1} : item
            )
        )
    }

    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

    const totalPrice = cart.reduce((sum, item) => {
        const extrasTotal = item.extra.reduce((s, e) => s + e.price * e.qty, 0);
        return sum + (item.price + extrasTotal) * item.qty
    }, 0)

    const IncrementExtra = (extraPrice, extraIndex, itemIndex, itemPrice, itemQty) => {
        setCart(prevCart => prevCart.map((cartItem, index) => 
            index === itemIndex ? {...cartItem, extra: cartItem.extra.map((item, index) => index === extraIndex ? {...item, qty: item.qty + 1}: item)} : cartItem
        ))
    };

    const decrementExtra = (extraPrice, extraIndex, itemIndex, itemPrice, itemQty) => {
        setCart(prevCart => prevCart.map((cartItem, index) => 
            index === itemIndex ? {...cartItem, extra: cartItem.extra.map((item, index) => index === extraIndex ? {...item, qty: item.qty - 1}: item)} : cartItem
        ))
    }

    const removeItem = (itemIndex) => {
        setCart(prevCart => prevCart.filter((item, index) => index !== itemIndex))
        // setTotalItems(prev=> prev - 1);
    }

    const paymentMethods = ['Transfer', 'Cash', 'Atm(pos)']
    const [inputs, setInputs] = useState({textInput: '', selectedOption: 'None',});

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setInputs((prevInputs) => ({
            ...prevInputs, [name]: value,
        }))
    }

    const [orderDetails, setOrderDetails] = useState([]);

    useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "orders"), (snapshot) => {
        const orders = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setOrderDetails(orders);
    });
    return () => unsubscribe();
    }, []);

    // Filter orders for today
    const getTodaysDate = () => {
        const today = new Date();
        return today.toISOString().slice(0, 10);
    };
    const ordersForToday = orderDetails.filter(order => order.date === getTodaysDate());

    const handleSubmit = (e) => {
        e.preventDefault()
        if(inputs.textInput.trim() === '' || inputs.selectedOption.trim() === 'None'){
            alert('fill all inputs')
            return
        }

        const $date = new Date();
        const newDate = $date.toISOString().slice(0, 10);

        const newOrder = {
            customerName: inputs.textInput,
            customerPhone: document.getElementById('custPhone').value,
            cart: cart,
            paymentMethod: inputs.selectedOption,
            totalPrice: totalPrice,
            date: newDate,
            hour: $date.getHours(),
            minutes: $date.getMinutes()
        }

        addDoc(collection(db, "orders"), newOrder)
        .then( ()=> {
          setInputs({textInput: '', selectedOption: 'None',});
          setCart([]);
          setDisplayDrawer(false);
          },
          document.getElementById('custPhone').value = ''
        )
        .catch((error) => {
          alert('could not save order pls try again')
        })
    }

    const [toggle, setToggle] = useState(false);
    
    return(
        <div className='phone'>
            <div className="topbar">
                <div className="topbar-row">
                    <div className="brand-tag">
                        <div className="brand-mark"><img src="./assets/hiveLogo.png" alt="Hive logo" /></div>
                        <div className="brand-word">Staff</div>
                    </div>
                </div>
                <div className='buttons'>
                    <button className='order' onClick={() => setToggle(false)}>New Order</button>
                    <button className='orderQueue' onClick={() => setToggle(true)}>Order Queue<span className='orderForToday'>{ordersForToday.length}</span></button>
                </div>
            </div>
            {/* CONTROLS */}
            <OrderQueue toggleDisplay={toggle} orderDetails={orderDetails}/>
            <div style={{display: toggle === false ? '' : 'none'}}>
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
            <div className="cat-block" style={{display: toggle === false ? '' : 'none'}}>
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
                                    <div className="tline-price">₦{item.price * item.qty + item.extra.reduce((sum, e) => sum + e.price * e.qty, 0) * item.qty}</div>
                                </div>
                                <div className="tline-controls">
                                    <div className="tline-qty">
                                        <button onClick={()=> {decrementQty(item.name, item.price, itemIndex)}} disabled={item.qty === 1}>−</button>
                                        <span className="n">{item.qty}</span>
                                        <button onClick={() => incrementQty(item.name, item.price, itemIndex)}>+</button>
                                    </div>
                                    <button className="tline-remove" onClick={()=> removeItem(itemIndex)}>Remove</button>
                                </div>

                                {/* Extra */}
                                <div className="addon-row">
                                    {item.extra.map((extra, extraIndex) => (
                                        <div key={generateUniquekey()} className={extra.qty >= 1 ? 'on' : ''}>
                                            <button onClick={()=> decrementExtra(extra.price, extraIndex, itemIndex, item.price, item.qty)} disabled={extra.qty === 0}>-</button>
                                            <span className='addon-pill'>{`${extra.name}: ${extra.qty}`}</span>
                                            <button onClick={()=> IncrementExtra(extra.price, extraIndex, itemIndex, item.price, item.qty)}>+</button>
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
                        <input type="text" name='textInput' id="custName" placeholder="e.g. Chioma" value={inputs.textInput} onChange={handleInputChange}/>
                    </div>
                    <div className="input-row">
                        <label className="input-label">Phone <span className="opt">(optional)</span></label>
                        <input type="tel" id="custPhone" placeholder="e.g. 080..."  onChange={handleInputChange}/>
                    </div>
                    <div className="input-row">
                        <label className="input-label">Payment method</label>
                        <select className='paymentMethods' name='selectedOption' value={inputs.selectedOption} onChange={handleInputChange}>
                            <option value="None">None</option>
                            {paymentMethods.map((item, index) => (
                                <option key={index} value={item}>{item}</option>
                            ))}
                        </select>
                    </div>
                    <button className="place-btn" id="placeBtn" onClick={handleSubmit} disabled={inputs.selectedOption === 'None' || inputs.textInput === ''}>Place order</button>
                </div>
            </div>
            </div>
            
        </div>
    )
}
export default Staff