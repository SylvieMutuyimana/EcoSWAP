import React from "react";
import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Color, Border } from "../../../../GlobalStyles";

const SalesoldItem = (item, type) => {
  console.log(item)
  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <Image style={styles.img} resizeMode="cover" source={item.image}/>
      </View>
      <View style={styles.rightSide}>
        <Text style={styles.description} numberOfLines={1} ellipsizeMode="tail">
          {item.description}
        </Text>
        <Text style={styles.price}>{item.price} Rwf</Text>
        <View style={styles.options}>
          {
            type === 'sale'?(
              <React.Fragment>
                <Pressable>
                  <Text style={styles.optionText}>Check bids</Text>
                </Pressable>
                <Pressable>
                  <Text style={styles.optionText}>edit price</Text>
                </Pressable>
              </React.Fragment>
            ):(
              <React.Fragment>
                <Pressable>
                  <Text style={styles.optionText}>Check item</Text>
                </Pressable>
              </React.Fragment>
            )
          }
          <Pressable style={styles.wish}>
            <Text style={styles.optionText}>Remove</Text>
            <Image style={styles.icon} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    borderRadius: Border.item_br,
    backgroundColor: Color.primaryPureWhite,
    height: 105, 
    overflow: "hidden",
    width: '100%'
  },
  leftSide: {
    width: "35%",
    justifyContent: "center",
    alignItems: "center",
  },
  rightSide: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  price: {
    fontWeight: "700",
    fontSize: 13,
    marginTop:5
  },
  description: {
    fontSize: 13,
    color: Color.colorsDefault,
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  options: {
    flexDirection: "row",
    alignItems: "center",
    fontWeight: "700",
    marginTop: 1, 
  },
  wish: {
    flexDirection: "row",
    fontWeight: "700",
    alignItems: "center",
    marginLeft: 10, 
  },
  optionText: {
    fontSize: 13,
    fontStyle: "italic",
    color: Color.colorMediumblue_200,
    marginRight: 15,
  },
  icon: {
    marginLeft: 5, 
  },
});

export default SalesoldItem;
