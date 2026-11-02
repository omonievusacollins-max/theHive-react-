import {createContext, useContext ,useState, useEffect} from 'react';
const CartContext = createContext(null)


export function CartProvider({children}){
  const [cart, setCart] = useState(()=>{
    try{
      return JSON.parse(localStorage.getItem('hive-cart') || '[]')
    }catch{
      return []
    }
  })
  
  useEffect(()=> {
    localStorage.setItem('hive-cart', JSON.stringify(cart))
  }, [cart])
  
  const addToCart = (item) => {
    console.log("addToCart called with", item)
    const line = {
      itemId: item.id,
      name: item.name,
      price: item.price,
      category: item.category,
      qty: 1,
      lineId: `${item.id}|||`
    }
    
    setCart(prev =>{
      const alreadyInCart = prev.some(e => e.lineId === line.lineId);
      if(alreadyInCart){
        return prev.map(l => l.lineId === line.lineId ? {...l, qty: l.qty + 1} : l)
      }else{
      return [...prev, line]
      }
    })
  }
  
  const updateQty = (lineId, newQty) => {
      setCart(prev => {
        return prev.map(l => l.lineId === lineId ? {...l, qty: newQty} : l);
      })
    }
  
  const removeLine = (lineId) => {
    setCart(prev=> prev.filter(l => l.lineId !== lineId))
  }
  
  
  return(
  <CartContext.Provider value={{cart, setCart, addToCart, updateQty, removeLine}}>
    {children}
  </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if(!context){
    throw new Error('useCart must be used inside CartProvider. Wrap it around the routes in Customer.jsx.')
  }
  return context
}