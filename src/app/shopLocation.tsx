import { StyleSheet, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NavigationBar from "../components/NavigationBar";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import CardShopMap from "../components/CardShopMap";

export default function shopLocation() {
    const router = useRouter();
    return(
       <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.header}>
                <Pressable onPress={() => router.back()}>
                    <Ionicons name="chevron-back" color="grey" size={60}/>
                </Pressable>
            </View>
            <View style={styles.mapContainer}>
                {/* <CardShopMap /> */}
            </View>
            <View style={styles.footer}>    
                <NavigationBar />
            </View >
       </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  header: {
    marginLeft: 25,
    zIndex: 1,
  },
  footer:{
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: "100%",
    justifyContent: 'flex-end',
    paddingBottom: 15,
    zIndex: 1,
  },
  mapContainer: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  }
});
