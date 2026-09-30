/*this project was a joint effort from: Jeremy Wlasitz, Benjamin Galaric, Devon Huynh, Dylan Carson*/

import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Pressable,
  TextInput,
} from "react-native";
import { SymbolView } from "expo-symbols";
import LocationPin from "../../components/LocationPin";
import HamburgerMenu from "../../components/HamburgerMenu";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import CardBox from "../../components/CardBox";
import NavigationBar from "../../components/NavigationBar";
import CollectionSearchBar from "../../components/CollectionSearchBar";

{
  /*
  Card Box assets, All images are stored in the 
  assets folder and pulled from to the Cardbox 
  component to created the card image carousel. 
  */
}

{
  /*Pokemon Card Image Carousel */
}
const pokemonCardImages = [
  require("../../assets/pokemonCards/pikachu_image.png"),
  require("../../assets/pokemonCards/arceus_image.png"),
  require("../../assets/pokemonCards/g_image.png"),
];

{
  /*Magic Card Image Carousel */
}
const magicCardImages = [
  require("../../assets/magicCards/magic1.png"),
  require("../../assets/magicCards/magic2.png"),
  require("../../assets/magicCards/magic3.png"),
];

{
  /*Riftbound Card Image Carousel */
}
const riftboundCardImages = [
  require("../../assets/riftboundCards/r1.png"),
  require("../../assets/riftboundCards/r2.png"),
  require("../../assets/riftboundCards/r3.png"),
];

{
  /*Index Page layout and assets.
  Includes: 
  Page Header
    Title with Menu and Locations pin icons
  Search base with overlapping Filterbar
  Alert Button
    Alert pop up when alert button has been clicked
  Bottom Navigation bar with Icons
    Home Button
    Camera Button
    Search Function
    Library*/
}
export default function Index() {
  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerIcons}>
            <HamburgerMenu />
            <Text style={styles.headerTitle}>Welcome</Text>
            <LocationPin />
          </View>
          <View style={styles.headerUserName}>
            <Text style={styles.userName}>Smeagol Reagol Rolkien Tolkien</Text>
          </View>
        <CollectionSearchBar mainSearch="Quick Search" subSearch="Game" />
        </View>
        <ScrollView style={styles.content}>
          <View style={styles.scrollcontent}>
            <CardBox images={pokemonCardImages} />
            <CardBox images={magicCardImages} />
            <CardBox images={riftboundCardImages} />
          </View>
        </ScrollView>
        <NavigationBar />
      </SafeAreaView>
  );
}

{
  /*General style layout for the Index page only.*/
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    height: 160,
    width: "100%",
  },
  headerIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontFamily: "Oswald",
    fontSize: 46,
    fontWeight: "bold",
    color: "#000000",
  },
  headerUserName: {
    width: "100%",
    alignItems: "center",
  },
  userName: {
    fontFamily: "Oswald",
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
    marginVertical: 15,
  },
  content: {
    width: "100%",
    height: "100%",
  },
  scrollcontent: {
    width: "100%",
    alignItems: "center",
  },
});
