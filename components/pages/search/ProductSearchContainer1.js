import React, { useState, useCallback, memo } from "react";
import { Text, StyleSheet, View, Modal, Pressable } from "react-native";
import { Image } from "expo-image";
import ProductSearchContainer from "./ProductSearchContainer";
import { FontFamily, FontSize, Color, Border } from "../../../GlobalStyles";

const ProductSearchContainer1 = memo(() => {

  return (
    <>
      <View style={styles.items}>
        <ProductSearchContainer propMarginTop="unset"/>
        <View style={[styles.listedItemsWrapper, styles.item4SpaceBlock]}>
          <Text style={styles.listedItems}>{`Listed Items -->`}</Text>
        </View>
        <View style={[styles.item4, styles.item4SpaceBlock]}>
          <Image style={styles.itemImage}
            contentFit="cover"
            source={require("../../assets/images/samples/spoilt-blender.png")}
          />
          <Text style={styles.description}>
            <Text style={styles.sideDetails}>
              <Text style={styles.ionaBlenderWith}>
                Iona blender with a ...
              </Text>
              <Text style={styles.rwf}>10,000 rwf</Text>
              <Text style={styles.ionaBlenderWith}> </Text>
            </Text>
            <Text style={[styles.buy, styles.buyTypo]}>Buy Bid Remove(x)</Text>
          </Text>
        </View>
        <View style={[styles.item4, styles.item4SpaceBlock]}>
          <Image style={styles.itemImage} contentFit="cover"
            source={require("../../assets/images/samples/spoilt-blender.png")}
          />
          <Text style={styles.description}>
            <Text style={styles.sideDetails}>
              <Text style={styles.ionaBlenderWith}>Iona blender with a ...</Text>
              <Text style={styles.rwf}>10,000 rwf</Text>
              <Text style={styles.ionaBlenderWith}> </Text>
            </Text>
            <Text style={[styles.buy, styles.buyTypo]}>Buy Bid Remove(x)</Text>
          </Text>
        </View>
        <View style={[styles.item4, styles.item4SpaceBlock]}>
          <Image style={styles.itemImage} contentFit="cover"
            source={require("../../assets/images/samples/spoilt-blender.png")}
          />
          <Text style={styles.description}>
            <Text style={styles.sideDetails}>
              <Text style={styles.ionaBlenderWith}>Iona blender with a ...</Text>
              <Text style={styles.rwf}>30,0000 rwf</Text>
            </Text>
            <Text style={[styles.buy2, styles.buyTypo]}>Buy Bid Remove(x)</Text>
          </Text>
        </View>
      </View>

      <Modal animationType="fade" transparent>
        <View style={styles.menuiconOverlay}>
          <Pressable style={styles.menuiconBg} />
        </View>
      </Modal>
    </>
  );
});

const styles = StyleSheet.create({
  item4SpaceBlock: {
    marginTop: 5,
    width: 325,
    overflow: "hidden",
  },
  buyTypo: {
    fontFamily: FontFamily.interLight,
    fontStyle: "italic",
    fontSize: FontSize.size_5xs,
  },
  menuiconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  menuiconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  listedItems: {
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    width: 124,
    height: 13,
    textAlign: "left",
    color: Color.colorsDefault,
  },
  listedItemsWrapper: {
    flexDirection: "row",
  },
  itemImage: {
    top: 7,
    left: 15,
    width: 80,
    height: 51,
    position: "absolute",
  },
  ionaBlenderWith: {
    fontFamily: FontFamily.interRegular,
  },
  rwf: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  sideDetails: {
    fontSize: FontSize.size_4xs,
    color: Color.colorsDefault,
  },
  buy: {
    color: Color.colorMediumblue_200,
  },
  description: {
    height: "78.46%",
    width: "58.46%",
    top: "10.77%",
    left: "35.38%",
    position: "absolute",
    textAlign: "left",
  },
  item4: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.primaryPureWhite,
    height: 65,
  },
  buy2: {
    color: Color.colorMediumblue_100,
  },
  items: {
    backgroundColor: Color.colorMediumblue_300,
    alignItems: "center",
    marginTop: 10,
    overflow: "hidden",
  },
});

export default ProductSearchContainer1;
