import { View, StyleSheet } from "react-native";
import { Pressable } from "react-native";
import { useRouter, usePathname } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function NavigationBar() {
  const router = useRouter();
  const pathname = usePathname();
  const tabs = [
    { icon: "home", route: "/", outline: "home-outline" },
    { icon: "camera", route: "/cardScanner", outline: "camera-outline" },
    { icon: "search", route: "/universalSearch", outline: "search-outline" },
    { icon: "book", route: "/collections", outline: "book-outline" },
  ] as const;

  return (
    <View style={styles.footer}>
      <Pressable key="home" onPress={() => { router.replace("/")}}>
        <Ionicons name="home" size={24} color="black" />
      </Pressable>

      <Pressable key="cardScanner" onPress={() => { router.replace("/cardScanner")}}>
        <Ionicons name={pathname === "/cardScanner" ? "camera" : "camera-outline"} size={24} color="black" />
      </Pressable>

      <Pressable key="universalSearch" onPress={() => { router.replace("/universalSearch")}}>
        <Ionicons name={pathname === "/universalSearch" ? "search" : "search-outline"} size={24} color="black" />
      </Pressable>
      
      <Pressable key="index" onPress={() => { router.replace("/index")}}>
        <Ionicons name="book" size={24} color="black" />
      </Pressable>

   {/* {tabs.map((tab) => (
  <Pressable
    key={tab.route}
    onPress={() => {
      router.replace(tab.route);
      console.log(`Trying to navigate to ${tab.route}`);
      console.log(`Current pathname is ${pathname}`);
    }}
  >
    <Ionicons
      name={
        pathname === tab.route ? tab.icon : tab.outline
      }
      size={24}
      color="black"
    />
  </Pressable>
))} */}
    </View>
  );
}

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
