import { View, ScrollView } from "react-native";

import NavBar from "./components/NavBar";
import SubHome from "./SubHome";
import Footer from "./users/Footer";
import HomePag from "./HomePage";
import HomeProduct from "./HomeProducts";

export default function Page() {
  return (
    <ScrollView>
    <View className="bg-slate-200" >
      <NavBar />
      <HomePag />
      <HomeProduct />
      <SubHome />
      <Footer />
    </View>
    </ScrollView>
  );
}


