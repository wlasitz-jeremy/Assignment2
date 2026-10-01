import { View, Image, StyleSheet, ImageSourcePropType } from "react-native";

type Props = {
  // An array of image sources to display in the carousel.
  images: ImageSourcePropType[];
};

export default function CardImage({ images }: Props) {

    const leftColumnImages = images.filter((_, index) => index % 2 === 0);
    const rightColumnImages = images.filter((_, index) => index % 2 !== 0);

  return (
        <View style={styles.container}>
            <View style={styles.leftColumn}>
                {leftColumnImages.map((imageRoute, Index) => (
            <Image key={Index} source={imageRoute} style={styles.image} />
          ))}
            </View>
            <View style={styles.rightColumn}>          
                {rightColumnImages.map((imageRoute, Index) => (
            <Image key={Index} source={imageRoute} style={styles.image} />
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
