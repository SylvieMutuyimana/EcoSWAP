import React, { memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import ItemContainer1 from "../../components/pages/item/ItemContainer1";
import SoldItemsContainer from "../../components/pages/seller/SoldItemsContainer";
import SaleItemsContainer from "../../components/pages/seller/SaleItemsContainer";
import { FontSize, Color, FontFamily, Padding, Border } from "../../GlobalStyles";
import SellerPageTemplate from "./Template";

const ItemContainer1 = memo(() => {
  return (
    <View style={ItemStyles.newItesm}>
      <Text style={ItemStyles.uploadAndSell}>Upload and sell new items</Text>
      <View style={ItemStyles.uploadNewItem}>
        <View style={ItemStyles.upload}>
          <Image
            style={ItemStyles.img}
            contentFit="cover"
            source={require("../../../assets/images/icons/bxcloudupload.png")}
          />
          <Text style={ItemStyles.newItem}>New item</Text>
        </View>
        <View style={ItemStyles.itemsSaleOverview}>
          <Text style={ItemStyles.statusTypo}>Sold item: 3</Text>
          <Text style={[ItemStyles.status1, ItemStyles.statusTypo]}>
            Items for sale: 2
          </Text>
          <Text style={[ItemStyles.status1, ItemStyles.statusTypo]}>Reviews: 1</Text>
        </View>
      </View>
    </View>
  );
});
const SELL = () => {
  return (
    <SellerPageTemplate page_name ='Sell'>
      <View style={[styles.newItesmParent, styles.sellSpaceBlock]}>
        <ItemContainer1 />
        <View style={styles.items}>
          <SoldItemsContainer />
          <SaleItemsContainer />
        </View>
      </View>
    </SellerPageTemplate>
  );
};

const ItemStyles = StyleSheet.create({
  statusTypo: {
    height: 14,
    fontSize: FontSize.size_xs,
    width: 124,
    textAlign: "left",
    color: Color.colorsDefault,
    fontFamily: FontFamily.interRegular,
  },
  uploadAndSell: {
    fontSize: FontSize.size_3xs,
    height: 16,
    width: 124,
    textAlign: "left",
    color: Color.colorsDefault,
    fontFamily: FontFamily.interRegular,
  },
  img: {
    width: 60,
    height: 60,
    overflow: "hidden",
  },
  newItem: {
    fontSize: FontSize.size_base,
    textAlign: "center",
    width: 88,
    height: 23,
    color: Color.colorsDefault,
    fontFamily: FontFamily.interRegular,
  },
  upload: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  status1: {
    marginTop: 10,
  },
  itemsSaleOverview: {
    paddingHorizontal: Padding.p_7xl,
    paddingVertical: Padding.p_2xs,
    marginLeft: 20,
    overflow: "hidden",
  },
  uploadNewItem: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.primaryPureWhite,
    flexDirection: "row",
    paddingHorizontal: Padding.p_mini,
    paddingVertical: 0,
    marginTop: 5,
    overflow: "hidden",
  },
  newItesm: {
    overflow: "hidden",
  },
});
const styles = StyleSheet.create({
  sellSpaceBlock: {
    paddingHorizontal: 0,
    alignItems: "center",
    overflow: "hidden",
  },
  items: {
    marginTop: 20,
    alignItems: "center",
    overflow: "hidden",
  },
  newItesmParent: {
    width: 360,
    height: 676,
    paddingVertical: Padding.p_mini,
  },
});

export default SELL;
