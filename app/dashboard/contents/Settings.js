import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, Alert, Appearance } from 'react-native';
import { router } from 'expo-router';

const Settings = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const [isNotificationsEnabled, setNotificationsEnabled] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);

    // Use the useColorScheme hook to get the current color scheme
    const colorScheme = Appearance.getColorScheme();

    // Use colorScheme to conditionally apply dark mode styles
    // For simplicity, let's toggle a class on the root View
    // Replace this with your actual styling logic
    if (colorScheme === 'dark') {
      // Apply dark mode styles
    } else {
      // Apply light mode styles
    }
  };

  const toggleNotifications = () => {
    setNotificationsEnabled(!isNotificationsEnabled);
  };

  const goToAccountSettings = () => {
    Alert.alert('Go to Account Settings');
    router.push('/account/page');
  };

  const handleLogout = () => {
    Alert.alert('Logout');
    router.replace('/');
  };

  return (
    <View className="flex-1 p-4 bg-gray-100" style={{ width: 300 }}>
      <Text className="text-2xl font-bold mb-4">Settings</Text>

      <View className="flex-row items-center justify-between bg-white p-4 rounded-md mb-4">
        <Text className="text-lg">Dark Mode</Text>
        <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
      </View>

      <View className="bg-white p-4 rounded-md mb-4">
        <Text className="text-lg font-bold mb-2">Notification Settings</Text>
        <View className="flex-row items-center justify-between">
          <Text className="text-base">Receive Notifications</Text>
          <Switch
            value={isNotificationsEnabled}
            onValueChange={toggleNotifications}
          />
        </View>
      </View>

      <TouchableOpacity
        className="bg-white p-4 rounded-md mb-4"
        onPress={goToAccountSettings}
      >
        <Text className="text-lg font-bold mb-2">Account Settings</Text>
        <Text className="text-base text-gray-600">Manage your account details</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-red-500 p-4 rounded-md"
        onPress={handleLogout}
      >
        <Text className="text-white text-center text-lg font-bold">Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;
