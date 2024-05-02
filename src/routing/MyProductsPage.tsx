import React, { useState } from 'react'
import NavigationBar from '../components/NavigationBar'
import ShoppingCart from '../components/ShoppingCart'
import ShoppingCartProvider from '../context/ShoppingCartContext'
import ProductsPageBySeller from '../pages/ProductsPageBySeller'

const MyProductsPage = () => {

    const [isCartOpen, setCartOpen] = useState(false);

  return (
    <ShoppingCartProvider>
        <NavigationBar onOpenCart={() => setCartOpen(true)} />
        <ProductsPageBySeller />
        <ShoppingCart isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
    </ShoppingCartProvider>
  )
}

export default MyProductsPage