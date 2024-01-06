import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { FontAwesome5, } from '@expo/vector-icons';
import { getAllProducts } from '../../api/products';


const Product = () => {
  const [productsData, setProductsData] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const products = await getAllProducts();
      setProductsData(products?.data?.products);
    }
    getProducts();
  }, []);
  const renderProductItem = ({ item , index}) => (
    <View  className = "w-full flex flex-row space-x-4 p-2 text-xs justify-between border-b-2 bg-slate-300 border-b-blue-700">
    <Text className='text-xs flex my-auto justify-center items-center text-center'>{index+1}</Text>
      <Image
        source={{ 
          uri: item?.product_image,
         }}
        style={{ width: 40, height: 40, borderRadius: 50 }}
      />
      <Text className='text-xs flex my-auto justify-center items-center text-center'>{(item?.product_name)?.slice(0,6) + '...'}</Text>
      <Text className='text-xs flex my-auto justify-center items-center text-center'>{(item?.product_description)?.slice(0,8) + '...'}</Text>
      <Text className='text-xs flex my-auto justify-center items-center text-center'>{(item?.product_price) + ' Rwf'}</Text>
      <TouchableOpacity>
        <Text className='text-xs my-auto justify-center items-center text-center space-x-2 flex'>
          <FontAwesome5 name="edit" size={15} color="black" />
          <Text className='text-xs flex my-auto justify-center items-center text-center'>  </Text>
          <FontAwesome5 name="trash" size={15} color="black" />
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View className="w-full flex flex-col">
      <View  className = "w-full flex flex-row space-x-6 p-2 text-xs justify-between bg-white">
        <Text className='text-xs flex my-auto justify-center items-center text-center'>ID</Text>
        <Text className='text-xs flex my-auto justify-center items-center text-center' >Image</Text>
        <Text className='text-xs flex my-auto justify-center items-center text-center' >Name</Text>
        <Text className='text-xs flex my-auto justify-center items-center text-center' >Descrpt.</Text>
        <Text className='text-xs flex my-auto justify-center items-center text-center' >Price</Text>
        <Text className='text-xs flex my-auto justify-center items-center text-center' >Actions</Text>
      </View>
      <FlatList
        data={productsData}
        renderItem={renderProductItem}
        keyExtractor={index => index.toString()}
      />
    </View>
  );
};

  
export default Product;
