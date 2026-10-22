import { StyleSheet, Text, View } from "react-native";

export default function logIn() {
  return (
    <View style={styles.constainer}>
      <Text style={styles.header}>CardFolio</Text>
      <Text>testing</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: "center",
  },
  header: {
    fontSize: 50,
    alignSelf: "center",
  },
});
