import React, { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import BuyerPageTemplate from "./Template";
import WishlistCartItems from "../../components/pages/buyer/WishlistCartItems";
import { getItems } from "../../components/data/sampleData";
import { cartStyles } from "../../assets/styles/pageStyles";
import HomePageItemsContTemplate from "../../components/pages/shared/HomePageItemsContainer";
import CartItemsContainer from "../../components/pages/item/itemscontainer/CartItemsContainer";
import { navigateBuyerItem, navigateDisplayItems, setBuyerItemstoCheckout } from "../item/navigateItem";
import { useNavigation } from "@react-navigation/native";

const CART = () => {
  const navigation = useNavigation();
  const cartItems = getItems('cart Data');
  const wishlistItems = getItems('wish Data');
  const similarItems = getItems('similar Data');
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedTotalPrice, setSelectedTotalPrice] = useState(0);
  useEffect(() => {
    let price = 0;
    if (selectedItems.length > 0) {
      price = selectedItems.reduce((total, item) => total + (item.price || 0), 0);
    }
    setSelectedTotalPrice(price);
  }, [selectedItems]);

  const addNewSelection = (item) => {
    const foundIndex = selectedItems.findIndex(selectedItem => selectedItem._id === item._id);
    if (foundIndex !== -1) {
      const updatedItems = selectedItems.filter((_, index) => index !== foundIndex);
      setSelectedItems(updatedItems);
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };  

  const submitItems = ()=>{
    setBuyerItemstoCheckout(selectedItems)
    navigation.navigate('CheckOutBuyer')
  }

  const SecondHeader = () => {
    return (
      <View style={cartStyles.header}>
        <Text style={cartStyles.headerText}>
          MY CART {'('}{cartItems ? cartItems.length : '0'}{' items)'}
        </Text>
      </View>
    );
  };

  const SecondFooter = () => {
    return (
      <View style={cartStyles.footer}>
        <View style={cartStyles.footerLeft}>
          <Text style={cartStyles.footerText}>
            Total: 
          </Text>
          <Text style={cartStyles.footerTextPrice}>
            {selectedTotalPrice.toLocaleString()} RWF
          </Text>
        </View>
        <Pressable style={cartStyles.footerRight} onPress={()=>submitItems()}>
          <Text style={cartStyles.footerbuttonText}>CHECK OUT</Text>
        </Pressable>
      </View>
    );
  };
  const chooseItem = (item, item_link)=>{
    navigateBuyerItem(item, 'new')
    navigation.navigate(item_link)
  }
  
  const displayItems = (headingTitle, theItems)=>{
    const item_link = 'BuyerItem'
    navigateDisplayItems(navigation, headingTitle, theItems, item_link)
  }

  const item_link = 'BuyerItem'

  return (
    <BuyerPageTemplate page_name="Cart" SecondFooter={SecondFooter} SecondHeader={SecondHeader}>
      <View style={cartStyles.container}>
        <CartItemsContainer
          theItems={cartItems}
          addNewSelection={addNewSelection}
          selectedItems={selectedItems}
        />
        <HomePageItemsContTemplate headingTitle={"My Wishlist"} displayItems={displayItems} theItems={wishlistItems}>
          <WishlistCartItems theItems={wishlistItems} number_items={"8"} chooseItem={chooseItem}  item_link = {item_link} />
        </HomePageItemsContTemplate>
        <HomePageItemsContTemplate headingTitle={"Similar Items"} displayItems={displayItems} theItems={wishlistItems}>
          <WishlistCartItems theItems={similarItems} number_items={"12"} chooseItem={chooseItem}  item_link = {item_link} />
        </HomePageItemsContTemplate>
      </View>
    </BuyerPageTemplate>
  );
};

export default CART;
