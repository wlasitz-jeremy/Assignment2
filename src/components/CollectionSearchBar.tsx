import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Collection search bar component that provides a main search input and a sub search input with a dropdown icon.
// The main search input is used for general search queries, while the sub search input allows for filtering or selecting specific categories.

export default function CollectionSearchBar({ mainSearch, subSearch }: { mainSearch: string, subSearch: string }) {
  return (
          <View style={styles.searchBarContainer}>
            <View style={styles.mainSearchContainer}>
              <Ionicons name="search" size={20} color="black" />
              
              <TextInput
                placeholder={mainSearch}
                style={styles.mainSearch}
              />
            </View>

            <View style={styles.subSearchContainer}>
              <TextInput placeholder={subSearch} style={styles.subSearch} />
              <Ionicons name="chevron-down" size={20} color="black" />
            
            </View>
          </View>
  );
}

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginHorizontal: 50,
  },
  mainSearchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    borderColor: "#000000",
    borderWidth: 2,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  mainSearch: {
    fontFamily: "Souliyo Unicode",
    fontSize: 12,
    color: "#000000",
    flex: 1,
  },
  subSearchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 20,
    marginRight: 40,
    paddingHorizontal: 10,
    position: "absolute",
    right: -40,
  },
  subSearch: {
    fontFamily: "Souliyo Unicode",
    fontSize: 12,
    fontWeight: "regular",
    color: "#000000",
    justifyContent: "center",
  },
});
