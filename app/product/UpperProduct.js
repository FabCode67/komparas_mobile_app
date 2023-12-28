
import { View, Image, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import Footer from '../users/Footer';


const UpperProduct = () => {

  const renderRatingStars = () => {
    const stars = [];
    const productRating = 4.5;
    for (let i = 1; i <= 5; i++) {
      if (i <= productRating) {
        // Render a filled star for each full rating
        stars.push(<Text className='text-2xl text-blue-700' key={i}>&#9733;</Text>);
      } else if (i - 0.5 <= productRating) {
        // Render a half-filled star for half rating
        stars.push(<Text className='text-2xl text-blue-700' key={i}>&#9734;&#9733;</Text>);
      } else {
        // Render an empty star for no rating
        stars.push(<Text className='text-2xl text-blue-700' key={i}>&#9734;</Text>);
      }
    }
    return stars;
  };

  const { id } = useLocalSearchParams();

  console.log("id-------------------------", id);
  const [product, setProduct] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getProduct = async () => {
    const response = await fetch(`https://blue-angry-gorilla.cyclic.app/products/${id}`);
    const json = await response.json();
    setProduct(json);
    setLoading(false);
  }

  useEffect(() => {
    getProduct();
  }
    , []);

  console.log("product-------------------------", product);
  return (
    <ScrollView>
      <View className=' w-full  flex-col space-y-8  h-fit'>
        <View className='w-full bg-white rounded-md flex flex-col h-fit pb-10'>
          <View className='w-full flex flex-col  h-fit p-5 space-y-4'>
            <Text className='text-4xl font-bold'>{product?.product?.product_name}</Text>
            <View className='productRating flex flex-row space-x-2 justify-start my-auto items-center'>
              {renderRatingStars()}
              <Text className='text-lg text-gray-400'>(4.5)</Text>
            </View>
            <View className='line w-full h-[1px] bg-blue-700' />
          </View>
          {/* <View className='image flex w-full h-[25rem] p-2 rounded-sm'>
      <img src={products?.product?.product_image} alt='product' className='w-full h-full rounded-sm object-cover' />
    </View> */}
          <View
            className='image flex flex-col w-full h-88  p-2 rounded-sm'>
            <Image
              source={{
                uri: product?.product?.product_image,
              }}
              style={{
                height: 300,
                // resizeMode: 'cover',
              }}
            />
          </View>
          <View className="relatedPictures flex flex-row w-full justify-center bg-rd-300 items-center m-auto space-x-2 p-2">
          {/* {product?.product?.product_images?.map((image, index) => ( */}
            <View className="RelatedImages w-[7rem]  h-32 rounded-sm">
              <Image
                source={{
                  uri:'https://res.cloudinary.com/dqksbyovs/image/upload/v1703351797/product-images/rgt6fi6eha7r7mmh0h6h.jpg',
                }}
                style={{
                  height: 70,
                  width: 70,
                  resizeMode: 'cover',
                }}
              />
            </View>
            <View className="RelatedImages w-[7rem]  h-32 rounded-sm">
              <Image
                source={{
                  uri:'https://res.cloudinary.com/dqksbyovs/image/upload/v1703351797/product-images/rgt6fi6eha7r7mmh0h6h.jpg',
                }}
                style={{
                  height: 70,
                  width: 70,
                  resizeMode: 'cover',
                }}
              />
            </View>
            <View className="RelatedImages w-[7rem]  h-32 rounded-sm">
              <Image
                source={{
                  uri:'https://res.cloudinary.com/dqksbyovs/image/upload/v1703351797/product-images/rgt6fi6eha7r7mmh0h6h.jpg',
                }}
                style={{
                  height: 70,
                  width: 70,
                  resizeMode: 'cover',
                }}
              />
            </View>
          {/* ))} */}
        </View>
          <View className='description flex h-94flex-col w-full'>
            <View className='w-full h-fit'>
              <View className='w-full flex flex-col h-fit p-5 space-y-4'>
                <Text className='text-2xl font-bold'>{product?.product?.product_name}</Text>
                <Text className='text-lg font-medium'>
                  {product?.product?.product_description}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Footer />
    </ScrollView>
  )
}

export default UpperProduct