import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { Image } from "expo-image";
import LoadingSlideshow from "../../components/pages/shared/LoadingSlideshow";
import { useNavigation } from "@react-navigation/native";
import { BuyerLoadingStyles } from "../../assets/styles/pages/buyer/BuyerLoadingStyles";
import {  Width } from "../../GlobalStyles";

import BuyerPageTemplate from "./Template";
import { homeStyles } from "../../assets/styles/pageStyles";
import HomePageItemsContTemplate from "../../components/pages/shared/HomePageItemsContainer";
import HomeCategoryNav from "../../components/pages/buyer/home/HomeCategoryNav";
import Home2ColItems from "../../components/pages/shared/Home2ColItems";
const BuyerLoading = () => {
  const navigation = useNavigation();
  useEffect(() => {
    console.log('waiting for timetimer')
    const timer = setTimeout(() => {
      navigation.navigate("BuyerHome");
      console.log('timer done')
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

  const NewItemsContainer = () => {
    return (
      <Home2ColItems page_name ='Loading' />
    );
  };
  return (
    <BuyerPageTemplate page_name ='Loading'>
      <View style={homeStyles.container}>
        <View style={[BuyerLoadingStyles.search, BuyerLoadingStyles.searchFlexBox]}>
          <View style={[BuyerLoadingStyles.searchContainer, BuyerLoadingStyles.headingFlexBox]} >
            <Text style={BuyerLoadingStyles.searchProductName}>Search Product Name</Text>
            <Image style={BuyerLoadingStyles.searchButton} contentFit="cover"
              source={require("../../assets/images/icons/searchButton.png")}
            />
          </View>
          <Image style={BuyerLoadingStyles.menuicon} contentFit="cover"
            source={require("../../assets/images/icons/menu_black.png")}
          />
        </View>
        <LoadingSlideshow/>
        <HomePageItemsContTemplate headingTitle='Categories' maxWidth={Width.maxContWidth}>
          <HomeCategoryNav page_name ='Loading'/>
        </HomePageItemsContTemplate>
        <HomePageItemsContTemplate headingTitle={'NEW ITEMS'}>
          <NewItemsContainer />
        </HomePageItemsContTemplate>
      </View>
    </BuyerPageTemplate>
  );
};

export default BuyerLoading;