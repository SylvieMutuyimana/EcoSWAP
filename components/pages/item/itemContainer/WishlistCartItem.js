import React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { Color } from "../../../../GlobalStyles";

const WishlistCartItem = ({theItem, page_name, chooseItem, item_link}) => {
  return (
    <Pressable style={styles.item} onPress={()=>page_name=== 'Loading'?null:chooseItem(theItem, item_link)}>
      {
        page_name === 'Loading'?(
          <React.Fragment>
            <View style={[styles.image, loadingstyles.image]} />
            <View style={[styles.price, loadingstyles.price]} />
          </React.Fragment>
        ):(
          <React.Fragment>
            <Image style={styles.image} resizeMode="cover" source={theItem.image}/>
            <Text style={styles.price}>{theItem.price} Rwf</Text>
          </React.Fragment>
        )
      }
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    width: "100%", 
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 50, 
  },
  price: {
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    color: Color.colorsDefault,
  },
});

const loadingstyles = StyleSheet.create({
  image: {
    backgroundColor:Color.silver,
    height: 50
  },
  price: {
    height: 12,
    backgroundColor:Color.lightGrey
  },
});

export default WishlistCartItem;
