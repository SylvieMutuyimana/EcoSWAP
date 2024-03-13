import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../../../GlobalStyles";

const SaleItemsContainer = ()=> {
  return (
    <View style={styles.saleItems}>
      <Text style={styles.itemsForSale}>Items for sale</Text>
      <View style={styles.itemsForSale1}>
        <View style={styles.itemLayout}>
          <Text style={styles.description}>
            <Text style={styles.ionaBlenderWithANewGlass}>
              <Text style={styles.ionaBlenderWithANewGlass1}>
                <Text style={styles.ionaBlenderWith}>
                  Iona blender with a new glass, but the motor is spoilt
                </Text>
                <Text style={styles.rwf}>20,000 rwf</Text>
              </Text>
              <Text style={styles.blankLine}>
                <Text style={styles.ionaBlenderWith}> </Text>
              </Text>
            </Text>
            <Text style={styles.blankLine}>
              <Text style={styles.checkItemTypo}>
                <Text style={styles.checkItem}>
                  Check item     Check bids     edit price
                </Text>
                <Text style={styles.removeX}>Remove (x)</Text>
              </Text>
            </Text>
          </Text>
          <Image style={styles.spoilBlender16303888286a58dIcon} contentFit="cover"
            source={require("../../../assets/images/samples/spoil-blender2.png")}
          />
        </View>
        <View style={[styles.item2, styles.itemLayout]}>
          <Text style={styles.description}>
            <Text style={styles.ionaBlenderWithANewGlass}>
              <Text style={styles.ionaBlenderWithANewGlass1}>
                <Text style={styles.ionaBlenderWith}>
                  Smashed screen iphone 4, front camera broken
                </Text>
                <Text style={styles.rwf}>56,000 rwf</Text>
              </Text>
              <Text style={styles.blankLine2}> </Text>
            </Text>
            <Text style={[styles.checkItemCheckBids2, styles.checkItemTypo]}>
              <Text style={styles.checkItem}>
                Check item     Check bids     edit price
              </Text>
              <Text style={styles.removeX}>Remove (x)</Text>
            </Text>
          </Text>
          <Image style={styles.istockImage} contentFit="cover"
            source={require("../../../assets/images/samples/cracked_phone3.png")}
          />
        </View>
        <Text style={styles.viewAll}>View all {`-->`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemLayout: {
    height: 70,
    width: 325,
    backgroundColor: Color.primaryPureWhite,
    overflow: "hidden",
  },
  checkItemTypo: {
    fontFamily: FontFamily.interLight,
    fontStyle: "italic",
  },
  itemsForSale: {
    fontSize: FontSize.size_xs,
    width: 163,
    height: 15,
    textAlign: "left",
    color: Color.colorsDefault,
    fontFamily: FontFamily.interRegular,
  },
  ionaBlenderWith: {
    fontFamily: FontFamily.interRegular,
  },
  rwf: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  ionaBlenderWithANewGlass1: {
    fontSize: FontSize.size_4xs,
  },
  blankLine: {
    fontSize: FontSize.size_5xs,
  },
  ionaBlenderWithANewGlass: {
    color: Color.colorsDefault,
  },
  checkItem: {
    color: Color.colorMediumblue_100,
  },
  removeX: {
    color: Color.colorRed,
  },
  description: {
    height: "78.57%",
    width: "61.54%",
    top: "11.43%",
    left: "34.77%",
    position: "absolute",
    textAlign: "left",
  },
  spoilBlender16303888286a58dIcon: {
    height: "92.29%",
    width: "24.62%",
    top: "4.57%",
    right: "70.77%",
    bottom: "3.14%",
    left: "4.62%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  blankLine2: {
    fontSize: FontSize.size_9xs,
    fontFamily: FontFamily.interRegular,
  },
  checkItemCheckBids2: {
    fontSize: FontSize.size_5xs,
  },
  istockImage: {
    top: 5,
    left: 15,
    width: 81,
    height: 56,
    position: "absolute",
  },
  item2: {
    marginTop: 10,
  },
  viewAll: {
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    width: 52,
    height: 10,
    marginTop: 10,
    fontStyle: "italic",
    fontSize: FontSize.size_4xs,
    textAlign: "left",
    color: Color.colorsDefault,
  },
  itemsForSale1: {
    borderRadius: Border.br_8xs,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    marginTop: 4,
    backgroundColor: Color.primaryPureWhite,
    overflow: "hidden",
  },
  saleItems: {
    backgroundColor: Color.colorDarkgreen,
    marginTop: 15,
    overflow: "hidden",
  },
});

export default SaleItemsContainer;
