import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Dimensions } from 'react-native';
import SubHome from '../SubHome';
import Footer from '../Footer';

const { width, height } = Dimensions.get('window');

const HomePag = () => {
  const [displayText, setDisplayText] = useState('');

  const fullText =
    'WELCOME TO KOMPARAS\nTHE BEST PLACE TO COMPARE PRICES\nWE PROVIDE YOU WITH THE BEST PRICES AND BEST QUALITY\nWe also want to make your shopping experience easier and more convenient';

  const updateText = () => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(intervalId);
        setTimeout(() => {
          setDisplayText('');
          index = 0;
          updateText(); // Restart the animation
        }, 1000); // Adjust the delay before restarting the animation
      }
    }, 50); // You can adjust the interval to control the speed
  };

  useEffect(() => {
    updateText(); // Start the initial animation
  }, []);

  return (
    <ScrollView
      style={{
        width: width,
        height: height,
        flex: 1,
        flexDirection: 'column',
      }}
      className="w-full min-h-screen bg-gray-950 flex flex-col"
    >
      <View className="bunnerPage w-full z-0 h-fit">
        <View
          style={{}}
          className=" top-0 left-0 w-full h-sceen transition-opacity duration-500"
        >
          <Image
            source={require('../assets/nat.jpg')}
            style={{
              width: width,
              height: height,
              resizeMode: 'cover',
            }}
          />
          <View
            style={{
              position: 'absolute',
              top: height / 2.5,
              left: width / 50,
              fontSize: 50,
            }}
            className="description absolute top-1/2 left-1/2 w-full  px-9 transform -translate-x-1/2 -translate-y-1/2 text-white laptop:text-5xl desktop:text-5xl text-justify tablet:text-4xl text-xl flex  leading-loosefont-bold"
          >
            <View
              className="mainDescription w-full flex flex-col space-y-3 items-center justify-center"
              id="mainDescription"
            >
              <Text
                style={{
                  fontSize: 20,
                  color: '#4287f5',
                  fontWeight: 'bold',
                }}
                className="content text-6xl font-bold text-blue-700"
              >
                {displayText}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <SubHome />
      <Footer />
    </ScrollView>
  );
};

export default HomePag;
