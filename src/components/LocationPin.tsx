import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Location pin component that renders a location icon using Ionicons.

export default function LocationPin() {
  return (
    <Ionicons name="location" size={60} color="black" style={styles.locationPin}/>
  );
}

// Styles for the location pin component.
const styles = StyleSheet.create({
  locationPin: {
    marginRight: 25,
  },
});
