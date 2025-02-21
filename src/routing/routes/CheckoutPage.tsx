import React from 'react'
import PageLayout from '../PageLayout'
import CheckoutForm from '../../pages/ChekoutPage'
import ShoppingCartProvider from '../../context/ShoppingCartContext'

const CheckoutPage = () => {
  return (
        <PageLayout>
            <CheckoutForm />
        </PageLayout>
  )
}

export default CheckoutPage