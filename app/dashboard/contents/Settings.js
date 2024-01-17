import React from 'react';
import { View, Text, Switch, TouchableOpacity } from 'react-native';

const Settings = () => {
  return (
    <View className="flex-1 p-4 bg-gray-100">
      <Text className="text-2xl font-bold mb-4">Settings</Text>

      {/* Toggle Dark Mode */}
      <View className="flex-row items-center justify-between bg-white p-4 rounded-md mb-4">
        <Text className="text-lg">Dark Mode</Text>
        <Switch
          value={false} // Set the actual state of dark mode here
          onValueChange={() => {}}
        />
      </View>

      {/* Notification Settings */}
      <View className="bg-white p-4 rounded-md mb-4">
        <Text className="text-lg font-bold mb-2">Notification Settings</Text>
        <View className="flex-row items-center justify-between">
          <Text className="text-base">Receive Notifications</Text>
          <Switch
            value={true} // Set the actual state of notifications here
            onValueChange={() => {}}
          />
        </View>
      </View>

      {/* Account Settings */}
      <TouchableOpacity
        className="bg-white p-4 rounded-md mb-4"
        onPress={() => alert('Go to Account Settings')}
      >
        <Text className="text-lg font-bold mb-2">Account Settings</Text>
        <Text className="text-base text-gray-600">Manage your account details</Text>
      </TouchableOpacity>

      {/* Logout Button */}
      <TouchableOpacity
        className="bg-red-500 p-4 rounded-md"
        onPress={() => alert('Logout')}
      >
        <Text className="text-white text-center text-lg font-bold">Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;
