import { View, StyleSheet, Pressable, Animated } from "react-native";
import CardScannerCamera from "../../components/CardScannerCamera";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRef } from "react";

// WORK IN PROGRESS: Card scanner page with camera view, scan button, and animated scan feedback.

export default function CardScanner() {
  const router = useRouter();
  const scanAnimation = useRef(new Animated.Value(1)).current;
  const opacityAnimation = useRef(new Animated.Value(1)).current;


  // Potential implementation of card frame overlay and boundaries for scanning.
  // const screenWidth = Dimensions.get("window").width;
  // const frameWidth = screenWidth * 0.7;
  // const frameHeight = frameWidth * (7 / 5);

  const handleScanPressIn = () => {
    Animated.spring(scanAnimation, {
      toValue: 1.2,
      useNativeDriver: true,
      friction: 3,
    }).start();
    Animated.timing(opacityAnimation, {
      toValue: 0.5,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };
  const handleScanPressOut = () => {
    Animated.spring(scanAnimation, {
      toValue: 1,
      useNativeDriver: true,
      friction: 3,
    }).start();
    Animated.timing(opacityAnimation, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaView style={{ 
        flex: 1, 
        justifyContent: "space-between",
     }}>
      <View style={ styles.header }>
        <Pressable onPress={() => router.back()}>
          <Ionicons name="chevron-back" color="grey" size={60}/>
        </Pressable>
      </View>
      <View style={ styles.cameraContainer }>
        {/* <CardScannerCamera /> */}
      </View>
      <View style={{ flex: 1 }}></View>
      <View style={ styles.controls }>
        <Animated.View style={{ transform: [{ scale: scanAnimation }], opacity: opacityAnimation }}>
          <Pressable onPressIn={handleScanPressIn} onPressOut={handleScanPressOut}>
            <Ionicons name="scan-circle-outline" style={{ fontSize: 80, color: "white" }} />
          </Pressable>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    zIndex: 1,
    marginLeft: 25,
  },
  cameraContainer: {
    flex: 1,
    position: "absolute",
  },
  controls: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    zIndex: 1,
    position: "absolute",
    left: 75,
    right: 75,
    bottom: 50,
  },
});
