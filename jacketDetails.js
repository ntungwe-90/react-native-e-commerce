import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Rating, AirbnbRating } from "react-native-ratings";
import { AntDesign } from "@expo/vector-icons";

export default function JacketDetails() {
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
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("./assets/polo3.jpg")} />
      </View>
      <View style={styles.textHeading}>
        <Text style={styles.heading}>Red Woman Jacket</Text>
      </View>
      <Rating
        readonly={true}
        imageSize={25}
        tintColor="#e6ebe6"
        style={{ paddingVertical: 10, alignSelf: "flex-start" }}
      />
      <View style={styles.lineDetails}></View>
      <View style={styles.textDetails}>
        <Text style={styles.text}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page.
        </Text>
      </View>
      <View style={styles.materialDetails}>
        <Text style={styles.materialInfo}>
          Material: 91% polyester, 9% elastane
        </Text>
      </View>
      <View style={styles.mainSizes}>
        <View style={styles.whiteButton}>
          <Text>XS</Text>
        </View>
        <View style={styles.whiteButton}>
          <Text>S</Text>
        </View>
        <View style={styles.bluButton}>
          <Text>M</Text>
        </View>
        <View style={styles.whiteButton}>
          <Text>L</Text>
        </View>
        <View style={styles.whiteButton}>
          <Text>XL</Text>
        </View>
      </View>
      <View style={styles.mainButtonContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.leftText}>
            <Text style={styles.prices}>Total amount</Text>
            <Text style={styles.prices}>$110</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addToCart}>
            <Text style={styles.cart}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
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

  image: {
    width: 200,
    height: 200,
    borderRadius: 15,
    alignSelf: "center",
  },
  textHeading: {
    marginTop: 10,
  },
  heading: {
    fontSize: 15,
    fontWeight: "bold",
  },

  lineDetails: {
    height: 5,
    width: 50,
    backgroundColor: "#7f67e0",
    borderRadius: 5,
  },

  materialDetails: {
    height: 60,
    backgroundColor: "white",
    marginTop: 25,
  },
  materialInfo: {
    fontSize: 16,
    paddingVertical: 2,
    color: "#7f67e0",
    alignSelf: "center",
  },

  mainSizes: {
    flexDirection: "row",
    marginTop: 25,
  },

  whiteButton: {
    height: 50,
    width: 50,
    marginHorizontal: 5,
    backgroundColor: "white",
    paddingVertical: 3,
   alignItems:"center",
   justifyContent:"center",
    borderRadius: 10,
    fontWeight: "bold",
    
  },

  bluButton: {
    backgroundColor: "#7f67e0",
    color: "white",
    width: 50,
    height: 50,
    marginHorizontal: 8,
    borderRadius: 10,
    alignItems:"center",
   justifyContent:"center",
    paddingVertical: 3,
    fontWeight: "bold"
    
  },
  mainButtonContainer: {
    marginHorizontal: 5,
    marginTop: 25,
  },

  buttonContainer: {
    backgroundColor: "#7f67e0",
    flexDirection: "row",
    width: 320,
    height: 80,
    borderRadius: 15,
  },
  leftText: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  prices: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    paddingLeft: 3,
  },

  addToCart: {
    height: 40,
    width: 95,
    marginLeft: 70,
    backgroundColor: "#2a2dbf",
    borderRadius: 10,
    alignSelf: "center",
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  cart: {
    paddingVertical: 3,
    alignSelf: "center",
    color: "white",
    
  },
});
