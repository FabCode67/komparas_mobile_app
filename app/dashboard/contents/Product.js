import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome5, } from '@expo/vector-icons';
import { getAllProducts } from '../../api/products';
import { Dimensions } from 'react-native';


const { width, height } = Dimensions.get('window');

const Product = () => {
  const [productsData, setProductsData] = useState([]);
  const [isAddProductform, setIsAddProductForm] = useState(false);
  useEffect(() => {
    const getProducts = async () => {
      const products = await getAllProducts();
      setProductsData(products?.data?.products);
    }
    getProducts();
  }, []);

  const renderProductItem = ({ item, index }) => (
    <View className="w-full flex flex-row space-x-4 p-2 text-xs justify-between border-b-2 bg-slate-300 border-b-blue-700" key={index}>
      <Text className='text-xs flex my-auto justify-center items-center text-center'>{index + 1}</Text>
      <Image
        source={{
          uri: item?.product_image,
        }}
        style={{ width: 40, height: 40, borderRadius: 50 }}
      />
      <Text className='text-xs flex my-auto justify-center items-center text-center'>{(item?.product_name)?.slice(0, 6) + '...'}</Text>
      <Text className='text-xs flex my-auto justify-center items-center text-center'>{(item?.product_description)?.slice(0, 8) + '...'}</Text>
      <Text className='text-xs flex my-auto justify-center items-center text-center'> {item?.vendor_prices?.length > 0 ? item?.vendor_prices[0]?.price : "-"}
      </Text>
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
    <View className="w-full flex">
      <TouchableOpacity onPress={() => setIsAddProductForm(!isAddProductform)}>
        <Text className='text-xs my-auto justify-end mx-auto w-full mb-5 p-2 bg-blue-700 text-white items-end text-end space-x-2 '>
          <FontAwesome5 name="plus" size={15} color="black" />
          <Text className='text-xs flex my-auto justify-end items-end text-end'>  </Text>
          <Text className='text-xs  my-auto justify-end items-end text-end hidden'>Add  product</Text>
        </Text>
      </TouchableOpacity>
      {
        isAddProductform ? (
          <View className=" w-full flex flex-col pr-3" style = {{
            width: width/1.2,
            height: height,
            flex: 1,
            flexDirection: 'column',
          }}>
            <TextInput placeholder="Product Name" className="w-full p-2 border-2 border-blue-700 mb-2" />
            <TextInput placeholder="Product Description" className="w-full p-2 border-2 border-blue-700 mb-2" />
            <TextInput placeholder="Product Image" className="w-full p-2 border-2 border-blue-700 mb-2" />
            <TextInput placeholder="Product Price" className="w-full p-2 border-2 border-blue-700 mb-2" />
            <TextInput placeholder="Product Category" className="w-full p-2 border-2 border-blue-700 mb-2" />
            <TextInput placeholder="Product Vendor" className="w-full p-2 border-2 border-blue-700 mb-2" />
            <TextInput placeholder="Product Vendor Price" className="w-full p-2 border-2 border-blue-700 mb-2" />
            <TextInput placeholder="Product Vendor Price" className="w-full p-2 border-2 border-blue-700 mb-2" />
            <TouchableOpacity>
              <Text className='text-xs my-auto justify-center items-center text-center space-x-2 flex'>
                Add product
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View className="w-full flex flex-col">
            <View className="w-full flex flex-row space-x-6 p-2 text-xs justify-between bg-white">
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
        )}
    </View>
  );
};


export default Product;
