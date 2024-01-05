
import React from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, Button } from 'react-native';
import { Link, router } from 'expo-router';
import * as SecureStore from 'expo-secure-store';


const LoginForm = () => {
  const [email, setUserEmail] = React.useState('');
  const [password, setUserPassword] = React.useState('');
  async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
  }
  
  const login = async () => {
    const response = await fetch(`https://blue-angry-gorilla.cyclic.app/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
    const json = await response.json();

    console.log("json-------------------------", json);
    if (json.message === 'Login successful') {
      await save('result', 'success');
      await save('token', JSON.stringify(json?.token));
      await save('profile_picture', JSON.stringify(json?.user?.profile_picture))
      if (json?.user?.role === 'admin') {
        await save('admin', 'true');
        router.push('/dashboard/page');
      }
      else {
        await save('admin', 'false');
        router.push('/');
      }
    }
    else {
      alert("Login failed")
    }
  }
  return (
    <View className="h-screen relative">
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
                    placeholder='Enter your email'
                    value={email}
                    onChangeText={text => setUserEmail(text)}
                    className="appearance-none w-full px-5 py-3 sm:max-w-xs text-base leading-6 text-gray-700 bg-white rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out"
                  />
                </View>
                <View className="input-field relative">
                  <TextInput
                    placeholder='Enter your password'
                    value={password}
                    onChangeText={text => setUserPassword(text)}
                    className="appearance-none w-full px-5 py-3 sm:max-w-xs text-base leading-6 text-gray-700 bg-white rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out"
                  />
                </View>
                <View className="input-field">
                  <TouchableOpacity onPress={login} className="bg-blue-700 text-white rounded-md p-2 h-[54px] w-full ">
                    <Text className="text-center text-white text-xl font-bold">
                      Log in
                    </Text>
                  </TouchableOpacity>
                </View>
                <View className="dont_have_account flex flex-row justify-between text-lg w-full">
                  <Text className="text-black text-lg ">Don't have an account?</Text>
                  <Link
                    href="/signup/page"
                    className="text-blue-700 text-lg ">Sign up</Link>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginForm;
