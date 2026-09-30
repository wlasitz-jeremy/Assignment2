import { SymbolView } from "expo-symbols";
import { StyleSheet } from "react-native";

export default function LocationPin() {
  return (
    <SymbolView style={styles.locationPin}
      name={{ ios: "mappin", android: "location_on", web: "pin" }}
      tintColor="black"
      size={60}
    />
  );
}

const styles = StyleSheet.create({
  locationPin: {
    marginRight: 25,
  },
});
