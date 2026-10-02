import { Text, View, StyleSheet, Pressable } from "react-native";
import { usePathname, useRouter } from "expo-router";
import { useState } from "react";

export default function CollectionsNavigation() {
    const router = useRouter();
    const pathname = usePathname();
    // const [activeTab, setActiveTab] = useState(pathname);
    return (
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
  },
  isNotActive: {
    fontWeight: "regular",
    color: "#424B57"
  },
});
