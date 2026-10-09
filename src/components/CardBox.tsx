import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
} from "react-native";
import { useRouter } from "expo-router";

//props for the CardBox component
type Props = {
  // An array of image sources to display in the carousel.
  cards: { id: string | number; image: ImageSourcePropType }[];
  game: "riftbound" | "lorcana" | "pokemon";
  // The text to display above the image carousel.
  CardBoxText: string;
};

/* Renders an image carousel within a styled card box. 
Includes left/right navigation arrows and pagination dots.*/
export default function CardBox({ cards, game, CardBoxText }: Props) {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{CardBoxText}</Text>
      <View style={styles.imageCarousel}>
        <View style={styles.arrowButton}>
          <Text style={styles.arrow}>‹</Text>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}
        >
          <View style={styles.imageRow}>
            {cards.map((card) => (
              <Pressable
                key={card.id}
                onPress={() =>
                  router.push({
                    pathname: "/CardInfo",
                    params: { game, cardId: String(card.id) },
                  })
                }
              >
                <Image source={card.image} style={styles.cardImage} />
              </Pressable>
            ))}
          </View>
        </ScrollView>
        <View style={styles.arrowButton}>
          <Text style={styles.arrow}>›</Text>
        </View>
        <View style={styles.dots}>
          {Array.from({ length: 5 }).map((_, index) => (
            <View key={index} style={styles.dot} />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
  },
  scrollView: {
    flexDirection: "row",
  },
  //images
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 7.5,
    marginTop: 15,
    marginRight: 15,
    resizeMode: "cover",
  },

  imageRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  innerShadow: {
    position: "absolute",
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.12,
  },
  //carousel
  imageCarousel: {
    width: 350,
    height: 150,
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    paddingBottom: 25,
    backgroundColor: "#e4e2f4",
    borderWidth: 1,
    borderColor: "#aaa5c8",
    borderRadius: 10,
    marginBottom: 30,

    // IOS shadows
    shadowColor: "#30275c",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 4,

    // Android Shadows
    elevation: 5,
  },

  // nav arrows
  arrowButton: {
    width: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  arrow: {
    fontSize: 32,
    color: "#111111",
  },
  // dots
  dots: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    gap: 4,
  },

  dot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#777777",
  },
  // Text styling
  text: {
    color: "#424B57",
    alignSelf: "flex-start",
  },
});
