import './Staff.css';
import menu from './components/Table/menu.json'
import Search from './components/Inputs/Search';
// import { useState, useState } from 'react';
function Staff(){
    const category = Object.keys(menu)
    const Menu = Object.entries(menu)

    // function to capitalize first letter of each word in a sentence
    function capitalizeWords(sentence){
        if(!sentence) return;
        return sentence.split(' ').map(word => {
            if(!word) return;
            return word.charAt(0).toUpperCase() + word.slice(1)
        })
        .join(' ');
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
                <Search paddingValue={'11px 14px 11px 36px'} placeholder={'Search Menu...'}/>
                <div className="cat-rail">
                     <div className="cat-pill active">All</div>
                    {category.map((category, index) => (
                    <div className="cat-pill" key={index}>{category}</div>
                    ))}
                </div>
            </div>


            <div className="cat-block">
                {
                    Menu.flatMap(([category, item]) => {
                        
                        return [
                            <div className="cat-head" key={`${category}-`}>{capitalizeWords(category)}</div>,
                            ...item.map(meal => (
                                <div className="food-row" data-name="Regular Beef" data-price="3800" key={`${category}-${meal.name}`}>
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
            <div className="drawer-tab" id="drawerTab">
                <div className="drawer-tab-left">
                    <div className="ticket-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3"><path d="M6 2h9l5 5v13a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z"/></svg>
                    </div>
                    <div>
                        <div className="drawer-count" id="drawerCount">3 items</div>
                        <div className="drawer-total" id="drawerTotal">₦0</div>
                    </div>
                </div>
                <div className="drawer-chevron">
                    View ticket<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 15l-6-6-6 6"/></svg>
                </div>
            </div>

            <div className="sheet-overlay" id="overlay"></div>

            <div className="sheet" id="sheet">
                <div className="sheet-handle"><span></span></div>
                <div className="ticket-header">
                    <div className="ticket-title">Order Ticket</div>
                    <div className="ticket-sub" id="ticketSub">0 items</div>
                    <div className="ticket-close" id="closeSheet">✕</div>
                </div>

                <div className="ticket-body" id="ticketBody">
                    <div className="ticket-empty">No items yet</div>
                </div>

                <div className="ticket-footer">
                    <div className="total-line">
                        <div className="total-label">Total</div>
                        <div className="total-amt" id="totalAmt">₦0</div>
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