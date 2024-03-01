import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import CategoryFilterContainer3 from "../components/CategoryFilterContainer3";
import ProductSearchContainer1 from "../components/ProductSearchContainer1";
import WishlistContainer1 from "../components/WishlistContainer1";
import WishlistContainer from "../components/WishlistContainer";
import NavSoldS from "../components/NavSoldS";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const MYITEMS = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.myItems}>
      <View style={[styles.thepage, styles.thepageLayout]}>
        <View style={[styles.pagecontent, styles.thepageLayout]}>
          <View style={styles.heading}>
            <Pressable onPress={() => navigation.goBack()}>
              <Text style={styles.text}>{`<--`}</Text>
            </Pressable>
            <Text style={styles.description}>MY ITEMS</Text>
            <Image
              style={styles.headingChild}
              contentFit="cover"
              source={require("../assets/frame-175.png")}
            />
          </View>
          <CategoryFilterContainer3 />
          <ProductSearchContainer1 />
          <WishlistContainer1 listHeadingText={`Sold Items -->`} />
          <WishlistContainer actionLabel={`Pending Payment -->`} />
        </View>
      </View>
      <NavSoldS
        navSoldSPosition="unset"
        navSoldSBorderStyle="solid"
        navSoldSBorderColor="#8d8a8a"
        navSoldSBorderTopWidth={1}
        onHOMESPress={() => navigation.navigate("HOMES")}
        onUPLOADSPress={() => navigation.navigate("SELL1")}
        onMyitemsSChosenPress={() => navigation.navigate("MYITEMS")}
        onPROFILESPress={() => navigation.navigate("PROFILES")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  thepageLayout: {
    width: 360,
    overflow: "hidden",
  },
  text: {
    fontSize: FontSize.font_size,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    textAlign: "left",
    width: 27,
    height: 18,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    color: Color.colorsDefault,
  },
  description: {
    fontSize: FontSize.size_2xs,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    width: 122,
    marginLeft: 83,
    color: Color.colorsDefault,
  },
  headingChild: {
    width: 4,
    height: 17,
    marginLeft: 83,
    overflow: "hidden",
  },
  heading: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: Padding.p_xl,
    alignItems: "center",
    overflow: "hidden",
  },
  pagecontent: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 676,
    alignItems: "center",
  },
  thepage: {
    height: 696,
  },
  myItems: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.grey,
    flex: 1,
    width: "100%",
    height: 800,
    alignItems: "center",
    overflow: "hidden",
  },
});

export default MYITEMS;
