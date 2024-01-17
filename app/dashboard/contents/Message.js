import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';

const Messages = () => {
  const [data, setData] = React.useState();

  const getMessages = async () => {
    const response = await fetch('https://blue-angry-gorilla.cyclic.app/messages');
    const data = await response.json();
    setData(data);
  };

  const handleDelete = async (id) => {
    await fetch(`https://blue-angry-gorilla.cyclic.app/messages/${id}`, {
      method: 'DELETE',
    });
    getMessages();
  };

  React.useEffect(() => {
    getMessages();
  }, []);

  const navigateMessage = (sender) => router.push(`/chat/${sender}`);
  const renderMessageItem = ({ item }) => (
    <TouchableOpacity
      className="bg-white p-4 mb-2 rounded-md"
      onPress={() => navigateMessage(item.email)}
    >
      <Text className="text-lg font-bold">{item.name}</Text>
      <Text className="text-lg font-bold">{item.email}</Text>
      <Text className="text-base text-gray-600">{item.message}</Text>
      <TouchableOpacity className="bg-red-500 p-2 rounded-md" style={{ width: 30 }} onPress={()=>handleDelete(item._id)}>
        <FontAwesome5 name="trash" size={15} color="white" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 p-4 bg-gray-100" style={{ width: 300 }}>
      <Text className="text-2xl font-bold mb-4">Messages</Text>
      <FlatList
        data={data?.reverse()} 
        renderItem={renderMessageItem}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};

export default Messages;
