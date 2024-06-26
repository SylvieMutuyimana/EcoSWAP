import React, { useState } from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ItemDetailsContainer from "../../../components/pages/item/itemPages/buyer/ItemDetailsContainer";
import ItemPageTemplate from "../Template";
import { getItems } from "../../../components/data/sampleData";
import HomePageItemsContTemplate from "../../../components/pages/shared/HomePageItemsContainer";
import SavedItemsContainer from "../../../components/pages/item/itemscontainer/SavedItemsContainer";
import { cartStyles } from "../../../assets/styles/pageStyles";
import ErrorContainer from "../../../components/errorContainer";
import { typeItemPageStyles } from "../../../assets/styles/pages/item/typeItemPageStyles";
import { getBuyerLocalItem, navigateBuyerItem, navigateDisplayItems } from "../navigateItem";
import { ItemsDisplayPageHeader } from "../../../components/pages/item/ItemsDisplayPageHeader";

const BuyerItem = () => {
  const theItem = getBuyerLocalItem()
  const navigation = useNavigation();
  const similarItems = getItems('similar Data')
  const [callMoreDetails, setMoreDetailsCall] = useState(false)
  const onMoredetailsPress = ()=>{
    setMoreDetailsCall(!callMoreDetails)
  }
  

  const [priceBid, setPriceBid] = useState(null)
  const changePriceBid = (input)=>{
    setPriceBid(input)
  }
  const [errorInput, setErrorInput] = useState(false)
  const [errorText, setErrorText] = useState(null)
  const onRetry=()=>{
    setErrorInput(!errorInput)
  }
  const onSubmitPriceBid = () => {
    console.log('onSubmitPriceBid')
    console.log('priceBid: ', priceBid)
    if (isNaN(parseInt(priceBid))) {
      setErrorText('Invalid input. Please enter a valid integer.')
      onRetry()
    } else{
      setErrorText(null)
      navigation.navigate('Cart')
    }
  };
  const displayItems = (headingTitle, theItems)=>{
    const item_link = 'BuyerItem'
    navigateDisplayItems(navigation, headingTitle, theItems, item_link)
  }
  const chooseItem = (item, item_link)=>{
    navigateBuyerItem(item, 'new')
    navigation.navigate(item_link)
  }
  const SecondHeader =()=>{
    return(
      <ItemsDisplayPageHeader heading={theItem.name} page_type={'item'}/>
    )
  }

  return (
    <ItemPageTemplate SecondHeader={SecondHeader}>
      <View style={[typeItemPageStyles.thepage, cartStyles.container]}>
        {
          errorInput&& (
            <View style={typeItemPageStyles.errorContainer}>
              <ErrorContainer onRetry={onRetry}  errorText={errorText} buttonText={'RETRY'}/>
            </View>
          )
        }
        <View style={typeItemPageStyles.pagecontent}>
          <View style={typeItemPageStyles.theitem}>
            <ItemDetailsContainer
              priceBid = {priceBid}
              changePriceBid={changePriceBid}
              callMoreDetails = {callMoreDetails}
              onMoredetailsPress={() => onMoredetailsPress()}
              onSubmitPriceBid={onSubmitPriceBid}
              theItem={theItem}
            />
            {
              callMoreDetails &&(
                <View style={typeItemPageStyles.moredetails}>
                  <Text style={[typeItemPageStyles.moredetailsRow, typeItemPageStyles.seller]}>
                    Seller: {theItem.seller}
                  </Text>
                  <Text style={typeItemPageStyles.moredetailsRow}>
                    theItem: {theItem.location}
                  </Text>
                  <Text style={typeItemPageStyles.moredetailsRow}>
                    Location Description: {theItem.locationDescription}
                  </Text>
                </View>
              )
            }
          </View>
          <HomePageItemsContTemplate headingTitle={'Similar Items'} displayItems={displayItems} theItems={similarItems}>
            <SavedItemsContainer theItems={similarItems} number_items={'12'} chooseItem={chooseItem}  item_link = {'BuyerItem'}/>
          </HomePageItemsContTemplate>
        </View>
      </View>
    </ItemPageTemplate>
  );
};

export default BuyerItem;
