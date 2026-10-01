import { Text, View, StyleSheet } from "react-native";
import { Link, useRouter } from "expo-router";


export default function CollectionsNavigation() {
    const router = useRouter();
    return (
        <View style={styles.collectionsHeader}>
            <Text onPress={() => router.replace("/(tabs)/collections/collectionsIndex")} style={styles.title}>Collections</Text>
            <Text onPress={() => router.replace("/(tabs)/collections/decks")} style={styles.title}>Decks</Text>
            <Text onPress={() => router.replace("/(tabs)/collections/explore")} style={styles.title}>Explore</Text>
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
    fontSize: 20,
    color: "#1E293B",
  },
});
