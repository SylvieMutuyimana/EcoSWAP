import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import CategoryFilterContainer3 from "../../components/pages/buyer/CategoryFilterContainer3";
import ProductSearchContainer1 from "../../components/ProductSearchContainer1";
import WishlistContainer1 from "../../components/pages/buyer/WishlistContainer1";
import WishlistContainer from "../../components/pages/buyer/WishlistContainer";
import NavSoldS from "../../components/nav/seller/old/NavSoldS";
import { FontSize, FontFamily, Color, Padding, Border } from "../../GlobalStyles";
import SellerPageTemplate from "./Template";

const MYITEMS = () => {
  const navigation = useNavigation();

  return (
    <SellerPageTemplate page_name ='My Items'>
      <View style={styles.heading}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.text}>{`<--`}</Text>
        </Pressable>
        <Text style={styles.description}>MY ITEMS</Text>
        <Image
          style={styles.headingChild}
          contentFit="cover"
          source={require("../../assets/frame-175.png")}
        />
      </View>
      <CategoryFilterContainer3 />
      <ProductSearchContainer1 />
      <WishlistContainer1 listHeadingText={`Sold Items -->`} />
      <WishlistContainer actionLabel={`Pending Payment -->`} />
    </SellerPageTemplate>
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

});

export default MYITEMS;
