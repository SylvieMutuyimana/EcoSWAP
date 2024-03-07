import React, { useState, useCallback } from "react";
import { Text, StyleSheet, View, Pressable, Modal } from "react-native";
import Menu1 from "../../components/pages/BuyerMenu";
import { useNavigation } from "@react-navigation/native";
import CategoryFilterContainer3 from "../../components/pages/buyer/CategoryFilterContainer3";
import ProductSearchContainer from "../../components/ProductSearchContainer";
import ContainerItem from "../../components/ContainerItem";
import NavCategories from "../../components/nav/buyer/old/NavCategories";
import { FontSize, FontFamily, Color, Padding, Border } from "../../GlobalStyles";

const CATEGORIES1 = () => {
  const [menuiconVisible, setMenuiconVisible] = useState(false);
  const navigation = useNavigation();

  const openMenuicon = useCallback(() => {
    setMenuiconVisible(true);
  }, []);

  const closeMenuicon = useCallback(() => {
    setMenuiconVisible(false);
  }, []);

  return (
    <>
      <View style={styles.categories}>
        <View style={[styles.thepage, styles.thepageLayout]}>
          <View style={[styles.pagecontent, styles.thepageLayout]}>
            <CategoryFilterContainer3 computersTVsMarginTop="unset" />
            <ProductSearchContainer
              propMarginTop={10}
              onMenuiconPress={openMenuicon}
            />
            <View style={styles.items}>
              <View style={styles.homeAppliancesWrapper}>
                <Text style={styles.homeAppliances}>HOME APPLIANCES</Text>
              </View>
              <View style={styles.items1}>
                <ContainerItem
                  dimensionCode={require("../../assets/spoil-blender-1630388828-6a58d22e-13.png")}
                  productDimensionsCode={require("../../assets/biheartfill1.png")}
                  propBackgroundColor="#c0c0c0"
                  propMarginTop="unset"
                />
                <ContainerItem
                  dimensionCode={require("../../assets/spoil-blender-1630388828-6a58d22e-13.png")}
                  productDimensionsCode={require("../../assets/biheartfill1.png")}
                  propBackgroundColor="#c0c0c0"
                  propMarginTop={10}
                />
                <ContainerItem
                  dimensionCode={require("../../assets/spoil-blender-1630388828-6a58d22e-13.png")}
                  productDimensionsCode={require("../../assets/biheartfill1.png")}
                  propBackgroundColor="#c0c0c0"
                  propMarginTop={10}
                />
                <ContainerItem
                  dimensionCode={require("../../assets/spoil-blender-1630388828-6a58d22e-13.png")}
                  productDimensionsCode={require("../../assets/biheartfill1.png")}
                  propBackgroundColor="#c0c0c0"
                  propMarginTop={10}
                />
              </View>
            </View>
          </View>
        </View>
        <NavCategories
          navCategoryPosition="unset"
          navCategoryBorderStyle="solid"
          navCategoryBorderColor="#8d8a8a"
          navCategoryBorderTopWidth={1}
          onHOMEPress={() => navigation.navigate("HOMES")}
          onCATEGORYChosenPress={() => navigation.navigate("CATEGORIES1")}
          onCARTPress={() => navigation.navigate("CART")}
          onPROFILEPress={() => navigation.navigate("PROFILE")}
        />
      </View>

      <Modal animationType="fade" transparent visible={menuiconVisible}>
        <View style={styles.menuiconOverlay}>
          <Pressable style={styles.menuiconBg} onPress={closeMenuicon} />
          <Menu1 onClose={closeMenuicon} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  thepageLayout: {
    width: 360,
    overflow: "hidden",
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
    marginTop: 5,
    alignItems: "center",
    overflow: "hidden",
  },
  items: {
    height: 571,
    paddingHorizontal: Padding.p_mid_5,
    paddingVertical: 0,
    marginTop: 10,
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
  categories: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.grey,
    flex: 1,
    width: "100%",
    height: 800,
    alignItems: "center",
    overflow: "hidden",
  },
});

export default CATEGORIES1;
