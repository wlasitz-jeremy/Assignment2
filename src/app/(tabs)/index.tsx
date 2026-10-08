/*this project was a joint effort from: Jeremy Wlasitz, Benjamin Galaric, Devon Huynh, Dylan Carson*/

import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import LocationPin from "../../components/LocationPin";
import HamburgerMenu from "../../components/HamburgerMenu";
import { SafeAreaView } from "react-native-safe-area-context";
import CardBox from "../../components/CardBox";
import CollectionSearchBar from "../../components/CollectionSearchBar";
import { useRouter } from "expo-router";
import { lorcanaCardImages, pokemonCardImages, riftboundCardImages } from "../../constants/CardImages";

{
  /*
  Card Box assets, All images are stored in the 
  assets folder and pulled from to the Cardbox 
  component to created the card image carousel. 
  */
}

{
  /*Index Page layout and assets.
  Includes: 
  Page Header
    Title with Menu and Locations pin icons
  Search base with overlapping Filterbar
  Bottom Navigation bar with Icons
    Home Button
    Camera Button
    Search Function
    Library*/
}

export default function Index() {
  const router = useRouter();
  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerIcons}>
            <HamburgerMenu />
            <Text style={styles.headerTitle}>Welcome</Text>
            <Pressable onPress={() => router.push("../shopLocation")}>
              <LocationPin />
            </Pressable>
            
          </View>
          <View style={styles.headerUserName}>
            <Text style={styles.userName}>Smeagol Reagol Rolkien Tolkien</Text>
          </View>
        <CollectionSearchBar mainSearch="Quick Search" subSearch="Game" />
        </View>
        <ScrollView style={styles.content}>
          <View style={styles.scrollcontent}>
            <CardBox CardBoxText="Recently Added" images={[...pokemonCardImages]} />
            <CardBox CardBoxText="Top Gains / Losses" images={[...lorcanaCardImages]} />
            <CardBox CardBoxText="Collection Progress" images={[...riftboundCardImages]} />
          </View>
        </ScrollView>
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
    marginBottom: 20,
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
    color: "#1E293B",
  },
  headerUserName: {
    width: "100%",
    alignItems: "center",
  },
  userName: {
    fontFamily: "Oswald",
    fontSize: 18,
    fontWeight: "bold",
    color: "#1E293B",
    marginVertical: 15,
  },
  content: {
    width: "100%",
  },
  scrollcontent: {
    width: "100%",
    alignItems: "center",
  },
});
