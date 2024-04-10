import React, { useState } from "react";
import { Text, View, Pressable, TextInput, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ItemDetailsContainer from "../../../components/pages/item/itemPages/seller/ItemDetailsContainer";
import ItemPageTemplate from "../Template";
import { getItems } from "../../../components/data/sampleData";
import HomePageItemsContTemplate from "../../../components/pages/shared/HomePageItemsContainer";
import SavedItemsContainer from "../../../components/pages/item/itemscontainer/SavedItemsContainer";
import { cartStyles } from "../../../assets/styles/pageStyles";
import { BuyerPageItemDetailsStyles } from "../../../assets/styles/pages/item/ItemPageDetailsStyles";
import { cartItemsStyles } from "../../../assets/styles/pages/shared/cartItemsStyles";
import { typeItemPageStyles } from "../../../assets/styles/pages/item/typeItemPageStyles";
import { getSellerLocalItem } from "../navigateItem";

const SellerItem = () => {
  const theItem = getSellerLocalItem()
  const navigation = useNavigation();
  const similarItems = getItems('similar Data')
  const [callBids, setBidsCall] = useState(false);
  const [onEditItem, setEditItemCall] = useState(false)
  const [newDetails, setNewDetails] = useState(false)
  const [theError, setError] = useState(null)
  const [theMessage, setMessage] = useState(null)
  const onchangeItemDet = (type, text) => {
    setNewDetails(prev => ({
      ...prev, // Keep the previous state
      [type]: text // Update the state with the new value for the specified type
    }));
  };

  const submitNewDetails =()=>{
    if(newDetails){
      if(newDetails['price'] && (isNaN(newDetails['price']))) {
        setError('Invalid Price. Please enter a valid integer.')
      }else{
        setError(null)
      }
      Object.keys(newDetails).forEach(key => {
        theItem[key] = newDetails[key];
      });
      setMessage('Item updated successfully')
    }
  }

  const onEditItemPress = () => {
    setEditItemCall(!onEditItem);
  };
  const onCallBidsPress = () => {
    setBidsCall(!callBids);
  };
  
  const [chosenBid, setChosenBid] = useState(null)

  const changeBid = (theBid)=>{
    console.log('changeBid')
    console.log('theBid: ', theBid)
    console.log('chosenBid: ', chosenBid)
    setChosenBid(theBid)
  }

  const onAcceptBid = () => {
    
  };
  const TheBidsContainer = ()=>{
    return(
      <React.Fragment>
        <Text style={[typeItemPageStyles.moredetailsRow, typeItemPageStyles.seller, typeItemPageStyles.heading]}>
          To accept a bid in the below, select it and comfirm
        </Text>
        {theItem.bids && theItem.bids.length>0?(
          <React.Fragment>
            {theItem.bids.map((theBid, index)=>(
              <Pressable style={typeItemPageStyles.moredetailsRow} key={index} onPress={()=>changeBid(theBid)}>
                <View style={cartItemsStyles.selectIcon} >
                  {
                    theBid === chosenBid && (
                      <View style={cartItemsStyles.clickedIcon} >
                      </View>
                    )
                  }
                </View>
                <Text>
                  {theBid.username}: {theItem.price}
                </Text>
              </Pressable>
            ))}
            <Pressable style={[BuyerPageItemDetailsStyles.purchaseButton, typeItemPageStyles.button]} onPress={()=>onAcceptBid()}>
              <Text style={BuyerPageItemDetailsStyles.purchaseButtonText}>ACCEPT</Text>
            </Pressable>
          </React.Fragment>
        ):(
          <Text style={[typeItemPageStyles.moredetailsRow, typeItemPageStyles.seller]}>
            There are currently no bids to this item
          </Text>
        )}
      </React.Fragment>
    )
  }
  const EditItemContainer =()=>{
    return(
      <React.Fragment>
        <Text style={[typeItemPageStyles.moredetailsRow, typeItemPageStyles.seller, typeItemPageStyles.heading]}>
          Edit the item details
        </Text>
        <View style={[BuyerPageItemDetailsStyles.inputCont, typeItemPageStyles.inputField]}>
          <TextInput style={[BuyerPageItemDetailsStyles.priceInput, typeItemPageStyles.input]} 
            placeholder="Amount rwf" onChangeText={(text)=>onchangeItemDet('price', text)}
          />
        </View>
        <View style={[BuyerPageItemDetailsStyles.inputCont, typeItemPageStyles.inputField]}>
          <TextInput style={[BuyerPageItemDetailsStyles.priceInput, typeItemPageStyles.input]}
            multiline={true} onChangeText={(text)=>onchangeItemDet('description', text)}
            value={newDetails?.description}
            placeholder="description..."
          />
        </View>
        {theMessage&&(
          <View style={typeItemPageStyles.message}>
            {theMessage}
          </View>
        )}
        {theError&&(
          <View style={typeItemPageStyles.error}>
            {theError}
          </View>
        )}
        <Pressable style={[BuyerPageItemDetailsStyles.purchaseButton, typeItemPageStyles.button]} onPress={()=>submitNewDetails()}>
          <Text style={BuyerPageItemDetailsStyles.purchaseButtonText}>UPDATE</Text>
        </Pressable>
        <Text style={[typeItemPageStyles.moredetailsRow, typeItemPageStyles.seller, typeItemPageStyles.heading]}>
            Edit the item details
        </Text>
        <Text style={[typeItemPageStyles.moredetailsRow, typeItemPageStyles.seller, typeItemPageStyles.heading]}>
          Edit the item details
        </Text>

      </React.Fragment>
    )
  }

  return (
    <ItemPageTemplate>
      <View style={[typeItemPageStyles.thepage, cartStyles.container]}>
        <View style={typeItemPageStyles.pagecontent}>
          <View style={typeItemPageStyles.theitem}>
            <ItemDetailsContainer
              onBackPress={() => navigation.goBack()}
              theItem={theItem}
              onCallBidsPress={onCallBidsPress}
              callBids={callBids}
              onEditItemPress={onEditItemPress}
              onEditItem={onEditItem}
            />
            {
              onEditItem?(
                <View style={typeItemPageStyles.moredetails}>
                  <EditItemContainer/>
                </View>
              ):callBids?(
                <View style={typeItemPageStyles.moredetails}>
                  <TheBidsContainer/>
                </View>
              ):null
            }
          </View>
          {
            !onEditItem&&(
              <HomePageItemsContTemplate headingTitle={'Similar Items -->'}>
                <SavedItemsContainer theItems={similarItems} number_items={'12'}/>
              </HomePageItemsContTemplate>
            )
          }
        </View>
      </View>
    </ItemPageTemplate>
  );
};


export default SellerItem;
