import React from 'react'
import { View, Text, Image, TextInput, ScrollView, Button } from 'react-native';
import { Dimensions } from 'react-native';
const Footer = () => {
    const [userName, setUserName] = React.useState('');
    const [email, setUserEmail] = React.useState('');
    return (
        <View className="bg-gray-800 mb-12">
            <View className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <View className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <View className="grid grid-cols-2 gap-8 xl:col-span-2">
                        <View className="md:grid md:grid-cols-2 md:gap-8">
                            <View>
                                <Text className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                                    Mission
                                </Text>
                                <Text className="mt-4 text-base leading-6 text-gray-300">
                                    Our mission is to provide the best comparison service for our customers, helping them make informed decisions and save money.
                                </Text>
                            </View>
                            <View className="mt-12 md:mt-0">
                                <Text className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                                    Useful Viewnks
                                </Text>
                                <View className="mt-4">
                                    <View>
                                        <Text href="#" className="text-base leading-6 text-gray-300 hover:text-white">
                                            About Us
                                        </Text>
                                    </View>
                                    <View className="mt-4">
                                        <Text href="#" className="text-base leading-6 text-gray-300 hover:text-white">
                                            Contact Us
                                        </Text>
                                    </View>
                                    <View className="mt-4">
                                        <Text href="#" className="text-base leading-6 text-gray-300 hover:text-white">
                                            Privacy PoViewcy
                                        </Text>
                                    </View>
                                    <View className="mt-4">
                                        <Text href="#" className="text-base leading-6 text-gray-300 hover:text-white">
                                            Terms of Service
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View className="md:grid md:grid-cols-2 md:gap-8">
                            <View>
                                <Text className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                                    Follow Us
                                </Text>
                                <View className="mt-4">
                                    <View>
                                        <Text href="#" className="text-base leading-6 text-gray-300 hover:text-white">
                                            Facebook
                                        </Text>
                                    </View>
                                    <View className="mt-4">
                                        <Text href="#" className="text-base leading-6 text-gray-300 hover:text-white">
                                            Twitter
                                        </Text>
                                    </View>
                                    <View className="mt-4">
                                        <Text href="#" className="text-base leading-6 text-gray-300 hover:text-white">
                                            Instagram
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View className="mt-12 md:mt-0">
                                <Text className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                                    Newsletter
                                </Text>
                                <Text className="mt-4 text-base leading-6 text-gray-300">
                                    Sign up for our newsletter to get the latest news and updates.
                                </Text>
                                <View className="mt-4 sm:flex">
                                    <TextInput
                                        placeholder='Enter your email'
                                        value={email}
                                        // onChangeText={setUserEmail}
                                        className="appearance-none w-full px-5 py-3 sm:max-w-xs text-base leading-6 text-gray-700 bg-white rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out"
                                    />
                                    <View className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                                        <Text type="submit" className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outViewne-none focus:shadow-outViewne-blue active:bg-blue-600 transition duration-150 ease-in-out">
                                            Subscribe
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View className="mt-12 xl:mt-0">
                        <Text className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                            Other Information
                        </Text>
                        <Text className="mt-4 text-base leading-6 text-gray-300">
                            Lorem ipsum dolor sit amet, consectetur adipiscing eViewt. Sed euismod, nisi quis bibendum bibendum, veViewt sapien bibendum ipsum, euismod bibendum sapien vel sapien. Sed euismod, nisi quis bibendum bibendum, veViewt sapien bibendum ipsum, euismod bibendum sapien vel sapien.
                        </Text>
                    </View>
                </View>
                <View className="mt-12 border-t border-gray-700 pt-8">
                    <Text className="text-base leading-6 text-gray-400 xl:text-center">
                        &copy; 2023 Fab, Yvette and Victor. All rights reserved.
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default Footer