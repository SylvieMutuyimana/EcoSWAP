import React from "react";
import {View, Text, Image, Pressable } from "react-native";
import ItemPageTemplate from "./Template";
import { cartStyles } from "../../assets/styles/pageStyles";
import { useNavigation } from "@react-navigation/native";
import { getDisplayItems, getDisplayItemsHeading, navigateBuyerItem, navigateSellerItem } from "./navigateItem";
import { getUserFromLocalStorage } from "../../components/data/localStorage";
import { ItemsDisplayPageHeader } from "../../components/pages/item/ItemsDisplayPageHeader";
import { ItemsDisplayPageStyles } from "../../assets/styles/pages/shared/ItemsDisplayPageStyles";

const ItemsDisplayPage = ({route}) => {
  const item_link = route?.params?.item_link;
  const userType = getUserFromLocalStorage()
  const navigation = useNavigation();
  const theItems = getDisplayItems();
  const displayName = getDisplayItemsHeading();

  const onItemPress = (theItem)=>{
    if(userType==='buyer'){
      navigateBuyerItem(theItem, 'type')
    }else{
      navigateSellerItem(theItem, 'type')
    }
    navigation.navigate(item_link)
  }

  const renderItem = (item) => (
    <Pressable style={ItemsDisplayPageStyles.itemContainer} key={item._id} onPress={()=>onItemPress(item)}>
      <Image source={item.image}
        style={ItemsDisplayPageStyles.image}
        resizeMode="cover"
      />
      <View style={ItemsDisplayPageStyles.itemDetails}>
        <Text style={ItemsDisplayPageStyles.name}>{item.name}</Text>
        <Text style={ItemsDisplayPageStyles.price}>{item.price} RWF</Text>
      </View>
    </Pressable>
  );

  const SecondHeader =()=>{
    return(
      <ItemsDisplayPageHeader heading={displayName} page_type={'itemsDisplay'}/>
    )
  }

  return (
    <ItemPageTemplate SecondHeader={SecondHeader}>
      <View style={[ItemsDisplayPageStyles.pageContent, cartStyles.container]}>
        {theItems ? (
          theItems.map((item) => renderItem(item))
        ) : (
          <Text>No items chosen</Text>
        )}
      </View>
    </ItemPageTemplate>
  );
};

export default ItemsDisplayPage;
