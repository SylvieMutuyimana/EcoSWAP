import React, { useState, useCallback } from "react";
import { Text, View, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import BuyerPageTemplate from "./Template";
import { buyerHomeStyles } from "./styles/buyerHomeStyles";
import Search from "../Search";
import GalleryContainer from "../../components/GalleryContainer";
import CategoryContainer from "../../components/pages/buyer/CategoryContainer";
import NewItemsContainer from "../../components/NewItemsContainer";

const BuyerHome = () => {
  const navigation = useNavigation();
  const [searchContainer, setsearchContainer] = useState(false);

  const openSearchContainer = useCallback(() => {
    setsearchContainer(true);
  }, []);

  const closesearchContainer = useCallback(() => {
    setsearchContainer(false);
  }, []);

  const searchPart = ()=>{
    return(
      <Pressable
      style={buyerHomeStyles.guysimmmonsgmailcomParent}
      onPress={openSearchContainer}
    >
      <Text style={buyerHomeStyles.guysimmmonsgmailcom}>
        Search Product Name
      </Text>
      <Image
        style={buyerHomeStyles.regularsearchIcon}
        contentFit="cover"
        source={require("../../assets/regularsearch.png")}
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