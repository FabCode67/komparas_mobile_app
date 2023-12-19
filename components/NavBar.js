import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 


const NavBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <TouchableOpacity style={styles.logoButton}>
          <Text style={styles.logoButton}>KOMPARAS</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuButton}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <Text>About</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <Text>Contact</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <View style={styles.iconContainer}>
          <FontAwesome5 name="heart" size={24} color="black" />
            <Text style={styles.iconBadge}>9+</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <View style={styles.iconContainer}>
          <FontAwesome5 name="cart-arrow-down" size={24} color="black" />
            <Text style={styles.iconBadge}>9+</Text>
          </View>
        </TouchableOpacity>
      </View>
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
    marginTop:20,
    position:'fixed',
  },
  logoContainer: {
    flex: 1,
  },
  logoButton: {
    color:'white',
    fontSize: 20,
  },
  menuContainer: {
    flex: 2,
    flexDirection: 'row',
    gap:6,
    width:100,
    alignItems:'center',
    justifyContent:'center',
    display:'flex'
    // justifyContent: 'space-between',
    // display: 'none', // Hidden on smaller screens
  },
  menuButton: {
    // backgroundColor: 'white',
    fontSize:15
  },
  iconsContainer: {
    flexDirection: 'row',
    marginLeft: 6,
    float: 'right',
    gap: 10,
  },
  iconButton: {
position:'relative',
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
