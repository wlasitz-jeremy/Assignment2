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
import { magicCardImages } from "../../../constants/CardImages";

const ExploreCardImages = [
  ...magicCardImages,
];

// randomizing the order of the collection card images for the Explore page
const RandomizedExploreCardImages = ExploreCardImages.sort(() => Math.random() - 0.5);

export default function Explore() {
    return (
      // Explore page layout with a header (HamburgerMenu and CollectionsNavigation components imported), search bar, and scrollable card images
      // Passing GAME and ID params to the CardImage component so it can correctly display the card image you tap on
      <SafeAreaView style={styles.container}>
          <View style={styles.exploreHeader}>
            <HamburgerMenu/>
            <CollectionsNavigation />
          </View>
          <CollectionSearchBar mainSearch="My Explore" subSearch="Decks" />
          <ScrollView style={styles.scrollView}>
            <CardImage cards={RandomizedExploreCardImages.map((card) => ({ id: card.id, image: card.image }))} game="magic" />
          </ScrollView>
        </SafeAreaView>
    );
}
// Styles for the Explore page 
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
  exploreHeader: {
    flexDirection: "row",
  },
});
