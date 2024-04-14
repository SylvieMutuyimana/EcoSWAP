import React from "react";
import { Text, View } from "react-native";
import { Image } from "expo-image";
import { BuyerPageItemDetailsStyles } from "../../../../../assets/styles/pages/item/ItemPageDetailsStyles";

const SoldItemDetailsContainer = ({ theItem}) => {

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
                Remove
              </Text>
            </View>
          </View>
        </View>
        <View style={BuyerPageItemDetailsStyles.detailsContainer}>
          <Text style={BuyerPageItemDetailsStyles.descriptionWrapper}>
            {theItem.description}
          </Text>
          <Text style={BuyerPageItemDetailsStyles.descriptionWrapper}>
            Buyer: {theItem.buyer}
          </Text>
          <Text style={BuyerPageItemDetailsStyles.descriptionWrapper}>
            Sold Price: {theItem?.acceptedBid?.toLocaleString()} RWF
          </Text>
          <Text style={BuyerPageItemDetailsStyles.descriptionWrapper}>
          .
        </Text>
        <Text style={BuyerPageItemDetailsStyles.descriptionWrapper}>
        .
      </Text>
        </View>
      </View>
    </View>
  );
}

export default SoldItemDetailsContainer;
