import React, { useState } from 'react'
import NavigationBar from '../components/NavigationBar'
import ShoppingCart from '../components/ShoppingCart'
import ShoppingCartProvider from '../context/ShoppingCartContext'
import ProductsPage from '../pages/ProductsPage'

const HomePage = () => {

    const [isCartOpen, setCartOpen] = useState(false);

  return (
    <ShoppingCartProvider>
        <NavigationBar onOpenCart={() => setCartOpen(true)} />
        <ProductsPage />
        <ShoppingCart isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
    </ShoppingCartProvider>
  )
}

export default HomePage