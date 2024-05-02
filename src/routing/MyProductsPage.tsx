import React, { useState } from 'react'
import NavigationBar from '../components/NavigationBar'
import ShoppingCart from '../components/ShoppingCart'
import ShoppingCartProvider from '../context/ShoppingCartContext'
import ProductsPageBySeller from '../pages/ProductsPageBySeller'
import { Button } from '@radix-ui/themes'
import { IoCreateSharp } from "react-icons/io5";
import CreateProductButton from '../components/CreateProductButton'

const MyProductsPage = () => {

    const [isCartOpen, setCartOpen] = useState(false);

  return (
    <ShoppingCartProvider>
        <NavigationBar onOpenCart={() => setCartOpen(true)} />
        <CreateProductButton />
        <ProductsPageBySeller />
        <ShoppingCart isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
    </ShoppingCartProvider>
  )
}

export default MyProductsPage