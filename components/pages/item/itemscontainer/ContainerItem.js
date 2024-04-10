import React from "react";
import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { getUserTypeFromLocalStorage } from "../../../data/localStorage";
import { Border, Color } from "../../../../GlobalStyles";

const ContainerItem = ({theItem, chooseItem}) => {
  console.log('theItem: ', theItem)
  const userType = getUserTypeFromLocalStorage()
  return (
    <Pressable style={styles.container} onPress={()=>chooseItem(theItem)}>
      <View style={styles.leftSide}>
        <Image style={styles.img} contentFit="cover" source={theItem.image}/>
      </View>
      <View style={styles.rightSide}>
        <Text style={styles.description} numberOfLines={1} ellipsizeMode="tail">
          {theItem.description}
        </Text>
        <Text style={styles.price}>{theItem.price} Rwf</Text>
        <View style={styles.options}>
          <Pressable>
            <Text style={styles.optionText}>Check item</Text>
          </Pressable>
          {
            userType === "buyer"?(
              <React.Fragment>
                <Pressable>
                  <Text style={styles.optionText}>Bid</Text>
                </Pressable>
                <Pressable style={styles.wish}>
                  <Text style={styles.optionText}>Wish</Text>
                  <Image style={styles.icon} contentFit="cover"
                    source={require("../../../../assets/images/icons/wish_black.png")}
                  />
                </Pressable>
              </React.Fragment>
            ):(
              <React.Fragment>
                <Pressable>
                  <Text style={styles.optionText}>{'Remove (x)'}</Text>
                </Pressable>
              </React.Fragment>
            )
          }
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    marginTop: 10,
    borderRadius: Border.item_br,
    backgroundColor: Color.primaryPureWhite,
    width: "100%",
    height: 90, 
    overflow: "hidden",
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
    marginTop: 1, // Adjusted margin to separate Wish row from other options
  },
  wish: {
    flexDirection: "row",
    fontWeight: "700",
    alignItems: "center",
    marginLeft: 10, // Adjusted margin between options
  },
  optionText: {
    fontSize: 13,
    fontStyle: "italic",
    color: Color.colorMediumblue_200,
    marginRight: 15,
  },
  icon: {
    height: 12,
    width: 12,
    marginLeft: 1,
  },
});

export default ContainerItem;
