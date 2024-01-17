import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Link } from 'expo-router';

const { width, height } = Dimensions.get('window');

const HomeProduct = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getProducts = async () => {
    const response = await fetch('https://blue-angry-gorilla.cyclic.app/native/products');
    const json = await response.json();
    setData(json);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log(data);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View className='w-full h-screen flex justify-between items-center text-center m-auto'>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ) : (
        <View style={styles.gridContainer}>
          {data?.data?.map((item, index) => (
            <View style={styles.productCard1} key={index}>
              <View style={styles.productCard1Img}>
                <Image
                  source={{
                    uri: item?.image,
                  }}
                  style={{
                    height: 300,
                    resizeMode: 'cover',
                  }}
                />
              </View>
              <View style={styles.productCard1Text}>
                <Text style={styles.productStarsReview}>product Stars</Text>
                <Text style={styles.productName}>
                  {item?.product_name?.length > 40 ? item?.product_name?.substring(0, 40) + '...' : item?.name?.substring(0, 40)}
                </Text>
                <Text style={styles.productPrice}>
                  From <Text style={styles.bold}>${item?.price}</Text> in <Text style={styles.bold}>5</Text> stores
                </Text>
              </View>
              <Link className="w-full bg-blue-700 p-3 text-white font-bold jus flex items-center text-center " href={`/product/${item._id}`}>
                <Text>View Product</Text>
              </Link>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    minHeight: height,
    paddingHorizontal: 10,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  loader: {
    backgroundColor: 'red',
    display: "flex",
    justifyContent: "center",
    margin: "auto",


    alignItems: "center"
  },
  productCard1: {
    minHeight: 200,
    width: '48%',
    marginBottom: 10,
  },
  productCard1Img: {
    height: 250,
    width: '100%',
    backgroundColor: 'lightblue',
  },
  productCard1Text: {
    padding: 10,
    height: 80,
    backgroundColor: 'lightgray',
  },
  productStarsReview: {
    textAlign: 'start',
    fontSize: 12,
    color: 'yellow',
  },
  productName: {
    textAlign: 'left',
  },
  productPrice: {
    textAlign: 'left',
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default HomeProduct;
