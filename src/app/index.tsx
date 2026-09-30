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
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import CardBox from "../../components/CardBox";
import NavigationBar from "../../components/NavigationBar";

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
            <SymbolView
              name={{ ios: "menucard", android: "menu", web: "menu" }}
              tintColor="black"
              size={60}
            />
            <Text style={styles.headerTitle}>Welcome</Text>
            <SymbolView
              name={{ ios: "mappin", android: "location_on", web: "pin" }}
              tintColor="black"
              size={60}
            />
          </View>
          <View style={styles.headerUserName}>
            <Text style={styles.userName}>Smeagol Reagol Rolkien Tolkien</Text>
          </View>
          <View style={styles.headerSearchBarContainer}>
            <View style={styles.quickSearchContainer}>
              <SymbolView
                name={{
                  ios: "magnifyingglass",
                  android: "search",
                  web: "search",
                }}
                tintColor="black"
                size={20}
              />
              <TextInput
                placeholder="Quick Search"
                style={styles.quickSearch}
              />
            </View>

            <View style={styles.gameSearchContainer}>
              <TextInput placeholder="Game" style={styles.gameSearch} />
              <SymbolView
                name={{ ios: "chevron.down", android: "keyboard_arrow_down" }}
                tintColor="black"
                size={20}
              />
            </View>
          </View>
        </View>
        <ScrollView style={styles.content}>
          <View style={styles.scrollcontent}>
            <CardBox images={pokemonCardImages} />
            <CardBox images={magicCardImages} />
            <CardBox images={riftboundCardImages} />
            <Pressable onPress={() => alert("Alert button pressed!")}>
              <Text style={{ fontWeight: "bold" }}>Alert Button</Text>
            </Pressable>
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
    paddingHorizontal: 25,
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
  headerSearchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginHorizontal: 50,
    marginBottom: 10,
  },
  quickSearchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    borderColor: "#000000",
    borderWidth: 2,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  quickSearch: {
    fontFamily: "Souliyo Unicode",
    fontSize: 12,
    color: "#000000",
    flex: 1,
  },
  gameSearchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 20,
    marginRight: 40,
    paddingHorizontal: 10,
    position: "absolute",
    right: -40,
  },
  gameSearch: {
    fontFamily: "Souliyo Unicode",
    fontSize: 12,
    fontWeight: "regular",
    color: "#000000",
    justifyContent: "center",
  },
  content: {
    width: "100%",
    height: "100%",
  },
  scrollcontent: {
    width: "100%",
    alignItems: "center",
  },
  footer: {
    height: 78.5,
    width: "80%",
    backgroundColor: "#E2E1F4",
    borderWidth: 1,
    marginBottom: 25,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
  },
});
