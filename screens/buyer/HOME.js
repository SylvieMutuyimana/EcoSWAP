//home.js
import React, { useEffect, useState } from "react";
import { View, Pressable, TextInput } from "react-native";
import { Image } from "expo-image";
import BuyerPageTemplate from "./Template";
import { BuyerLoadingStyles } from "../../assets/styles/pages/buyer/BuyerLoadingStyles";
import { useNavigation } from "@react-navigation/core";
import HomeSlideshow from "../../components/pages/shared/HomeSlideshow";
import HomePageItemsContTemplate from "../../components/pages/shared/HomePageItemsContainer";
import HomeCategoryNav from "../../components/pages/buyer/home/HomeCategoryNav";
import { footerPages } from "../../page_links";
import { Width } from "../../GlobalStyles";
import { getItems } from "../../components/data/sampleData";
import { homeStyles } from "../../assets/styles/pageStyles";
import Home2ColItems from "../../components/pages/shared/Home2ColItems";
import { navigateBuyerItem, navigateDisplayItems } from "../item/navigateItem";

const BuyerHome = () => {
  const navigation = useNavigation()
  const newItems = getItems('new Data')
  console.log('newItems: ', newItems)
  const [searchOpen, openSearch] = useState(false)
  const item_link = 'BuyerItem'

  const chooseItem = (item)=>{
    navigateBuyerItem(item, 'new')
    navigation.navigate(item_link)
  }

  const displayItems = (item_types, items)=>{
    navigateDisplayItems(item_types, items)
  }

  useEffect(()=>{
    if(searchOpen){
      navigation.navigate('Search')
    }
  },[searchOpen])

  const openSearchContainer = () => {
    openSearch(true)
  }
  console.log('searchOpen: ', searchOpen)
  
  const SearchPart = ()=>{
    return(
      <View style={[BuyerLoadingStyles.search, BuyerLoadingStyles.searchFlexBox]} >
        <Pressable onPress={()=>openSearchContainer()} style={[BuyerLoadingStyles.searchContainer, BuyerLoadingStyles.headingFlexBox]} >
          <TextInput style={BuyerLoadingStyles.searchProductName}
            placeholder={'Search Product Name'}/>
          <Image style={BuyerLoadingStyles.searchButton} contentFit="cover"
            source={require("../../assets/images/icons/searchButton.png")}
          />
        </Pressable>
        <Pressable >
          <Image style={BuyerLoadingStyles.menuicon} contentFit="cover"
            source={require("../../assets/images/icons/menu_black.png")}
          />
        </Pressable>
      </View>
    )
  }

  const NewItemsContainer = () => {
    return (
      <Home2ColItems theItems={newItems} page_name ={'BuyerHome'} number_items={'12'} chooseItem ={chooseItem} />
    );
  };

  return (
    <BuyerPageTemplate page_name ='BuyerHome'>
      <View style={homeStyles.container}>
        <SearchPart/>
        <HomeSlideshow/>
        <HomePageItemsContTemplate headingTitle='Categories' maxWidth={Width.maxContWidth} 
          seeCatItems={footerPages.buyer.find(page=>page.footerName==='CATEGORIES').name}>
          <HomeCategoryNav/>
        </HomePageItemsContTemplate>
        <HomePageItemsContTemplate headingTitle={'NEW ITEMS'} displayItems={displayItems} theItems={newItems}>
          <NewItemsContainer />
        </HomePageItemsContTemplate>
      </View>
    </BuyerPageTemplate>
  );
};

export default BuyerHome;