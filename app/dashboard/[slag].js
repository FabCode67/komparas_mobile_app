import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

const Dashboard = () => {
  return (
    <View >
      <View className="bg-red-700 min-h-screen">
        <View className="flex flex-row w-full bg-blue-700 p-4">
          <TouchableOpacity style={styles.logoContainer}>
            <Text style={styles.logoText}>Dashboard</Text>
          </TouchableOpacity>
          <View style={styles.profileContainer}>
            <Image
              source={{
                uri: 'https://example.com/profile-image.jpg',
              }}
              style={styles.profileImage}
            />
            <Text style={styles.profileText}>John Doe</Text>
          </View>
        </View>
        <View className=" w-full ml-[15%] bg-slate-500 h-screen p-2 text-center items-center flex ">
          <Text style={styles.bodyText}>Welcome to your Dashboard!</Text>
        </View>
        <View className=" flex flex-col absolute bg-black w-[15%] h-screen top-[7.3%]">
          <TouchableOpacity style={styles.sidebarItem}>
            <FontAwesome5 name="home" size={20} style={styles.sidebarIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarItem}>
            <FontAwesome5 name="chart-bar" size={20} style={styles.sidebarIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarItem}>
            <FontAwesome5 name="product-hunt" size={20} style={styles.sidebarIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarItem}>
            <FontAwesome5 name="users" size={20} style={styles.sidebarIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarItem}>
            <MaterialIcons name="message" size={20} style={styles.sidebarIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarItem} className="mt-16">
            <FontAwesome5 name="cog" size={20} style={styles.sidebarIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarItem}>
            <FontAwesome5 name="user" size={20} style={styles.sidebarIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  topNavbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#4287f5',
  },
  logoContainer: {
    flex: 1,
  },
  logoText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 8,
  },
  profileText: {
    color: 'white',
    fontSize: 16,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  bodyText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sidebar: {
    width: 80,
    backgroundColor: '#333',
    paddingTop: 20,
    alignItems: 'center',
  },
  sidebarItem: {
    alignItems: 'center',
    marginBottom: 20,
  },
  sidebarIcon: {
    color: 'white',
  },
  sidebarText: {
    color: 'white',
    fontSize: 12,
    marginTop: 5,
  },
});

export default Dashboard;
