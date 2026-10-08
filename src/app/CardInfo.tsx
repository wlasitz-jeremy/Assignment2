import {View, Text, Image, Pressable, ScrollView, StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, useLocalSearchParams } from "expo-router";
import { lorcanaCardImages, pokemonCardImages, riftboundCardImages } from "../constants/CardImages";
import NavigationBar from "../components/NavigationBar";

const cardsByGame = {
  riftbound: riftboundCardImages,
  lorcana: lorcanaCardImages,
  pokemon: pokemonCardImages,
};

const TAGS = ["#Tag", "#Tag", "#Tag", "#Tag", "#Tag"];

export default function CardInfo() {
  const router = useRouter();
  const { game, cardId } = useLocalSearchParams<{ game: keyof typeof cardsByGame; cardId: string; }>();
  const card = cardsByGame[game]?.find((c) => Number(c.id) === Number(cardId));
  
    return (
        <SafeAreaView style={styles.container}>
                <Pressable onPress={() => router.back()} hitSlop={12} style={styles.backButton}>
                    <Ionicons name="chevron-back" size={28} color="#222"/>
                </Pressable>
            <ScrollView>
                <View style={styles.imageWrap}>
                    <Image source={card?.image} style={styles.cardImage} resizeMode="contain"/>
                </View>

                <View style={styles.tagRow}>
                    {TAGS.map((tag, i) => (
                        <View key={i} style={styles.tag}>
                            <Text style={styles.tagText}>{tag}</Text>
                        </View>
                    ))}
                </View>
                <Text style={styles.cardPrice}>Card Price History</Text>
                <View style={styles.priceRow}>
                    <View style={styles.chart}>
                        <Text style={styles.chartLabel}>Raw</Text>
                    </View>
                    <View style={styles.cardValue}>
                        <Text style={styles.chartLabel}>Market Value</Text>
                        <View style={styles.conditionBox}>
                            <Text style={styles.conditionText}>Near Mint</Text>
                            <Text style={styles.price}>$ 39.99</Text>
                        </View>
                        <Pressable style={styles.cartButton}>
                            <Text style={styles.cartText}>Add to Cart</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
            <View style={{ marginTop: 35, alignItems: "center", marginBottom: -20 }}>
            <NavigationBar />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    backButton: {
        alignSelf: "flex-start",
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    container: {
        flex: 1,
    },
    cardImage: {
        aspectRatio: 63/88,
        flex: 1,
        width: "80%",
        height: "80%",
    },
    imageWrap: {
        flex: 1,
        alignItems: "center",
        marginTop: 12,
        paddingHorizontal: 20,
    },
    tagRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 20,
        marginTop: 20,
        paddingHorizontal: 40,
    },
    tag: {
        minWidth: 80,
        alignItems: "center",
        borderWidth: 1.5,
        borderColor: "#222",
        borderRadius: 10,
        paddingHorizontal: 16,
        paddingVertical: 4,
        backgroundColor: "#E7E5F2",
    },
    tagText: { 
        fontSize: 14, 
        color: "#222" 
    },
    cardPrice: {
        fontSize: 16,
        marginTop: 28,
        color: "#222",
        paddingLeft: 30,
    },
    priceRow: {
        flexDirection: "row",
        gap: 20,
        marginTop: 14,
    },
    chart: {
        flex: 1.4,
    },
    chartLabel: {
        textAlign: "center",
        fontSize: 16,
        color: "#444",
    },
    cardValue: {
        flex: 1,
        alignItems: "center",
    },
    conditionBox: {
        marginTop: 20,
        borderWidth: 1.5,
        borderColor: "#222",
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 18,
        alignItems: "center",
        backgroundColor: "#E7E5F2",
    },
    conditionText: { 
        fontSize: 13, 
        color: "#222", 
    },
    price: { 
        fontSize: 18, 
        fontWeight: "500", 
        marginTop: 4, 
        color: "#222",
    },
    cartButton: {
        marginTop: 12,
        backgroundColor: "#3A3A52",
        borderRadius: 8,
        paddingVertical: 6,
        paddingHorizontal: 32,
    },
    cartText: { 
        color: "#fff", 
        fontSize: 13, 
    },
});