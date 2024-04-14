//navigateBuyerItem.js
import { getPropsFromLocalStorage, setLocalStorageProp_ } from "../../components/data/localStorage";

const buyerLocalItem = 'buyerLocalItem'
const buyerchosenItemType = 'buyerchosenItemType'

export const setBuyerLocalItem =(theItem)=> setLocalStorageProp_(buyerLocalItem, theItem)
export const getBuyerLocalItem =()=>  getPropsFromLocalStorage(buyerLocalItem)

export const setBuyerchosenItemType =(theItem)=> setLocalStorageProp_(buyerchosenItemType, theItem)
export const getBuyerchosenItemType =()=>  getPropsFromLocalStorage(buyerchosenItemType)

export const navigateBuyerItem = (theItem, chosenItemType) => {
    console.log('theItem: ', theItem)
    setBuyerLocalItem(theItem)
    setBuyerchosenItemType(chosenItemType)
};


const sellerLocalItem = 'sellerLocalItem'
const sellerchosenItemType = 'sellerchosenItemType'

export const setSellerLocalItem =(theItem)=> setLocalStorageProp_(sellerLocalItem, theItem)
export const getSellerLocalItem =()=>  getPropsFromLocalStorage(sellerLocalItem)

export const setSellerchosenItemType =(theItem)=> setLocalStorageProp_(sellerchosenItemType, theItem)
export const getSellerchosenItemType =()=>  getPropsFromLocalStorage(sellerchosenItemType)

export const navigateSellerItem = (theItem, chosenItemType) => {
    console.log('theItem: ', theItem)
    setSellerLocalItem(theItem)
    setSellerchosenItemType(chosenItemType)
};


const sellerLocalAcceptedBid = 'sellerLocalAcceptedBid'
const sellerLocalAcceptedBidType = 'sellerLocalAcceptedBidType'

export const setSellerLocalAcceptedBid=(theItem)=> setLocalStorageProp_(sellerLocalAcceptedBid, theItem)
export const getSellerLocalAcceptedBid =()=>  getPropsFromLocalStorage(sellerLocalItem)

export const setSellerLocalAcceptedBidType =(theItem)=> setLocalStorageProp_(sellerLocalAcceptedBidType, theItem)
export const getSellerLocalAcceptedBidType =()=>  getPropsFromLocalStorage(sellerLocalAcceptedBidType)

export const navigateToAcceptBid = (theItem, chosenItemType) => {
    console.log('theItem: ', theItem)
    setSellerLocalAcceptedBid(theItem)
    setSellerLocalAcceptedBidType(chosenItemType)
};


const buyerCheckoutItems = 'buyerLocalItem'
export const setCheckoutItems =(theItem)=> setLocalStorageProp_(buyerCheckoutItems, theItem)
export const getCheckoutItems =()=>  getPropsFromLocalStorage(buyerLocalItem)
export const setBuyerItemstoCheckout = (items) => {
    setCheckoutItems(items)
};



const displayLocalItem = 'displayLocalItem'
const displayLocalItemHeading = 'displayLocalItemHeading'
export const setDisplayItems=(theItems)=> setLocalStorageProp_(displayLocalItem, theItems)
export const getDisplayItems=()=>  getPropsFromLocalStorage(displayLocalItem)

export const setDisplayItemsHeading =(headingTitle)=> setLocalStorageProp_(displayLocalItemHeading, headingTitle)
export const getDisplayItemsHeading =()=>  getPropsFromLocalStorage(displayLocalItemHeading)

export const navigateDisplayItems = (navigation, headingTitle, theItems, item_link) => {
    console.log('navigateDisplayItems: ')
    console.log('headingTitle: ',headingTitle)
    console.log('items: ',theItems)
    setDisplayItemsHeading(headingTitle)
    setDisplayItems(theItems)
    navigation.navigate('ItemsDisplayPage', {item_link: item_link});
};
