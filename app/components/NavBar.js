import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';
import { router } from 'expo-router';

const NavBar = () => {
  const [result, setResult] = useState('');
  const [token, setToken] = useState('');
  const [profile_picture, setUserProfile] = useState('')
  useEffect(() => {
    async function getValueFor(key) {
      const storedResult = await SecureStore.getItemAsync(key);
      setResult(storedResult);
    }
    async function getToken(key) {
      const storedToken = await SecureStore.getItemAsync(key);
      setToken(storedToken);
    }
    async function getProfile(key) {
      const storedProfile = await SecureStore.getItemAsync(key);
      setUserProfile(storedProfile);
    }
    getProfile('profile_picture');
    getToken('token');
    getValueFor('result');

  }, []);
  const logout = async () => {
    await SecureStore.deleteItemAsync('result');
    await SecureStore.deleteItemAsync('user');
    await SecureStore.deleteItemAsync('profile_picture');
    router.push('/login/page');
  }

  const navigateToContact = () => {
    router.push('/messages/page');
  }

  const navigateToCart = () => {
    router.push('/cart/page');
  }

  const navigateToProfile = () =>{
    router.push('/account/page')
  }
  const navigateToHome = () =>{
    router.push('/')
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <TouchableOpacity style={styles.logoButton} onPress={navigateToHome}>
          <Text style={styles.logoButton}>KOMPARAS</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity onPress={navigateToContact} style={styles.menuButton}>
          <Text>Contact</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <TouchableOpacity onPress={logout}>
            {result !== 'success' ? <Text>Login</Text> : <Text>Logout</Text>}
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={navigateToCart}>
          <View style={styles.iconContainer}>
            <FontAwesome5 name="cart-arrow-down" size={24} color="black" />
            <Text style={styles.iconBadge}>9+</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={navigateToProfile} style={
        {
          width: 50,
          height: 50,
          borderRadius: 50,
          backgroundColor: 'white',
          overflow: 'hidden',
          justifyContent: 'center',
          alignItems: 'center',
        }
      }>
        <Image
          source={{
            uri: profile_picture ? JSON.parse(profile_picture): 'https://i.fbcd.co/products/original/9847a67d09a39d0ef02f4cacc70490cdbe8cae2a1f7c9a2e5bf23e9a126137ec.jpg',
          }} style={{ width: 50, height: 50 }}
        />
      </TouchableOpacity >
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 0,
    borderBottomWidth: 2,
    borderBottomColor: 'gray',
    backgroundColor: '#4287f5',
    position: 'fixed',
  },
  logoContainer: {
    flex: 1,
  },
  logoButton: {
    color: 'white',
    fontSize: 20,
  },
  menuContainer: {
    flex: 2,
    flexDirection: 'row',
    gap: 24,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
  },
  menuButton: {
    fontSize: 15
  },
  iconsContainer: {
    flexDirection: 'row',
    marginLeft: 6,
    marginRight: 12,
    float: 'right',
    gap: 10,
  },
  iconButton: {
    position: 'relative',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBadge: {
    marginLeft: 4,
    fontSize: 12,
    position: 'absolute',
    backgroundColor: 'red',
    color: 'white',
    borderRadius: 10,
    padding: 2,
    top: -10,
    right: -3,
  },
});

export default NavBar;
