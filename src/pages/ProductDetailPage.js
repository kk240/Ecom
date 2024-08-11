import React from 'react'
import Navbar from '../features/navbar/Navbar'
import ProductDetails from '../features/product-list/components/ProductDetails'

const Home = () => {
    return (
        <Navbar children={<ProductDetails />} />
    )
}

export default Home