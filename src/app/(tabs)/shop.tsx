import { View, Image, StyleSheet, Pressable, Text, ScrollView } from "react-native";
import CardBox from "../../components/CardBox";
import HamburgerMenu from "../../components/HamburgerMenu";
import StoreSearchBar from "../../components/StoreSearchBar";
import LocationPin from "../../components/LocationPin";
import { AntDesign } from "@expo/vector-icons";
// Import the Cards from the collections
import {
  lorcanaCardImages,
  magicCardImages,
  pokemonCardImages,
  riftboundCardImages,
  yugiohCardImages,
} from "../../constants/CardImages";
// Initialize the Background image for the Main Menu
const iconImage = require("../../../assets/menuIcons/Icon.png");

export default function shopPage() {
  return (
    <View style={styles.container}>
      {/* Top NavBar */}
      <View style={styles.topnavbar}>
        <HamburgerMenu />
        <Image source={iconImage} style={styles.image}></Image>
        <AntDesign name="shopping-cart" size={60} />
        <LocationPin />
      </View>

      {/* Search Box */}
      <View style={styles.searchbar}>
        <StoreSearchBar mainSearch="Search Products/Stores" subSearch="search" />
      </View>
      {/* top Card Box */}
      <ScrollView>
      <View style={styles.categories}>
        <CardBox
          CardBoxText="Newly Added"
          cards={[...pokemonCardImages].map((img) => ({
            id: img.id,
            image: img.image,
          }))}
          game="pokemon"
        />
      </View>

      {/* Categories that are displayed on the shop page */}
      <View style={styles.categories}>
        <View style={styles.categoryRow}>
          <Pressable style={styles.bubble}>
            <Text style={styles.bubbleText}>Magic the Gathering</Text>
          </Pressable>
          <Pressable style={styles.bubble}>
            <Text style={styles.bubbleText}>Pokemon</Text>
          </Pressable>
        </View>
        {/* Second Row of Categories */}
        <View style={styles.categoryRow}>
          <Pressable style={styles.bubble}>
            <Text style={styles.bubbleText}>Yu-Gi-Oh</Text>
          </Pressable>
          <Pressable style={styles.bubble}>
            <Text style={styles.bubbleText}>Riftbound</Text>
          </Pressable>
          <Pressable style={styles.bubble}>
            <Text style={styles.bubbleText}>Lorcana</Text>
          </Pressable>
        </View>
      </View>

      {/* Bottom Card Boxs including Game specific collections sold.  */}
      <View style={styles.categories}>
        <CardBox
          CardBoxText="Bundle Deals"
          cards={[...lorcanaCardImages].map((img) => ({
            id: img.id,
            image: img.image,
          }))}
          game="lorcana"
        />
        <CardBox
          CardBoxText="Lorcana"
          cards={[...lorcanaCardImages].map((img) => ({
            id: img.id,
            image: img.image,
          }))}
          game="lorcana"
        />
        <CardBox
          CardBoxText="Yu-Gi-Oh"
          cards={[...yugiohCardImages].map((img) => ({
            id: img.id,
            image: img.image,
          }))}
          game="yugioh"
        />
        <CardBox
          CardBoxText="Riftbound"
          cards={[...riftboundCardImages].map((img) => ({
            id: img.id,
            image: img.image,
          }))}
          game="riftbound"
        />
        <CardBox
          CardBoxText="Pokemon"
          cards={[...pokemonCardImages].map((img) => ({
            id: img.id,
            image: img.image,
          }))}
          game="pokemon"
        />
        <CardBox
          CardBoxText="Magic the Gathering"
          cards={[...magicCardImages].map((img) => ({
            id: img.id,
            image: img.image,
          }))}
          game="magic"
        />
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  // main container
  container: {
    flex: 1,
    justifyContent: "flex-start",
    marginTop: 55,
  },
  // Search Bar
  searchbar: {
    marginTop: 20,
  },
  // Nav Bar styles
  topnavbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 1,
  },
  // Image styles
  image: {
    height: 50,
    width: 50,
    borderRadius: 10,
  },
  // Category Style
  categories: {
    marginTop: 25,
    gap: 12,
  },
  // Styles for the category row
  categoryRow: {
    flexDirection: "row",
    gap: 10,
  },
  // Style for the bubble surronding the text
  bubble: {
    flex: 1,
    minHeight: 40,
    paddingHorizontal: 12,
    borderWidth: 1.5,
    borderColor: "black",
    borderRadius: 20,
    backgroundColor: "#E8E5F7",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 16,
  },
  // Style for the text inside bubble
  bubbleText: {
    fontSize: 12,
    color: "black",
    textAlign: "center",
  },
});
