import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import TITLEPAGE from "../components/TITLEPAGE";
import CategoryFilterContainer1 from "../components/CategoryFilterContainer1";
import ContainerItem3 from "../components/ContainerItem3";
import ContainerItem2 from "../components/ContainerItem2";
import ContainerItem1 from "../components/ContainerItem1";
import ContainerItem from "../components/ContainerItem";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const CATEGORIES = () => {
  return (
    <View style={[styles.categories1, styles.itemsFlexBox]}>
      <TITLEPAGE pROFILE={`CATEGORIES`}
        headerProfilePosition="unset"
        headerProfileTop="unset"
        headerProfileLeft="unset"
        pROFILEColor="#000"
        fluentnavigation16FilledOverflow="hidden"
      />
      <View style={[styles.categoriesParent, styles.itemsFlexBox]}>
        <CategoryFilterContainer1 />
        <View style={[styles.items, styles.itemsFlexBox]}>
          <View style={styles.homeAppliancesWrapper}>
            <Text style={styles.homeAppliances}>HOME APPLIANCES</Text>
          </View>
          <View style={[styles.items1, styles.itemsFlexBox]}>
            <ContainerItem3 />
            <ContainerItem2 />
            <ContainerItem1 />
            <ContainerItem
              dimensionCode={require("../assets/spoil-blender-1630388828-6a58d22e-11.png")}
              productDimensionsCode={require("../assets/biheartfill.png")}
            />
            <ContainerItem
              dimensionCode={require("../assets/spoil-blender-1630388828-6a58d22e-11.png")}
              productDimensionsCode={require("../assets/biheartfill.png")}
              propBackgroundColor="#fff"
              propMarginTop={10}
            />
            <ContainerItem
              dimensionCode={require("../assets/spoil-blender-1630388828-6a58d22e-11.png")}
              productDimensionsCode={require("../assets/biheartfill.png")}
              propBackgroundColor="#fff"
              propMarginTop={10}
            />
            <ContainerItem
              dimensionCode={require("../assets/spoil-blender-1630388828-6a58d22e-11.png")}
              productDimensionsCode={require("../assets/biheartfill.png")}
              propBackgroundColor="#fff"
              propMarginTop={10}
            />
            <ContainerItem
              dimensionCode={require("../assets/spoil-blender-1630388828-6a58d22e-11.png")}
              productDimensionsCode={require("../assets/biheartfill.png")}
              propBackgroundColor="#fff"
              propMarginTop={10}
            />
          </View>
        </View>
      </View>
      <CategoryFilterContainer4 />
    </View>
  );
};

const styles = StyleSheet.create({
  itemsFlexBox: {
    alignItems: "center",
    overflow: "hidden",
  },
  homeAppliances: {
    fontSize: FontSize.size_3xs,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorsDefault,
    textAlign: "left",
    width: 124,
    height: 13,
  },
  homeAppliancesWrapper: {
    width: 325,
    flexDirection: "row",
    overflow: "hidden",
  },
  items1: {
    backgroundColor: Color.colorMediumblue_300,
    marginTop: 5,
  },
  items: {
    paddingHorizontal: Padding.p_mid_5,
    paddingVertical: 0,
    marginTop: 10,
  },
  categoriesParent: {
    width: 360,
    height: 676,
  },
  categories1: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.grey,
    flex: 1,
    width: "100%",
    height: 800,
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_28xl,
  },
});

export default CATEGORIES;
