import React from "react";
import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import { item_size } from "../../../GlobalStyles";
import ItemPageTemplate from "../Template";
import { cartStyles } from "../../../assets/styles/pageStyles";
import { useNavigation } from "@react-navigation/native";
import { getSellerLocalItem, setSellerLocalAcceptedBid } from "../../item/navigateItem";
import { Ionicons } from "@expo/vector-icons";
import { checkOutStyles } from "../../../assets/styles/pages/item/checkOutStyles";

const AcceptBidPage = () => {
  const navigation = useNavigation();
  const theItem = getSellerLocalItem()
  const theBid = setSellerLocalAcceptedBid()

  const renderItem = (item) => (
    <View style={checkOutStyles.itemContainer} key={item._id}>
      <Image source={item.image}
        style={checkOutStyles.image}
        resizeMode="cover"
      />
      <View style={checkOutStyles.itemDetails}>
        <Text style={checkOutStyles.name}>{item?.name}</Text>
        <Text style={checkOutStyles.price}>Price: {item?.price?.toLocaleString()} RWF</Text>
        <Text style={checkOutStyles.price}>Bid: {theBid?.price?.toLocaleString()} RWF</Text>
      </View>
    </View>
  );

  const handleBack = () => {
    navigation.goBack();
  };

  const SecondHeader = () => (
    <View style={checkOutStyles.header}>
      <TouchableOpacity onPress={()=> handleBack()}  style={checkOutStyles.backiconCont} >
        <Ionicons name="arrow-back" size={item_size.icon.back}  color="black" style={checkOutStyles.backicon} />
      </TouchableOpacity>
      <Text style={checkOutStyles.headerTitle}>COMFIRM SELL</Text>
    </View>
  );

  const comfirmSale =()=>{
    console.log('comfirmSale')
    
    navigation.navigate("MyItems", {chosenType: 'Pending Payment'})
  }

  return (
    <ItemPageTemplate>
      <SecondHeader/>
      <View style={[checkOutStyles.pageContent, cartStyles.container]}>
        {theItem ? (
          renderItem(theItem)
        ) : (
          <Text>No items chosen</Text>
        )}
      </View>
      <Pressable style={checkOutStyles.button} onPress={()=>comfirmSale()}>
        <Text style={checkOutStyles.buttonText}>
          COMFIRM
        </Text>
      </Pressable>
    </ItemPageTemplate>
  );
};

export default AcceptBidPage;
