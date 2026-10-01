import {
  StyleSheet,
  ScrollView,
  Text,
  View,
} from "react-native";
import CardImage from "../../../components/CardImage";
import HamburgerMenu from "../../../components/HamburgerMenu";
import { SafeAreaView } from "react-native-safe-area-context";
import NavigationBar from "../../../components/NavigationBar";
import CollectionSearchBar from "../../../components/CollectionSearchBar";
import { router } from "expo-router";
import CollectionsNavigation from "../../../components/CollectionsNavigation";

{
  /*Collections Card Image Carousel */
}
const CollectionsCardImages = [
  require("../../../../assets/pokemonCards/pikachu_image.png"),
  require("../../../../assets/pokemonCards/arceus_image.png"),
  require("../../../../assets/pokemonCards/g_image.png"),
  require("../../../../assets/pokemonCards/Victini_image.png"),
  require("../../../../assets/pokemonCards/Zeraora_image.png"),
  require("../../../../assets/pokemonCards/pikachu_image.png"),
  require("../../../../assets/pokemonCards/arceus_image.png"),
  require("../../../../assets/pokemonCards/g_image.png"),
  require("../../../../assets/pokemonCards/Victini_image.png"),
  require("../../../../assets/pokemonCards/Zeraora_image.png"),
  require("../../../../assets/pokemonCards/pikachu_image.png"),
  require("../../../../assets/pokemonCards/arceus_image.png"),
  require("../../../../assets/pokemonCards/g_image.png"),
  require("../../../../assets/pokemonCards/Victini_image.png"),
  require("../../../../assets/pokemonCards/Zeraora_image.png"),
  require("../../../../assets/pokemonCards/pikachu_image.png"),
  require("../../../../assets/pokemonCards/arceus_image.png"),
  require("../../../../assets/pokemonCards/g_image.png"),
  require("../../../../assets/pokemonCards/Victini_image.png"),
  require("../../../../assets/pokemonCards/Zeraora_image.png"),
  require("../../../../assets/pokemonCards/pikachu_image.png"),
  require("../../../../assets/pokemonCards/arceus_image.png"),
  require("../../../../assets/pokemonCards/g_image.png"),
  require("../../../../assets/pokemonCards/Victini_image.png"),
  require("../../../../assets/pokemonCards/Zeraora_image.png"),
  require("../../../../assets/magicCards/magic1.png"),
  require("../../../../assets/magicCards/magic2.png"),
  require("../../../../assets/magicCards/magic3.png"),
  require("../../../../assets/magicCards/magic4.png"),
  require("../../../../assets/magicCards/magic5.png"),
  require("../../../../assets/magicCards/magic1.png"),
  require("../../../../assets/magicCards/magic2.png"),
  require("../../../../assets/magicCards/magic3.png"),
  require("../../../../assets/magicCards/magic4.png"),
  require("../../../../assets/magicCards/magic5.png"),
  require("../../../../assets/magicCards/magic1.png"),
  require("../../../../assets/magicCards/magic2.png"),
  require("../../../../assets/magicCards/magic3.png"),
  require("../../../../assets/magicCards/magic4.png"),
  require("../../../../assets/magicCards/magic5.png"),
  require("../../../../assets/magicCards/magic1.png"),
  require("../../../../assets/magicCards/magic2.png"),
  require("../../../../assets/magicCards/magic3.png"),
  require("../../../../assets/magicCards/magic4.png"),
  require("../../../../assets/magicCards/magic5.png"),
  require("../../../../assets/magicCards/magic1.png"),
  require("../../../../assets/magicCards/magic2.png"),
  require("../../../../assets/magicCards/magic3.png"),
  require("../../../../assets/magicCards/magic4.png"),
  require("../../../../assets/magicCards/magic5.png"),
  require("../../../../assets/riftboundCards/r1.png"),
  require("../../../../assets/riftboundCards/r2.png"),
  require("../../../../assets/riftboundCards/r3.png"),
  require("../../../../assets/riftboundCards/r4.png"),
  require("../../../../assets/riftboundCards/r5.png"),
  require("../../../../assets/riftboundCards/r1.png"),
  require("../../../../assets/riftboundCards/r2.png"),
  require("../../../../assets/riftboundCards/r3.png"),
  require("../../../../assets/riftboundCards/r4.png"),
  require("../../../../assets/riftboundCards/r5.png"),
  require("../../../../assets/riftboundCards/r1.png"),
  require("../../../../assets/riftboundCards/r2.png"),
  require("../../../../assets/riftboundCards/r3.png"),
  require("../../../../assets/riftboundCards/r4.png"),
  require("../../../../assets/riftboundCards/r5.png"),
  require("../../../../assets/riftboundCards/r1.png"),
  require("../../../../assets/riftboundCards/r2.png"),
  require("../../../../assets/riftboundCards/r3.png"),
  require("../../../../assets/riftboundCards/r4.png"),
  require("../../../../assets/riftboundCards/r5.png"),
  require("../../../../assets/riftboundCards/r1.png"),
  require("../../../../assets/riftboundCards/r2.png"),
  require("../../../../assets/riftboundCards/r3.png"),
  require("../../../../assets/riftboundCards/r4.png"),
  require("../../../../assets/riftboundCards/r5.png"),
];

const RandomizedCollectionsCardImages = CollectionsCardImages.sort(() => Math.random() - 0.5);

export default function Collections() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <HamburgerMenu />
                <CollectionsNavigation />
            </View>
            <CollectionSearchBar mainSearch="My Collection" subSearch="Collection" />
            <ScrollView style={styles.scrollView}>
                <CardImage images={RandomizedCollectionsCardImages} />
            </ScrollView>
            {/* <NavigationBar /> */}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    width: "100%",
    height: "100%",
    marginBottom: 20,
  },
  title: {
    fontFamily: "Souliyo Unicode",
    fontSize: 24,
    fontWeight: "regular",
    color: "#1E293B",
  },
  header: {
    flexDirection: "row",
  },
});
