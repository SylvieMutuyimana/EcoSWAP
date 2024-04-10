import React from "react";
import { Pressable, Text, View } from "react-native";
import { cartItemsStyles } from "../../../../assets/styles/pages/shared/cartItemsStyles";
import CartItem from "../itemContainer/CartItem";

const CartItemsContainer = ({theItems, addNewSelection, selectedItems}) => {
  const checkItem =(theItem)=>{
    console.log('checkItem: ', theItem)
    console.log('selectedItems: ', selectedItems)
    let found
    if(selectedItems && selectedItems.length>0){
      found = selectedItems?.find(item=> item._id === theItem._id)
    }
    if(found){
      found = true
    }else{
      found = false
    }
    return found
  }
  return (
      <View style={cartItemsStyles.itemsContainer}>
        {
          theItems? theItems.map((item, index)=>(
            <View style={cartItemsStyles.itemContainer} key={index}>
              <Pressable style={cartItemsStyles.selectIconCont} onPress={()=>addNewSelection(item)}>
                <View style={cartItemsStyles.selectIcon} >
                  {
                    checkItem(item) && (
                      <View style={cartItemsStyles.clickedIcon} >
                      </View>
                    )
                  }
                </View>
              </Pressable>
              <View style={[cartItemsStyles.theItem, index!==0?cartItemsStyles.not_first_item:null]}>
                {CartItem(item)}
              </View>
            </View>
          )):(
            <View><Text>No items</Text></View>
          )
        }
      </View>
  );
}

export default CartItemsContainer;
