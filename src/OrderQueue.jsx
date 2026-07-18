import './OrderQueue.css'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from './firebase'

function OrderQueue({ toggleDisplay, orderDetails }) {

    //Function to delete order
    const handleDelete = (id, customerName) => {
        if (!window.confirm(`Remove ${customerName}'s order?`)) return
        deleteDoc(doc(db, 'orders', id))
    }

    const payClass = (method) => {
        if (method === 'Cash') return 'pay-cash'
        if (method === 'Atm(pos)') return 'pay-pos'
        return 'pay-transfer'
    }

    return (
        <div className="queue-wrap" style={{ display: toggleDisplay ? '' : 'none' }}>
            {orderDetails.length === 0 && (
                <div className="queue-empty">
                    <p>No orders yet</p>
                    <span>New orders will land here the moment they're placed.</span>
                </div>
            )}

            {orderDetails.map((order) => (
                <div className={`ticket ${payClass(order.paymentMethod)}`} key={order.id}>
                    <button className="ticket-delete" onClick={() => handleDelete(order.id, order.customerName)} aria-label="Remove order">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14z"/>
                        </svg>
                    </button>

                    <div className="ticket-head">
                        <span className="ticket-name">{order.customerName}</span>
                        <span className="ticket-phone">{order.customerPhone}</span>
                    </div>

                    <div className="ticket-perf"></div>

                    <div className="ticket-items">
                        {order.cart.map((item, i) => (
                            <div className="ticket-item" key={i}>
                                <div className="item-line">
                                    <span className="item-qty">{item.qty}×</span>
                                    <span className="item-name">{item.name}</span>
                                    <span className="item-price">₦{item.price * item.qty + item.extra.reduce((sum, e) => sum + e.price * e.qty, 0) * item.qty}</span>
                                </div>
                                {item.extra.filter(e => e.qty > 0).map((extra, j) => (
                                    <div className="item-extra" key={j}>+ {extra.qty} {extra.name}</div>
                                ))}
                            </div>
                        ))}
                    </div>

                    <div className="ticket-perf"></div>

                    <div className="ticket-foot">
                        <div className="ticket-foot-left">
                            <span className="ticket-total">₦{order.totalPrice}</span>
                            <span className={`ticket-pay ${payClass(order.paymentMethod)}`}>{order.paymentMethod}</span>
                        </div>
                        <div className="ticket-time">
                            <span>{order.date}</span>
                            <span>{String(order.hour).padStart(2, '0')}:{String(order.minutes).padStart(2, '0')}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default OrderQueue