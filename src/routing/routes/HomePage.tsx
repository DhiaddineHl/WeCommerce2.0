import React from 'react'
import ShoppingCartProvider from '../../context/ShoppingCartContext'
import PageLayout from '../PageLayout'
import FeaturedList from '../../components/FeaturedList'
import { Flex } from '@radix-ui/themes'
import BrandsGrid from '../../components/BrandsGrid'
import Footer from '../../components/Footer'

const HomePage = () => {
  return (
    <ShoppingCartProvider>
        <PageLayout>
            <Flex direction={'column'} align={'center'} justify={'center'} >
              <BrandsGrid />
              <Flex direction={'row'} align={'center'} justify={'center'} gap={"6"}>
                <FeaturedList />
                <FeaturedList />
                <FeaturedList />
              </Flex>
            </Flex>
        </PageLayout>
    </ShoppingCartProvider>
  )
}

export default HomePage