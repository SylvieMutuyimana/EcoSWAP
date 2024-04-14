import React from "react";
import { Text, Pressable, View, TextInput } from "react-native";
import { Image } from "expo-image";
import { BuyerPageItemDetailsStyles } from "../../../../../assets/styles/pages/item/ItemPageDetailsStyles";

const ItemDetailsContainer = ({ onMoredetailsPress, callMoreDetails, changePriceBid, onSubmitPriceBid, theItem}) => {

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
            <View style={BuyerPageItemDetailsStyles.WishListCont}>
              <Text style={BuyerPageItemDetailsStyles.WishListText}>
                Wish
              </Text>
              <Image style={BuyerPageItemDetailsStyles.WishIcon} contentFit="cover"
                source={require("../../../../../assets/images/icons/wish_black.png")}
              />
            </View>
          </View>
        </View>
        <View style={BuyerPageItemDetailsStyles.detailsContainer}>
          <Text style={BuyerPageItemDetailsStyles.descriptionWrapper}>
            {theItem.description}
          </Text>
          <View style={BuyerPageItemDetailsStyles.subscribeContainer}>
            <Text style={BuyerPageItemDetailsStyles.bidText}>Bid:</Text>
            <View style={BuyerPageItemDetailsStyles.inputCont}>
              <TextInput style={BuyerPageItemDetailsStyles.priceInput} 
                placeholder="Amount rwf" onChangeText={(text)=>changePriceBid(text)}
              />
            </View>
            <Pressable style={BuyerPageItemDetailsStyles.purchaseButton} onPress={()=>onSubmitPriceBid()}>
              <Text style={BuyerPageItemDetailsStyles.purchaseButtonText}>PURCHASE</Text>
            </Pressable>
          </View>
          <View style={BuyerPageItemDetailsStyles.moreContainer}>
            <Text style={BuyerPageItemDetailsStyles.aboutText}>More</Text>
            <Pressable onPress={onMoredetailsPress}>
              {callMoreDetails?(
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
        </View>
      </View>
    </View>
  );
}

export default ItemDetailsContainer;
