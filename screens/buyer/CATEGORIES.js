import React, { useState, useCallback } from "react";
import { Text, View, Pressable, Modal, TextInput, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import BuyerPageTemplate from "./Template";
import { buyerHomeStyles } from "../../assets/styles/pages/buyer/buyerHomeStyles";
import Search from "../Search";
import { LoadingStyles } from "../../assets/styles/pages/buyer/BuyerLoadingStyles";
import CategoryFilterContainer1 from "../../components/pages/buyer/CategoryFilterContainer1";
import ContainerItem3 from "../../components/pages/item/ContainerItem3";
import ContainerItem2 from "../../components/pages/item/ContainerItem2";
import ContainerItem1 from "../../components/pages/item/ContainerItem1";
import ContainerItem from "../../components/pages/item/ContainerItem";
import { FontSize, FontFamily, Color, Padding, Border } from "../../GlobalStyles";

const CATEGORIES = () => {
  const navigation = useNavigation();
  const [searchContainer, setsearchContainer] = useState(false);

  const openSearchContainer = useCallback(() => {
    setsearchContainer(true);
  }, []);

  const closesearchContainer = useCallback(() => {
    setsearchContainer(false);
  }, []);
  const [searcInput, setInput] = useState(null)
  const searchPart = ()=>{
    return(
      <Pressable onPress={openSearchContainer} 
        style={[LoadingStyles.search, LoadingStyles.searchFlexBox]}
      >
        <View style={[LoadingStyles.searchProductNameParent, LoadingStyles.headingFlexBox]} >
          <TextInput style={LoadingStyles.searchProductName}
            placeholder={'Search Product Name'} onChangeText={(text) => setInput(text)}
          />
          <Image style={LoadingStyles.searchButton} contentFit="cover"
            source={require("../../assets/images/icons/searchButton.png")}
          />
        </View>
        <Image style={LoadingStyles.menuicon} contentFit="cover"
          source={require("../../assets/images/icons/menuicon.png")}
        />
      </Pressable>
    )
  }
  return (
    <BuyerPageTemplate page_name ='Categories'>
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
              dimensionCode={require("../../assets/images/samples/spoil-blender-11.png")}
              productDimensionsCode={require("../../assets/images/icons/biheartfill.png")}
            />
            <ContainerItem
              dimensionCode={require("../../assets/images/samples/spoil-blender-11.png")}
              productDimensionsCode={require("../../assets/images/icons/biheartfill.png")}
              propBackgroundColor="#fff"
              propMarginTop={10}
            />
            <ContainerItem
              dimensionCode={require("../../assets/images/samples/spoil-blender-11.png")}
              productDimensionsCode={require("../../assets/images/icons/biheartfill.png")}
              propBackgroundColor="#fff"
              propMarginTop={10}
            />
          </View>
        </View>
      </View>
      <Modal animationType="fade" transparent visible={searchContainer}>
        <View style={buyerHomeStyles.searchContainerOverlay}>
          <Pressable
            style={buyerHomeStyles.searchContainerBg}
            onPress={closesearchContainer}
          />
          <Search onClose={closesearchContainer} />
        </View>
      </Modal>
    </BuyerPageTemplate>
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