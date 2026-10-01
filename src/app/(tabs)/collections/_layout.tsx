import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function CollectionsRootLayout() {
  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="collectionsIndex" />
      <Stack.Screen
        name="decks" />
      <Stack.Screen
        name="explore" />
    </Stack>
    </SafeAreaProvider>
  );
}
   