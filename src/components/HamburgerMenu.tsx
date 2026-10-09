import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { usePathname, useRouter } from "expo-router";

// Initialize the isActive Prop
type HamburgerMenuProps = {
  isActive?: boolean;
};

export default function HamburgerMenu({
  isActive = false,
}: HamburgerMenuProps) {
  return (
    <Pressable
      // WIP need to get menu to got back to the previous pages
      key="burgerMainMenu"
      onPress={() => {
        router.push("/(tabs)/burgerMainMenu");
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
