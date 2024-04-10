import React from "react";
import { Text, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { BuyerPageItemDetailsStyles } from "../../../../../assets/styles/pages/item/ItemPageDetailsStyles";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { item_size } from "../../../../../GlobalStyles";

const ItemDetailsContainer = ({ onEditItem,onBackPress, callBids, theItem, onEditItemPress,onCallBidsPress}) => {

  return (
    <View style={BuyerPageItemDetailsStyles.itemContainer}>
      <View style={BuyerPageItemDetailsStyles.header}>
        <Pressable onPress={()=>onBackPress()}>
          <MaterialCommunityIcons name="arrow-left" style={BuyerPageItemDetailsStyles.back} size={item_size.icon.back} color="black" />
        </Pressable>
        <Text style={BuyerPageItemDetailsStyles.HeaderText}>Phone- Iphone 4</Text>
        <Image style={BuyerPageItemDetailsStyles.headerMenuIcon} contentFit="cover"
          source={require("../../../../../assets/images/icons/menu_dots.png")}
        />
      </View>
      <View style={BuyerPageItemDetailsStyles.itemdetails}>
        <View style={BuyerPageItemDetailsStyles.theItem}>
          <View style={BuyerPageItemDetailsStyles.imagesContainer}>
            <Image style={BuyerPageItemDetailsStyles.imgItem} contentFit="cover"
              source={theItem.image}
            />
          </View>
          <View style={BuyerPageItemDetailsStyles.descriptionParent}>
            <Text style={BuyerPageItemDetailsStyles.priceCont}>{theItem?.price?.toLocaleString()} RWF</Text>
            <Pressable style={BuyerPageItemDetailsStyles.WishListCont} onPress={()=>onEditItemPress()}>
              <Text style={BuyerPageItemDetailsStyles.WishListText}>
                Edit
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={BuyerPageItemDetailsStyles.detailsContainer}>
          <Text style={BuyerPageItemDetailsStyles.descriptionWrapper}>
            {theItem.description}
          </Text>
          {
            !onEditItem&&(
              <View style={BuyerPageItemDetailsStyles.moreContainer}>
                <Text style={BuyerPageItemDetailsStyles.aboutText}>
                  Bids
                </Text>
                <Pressable onPress={()=>onCallBidsPress()}>
                  {callBids?(
                    <Image style={BuyerPageItemDetailsStyles.moreIcon} contentFit="cover"
                      source={require("../../../../../assets/images/icons/icon_up.png")}
                    />
                  ):(
                    <Image style={BuyerPageItemDetailsStyles.moreIcon} contentFit="cover"
                      source={require("../../../../../assets/images/icons/icon_down.png")}
                    />
                  )}
                </Pressable>
              </View>
            )
          }
        </View>
      </View>
    </View>
  );
}

export default ItemDetailsContainer;
