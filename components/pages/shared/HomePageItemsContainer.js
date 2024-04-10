import React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Color } from "../../../GlobalStyles";
import { useNavigation } from "@react-navigation/core";

const HomePageItemsContTemplate = ({ children, headingTitle,maxWidth, seeCatItems, displayItems, theItems}) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.container, {maxWidth: maxWidth?maxWidth:"100%", marginTop:headingTitle?20:0}]}>
      {
        headingTitle &&(
          <View style={styles.heading}>
            <Text style={styles.headingTitle}>{headingTitle?headingTitle:''}</Text>
            <Pressable onPress={() => seeCatItems?seeCatItems():displayItems(headingTitle, theItems)} style={styles.seeAll}>
              <Text style={styles.seeAllText}>See All</Text>
            </Pressable>
          </View>
        )
      }
      <View style={styles.itemsContainer}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
    overflow:'hidden'
  },
  heading: {
    paddingHorizontal: 10,
    width: "95%",
    display:"block",
    justifyContent: "center",
    alignItems: "center",
  },
  headingTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: Color.colorsDefault,
    textAlign: "left",
    float:"left",
    width:"70%",
  },
  seeAll: {
    width:"30%",
    float:"right",
  },
  seeAllText:{
    fontWeight: "500",
    color: Color.blue,
    textAlign: "right",
    fontSize: 15,
  },
  itemsContainer: {
    width: "100%",
    maxWidth:"100%",
    minWidth:"100%",
  },
});

export default HomePageItemsContTemplate;
