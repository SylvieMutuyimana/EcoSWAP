import React from "react";
import { Text, View } from "react-native";
import { savedItemsStyles } from "../../../../assets/styles/pages/shared/savedItemsStyles";
import SavedItem from "../itemContainer/SavedItem";

const SavedItemsContainer = ({theItems, number_items}) => {
  return (
      <View style={savedItemsStyles.itemsContainer}>
        {
          theItems? theItems.slice(0, number_items).map((item, index)=>(
            <View key={index} style={[savedItemsStyles.itemContainer, index!==0?savedItemsStyles.not_first_item:null]}>
              {SavedItem(item)}
            </View>
          )):(
            <View><Text>No items</Text></View>
          )
        }
      </View>
  );
}

export default SavedItemsContainer;
