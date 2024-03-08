import React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { sellerHomeStyles } from "../../assets/styles/pages/seller/sellerHomeStyles";
import { Image } from "expo-image";
import ContainerSlideshow from "../../components/ContainerSlideshow";
import ItemContainer from "../../components/ItemContainer";
import SellerPageTemplate from "./Template";

const SellerHome = () => {
  const userType  = 'buyer'; 
  const navigation = useNavigation();
  const soldItems = ()=>{
    return(
      <View style={[sellerHomeStyles.parent, sellerHomeStyles.parentFlexBox]}>
        {[...Array(4)].map((_, index)=>(
          <React.Fragment key={index}>
            <View style={sellerHomeStyles.viewFlexBox}>
              <Image style={sellerHomeStyles.istockphoto583851138612x612Icon}
                contentFit="cover"
                source={require("../../assets/istockphoto583851138612x612-2.png")}
              />
              <Text style={sellerHomeStyles.rwf}>20,000 rwf</Text>
            </View>
            <View style={[sellerHomeStyles.view1, sellerHomeStyles.viewFlexBox]}>
              <Image style={sellerHomeStyles.istockphoto583851138612x612Icon}
                contentFit="cover"
                source={require("../../assets/istockphoto583851138612x612-2.png")}
              />
              <Text style={sellerHomeStyles.rwf}>20,000 rwf</Text>
            </View>
          </React.Fragment>
        ))}
      </View>
    )
  }
  return (
    <SellerPageTemplate page_name ='SellerHome'>
      <View style={sellerHomeStyles.homepageitems}>
        <ContainerSlideshow dimensionsCode={require("../../assets/mask-group4.png")}
          productDimensionsCode={require("../../assets/group-353.png")}
          productDimensionsCode2={require("../../assets/mask-group5.png")}
          productDimensions={require("../../assets/group-353.png")}
        />
        <View style={[sellerHomeStyles.newItems, sellerHomeStyles.newSpaceBlock]}>
          <Text style={[sellerHomeStyles.requests, sellerHomeStyles.requestsLayout]}>
            REQUESTS
          </Text>
          <ItemContainer
            onItem1Press={() => navigation.navigate("Item")}
            onItem2Press={() => navigation.navigate("Item")}
            onItem3Press={() => navigation.navigate("Item")}
            onItem4Press={() => navigation.navigate("Item")}
            onItem5Press={() => navigation.navigate("Item")}
            onItem6Press={() => navigation.navigate("Item")}
            onItem11Press={() => navigation.navigate("Item")}
            onItem12Press={() => navigation.navigate("Item")}
          />
        </View>
        <View style={[sellerHomeStyles.newItems1, sellerHomeStyles.newSpaceBlock]}>
          <Text style={[sellerHomeStyles.soldItems, sellerHomeStyles.requestsLayout]}>
            SOLD ITEMS 
          </Text>
          <View style={[sellerHomeStyles.newItemsInner, sellerHomeStyles.parentFlexBox]}>
            {soldItems()}
          </View>
        </View>
      </View>
    </SellerPageTemplate>
  );
};

export default SellerHome;