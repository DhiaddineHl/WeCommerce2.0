import  { createContext, ReactNode, useContext, useState } from 'react'
import { CartItem } from '../hooks/models'


interface providerProps {
    children : ReactNode
}

type ShoppingCartContext = {
    getItemQuantity : (id : number) => number,
    increaseCartquantity : (id : number) => void,
    decreaseCartquantity : (id : number) => void,
    removeFromCart : (id : number) => void
    cartQuantity: number,
    cartItems : CartItem[]
    
}


const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart () {
  return (
    useContext(ShoppingCartContext)
  )
}


const ShoppingCartProvider = ({children} : providerProps) => {
    
    const [cartItems , setCartItems] = useState<CartItem[]>([])

    
    const cartQuantity = cartItems.reduce((quantity, item) =>
        item.qty + quantity , 0
    )

    
    function getItemQuantity (id: number) {
        return cartItems.find(item => item.id === id)?.qty || 0
    }

    function increaseCartquantity(id : number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) == null){
                return[...currItems, {id, qty: 1, name: '', imageName: '', price: 0}]
            }else {
                return currItems.map(item => {
                    if(item.id === id){
                        return {...item, qty: item.qty + 1}
                    }else {
                        return item
                    }
                })
            }
        })
    }
    function decreaseCartquantity(id : number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.qty === 1){
                return currItems.filter(item => item.id !== id)
            }else {
                return currItems.map(item => {
                    if(item.id === id){
                        return {...item, qty: item.qty - 1}
                    }else {
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(id : number){
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }
  
    return (
    <ShoppingCartContext.Provider value={{
     getItemQuantity,
     increaseCartquantity,
     decreaseCartquantity,
     removeFromCart,
     cartItems,
     cartQuantity,
     }}>
        {children}
    </ShoppingCartContext.Provider>
  )
}

export default ShoppingCartProvider