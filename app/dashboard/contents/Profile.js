import { View, Text, Image, TouchableOpacity } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import React from 'react';
const Profile = () => {
  const [profile_picture, setUserProfile] = React.useState('')
    React.useEffect(() => {
        async function getProfile(key) {
            const storedProfile = await SecureStore.getItemAsync(key);
            setUserProfile(storedProfile);
        }
        getProfile('profile_picture');
    }, []);
  return (
    <View className="flex-1 justify-center items-center bg-gray-100 w-72">
      <Image
        source={{ 
          uri: profile_picture ? JSON.parse(profile_picture) : 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
        }}
        className="h-32 w-32 rounded-full mb-4"
      />
      <Text className="text-2xl font-bold mb-2">John Doe</Text>
      <Text className="text-gray-500 mb-4">Web Developer</Text>

      <View className="bg-white p-4 rounded-md shadow-md w-4/5">
        <Text className="text-lg font-bold mb-2">About Me</Text>
        <Text className="text-gray-600">
          I'm a passionate web developer with a focus on creating clean and efficient code.
        </Text>
      </View>
      <TouchableOpacity className="mt-4 bg-blue-500 p-2 rounded-md" onPress={() => alert('Edit Profile')}>
        <Text className="text-white">Edit Profile</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Profile