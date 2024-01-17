
import React, { useState } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, Button } from 'react-native';
import { Link, router } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: '',
    profile_picture: '',
  });

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setFormData({ ...formData, profile_picture: result.uri });
    }
  };

  const handleSubmit = async () => {
    const data = new FormData();
    data.append('first_name', formData.first_name);
    data.append('last_name', formData.last_name);
    data.append('email', formData.email);
    data.append('password', formData.password);
    data.append('confirm_password', formData.confirm_password);
    data.append('profile_picture', {
      uri: formData.profile_picture,
      type: 'image/jpeg',
      name: 'profile_picture.jpg',
    });

    try {
      const response = await fetch('https://blue-angry-gorilla.cyclic.app/users/add', {
        method: 'POST',
        body: data,
      });
      const json = await response.json();
      if (json?.message === 'User added successfully') {
        router.push('/login/page')
      }
      else {
        alert(json?.message)
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <ScrollView>
      <View className="h-fit py-12 relative">
        <View className="flex basis-full min-h-screen relative">
          <View className=" basis-[100%] text-grey-900 flex justify-center m-auto">
            <View className="form">
              <View
                className="felx flex-col space-y-10"
              >
                <View className="flex justify-center m-auto">
                  <Text className="t text-3xl font-bold">KOMPARAS</Text>
                </View>
                <View className="flex flex-col space-y-7 w-[400px] laptop:px-0 px-8 ">
                  <View className="flex justify-center m-auto">
                    <Text className="text-2xl font-bold text-black">Log in</Text>
                  </View>
                  <View className="input-field relative">
                    <TextInput
                      placeholder='Enter your first name'
                      name='first_name'
                      value={formData.first_name}
                      onChangeText={text => setFormData({ ...formData, first_name: text })}
                      className="appearance-none w-full px-5 py-3 sm:max-w-xs text-base leading-6 text-gray-700 bg-white rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out"
                    />
                  </View>
                  <View className="input-field relative">
                    <TextInput
                      placeholder='Enter your last name'
                      name='last_name'
                      value={formData.last_name}
                      onChangeText={text => setFormData({ ...formData, last_name: text })}
                      className="appearance-none w-full px-5 py-3 sm:max-w-xs text-base leading-6 text-gray-700 bg-white rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out"
                    />
                  </View>
                  <View className="input-field relative">
                    <TextInput
                      placeholder='Enter your email'
                      name='email'
                      value={formData.email}
                      onChangeText={text => setFormData({ ...formData, email: text })}
                      className="appearance-none w-full px-5 py-3 sm:max-w-xs text-base leading-6 text-gray-700 bg-white rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out"
                    />
                  </View>
                  <View className="input-field relative">
                    <TextInput
                      placeholder='Enter your password'
                      name='password'
                      value={formData.password}
                      onChangeText={text => setFormData({ ...formData, password: text })}
                      className="appearance-none w-full px-5 py-3 sm:max-w-xs text-base leading-6 text-gray-700 bg-white rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out"
                    />
                  </View>
                  <View className="input-field relative">
                    <TextInput
                      placeholder='Confirm your password'
                      name='confirm_password'
                      value={formData.confirm_password}
                      onChangeText={text => setFormData({ ...formData, confirm_password: text })}
                      className="appearance-none w-full px-5 py-3 sm:max-w-xs text-base leading-6 text-gray-700 bg-white rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out"
                    />
                  </View>
                  <View className='w-full flex' style={{ justifyContent: 'center', }}>
                    <Button title="Pick an image from camera roll" onPress={pickImage} />
                    {formData.profile_picture && <Image source={{ uri: formData.profile_picture }} style={{ width: 400, height: 300 }} />}
                  </View>
                  <View className="input-field">
                    <TouchableOpacity onPress={handleSubmit} className="bg-blue-700 text-white rounded-md p-2 h-[54px] w-full ">
                      <Text className="text-center text-white text-xl font-bold">
                        Signup
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View className="dont_have_account flex flex-row justify-between text-lg w-full">
                    <Text className="text-black text-lg ">Don't have an account?</Text>
                    <Link
                      href="/signup/page"
                      className="text-blue-700 text-lg ">Sign upm</Link>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignupForm;
