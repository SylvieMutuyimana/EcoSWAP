import React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../../../GlobalStyles";
import WishlistCartItem from "../item/itemContainer/WishlistCartItem";

const WishlistCartItems = ({ theItems, page_name, number_items, chooseItem, item_link}) => {
  const theItems_ = number_items?theItems?.slice(0, number_items) : theItems
  return (
      <View style={styles.itemsContainer}>
        {
          page_name === 'Loading'?(
            [[...Array(8)].map((_,index)=>(
              <View key={index} style={[styles.item, index!==0 && index%4 !==0? styles.item1: null, index>3? styles.item2: null]}>
                <WishlistCartItem page_name = 'Loading' />
              </View>        
            ))]
          ):theItems_.map((theItem, index) => (
            <View key={index} style={[styles.item, index!==0 &&  index%4 !==0? styles.item1: null, index>3? styles.item2: null]}>
              <WishlistCartItem theItem={theItem} chooseItem={chooseItem} item_link={item_link}/>
            </View>
          ))
        }
      </View>
  );
};

const styles = StyleSheet.create({
  itemsContainer: {
    backgroundColor: Color.primaryPureWhite,
    width: "100%",
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    padding: 10
  },
  item: {
    width: '22.75%',
  },
  item1:{
    marginLeft: '3%', 
  },
  item2:{
    marginTop: 10,
  }
});

export default WishlistCartItems;
