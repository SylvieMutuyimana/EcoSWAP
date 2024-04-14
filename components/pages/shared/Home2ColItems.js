// Home2ColItems
import React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Color,  Border } from "../../../GlobalStyles";

const Home2ColItems = ({ theItems, page_name, number_items, chooseItem, item_link}) => {
  const theItems_ = number_items?theItems?.slice(0, number_items):theItems?.slice(0, 12)

  return (
    <View style={styles.theItems}>
      {
        page_name==='Loading'?(
          [[...Array(8)].map((_, index)=>(
            <View style={[styles.theItem, index>1 ? styles.theItem_ : null]} key={index}>
              <View style={[styles.img, LoadingStyles.img]}/>
              <View style={styles.details}>
                <View style={[styles.description, LoadingStyles.description]}/>
                <View style={[styles.description, LoadingStyles.description1]}/>
                <View style={[styles.downDetails, LoadingStyles.downDetails]}/>
              </View>
            </View>
          ))]
        ):theItems_?.slice(0, 12).map((item, index) => (
          <Pressable style={[styles.theItem, index>1 ? styles.theItem_ : null]} onPress={()=>chooseItem(item, item_link)} key={index}>
            <Image style={styles.img} resizeMode="cover" source={item.image} />
            <View style={styles.details}>
              <Text style={styles.description}>{item.description}</Text>
              <View style={styles.downDetails}>
                <Text style={styles.price}>{item.price} rwf</Text>
                <Image style={styles.wishIcon} resizeMode="cover"
                  source={require("../../../assets/images/icons/wish.png")}
                />
              </View>
            </View>
          </Pressable>
        ))
      }
    </View>
  );
};

const styles = StyleSheet.create({
  theItems: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 5,
    paddingHorizontal: 5
  },
  theItem: {
    width: "48%",
    backgroundColor: Color.primaryPureWhite,
    borderRadius: Border.item_br,
    flexDirection: "row",
    overflow: "hidden",
    height: 68,
    padding: 10,
  },
  theItem_: {
    marginTop: 14,
  },
  img: {
    width: "40%",
    height: "100%",
  },
  details: {
    marginLeft: "5%",
    width: "55%",
    justifyContent: "center",
    overflow: "hidden",
  },
  description: {
    width: "100%",
    textAlign: "left",
    color: Color.colorsDefault,
    fontSize: 12,
    overflow: "hidden",
  },
  downDetails: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  price: {
    fontWeight: "700",
    color: Color.colorsDefault,
    fontSize: 12,
    overflow: "hidden",
    width: "80%",
  },
  wishIcon: {
    width: 8,
    height: 8,
    marginLeft: 3,
  },
});

const LoadingStyles = StyleSheet.create({
  img: {
    backgroundColor: Color.silver
  },
  description: {
    height:12,
    backgroundColor:Color.lightGrey
  },
  description1: {
    marginTop:3,
    height:12,
    backgroundColor:Color.lightGrey
  },
  downDetails: {
    marginTop:7,
    height:12,
    backgroundColor:Color.lightGrey
  }
});

export default Home2ColItems;
