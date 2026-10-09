import { View, Image, StyleSheet, ImageSourcePropType, Pressable } from "react-native";
import { useRouter } from "expo-router";

type Props = {
  // An array of image sources to display in the carousel.
  cards: { id: string | number; image: ImageSourcePropType }[];
  game: "magic";
};

export default function CardImage({ cards, game }: Props) {
    const router = useRouter();
    const leftColumnImages = cards.filter((_, index) => index % 2 === 0);
    const rightColumnImages = cards.filter((_, index) => index % 2 !== 0);

  return (
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
