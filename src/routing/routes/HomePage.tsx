import React from 'react'
import ShoppingCartProvider from '../../context/ShoppingCartContext'
import PageLayout from '../PageLayout'

const HomePage = () => {
  return (
    <ShoppingCartProvider>
        <PageLayout>
            <div>Home Page</div>
        </PageLayout>
    </ShoppingCartProvider>
  )
}

export default HomePage