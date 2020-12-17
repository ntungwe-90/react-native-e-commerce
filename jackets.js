import React from "react";
import { View, StyleSheet, Text, TextInput, Image, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Rating, AirbnbRating } from "react-native-ratings";
import SingleJacket from "./components/SingleJacket";

export default function Jackets({navigation}) {
  jackets = [
    {
      image: require("./assets/polo1.jpg"),
      name: "Bike Jacket Softshell Warm",
      price: "$550",
    },
    {
      image: require("./assets/polo1.jpg"),
      name: "Pink Hoody Merino",
      price: "$130",
    },
    {
      image: require("./assets/polo4.jpg"),
      name: "Hooded Jacket Classic",
      price: "$150",
    },
    {
      image: require("./assets/polo4.jpg"),
      name: "Red Woman Jacket",
      price: "$160",
    },
   
  ];
  return (
    <View style={styles.container}>
      <View style={styles.icons}>
        <AntDesign
          style={styles.arrowLeft}
          name="arrowleft"
          size={24}
          color="black"
        />
        <AntDesign
          style={styles.shoppingIcon}
          name="shoppingcart"
          size={20}
          color="black"
        />
      </View>

      <Text style={styles.tittle}>WOMEN'S JACKET</Text>
      <TextInput style={styles.searchBar} placeholder="search jacket " />
      <FlatList
        data={jackets}
        renderItem={({ item }) => {
          return (
            <SingleJacket
              name={item.name}
              price={item.price}
              image={item.image}
              navigation={navigation}
            />
          );
        }}
        keyExtractor={(item) => item.number}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "#e6ebe6",
    flex: 1,
  },
  tittle: {
    paddingHorizontal: 20,
    paddingTop: 30,
    fontWeight: "bold",
    fontSize: 20,
  },

  icons: {
    flexDirection: "row",
    paddingBottom: 5,
  },

  arrowLeft: {
    backgroundColor: "white",
    width: 40,
    height: 40,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 45,
  },

  shoppingIcon: {
    backgroundColor: "white",
    width: 40,
    height: 40,
    paddingVertical: 5,
    paddingHorizontal: 7,
    marginHorizontal: 240,
    borderRadius: 45,
  },

  searchBar: {
    fontSize: 18,
    paddingLeft: 10,
    marginVertical: 20,
    width: "95%",
    height: 60,
    backgroundColor: "white",
    borderRadius: 20,
  },
});
