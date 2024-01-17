import React from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const Chat = () => {
  const { sender } = useLocalSearchParams();

  const [messages, setMessages] = React.useState([
    { id: '1', sender: 'John Doe', message: 'Hey, how are you?' },
    { id: '2', sender: 'Jane Doe', message: 'Meeting at 2 PM' },
    // Add more message objects as needed
  ]);

  const renderChatItem = ({ item }) => (
    <View className="mb-2">
      <Text className="font-bold">{item.sender}</Text>
      <Text>{item.message}</Text>
    </View>
  );

  const handleSendMessage = (text) => {
    const newMessage = { id: String(messages.length + 1), sender, message: text };
    setMessages([...messages, newMessage]);
  };

  return (
    <View className="flex-1 p-4 bg-gray-100">
      <Text className="text-2xl font-bold mb-4">{sender}</Text>

      <FlatList
        data={messages}
        renderItem={renderChatItem}
        keyExtractor={(item) => item.id}
        className="flex-1"
      />

      <View className="flex-row items-center mt-2">
        <TextInput
          className="flex-1 p-2 border rounded-md mr-2"
          placeholder="Type a message..."
          // Add onChangeText and value props as needed
        />
        <TouchableOpacity
          className="bg-blue-500 p-2 rounded-md"
          onPress={() => handleSendMessage('Your typed message')}
        >
          <Text className="text-white">Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Chat;
