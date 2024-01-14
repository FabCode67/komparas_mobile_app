import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import TopNavBar from './TopNavBar';
import SideBar from './SideBar';
import Home from './contents/Home'; 
import Product from './contents/Product';
import Users from './contents/Users';
import Charts from './contents/Charts';
import Settings from './contents/Settings';
import Profile from './contents/Profile';
import Messages from './contents/Message';

const Dashboard = () => {
  const [selectedContent, setSelectedContent] = useState('home');

  const renderContent = () => {
    switch (selectedContent) {
      case 'home':
        return <Home />;
      case 'product':
        return <Product />;
      case 'users':
        return <Users />;
      case 'charts':
        return <Charts />;
      case 'profile':
        return <Profile />;
      case 'settings':
        return <Settings />;
      case 'messages':
        return <Messages />;
      default:
        return <Home />;
    }
  };

  return (
    <View>
      <View className="bg-red-700 min-h-screen">
        <TopNavBar />
        <SideBar onSelectContent={setSelectedContent} />
        <View className="bodyOfDashboard w-full  ml-[15%] bg-slate-500 h-screen p-2 ">
         <Text>{renderContent()}</Text> 
        </View>
      </View>
    </View>
  );
};

export default Dashboard;
