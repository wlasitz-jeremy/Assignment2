import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HamburgerMenu() {
  return (
      <Ionicons name="menu" size={60} color="black" style={styles.hamburgerMenu} />
  );
}

const styles = StyleSheet.create({
  hamburgerMenu: {
    marginLeft: 25,
  },
});
