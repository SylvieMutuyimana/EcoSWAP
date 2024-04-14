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
  const navigation =useNavigation()
  const chooseItem = (item, item_link)=>{
    navigateSellerItem(item, 'new')
    navigation.navigate(item_link)
  }
  const RequestsContainer = () => {
    const item_link = 'SellerItem'
    return (
      <HomePageItemsContTemplate headingTitle={'REQUESTS'} displayItems={displayItems} theItems={requestItems}>
        <Home2ColItems item_link = {item_link} theItems={requestItems} number_items={'8'} chosenItemType={'request'} chooseItem={chooseItem}/>
      </HomePageItemsContTemplate>
    );
  };

  const WishlistContainer = () => {
    const item_link = 'SoldItem'
    return (
      <HomePageItemsContTemplate headingTitle={'SOLD ITEMS'} displayItems={displayItems} theItems={soldItems}>
        <WishlistCartItems theItems={soldItems} number_items={'16'} chooseItem={chooseItem} item_link = {item_link} />
      </HomePageItemsContTemplate>
    );
  };

  const displayItems = (headingTitle, theItems)=>{
    let item_link
    if(headingTitle==='SOLD ITEMS'){
      item_link='SoldItem'
    }else{
      item_link='SellerItem'
    }
    navigateDisplayItems(navigation, headingTitle, theItems, item_link)
  }
  return (
    <SellerPageTemplate page_name ='SellerHome'>
      <View style={[homeStyles.container, homeStyles.seller]}>
        <HomeSlideshow />
        {
          requestItems && requestItems?.length>0 &&(
            <RequestsContainer />
          )
        }
        {
          soldItems && soldItems?.length>0 &&(
            <WishlistContainer />
          )
        }
      </View>
    </SellerPageTemplate>
  );
};


export default SellerHome;