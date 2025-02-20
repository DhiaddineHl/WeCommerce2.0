import { ReactNode, useState } from "react"
import NavigationBar from "../components/NavigationBar"
import ShoppingCart from "../components/ShoppingCart"

interface PagePropos {
    children : ReactNode
}

const PageLayout = ({children}: PagePropos) => {

    const [isCartOpen, setCartOpen] = useState(false);

  return (
    <>
        <NavigationBar onOpenCart={() => setCartOpen(true)} />
        {children}
        <ShoppingCart isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
    </>
  )
}

export default PageLayout