import React from 'react';
import { View, StyleSheet, Text, TextInput,Image } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Rating, AirbnbRating } from "react-native-ratings";

export default function SingleJacket({name, image, price}) {
  return (
        
    <View style={styles.jacketContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={image} />
        </View>
        <View style={styles.starRatings}>
          <Text style={styles.titleDetails}>{name}</Text>
          {/* <Text style={styles.stars}>star</Text>  */}
          <Rating
            readonly={true}
            imageSize={25}
            tintColor="#e6ebe6"
            style={{ paddingVertical: 10, alignSelf: "flex-start" }}
          />
          <Text style={styles.prize}>{price}</Text>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
 
  imageContainer: {
    flexDirection: "row",
   
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
    
  },

  jacketContainer: {
    flexDirection: "row",
    height: 100,
    
  },
  starRatings: {
    marginLeft: 20,
    justifyContent: "center",
  },
  titleDetails: {
    fontSize: 15,
    fontWeight: "bold",
  },
  prize: {
    fontWeight: "bold",
    color: "blue",
    
  },
});
