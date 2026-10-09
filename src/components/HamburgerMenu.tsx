import { Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

// Initialize the isActive Prop
type HamburgerMenuProps = {
  isActive?: boolean;
};

export default function HamburgerMenu({ isActive = false }) {
  return (
    <Pressable
      // WIP need to get menu to got back to the previous pages
      key="burgerMainMenu"
      onPress={() => {
        if (isActive) {
          router.back();
        } else {
          router.push("/(tabs)/burgerMainMenu");
        }
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

const styles = StyleSheet.create({
  hamburgerMenu: {
    marginLeft: 25,
  },
});
