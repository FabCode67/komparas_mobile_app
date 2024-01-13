import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Dimensions } from 'react-native';


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
          updateText(); 
        }, 1000); 
      }
    }, 50);
  };

  useEffect(() => {
    updateText(); 
  }, []);

  return (
   
      <View  style={{
        width: width,
        height: height,
        flex: 1,
        flexDirection: 'column',
      }} className="bunnerPage w-full z-0 h-fit">
        <View
          style={{}}
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
          >
            <View
              id="mainDescription"
            >
              <Text
                style={{
                  fontSize: 20,
                  color: '#4287f5',
                  fontWeight: 'bold',
                }}
              >
                {displayText}
              </Text>
            </View>
          </View>
        </View>
      </View>
  );
};

export default HomePag;
