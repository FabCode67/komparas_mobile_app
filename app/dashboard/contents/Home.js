import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome to  Komparas</Text>
      </View>

      {/* Featured Products Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Products</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {/* Sample Product Cards */}
          <View style={styles.productCard}>
            <Image
              source={{ uri: 'https://example.com/product1.jpg' }}
              style={styles.productImage}
            />
            <Text style={styles.productName}>Product 1</Text>
            <Text style={styles.productPrice}>$99.99</Text>
          </View>

          <View style={styles.productCard}>
            <Image
              source={{ uri: 'https://example.com/product2.jpg' }}
              style={styles.productImage}
            />
            <Text style={styles.productName}>Product 2</Text>
            <Text style={styles.productPrice}>$79.99</Text>
          </View>

          {/* Add more product cards as needed */}
        </ScrollView>
      </View>

      {/* Trending Categories Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Trending Categories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {/* Sample Category Buttons */}
          <View style={styles.categoryButton}>
            <Text style={styles.categoryButtonText}>Electronics</Text>
          </View>

          <View style={styles.categoryButton}>
            <Text style={styles.categoryButtonText}>Clothing</Text>
          </View>
          <View style={styles.categoryButton}>
            <Text style={styles.categoryButtonText}>Home</Text>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    backgroundColor:"red"
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
