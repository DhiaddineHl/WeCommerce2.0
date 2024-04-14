import React, { createContext, ReactNode, useContext, useState } from 'react'


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

type CartItem = {
    id : number,
    quantity : number
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
        item.quantity + quantity , 0
    )

    
    function getItemQuantity (id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseCartquantity(id : number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) == null){
                return[...currItems, {id,quantity : 1}]
            }else {
                return currItems.map(item => {
                    if(item.id === id){
                        return {...item, quantity : item.quantity +1}
                    }else {
                        return item
                    }
                })
            }
        })
    }
    function decreaseCartquantity(id : number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity === 1){
                return currItems.filter(item => item.id !== id)
            }else {
                return currItems.map(item => {
                    if(item.id === id){
                        return {...item, quantity : item.quantity - 1}
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