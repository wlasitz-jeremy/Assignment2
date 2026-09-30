import { SymbolView } from "expo-symbols";
import { StyleSheet } from "react-native";

export default function HamburgerMenu() {
  return (
    <SymbolView style={styles.hamburgerMenu}
      name={{ ios: "menucard", android: "menu", web: "menu" }}
      tintColor="black"
      size={60}
    />
  );
}

const styles = StyleSheet.create({
  hamburgerMenu: {
    marginLeft: 25,
  },
});
