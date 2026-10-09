import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { usePathname, useRouter } from "expo-router";



export default function HamburgerMenu() {
  const router = useRouter();  
  return (
    <Pressable
      key="burgerMainMenu"
      onPress={() => { router.push("/(tabs)/burgerMainMenu")}}>
      <Ionicons
        name="menu"
        size={60}
        color="black"
        style={styles.hamburgerMenu}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  hamburgerMenu: {
    marginLeft: 25,
  },
});
