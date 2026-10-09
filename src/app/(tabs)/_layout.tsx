import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabBarLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 78.5,
          width: "80%",
          backgroundColor: "#E2E1F4",
          borderWidth: 1,
          marginBottom: 40,
          marginLeft: "10%",
          borderRadius: 10,
          flexDirection: "row",
          alignItems: "center",
          borderColor: "#000000",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={"black"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="cardScanner"
        options={{
          tabBarStyle: {
            display: "none",
          },
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "camera" : "camera-outline"}
              size={24}
              color={"black"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="universalSearch"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "search" : "search-outline"}
              size={24}
              color={"black"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="collections"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "book" : "book-outline"}
              size={24}
              color={"black"}
            />
          ),
        }}
      />
      <Tabs.Screen name="shop" options={{ href: null }} />
    </Tabs>
  );
}
