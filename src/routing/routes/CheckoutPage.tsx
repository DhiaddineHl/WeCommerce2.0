import React from 'react'
import PageLayout from '../PageLayout'
import CheckoutForm from '../../pages/ChekoutPage'
import ShoppingCartProvider from '../../context/ShoppingCartContext'

const CheckoutPage = () => {
  return (
    <ShoppingCartProvider>
        <PageLayout>
            <CheckoutForm />
        </PageLayout>
    </ShoppingCartProvider>
  )
}

export default CheckoutPage