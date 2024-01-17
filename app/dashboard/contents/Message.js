import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

const data = [
  { id: '1', sender: 'John Doe', message: 'Hey, how are you?' },
  { id: '2', sender: 'Jane Doe', message: 'Meeting at 2 PM' },
  // Add more message objects as needed
];


const Messages = () => {
  const navigateMessage = (sender) => router.push(`/chat/${sender}`);
  const renderMessageItem = ({ item }) => (
    <TouchableOpacity
      className="bg-white p-4 mb-2 rounded-md"
      onPress={() => navigateMessage(item.sender)}
    >
      <Text className="text-lg font-bold">{item.sender}</Text>
      <Text className="text-base text-gray-600">{item.message}</Text>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 p-4 bg-gray-100">
      <Text className="text-2xl font-bold mb-4">Messages</Text>

      <FlatList
        data={data}
        renderItem={renderMessageItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Messages;
