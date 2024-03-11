import React, { useState, useCallback } from "react";
import { Text, View, Pressable, Modal, TextInput } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import BuyerPageTemplate from "./Template";
import { buyerHomeStyles } from "../../assets/styles/pages/buyer/buyerHomeStyles";
import Search from "../Search";
import GalleryContainer from "../../components/pages/buyer/GalleryContainer";
import CategoryContainer from "../../components/pages/buyer/CategoryContainer";
import NewItemsContainer from "../../components/pages/buyer/NewItemsContainer";
import { BuyerLoadingStyles } from "../../assets/styles/pages/buyer/BuyerLoadingStyles";

const BuyerHome = () => {
  const userType  = 'buyer'; 
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
        style={[BuyerLoadingStyles.search, BuyerLoadingStyles.searchFlexBox]}
      >
        <View style={[BuyerLoadingStyles.searchProductNameParent, BuyerLoadingStyles.headingFlexBox]} >
          <TextInput style={BuyerLoadingStyles.searchProductName}
            placeholder={'Search Product Name'} onChangeText={(text) => setInput(text)}
          />
          <Image style={BuyerLoadingStyles.searchButton} contentFit="cover"
            source={require("../../assets/images/icons/searchButton.png")}
          />
        </View>
        <Image style={BuyerLoadingStyles.menuicon} contentFit="cover"
          source={require("../../assets/images/icons/menuicon.png")}
        />
      </Pressable>
    )
  }
  return (
    <BuyerPageTemplate page_name ='BuyerHome'>
      <View style={[buyerHomeStyles.frameParent, buyerHomeStyles.frameLayout]}>
        <View style={[buyerHomeStyles.frameWrapper, buyerHomeStyles.frameLayout]}>
          {searchPart()}
        </View>
        <GalleryContainer />
        <CategoryContainer />
        <NewItemsContainer />
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

export default BuyerHome;