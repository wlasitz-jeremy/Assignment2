import { View, Image, StyleSheet, Pressable, Text } from "react-native";
import CardBox from "../../components/CardBox";
import HamburgerMenu from "../../components/HamburgerMenu";
import StoreSearchBar from "../../components/StoreSearchBar";
import LocationPin from "../../components/LocationPin";
import { AntDesign } from "@expo/vector-icons";
import {
  lorcanaCardImages,
  pokemonCardImages,
} from "../../constants/CardImages";
const iconImage = require("../../../assets/menuIcons/Icon.png");
export default function shopPage() {
  return (
    <View style={styles.container}>
      <View style={styles.topnavbar}>
        <HamburgerMenu />
        <Image source={iconImage} style={styles.image}></Image>
        <AntDesign name="shopping-cart" size={60} />
        <LocationPin />
      </View>
      <View style={styles.searchbar}>
        <StoreSearchBar mainSearch="Search Products/Stores" subSearch="" />
      </View>
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
      <View style={styles.categories}>
        <View style={styles.categoryRow}>
          <Pressable style={styles.bubble}>
            <Text style={styles.bubbleText}>Magic the Gathering</Text>
          </Pressable>
          <Pressable style={styles.bubble}>
            <Text style={styles.bubbleText}>Pokemon</Text>
          </Pressable>
        </View>

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
      <View style={styles.categories}>
        <CardBox
          CardBoxText="Bundle Deals"
          cards={[...lorcanaCardImages].map((img) => ({
            id: img.id,
            image: img.image,
          }))}
          game="lorcana"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    marginTop: 55,
  },
  searchbar: {
    marginTop: 20,
  },
  topnavbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 1,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 10,
  },
  categories: {
    marginTop: 25,
    gap: 12,
    paddingHorizontal: 16,
  },
  categoryRow: {
    flexDirection: "row",
    gap: 10,
  },
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
  },
  bubbleText: {
    fontSize: 12,
    color: "black",
    textAlign: "center",
  },
});
