import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const SubHome = () => {
  return (
    <View className="fewDescription w-full flex desktop:flex-row laptop:flex-row tablet:flex-row flex-col laptop:space-y-0 tablet:space-y-0 desktop:space-y-0 space-y-4 laptop:px-24 desktop:px-24 tablet:px-4 px-2  pb-10 laptop:space-x-10 tablet:space-x-5 desktop:space-x-10 space-x-0 text-gray-600 items-center">
    <View className='flex flex-col laptop:w-[70%] desktop:w-[70%] tablet:w-[70%] w-full justify-start  shadow-2xl p-6 space-y-5'>
      <Text className="text-4xl font-bold">Whatnnn is Komparas?</Text>
      <Text className="laptop:text-lg desktop:text-lg tablet:text-base text-sm font-bold">
        Komparas is a website where you can compare prices from different stores. We provide you
        with the best prices and the best quality. Our goals are to provide you with the bes prices and the best quality. We also want to
        make your shopping experience easier and more convenient.
      </Text>
    </View>
    <View className="buttons laptop:w-[30%] desktop:w-[30%] tablet:w-[30%] w-full shadow-2xl space-y-3 p-3 flex flex-col">
      <Text className="text-sm font-bold">Quality is never an accident; it is always the result of high intention, sincere effort, intelligent direction and skillful execution; it represents the wise choice of many
        alternatives.</Text>
      <Text className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Learn More
      </Text>
      <Text className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Contact Us
      </Text>
    </View>
  </View>
  )
}

export default SubHome