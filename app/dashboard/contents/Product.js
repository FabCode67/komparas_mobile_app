import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Button, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome5, } from '@expo/vector-icons';
import { getAllProducts } from '../../api/products';
import { Dimensions } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const { width, height } = Dimensions.get('window');

const Product = () => {
  const [productsData, setProductsData] = useState([]);
  const [isAddProductform, setIsAddProductForm] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      const products = await getAllProducts();
      console.log("==================================================================>",products?.data?.data);
      setProductsData(products?.data?.data);
    }
    getProducts();
  }, []);


  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    quantity: '',
    category: '',
    location: '',
    image: '',
  });

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setFormData({ ...formData, image: result.uri });
    }
  };

  const handleSubmit = async () => {
    const data = new FormData();
    data.append('name', formData.name);
    data.append('description', formData.description);
    data.append('price', formData.price);
    data.append('category', formData.category);
    data.append('location', formData.location);
    data.append('quantity', formData.quantity)
    data.append('image', {
      uri: formData.image,
      type: 'image/jpeg',
      name: 'image.jpg',
    });

    try {
      const response = await fetch('https://blue-angry-gorilla.cyclic.app/native/products/add', {
        method: 'POST',
        body: data,
      });
      const json = await response.json();
      if (json?.message === 'User added successfully') {
        alert("good")
      }
      else {
        alert(json?.message)
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };




  const renderProductItem = ({ item, index }) => (
    <View className="w-full flex flex-row space-x-4 p-2 text-xs justify-between border-b-2 bg-slate-300 border-b-blue-700" key={index}>
      <Text className='text-xs flex my-auto justify-center items-center text-center'>{index + 1}</Text>
      <Image
        source={{
          uri: item?.image,
        }}
        style={{ width: 40, height: 40, borderRadius: 50 }}
      />
      <Text className='text-xs flex my-auto justify-center items-center text-center'>{(item?.name)?.slice(0, 6) + '...'}</Text>
      <Text className='text-xs flex my-auto justify-center items-center text-center'>{(item?.description)?.slice(0, 8) + '...'}</Text>
      <Text className='text-xs flex my-auto justify-center items-center text-center'> {item?.price}$
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
          <View className="h-fit flex w-full relative">
            <View className="w-full h-screen relative ">
              <View className=" text-grey-900  w-full flex justify-start">
                <View className="form">
                  <View
                    className="felx flex-col space-y-2"
                  >
                    <View className="flex flex-col space-y-2 w-[310px]  ">
                      <View className="input-field relative">
                        <TextInput
                          placeholder='Product name'
                          name='name'
                          value={formData.name}
                          onChangeText={text => setFormData({ ...formData, name: text })}
                          className="appearance-none w-full px-5 py-3 sm:max-w-xs text-base leading-6 text-gray-700 bg-white rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out"
                        />
                      </View>
                      <View className="input-field relative">
                        <TextInput
                          placeholder='Product description'
                          name='description'
                          value={formData.description}
                          onChangeText={text => setFormData({ ...formData, description: text })}
                          className="appearance-none w-full px-5 py-3 sm:max-w-xs text-base leading-6 text-gray-700 bg-white rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out"
                        />
                      </View>
                      <View className="input-field relative">
                        <TextInput
                          placeholder='Product price'
                          name='price'
                          value={formData.price}
                          onChangeText={text => setFormData({ ...formData, price: text })}
                          className="appearance-none w-full px-5 py-3 sm:max-w-xs text-base leading-6 text-gray-700 bg-white rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out"
                        />
                      </View>
                      <View className="input-field relative">
                        <TextInput
                          placeholder='Product category'
                          name='category'
                          value={formData.category}
                          onChangeText={text => setFormData({ ...formData, category: text })}
                          className="appearance-none w-full px-5 py-3 sm:max-w-xs text-base leading-6 text-gray-700 bg-white rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out"
                        />
                      </View>
                      <View className="input-field relative">
                        <TextInput
                          placeholder='Product location'
                          name='location'
                          value={formData.location}
                          onChangeText={text => setFormData({ ...formData, location: text })}
                          className="appearance-none w-full px-5 py-3 sm:max-w-xs text-base leading-6 text-gray-700 bg-white rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out"
                        />
                      </View>
                      <View className="input-field relative">
                        <TextInput
                          placeholder='Product quantity'
                          name='location'
                          value={formData.quantity}
                          onChangeText={text => setFormData({ ...formData, quantity: text })}
                          className="appearance-none w-full px-5 py-3 sm:max-w-xs text-base leading-6 text-gray-700 bg-white rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out"
                        />
                      </View>
                      <View className='w-full flex' style={{ justifyContent: 'center', }}>
                        <Button title="Pick an image from camera roll" onPress={pickImage} />
                        {formData.image && <Image source={{ uri: formData.image }} style={{ width: 310, height: 180 }} />}
                      </View>
                      <View className="input-field">
                        <TouchableOpacity onPress={handleSubmit} className="bg-blue-700 text-white rounded-md p-2 h-[54px] w-full ">
                          <Text className="text-center text-white text-xl font-bold">
                            Add product
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
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
