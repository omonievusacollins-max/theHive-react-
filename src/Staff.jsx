import './Staff.css';
import menu from './components/Table/menu.json'
import Search from './components/Inputs/Search';
import { useState } from 'react';
import { capitalizeWords } from './Utils/capitalizeFirstWords';

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


    const handleClickedCategory = (category, index) => {
        setSelectedCategory(category);
        setActiveState(index);
    }

    const filteredMenu = selectedCategory === 'All' ? Menu : Menu.filter(([category, items])=> category === selectedCategory);

    const searchFilterMenu = filteredMenu.map(([category, items]) => {
        const filtereItems = items.filter(item => item.name.includes(searchValue.toLowerCase()))
        return [category, filtereItems]
    }).filter(([category, filtereItems]) => filtereItems.length > 0) // remove empty arrays
    
    const addITem = (price) => {
        setTotalItems(prev=> prev + 1)
        setTotalPrice(prev => prev + price)
        setTicketDisplay(true)
        console.log(totalItems)
        console.log(totalPrice)
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


            <div className="cat-block">
                {
                    searchFilterMenu.flatMap(([category, item]) => {
                        return [
                            <div className="cat-head" key={`${category}-`}>{capitalizeWords(category)}</div>,
                            ...item.map(meal => (
                                <div className="food-row" key={`${category}-${meal.name}`} onClick={()=> addITem(meal.price)}>
                                    <div className="food-info">
                                        <div className="food-name">{capitalizeWords(meal.name)}</div>
                                        <div className="food-price">{meal.price}</div>
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
                    <div class="tline">
                        <div class="tline-top">
                            {/* Working on this */}
                            <div class="tline-name">line.name</div>
                            <div class="tline-price">₦$lineTotalline.toLocaleString</div>
                        </div>
                        <div class="tline-controls">
                            <div class="tline-qty">
                                <button>−</button>
                                <span class="n">$line.qty</span>
                                <button>+</button>
                            </div>
                            <button class="tline-remove">Remove</button>
                        </div>
                        <div class="addon-row">chips</div>
                    </div>
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