import React from "react";
import { Text, View } from "react-native";
import SalesoldItem from "../item/itemContainer/SalesoldItem";
import { savedItemsStyles } from "../../../assets/styles/pages/shared/savedItemsStyles";

const SalesoldItems = ({theItems, number_items, type}) => {
  return (
      <View style={savedItemsStyles.itemsContainer}>
        {
          theItems? theItems.slice(0, number_items).map((item, index)=>(
            <View key={index} style={[savedItemsStyles.itemContainer, index!==0?savedItemsStyles.not_first_item:null]}>
              {SalesoldItem(item, type)}
            </View>
          )):(
            <View><Text>No items</Text></View>
          )
        }
      </View>
  );
}

export default SalesoldItems;
