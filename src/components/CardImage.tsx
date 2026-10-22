import { View, Image, StyleSheet, ImageSourcePropType, Pressable } from "react-native";
import { useRouter } from "expo-router";

type Props = {
  // An array of image sources to display in the carousel.
  cards: { id: string | number; image: ImageSourcePropType }[];
  game: "magic";
};
// Renders a two-column layout of card images. Each image is pressable and navigates to the CardInfo page with the game and card ID as parameters.
// Uses the useRouter hook from expo-router to handle navigation.
export default function CardImage({ cards, game }: Props) {
    const router = useRouter();
    // Split the cards array into two columns for the two-column layout. Even-indexed cards go to the left column, odd-indexed cards go to the right column.
    const leftColumnImages = cards.filter((_, index) => index % 2 === 0);
    const rightColumnImages = cards.filter((_, index) => index % 2 !== 0);

  return (
    // Container for the two-column layout of card images. Each column contains pressable images that navigate to the CardInfo page. Pressing an image triggers the navigation and the passing of game and card ID parameters linked to the tapped image.
        <View style={styles.container}>
            <View style={styles.leftColumn}>
                {leftColumnImages.map(({ id, image }) => (
                  <Pressable key={id} onPress={() => router.push({ pathname: "/CardInfo", params: { game, cardId: String(id) }})}>
                    <Image key={id} source={image} style={styles.image} />
                  </Pressable>
                ))}
            </View>
            <View style={styles.rightColumn}>          
                {rightColumnImages.map(({ id, image }) => (
                  <Pressable key={id} onPress={() => router.push({ pathname: "/CardInfo", params: { game, cardId: String(id) }})}>
                    <Image key={id} source={image} style={styles.image} />
                  </Pressable>
                ))}
            </View>
        </View>
  );
}

// Styles for the CardImage component
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  image: {
    borderRadius: 10,
    width: 150,
    height: 100,
    marginBottom: 25,
    marginRight: 15,
    resizeMode: "cover",
  },
  leftColumn: {
    width: 150,
  },
  rightColumn: {
    width: 150,
  },
});
