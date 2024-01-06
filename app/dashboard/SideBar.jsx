import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import * as SecureStore from 'expo-secure-store';

const SideBar = ({ onSelectContent }) => {
    const [profile_picture, setUserProfile] = useState('')
    useEffect(() => {
        async function getProfile(key) {
            const storedProfile = await SecureStore.getItemAsync(key);
            setUserProfile(storedProfile);
        }
        getProfile('profile_picture');
    }, []);

    const logout = async () => {
        await SecureStore.deleteItemAsync('result');
        await SecureStore.deleteItemAsync('user');
        await SecureStore.deleteItemAsync('profile_picture');
        router.push('/login/page');
    }
    return (
        <View className=" flex flex-col absolute bg-black w-[15%] h-screen top-[7.7%] py-3">
            <TouchableOpacity style={styles.sidebarItem} onPress={() => onSelectContent('home')}>
                <FontAwesome5 name="home" size={20} style={styles.sidebarIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.sidebarItem} onPress={() => onSelectContent('charts')}>
                <FontAwesome5 name="chart-bar" size={20} style={styles.sidebarIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.sidebarItem} onPress={() => onSelectContent('product')}>
                <FontAwesome5 name="product-hunt" size={20} style={styles.sidebarIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.sidebarItem} onPress={()=> onSelectContent('users')}>
                <FontAwesome5 name="users" size={20} style={styles.sidebarIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.sidebarItem} onPress={() => onSelectContent('messages')}>
                <MaterialIcons name="message" size={20} style={styles.sidebarIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.sidebarItem} className="mt-80" onPress={() => onSelectContent('settings')}>
                <FontAwesome5 name="cog" size={20} style={styles.sidebarIcon} />
            </TouchableOpacity>
            <TouchableOpacity className="profilePic flex justify-center mx-auto mb-5" onPress={() => onSelectContent('profile')}>
                <Image
                    source={{
                        uri: profile_picture ? JSON.parse(profile_picture) : 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
                    }}
                    style={{
                        width: 45,
                        height: 45,
                        resizeMode: 'cover',
                        borderRadius: 50,
                    }}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.sidebarItem} onPress={logout}>
                <FontAwesome5 name="sign-out-alt" size={20} style={styles.sidebarIcon} />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
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
export default SideBar