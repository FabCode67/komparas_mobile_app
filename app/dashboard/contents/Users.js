import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { FontAwesome5, } from '@expo/vector-icons';
import { getAllUsers } from '../../api/users';


const Users = () => {
  const [usersData, setUsersData] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const users = await getAllUsers();
      console.log(users.data?.users);
      setUsersData(users?.data?.users);
    }
    getUsers();
  }, []);

  const renderProductItem = ({ item, index }) => (
    <View className="w-full flex flex-col">
      <View className="flex flex-row space-x-3 p-2 text-xs justify-between bg-white">
        <Text>Add new product</Text>
      </View>
      <View className="w-full flex flex-row space-x-3 p-2 text-xs justify-between border-b-2 bg-slate-300 border-b-blue-700">
        <Text className='text-xs flex my-auto justify-center items-center text-center'>{index + 1}</Text>
        <Image
          source={{
            uri: item?.profile_picture,
          }}
          style={{ width: 40, height: 40, borderRadius: 50 }}
        />
        <Text className='text-xs flex my-auto justify-center items-center text-center'>{(item?.first_name)?.slice(0, 4) + '...'}</Text>
        <Text className='text-xs flex my-auto justify-center items-center text-center'>{(item?.last_name)?.slice(0, 5) + '...'}</Text>
        <Text className='text-xs flex my-auto justify-center items-center text-center'>{(item?.email)?.slice(0, 7) + '...'}</Text>
        <Text className='text-xs flex my-auto justify-center items-center text-center'>{(item?.role)}</Text>
        <TouchableOpacity>
          <Text className='text-xs my-auto justify-center items-center text-center space-x-2 flex'>
            <Text className='text-xs flex my-auto justify-center items-center text-center'>   </Text>
            <FontAwesome5 name="trash" size={15} color="black" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

      return (
      <View className="w-full flex flex-col">
        <View className="w-full flex flex-row space-x-3 p-2 text-xs justify-between bg-white">
          <Text className='text-xs flex my-auto justify-center items-center text-center'>Id</Text>
          <Text className='text-xs flex my-auto justify-center items-center text-center' >Profile</Text>
          <Text className='text-xs flex my-auto justify-center items-center text-center' >F.name</Text>
          <Text className='text-xs flex my-auto justify-center items-center text-center' >L.Name</Text>
          <Text className='text-xs flex my-auto justify-center items-center text-center' >Email</Text>
          <Text className='text-xs flex my-auto justify-center items-center text-center' >Role</Text>
          <Text className='text-xs flex my-auto justify-center items-center text-center' >Action</Text>
        </View>
        <FlatList
          data={usersData}
          renderItem={renderProductItem}
          keyExtractor={index => index.toString()}
        />
      </View>
  
  );
};


export default Users;
