import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

// Hamburger menu component that navigates to the burger main menu page when pressed
export default function HamburgerMenu() {
  const router = useRouter();
  return (
    <Pressable
      key="burgerMainMenu"
      onPress={() => {
        router.push("/burgerMainMenu");
      }}
    >
      <Ionicons
        name="menu"
        size={60}
        color="black"
        style={styles.hamburgerMenu}
      />
    </Pressable>
  );
}

// Styles for the hamburger menu icon
const styles = StyleSheet.create({
  hamburgerMenu: {
    marginLeft: 25,
  },
});
