import { useEffect, useState } from "react";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
import { cardShops } from "../constants/CardShopData";
import { StyleSheet, Dimensions, View, Text, Pressable, ScrollView } from "react-native";
import { Alert } from "react-native";

export default function CardShopMap() {
  const [locationPermission, setLocationPermission] = useState<any>(null);
  const [selectedShop, setSelectedShop] = useState<any>(null);

  useEffect(() => {
    async function getInitialLocation() {
      const { status } =
        await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        Alert.alert("Location permission is required to use this feature.");
        return;
      };
        const currentLocation = await Location.getCurrentPositionAsync({});
        setLocationPermission({
            latitude: currentLocation.coords.latitude,
            longitude: currentLocation.coords.longitude,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
        });
    }

    getInitialLocation();
  }, []);

  if (!locationPermission) return null;

  return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          showsUserLocation={true}
          showsMyLocationButton={true}
          initialRegion={locationPermission}>
          {cardShops.map((shop) => (
            <Marker
              key={shop.id}
              coordinate={{
                latitude: shop.latitude,
                longitude: shop.longitude,
              }}
              onPress={() => setSelectedShop(shop)} />
          ))}
        </MapView>

        {selectedShop && (
          <ScrollView style={styles.shopPopup}>
            <View style={styles.popupHeader}>
              <Text style={styles.shopName}>
                {selectedShop.name}
              </Text>

              <Pressable onPress={() => setSelectedShop(null)}>
                <Text style={styles.closeButton}>✕</Text>
              </Pressable>
            </View>

            <Text style={styles.shopAddress}>
              {selectedShop.address}
            </Text>

            <Text style={styles.shopDescriptions}>
              {selectedShop.description}
            </Text>
          </ScrollView>
        )}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },

  shopPopup: {
    position: "absolute",
    bottom: 130,
    left: 20,
    right: 20,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },

  popupHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  shopName: {
    fontSize: 20,
    fontWeight: "bold",
  },

  shopAddress: {
    fontSize: 15,
    marginTop: 8,
  },

  shopDescriptions: {
    fontSize: 14,
    marginTop: 8,
  },

  closeButton: {
    fontSize: 20,
    padding: 5,
  },
});