import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Pressable,
} from "react-native";
import HamburgerMenu from "../../components/HamburgerMenu";
import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";
import { router } from "expo-router";

// The inital background image for the page
const background = require("../../../assets/menuIcons/HamburgerBackground.png");

export default function burgerMainMenu() {
  return (
    <ImageBackground
      source={background}
      resizeMode="cover"
      style={styles.Image}
    >
      <View style={styles.burger}>
        <View>
          <HamburgerMenu isActive />
        </View>
        <View>
          <Pressable style={styles.pressableIcon}>
            <Ionicons
              name="book-outline"
              size={50}
              color="#0000"
              style={styles.icons}
            />
            <Text style={styles.text}>Blog</Text>
          </Pressable>
        </View>
        <View>
          <Pressable
            key="shop"
            onPress={() => {
              router.replace("/(tabs)/shop");
            }}
            style={styles.pressableIcon}
          >
            <AntDesign
              name="shopping-cart"
              size={50}
              color="#0000"
              style={styles.icons}
            />
            <Text style={styles.text}>Shop</Text>
          </Pressable>
        </View>
        <View>
          <Pressable style={styles.pressableIcon}>
            <Ionicons
              name="person-outline"
              size={50}
              color="#0000"
              style={styles.icons}
            />
            <Text style={styles.text}>Profile</Text>
          </Pressable>
        </View>
        <View>
          <Pressable style={styles.pressableIcon}>
            <Feather
              name="phone"
              size={50}
              color="#0000"
              style={styles.icons}
            />
            <Text style={styles.text}>Contact Us</Text>
          </Pressable>
          <Pressable></Pressable>
        </View>
        <View>
          <Pressable style={styles.pressableIcon}>
            <Ionicons
              name="cog-outline"
              size={50}
              color="#0000"
              style={styles.icons}
            />
            <Text style={styles.text}>Settings</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  // Page Flex container
  container: {
    flex: 1,
  },
  // image flex box for the background
  Image: {
    flex: 2,
    justifyContent: "center",
  },

  // A flex container for the rest of the page
  burger: {
    flex: 3,
    justifyContent: "space-evenly",
    marginLeft: 2,
    marginTop: 45,
  },

  // Style for each pressable icon and text
  pressableIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
  // Style for each image
  icons: {
    marginLeft: 20,
    marginTop: 30,
  },
  // Style for the text
  text: {
    fontSize: 35,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 20,
  },
});
