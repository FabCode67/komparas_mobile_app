import { StatusBar } from 'expo-status-bar';
import { Text, View , ScrollView} from 'react-native';
import NavBar from './app/components/NavBar';
import HomePag from './app/HomePage';
export default function App() {
  return (
    <View>
      <NavBar />
      <ScrollView>
    <View className="bg-slate-400 h-screen justify-center items-center">
    <HomePag />
      <StatusBar style="auto" />
    </View>
    </ScrollView>
    </View>

  );
}

