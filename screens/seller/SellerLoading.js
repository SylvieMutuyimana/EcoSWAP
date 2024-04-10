import React, { useEffect } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SellerPageTemplate from "./Template";
import LoadingSlideshow from "../../components/pages/shared/LoadingSlideshow";
import { homeStyles } from "../../assets/styles/pageStyles";
import HomePageItemsContTemplate from "../../components/pages/shared/HomePageItemsContainer";
import WishlistCartItems from "../../components/pages/buyer/WishlistCartItems";
import Home2ColItems from "../../components/pages/shared/Home2ColItems";

const SellerLoading = () => {
  const navigation = useNavigation();
  useEffect(() => {
    console.log('waiting for timetimer')
    const timer = setTimeout(() => {
      navigation.navigate("SellerHome");
      console.log('timer done')
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

  const RequestsContainer = () => {
    return ( 
      <Home2ColItems page_name ='Loading' />
    );
  }
  return (
    <SellerPageTemplate page_name ='Loading'>
      <View style={[homeStyles.container, homeStyles.seller]}>
        <LoadingSlideshow/>
        <HomePageItemsContTemplate headingTitle={'REQUESTS'}>
          <RequestsContainer/>
        </HomePageItemsContTemplate>
        <HomePageItemsContTemplate headingTitle={'SOLD ITEMS '}>
          <WishlistCartItems page_name ='Loading'/>
        </HomePageItemsContTemplate>
      </View>
    </SellerPageTemplate>
  );
};

export default SellerLoading;
