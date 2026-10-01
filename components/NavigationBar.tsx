import { View, StyleSheet } from "react-native";
import { SymbolView } from "expo-symbols";
import { Pressable } from "react-native";

export default function NavigationBar() {
  return (
    <View style={styles.footer}>
        <Pressable>
        </Pressable>
        <SymbolView
            name={{ ios: "house", android: "home", web: "home" }}
            tintColor="black"
          />

          <Pressable>
          </Pressable>
          <SymbolView
            name={{ ios: "camera", android: "camera", web: "camera" }}
            tintColor="black"
          />

          <Pressable>
          </Pressable>
          <SymbolView
            name={{ ios: "magnifyingglass", android: "search", web: "search" }}
            tintColor="black"
          />

          <Pressable>
          </Pressable>
          <SymbolView
            name={{ ios: "book", android: "book", web: "book" }}
            tintColor="black"
          />
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
