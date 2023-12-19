import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import App from "./App";

export default function Page() {
  return (
    <View className="bg-slate-200" >
      {/* <App /> */}
      <Link href="/users/1">User 1</Link>
    </View>
  );
}


