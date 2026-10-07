import { StyleSheet, Dimensions } from "react-native";
import { Camera, CameraView } from "expo-camera";
import { useEffect, useState } from "react";
import { Alert } from "react-native";

export default function CardScannerCamera() {
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);

    useEffect(() => {
        async function getCameraPermission() {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === "granted");
        }
        getCameraPermission();
    }, []);
    
  if (hasPermission === null) return null;
  if (hasPermission === false) {
      Alert.alert("Camera permission is required to use this feature.");
      return null;
  }

  return (
      <CameraView 
        style={styles.camera}
        facing="back"/>
  );
}

const styles = StyleSheet.create({
  camera: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});