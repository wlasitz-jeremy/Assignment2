import { Text, View, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";


export default function CollectionsNavigation() {
    const router = useRouter();
    const [isBold, setIsBold] = useState(false);
    return (
        <View style={styles.collectionsHeader}>
          <Pressable>
            <Text onPress={() => {setIsBold(!isBold); router.replace("/(tabs)/collections/collectionsIndex")}} style={[styles.title, isBold && styles.boldText]}>{isBold ? "Collections" : "Collections"}</Text>
          </Pressable>
          <Pressable>
            <Text onPress={() => {setIsBold(!isBold); router.replace("/(tabs)/collections/decks")}} style={[styles.title, isBold && styles.boldText]}>{isBold ? "Decks" : "Decks"}</Text>
          </Pressable>
          <Pressable>
            <Text onPress={() => {setIsBold(!isBold); router.replace("/(tabs)/collections/explore")}} style={[styles.title, isBold && styles.boldText]}>{isBold ? "Explore" : "Explore"}</Text>
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
    color: "#1E293B",
  },
  boldText: {
    fontWeight: "bold",
  },
});
