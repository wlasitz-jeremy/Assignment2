import {
  StyleSheet,
  ScrollView,
  View,
} from "react-native";
import CardImage from "../../../components/CardImage";
import HamburgerMenu from "../../../components/HamburgerMenu";
import { SafeAreaView } from "react-native-safe-area-context";
import CollectionSearchBar from "../../../components/CollectionSearchBar";
import CollectionsNavigation from "../../../components/CollectionsNavigation";

{
  /*Collections Card Image Carousel */
}
export const cardImages = {
  pokemon: [
    require("../../../../assets/pokemonCards/pikachu_image.png"),
    require("../../../../assets/pokemonCards/arceus_image.png"),
    require("../../../../assets/pokemonCards/g_image.png"),
    require("../../../../assets/pokemonCards/Victini_image.png"),
    require("../../../../assets/pokemonCards/Zeraora_image.png"),
  ],
  magic: [
    require("../../../../assets/magicCards/magic1.png"),
    require("../../../../assets/magicCards/magic2.png"),
    require("../../../../assets/magicCards/magic3.png"),
    require("../../../../assets/magicCards/magic4.png"),
    require("../../../../assets/magicCards/magic5.png"),
  ],
  riftbound: [
    require("../../../../assets/riftboundCards/r1.png"),
    require("../../../../assets/riftboundCards/r2.png"),
    require("../../../../assets/riftboundCards/r3.png"),
    require("../../../../assets/riftboundCards/r4.png"),
    require("../../../../assets/riftboundCards/r5.png"),
  ],
} as const;

const DecksCardImages = [
  ...cardImages.pokemon,
  ...cardImages.magic,
  ...cardImages.riftbound,
    ...cardImages.pokemon,
  ...cardImages.magic,
  ...cardImages.riftbound,
    ...cardImages.pokemon,
  ...cardImages.magic,
  ...cardImages.riftbound,
    ...cardImages.pokemon,
  ...cardImages.magic,
  ...cardImages.riftbound,

];

const RandomizedDecksCardImages = DecksCardImages.sort(() => Math.random() - 0.5);

export default function Decks() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.decksHeader}>
                <HamburgerMenu/>
                <CollectionsNavigation />
            </View>
            <CollectionSearchBar mainSearch="My Decks" subSearch="Deck" />
            <ScrollView style={styles.scrollView}>
                <CardImage images={RandomizedDecksCardImages} />
            </ScrollView>
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
    marginBottom: 10,
  },
  title: {
    fontFamily: "Souliyo Unicode",
    fontSize: 24,
    fontWeight: "regular",
    color: "#1E293B",
  },
  decksHeader: {
    flexDirection: "row",
  },
});
