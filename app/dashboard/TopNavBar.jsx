import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import * as SecureStore from 'expo-secure-store';
import { router } from 'expo-router';

const TopNavBar = () => {
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')

    useEffect(() => {
        SecureStore.getItemAsync('first_name')
            .then((value) => {
                setFirstName(value)
            })
            .catch((error) => {
                console.log(error)
            })
        SecureStore.getItemAsync('last_name')
            .then((value) => {
                setLastName(value)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const navigateToHome = () => {
        router.push('/')
    }
    return (
        <View className="flex flex-row w-full justify-between bg-blue-700 p-5">
            <TouchableOpacity onPress={navigateToHome}>
                <Text className='text-white text-lg'>Dashboard</Text>
            </TouchableOpacity>
            <View>
                <Image
                    source={{
                        uri: 'https://example.com/profile-image.jpg',
                    }}
                />
                <Text className='text-white text-lg'>welcome admin,{ first_name && last_name ? JSON.parse(first_name) + ' ' + JSON.parse(last_name) : 'admin'}
                </Text>
            </View>
        </View>
    )
}

export default TopNavBar