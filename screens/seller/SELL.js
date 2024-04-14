import React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import SaleItemsContainer from "../../components/pages/seller/SaleItemsContainer";
import { FontSize, Color, Padding, Border } from "../../GlobalStyles";
import SellerPageTemplate from "./Template";
import { otherPagesStyles } from "../../assets/styles/pageStyles";
import HomePageItemsContTemplate from "../../components/pages/shared/HomePageItemsContainer";
import { getItems } from "../../components/data/sampleData";
import { FontAwesome } from '@expo/vector-icons'; 
import { navigateDisplayItems } from "../item/navigateItem";
import { useNavigation } from "@react-navigation/native";

const SELL = () => {
  const navigation = useNavigation();
  const saleItems = getItems('sale Data')
  const n_of_items = {
    sale:2, sold:3, star: 3, reviews: 8
  }
  const UploaderContainer = () => {
    return (
      <View style={ItemStyles.uploaderContainer}>
        <View style={ItemStyles.uploadNewItem}>
          <Pressable style={ItemStyles.upload} onPress={()=>navigation.navigate('SelluploadItems')}>
            <Image style={ItemStyles.img} contentFit="cover"
              source={require("../../assets/images/icons/upload.png")}
            />
            <Text style={ItemStyles.newItem}>New item</Text>
          </Pressable>
          <View style={ItemStyles.itemsSaleOverview}>
            <Text style={ItemStyles.row}>Sold item: {n_of_items.sold || 0}</Text>
            <Text style={[ItemStyles.rowTop, ItemStyles.row]}>
              Items for sale: {n_of_items.sale || 0}
            </Text>
            <Text style={[ItemStyles.rowTop, ItemStyles.row]}>Reviews: {n_of_items.reviews || 0}</Text>
            <View style={[ItemStyles.rowTop, starRatedStyles.startRow]}>
              {[...Array(5)].map((_, index) => (
                <FontAwesome key={index} name="star" size={20}
                  style={index < (n_of_items.star? n_of_items.star : 0) ? starRatedStyles.checked : null}
                />
              ))}
            </View>
          </View>
        </View>
      </View>
    );
  };
  const displayItems = (headingTitle, theItems)=>{
    let item_link
    if(headingTitle==='Sold Items'){
      item_link='SoldItem'
    }else{
      item_link='SellerItem'
    }
    navigateDisplayItems(navigation, headingTitle, theItems, item_link)
  }
  return (
    <SellerPageTemplate page_name ='Sell'>
      <View style={[otherPagesStyles.container, otherPagesStyles.top]}>
        <UploaderContainer />
        <View style={styles.items}>
          <HomePageItemsContTemplate headingTitle={'Items For Sale'} displayItems={displayItems} theItems={saleItems}>
            <SaleItemsContainer theItems={saleItems} number_items={'5'}/>
          </HomePageItemsContTemplate>
        </View>
      </View>
    </SellerPageTemplate>
  );
};

const ItemStyles = StyleSheet.create({
  row: {
    height: 14,
    width: "100%",
    textAlign: "left",
    color: Color.colorsDefault,
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
  },
  upload: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  rowTop: {
    marginTop: 10,
  },
  itemsSaleOverview: {
    paddingHorizontal: Padding.p_7xl,
    paddingVertical: Padding.item_p_v,
    marginLeft: 20,
    overflow: "hidden",
  },
  uploadNewItem: {
    borderRadius: Border.item_br,
    backgroundColor: Color.primaryPureWhite,
    flexDirection: "row",
    paddingHorizontal: Padding.p_mini,
    paddingVertical: 0,
    marginTop: 5,
    overflow: "hidden",
  },
  uploaderContainer: {
    overflow: "hidden",
  },
});
const styles = StyleSheet.create({
  items: {
    alignItems: "center",
    overflow: "hidden",
    width:"100%"
  },
});

const starRatedStyles = StyleSheet.create({
  startRow:{
    flexDirection: 'row'
  },
  checked:{
    color: "orange",
  },
})

export default SELL;
