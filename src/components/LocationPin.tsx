import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function LocationPin() {
  return (
    <Ionicons name="location" size={60} color="black" style={styles.locationPin}/>
  );
}

const styles = StyleSheet.create({
  locationPin: {
    marginRight: 25,
  },
});
