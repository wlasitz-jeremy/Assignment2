import { Text, View, StyleSheet, Pressable } from "react-native";
import { usePathname, useRouter } from "expo-router";

export default function CollectionsNavigation() {
    const router = useRouter();
    const pathname = usePathname();

    return (
      // Collections navigation header with stack navigational links to Collections, Decks, and Explore pages
      // Using the useRouter and usePathname hooks from expo-router to handle navigation and determine the active route for styling purposes
        <View style={styles.collectionsHeader}>
          <Pressable onPress={() => router.replace("/(tabs)/collections/collectionsIndex")}>
            <Text style={[styles.title, pathname === "/collections/collectionsIndex" ? styles.isActive : styles.isNotActive]}>Collections</Text>
          </Pressable>
          <Pressable onPress={() => router.replace("/(tabs)/collections/decks")}>
            <Text style={[styles.title, pathname === "/collections/decks" ? styles.isActive : styles.isNotActive]}>Decks</Text>
          </Pressable>
          <Pressable onPress={() => router.replace("/(tabs)/collections/explore")}>
            <Text style={[styles.title, pathname === "/collections/explore" ? styles.isActive : styles.isNotActive]}>Explore</Text>
          </Pressable>
        </View>
    );
}
// Styles for the CollectionsNavigation component
const styles = StyleSheet.create({
  collectionsHeader: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginRight: 40,
  },
  title: {
    fontFamily: "Souliyo Unicode",
    fontSize: 22,
  },
  boldText: {
    fontWeight: "bold",
  },
  isActive: {
    fontWeight: "bold",
    color: "#1E293B",
    textDecorationLine: "underline",
  },
  isNotActive: {
    fontWeight: "regular",
    color: "#424B57"
  },
});
