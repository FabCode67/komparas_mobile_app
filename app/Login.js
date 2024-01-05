
import React from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, Button } from 'react-native';



const LoginForm = () => {
  const [email, setUserEmail] = React.useState('');
  const [password, setUserPassword] = React.useState('');

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
                    className="appearance-none w-full px-5 py-3 sm:max-w-xs text-base leading-6 text-gray-700 bg-white rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out"
                  />
                </View>
                <View className="input-field relative">
                  <TextInput
                    placeholder='Enter your password'
                    value={password}
                    className="appearance-none w-full px-5 py-3 sm:max-w-xs text-base leading-6 text-gray-700 bg-white rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out"
                  />
                </View>
                <View className="input-field">
                  <TouchableOpacity className="bg-blue-700 text-white rounded-md p-2 h-[54px] w-full ">
                    <Text className="text-center text-white text-xl font-bold">
                      Log in
                    </Text>
                  </TouchableOpacity>
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
