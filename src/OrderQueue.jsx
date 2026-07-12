import './OrderQueue.css'
import { generateUniquekey } from './Utils/generateUniqueKey'
function OrderQueue({ toggleDisplay, orderDetails}){

    return(
        <div style={{display: toggleDisplay === true ? '' : 'none'}}>
            {orderDetails.map((order, index) => (
                console.log(order),
                <div className="orderTicket" key={index}>
                <div className="customerDetails">
                    <p className="customerName">{order.customerName}</p>
                    <span className="customerPhoneNumber">{order.customerPhone}</span>
                </div>

                <div className="orderDetails">

                    {order.cart.map((item, index) => (
                        <div>
                            <div><span className="ItemQuantity" key={index+generateUniquekey}>{item.qty}</span> X <span className="Item">{item.name}</span> - <span className='amount'>{item.price}</span></div>
                            {item.extra.map((extra, index) => (
                                extra.qty === 0 ? '' : <div key={index+generateUniquekey} style={{color: '#8A8580'}}>extra <span>{extra.qty}</span> {extra.name}</div>
                            ))}
                        </div>
                    ))}

                </div>
                {/* <hr style={{border:'0.5px dashed black'}}/> */}
                <div style={{border:'0.2px dashed black'}}></div>
                <div className="amountTime">
                    <div>
                        <p className="amount">{order.totalPrice}</p>
                        <span className="paymentMethod">Transfer</span>
                    </div>
                    <div className="dateTimeStamp">
                        <span className="date">{order.date}</span>
                        <span className="time">{order.time} : {order.time}</span>,
                        {console.log(order.date)}
                    </div>
                </div>
            </div>
            ))}
        </div>
    )
}
export default OrderQueue