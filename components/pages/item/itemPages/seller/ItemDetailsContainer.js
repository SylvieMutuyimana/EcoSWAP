import React from "react";
import { Text, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { BuyerPageItemDetailsStyles } from "../../../../../assets/styles/pages/item/ItemPageDetailsStyles";

const ItemDetailsContainer = ({ onEditItem, callBids, theItem, onEditItemPress,onCallBidsPress}) => {

  return (
    <View style={BuyerPageItemDetailsStyles.itemContainer}>
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
                {onEditItem?'End Edit':'Edit'}
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
