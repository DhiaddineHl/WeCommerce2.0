import './App.css'
import NavigationBar from './components/NavigationBar';
import ProductsPage from './pages/ProductsPage';
import ShoppingCart from './components/ShoppingCart';
import { useState } from 'react';

import ShoppingCartProvider from './context/ShoppingCartContext';
import ProductForm from './pages/ProductForm';

function App() {

  const [isCartOpen, setCartOpen] = useState(false);

  return (
    <>
    {/* <ShoppingCartProvider>
    <NavigationBar onOpenCart={() => setCartOpen(true)} />
    <ProductsPage />
    <ShoppingCart isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
    </ShoppingCartProvider> */}
    <ProductForm />
    </>
  )
}

export default App
