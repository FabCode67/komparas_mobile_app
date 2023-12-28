import React from 'react'
import { View, Text } from 'react-native'
import NavBar from '../components/NavBar'
import UpperProduct from './UpperProduct'

const ProductPage = () => {
  return (
    <View>
      <NavBar />
      <UpperProduct />
      <Text>Product Page</Text>
    </View>
  )
}

export default ProductPage