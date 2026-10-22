import { View, StyleSheet } from "react-native";
import { Pressable } from "react-native";
import { useRouter, usePathname } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function NavigationBar() {
  const router = useRouter();
  const pathname = usePathname();
// Navigation bar component that provides quick access to different pages using pressable icons. Highlights the current page based on the pathname.
  return (
    <View style={styles.footer}>
      <Pressable key="home" onPress={() => { router.replace("/")}}>
        <Ionicons name="home-outline" size={24} color="black" />
      </Pressable>

      <Pressable key="cardScanner" onPress={() => { router.replace("/cardScanner")}}>
        <Ionicons name={pathname === "/cardScanner" ? "camera" : "camera-outline"} size={24} color="black" />
      </Pressable>

      <Pressable key="universalSearch" onPress={() => { router.replace("/universalSearch")}}>
        <Ionicons name={pathname === "/universalSearch" ? "search" : "search-outline"} size={24} color="black" />
      </Pressable>
      
      <Pressable key="index" onPress={() => { router.replace("/collections/collectionsIndex")}}>
        <Ionicons name="book-outline" size={24} color="black" />
      </Pressable>
    </View>
  );
}
// Styles for the navigation bar component.
const styles = StyleSheet.create({
  footer: {
    height: 78.5,
    width: "80%",
    backgroundColor: "#E2E1F4",
    borderWidth: 1,
    marginBottom: 25,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
  },
});
