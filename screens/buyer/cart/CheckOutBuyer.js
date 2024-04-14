import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import { item_size } from "../../../GlobalStyles";
import ItemPageTemplate from "../Template";
import { cartStyles } from "../../../assets/styles/pageStyles";
import { useNavigation } from "@react-navigation/native";
import { getCheckoutItems } from "../../item/navigateItem";
import { Ionicons } from "@expo/vector-icons";
import { checkOutStyles } from "../../../assets/styles/pages/item/checkOutStyles";
import ErrorContainer from "../../../components/errorContainer";

const CheckOutBuyer = () => {
  const navigation = useNavigation();
  const theItems = getCheckoutItems();
  const [successMessage, setSuccess] = useState(null)
  const renderItem = (item) => (
    <View style={checkOutStyles.itemContainer} key={item._id}>
      <Image source={item.image}
        style={checkOutStyles.image}
        resizeMode="cover"
      />
      <View style={checkOutStyles.itemDetails}>
        <Text style={checkOutStyles.name}>{item.name}</Text>
        <Text style={checkOutStyles.price}>{item.price} RWF</Text>
      </View>
    </View>
  );

  const handleBack = () => {
    navigation.goBack();
  };
  const successHandle = ()=>{
    navigation.navigate('MyOrders', {orderType: 'ItemBids'})
  }
  const checkOut =()=>{
    setSuccess('Order Successfully comfirmed')
  }
  const SecondHeader = () => (
    <View style={checkOutStyles.header}>
      <TouchableOpacity onPress={()=> handleBack()}  style={checkOutStyles.backiconCont} >
        <Ionicons name="arrow-back" size={item_size.icon.back}  color="black" style={checkOutStyles.backicon} />
      </TouchableOpacity>
      <Text style={checkOutStyles.headerTitle}>CHECK OUT</Text>
    </View>
  );

  return (
    <ItemPageTemplate SecondHeader={SecondHeader} page_name={'Cart'}>
      {
        successMessage&&(
          <ErrorContainer errorText={successMessage} onRetry ={successHandle} buttonText='OK'/>
        )
      }
      <View style={[checkOutStyles.pageContent, cartStyles.container]}>
        {theItems ? (
          theItems.map((item) => renderItem(item))
        ) : (
          <Text>No items chosen</Text>
        )}
      </View>
      <Pressable style={checkOutStyles.button} >
        <Text style={checkOutStyles.buttonText} onPress={()=>checkOut()}>
          COMFIRM ORDER
        </Text>
      </Pressable>

    </ItemPageTemplate>
  );
};

export default CheckOutBuyer;
