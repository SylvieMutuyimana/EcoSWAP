import React, { useState, useCallback } from "react";
import { Text, View, Pressable, Modal, TextInput } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import BuyerPageTemplate from "./Template";
import { buyerHomeStyles } from "./styles/buyerHomeStyles";
import Search from "../Search";
import GalleryContainer from "../../components/pages/buyer/GalleryContainer";
import CategoryContainer from "../../components/pages/buyer/CategoryContainer";
import NewItemsContainer from "../../components/pages/buyer/NewItemsContainer";
import { LoadingStyles } from "./styles/LoadingStyles";

const BuyerHome = () => {
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
            source={require("../../assets/images/app/searchButton.png")}
          />
        </View>
        <Image style={LoadingStyles.menuicon} contentFit="cover"
          source={require("../../assets/menuicon.png")}
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