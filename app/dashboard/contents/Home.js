import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { getAllProducts } from '../../api/products';
import { getAllCategories } from '../../api/categories';
import { FontAwesome5 } from '@expo/vector-icons';
import { getAllUsers } from '../../api/users';


const Home = () => {
  const [productsData, setProductsData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);
  const [usersData, setUsersData] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const users = await getAllUsers();
      console.log(users.data?.users);
      setUsersData(users?.data?.users);
    }
    getUsers();
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      const products = await getAllProducts();
      setProductsData(products?.data?.products);
    }
    getProducts();
  }, []);

  useEffect(() => {
    const getCategories = async () => {
      const categories = await getAllCategories();
      console.log(categories,"++++++++++++");
      setCategoriesData(categories);
    }
    getCategories(); 
  }, []);
  useEffect(() => {
    const getUsers = async () => {
      const users = await getAllUsers();
      console.log(users.data?.users);
      setUsersData(users?.data?.users);
    }
    getUsers();
  }, []);
  return (
    <ScrollView>
      <View className="Two cards flex flex-row w-full justify-between">
        <View className="w-[30%] bg-white p-3 text-blue-700  font-bold jus flex items-center text-center ">
          <Text>Products</Text>
          <Text className="text-2xl">{productsData.length}</Text>
        </View>
        <View className="w-[30%] bg-white p-3 text-blue-700  font-bold jus flex items-center text-center ">
          <Text>Categories</Text>
          <Text className="text-2xl">{categoriesData.length}</Text>
        </View>
      </View>

    <View style={styles.container} className="mt-2">
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome to  Komparas</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Products</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {productsData.map((item, index) => (
            <View style={styles.productCard} key={index}>
              <Image
                source={{ uri: item?.product_image }}
                style={styles.productImage}
              />
              <Text style={styles.productName}>{(item?.product_name).slice(0, 15) + '...'}</Text>
              <Text style={styles.productPrice}>{item?.product_price}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Trending Categories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categoriesData.slice(0,3).map((item, index) => (
          <View style={styles.categoryButton}>
            <Text style={styles.categoryButtonText}>
              {item?.name}
            </Text>
          </View>
          ))}
        </ScrollView>
      </View>
    </View>

    <View style={styles.container} className="mt-2">
      <View style={styles.header}>
        <Text style={styles.headerText}>Featured users</Text>
      </View>
      <View style={styles.section}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {usersData.slice(0,2).map((item, index) => (
            <View style={styles.productCard} key={index}>
              <Image
                source={{ uri: item?.profile_picture }}
                style={styles.productImage}
              />
              <Text style={styles.productName}>{(item?.first_name).slice(0, 15) + '...'}</Text>
              <Text style={styles.productPrice}>{item?.last}</Text>
            </View>
          ))}
    </ScrollView>
      </View>
    </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  productCard: {
    marginRight: 16,
    borderRadius: 8,
    overflow: 'hidden',
    width: 120,
    backgroundColor: "gray",
    color: '#fff',
    padding: 2,
  },
  productImage: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 8,
    color: '#333',
  },
  productPrice: {
    fontSize: 12,
    color: '#666',
  },
  categoryButton: {
    marginRight: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },

});

export default Home;
