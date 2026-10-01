import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs 
        screenOptions={{
            headerShown: false,
            tabBarStyle: {
                display: "none",
            },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="cardScanner"
        options={{
          title: "Card Scanner",
        }}
      />
      <Tabs.Screen
        name="universalSearch"
        options={{
          title: "Universal Search",
        }}
      />
      <Tabs.Screen
        name="collections"
        options={{
          title: "Collections",
        }}
      />
    </Tabs>
  );
}
