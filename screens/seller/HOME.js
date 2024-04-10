import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SellerPageTemplate from "./Template";
import HomeSlideshow from "../../components/pages/shared/HomeSlideshow";
import HomePageItemsContTemplate from "../../components/pages/shared/HomePageItemsContainer";
import Home2ColItems from "../../components/pages/shared/Home2ColItems";
import { homeStyles } from "../../assets/styles/pageStyles";
import WishlistCartItems from "../../components/pages/buyer/WishlistCartItems";
import { getItems } from "../../components/data/sampleData";
import { navigateDisplayItems, navigateSellerItem } from "../item/navigateItem";

const SellerHome = () => {
  const requestItems = getItems('request')
  const soldItems = getItems('sold items')
  const item_link = 'SellerItem'
  const navigation =useNavigation()
  const chooseItem = (item)=>{
    navigateSellerItem(item, 'new')
    navigation.navigate(item_link)
  }
  const RequestsContainer = () => {
    return (
      <Home2ColItems item_link = {item_link} theItems={requestItems} number_items={'8'} chosenItemType={'request'} chooseItem={chooseItem}/>
    );
  };
  const displayItems = (item_types, items)=>{
    navigateDisplayItems(item_types, items)
  }
  return (
    <SellerPageTemplate page_name ='SellerHome'>
      <View style={[homeStyles.container, homeStyles.seller]}>
        <HomeSlideshow />
        {
          requestItems && requestItems?.length>0 &&(
            <HomePageItemsContTemplate headingTitle={'REQUESTS'} displayItems={displayItems} >
              <RequestsContainer/>
            </HomePageItemsContTemplate>
          )
        }
        {
          soldItems && soldItems?.length>0 &&(
            <HomePageItemsContTemplate headingTitle={'SOLD ITEMS '} displayItems={displayItems} theItems={soldItems}>
              <WishlistCartItems theItems={soldItems} number_items={'12'} chooseItem={chooseItem}  />
            </HomePageItemsContTemplate>
          )
        }
      </View>
    </SellerPageTemplate>
  );
};


export default SellerHome;