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



const buyerCheckoutItems = 'buyerLocalItem'
export const setCheckoutItems =(theItem)=> setLocalStorageProp_(buyerCheckoutItems, theItem)
export const getCheckoutItems =()=>  getPropsFromLocalStorage(buyerLocalItem)
export const setBuyerItemstoCheckout = (items) => {
    setCheckoutItems(items)
};



const displayLocalItem = 'displayLocalItem'
export const setDisplayItems=(theItems)=> setLocalStorageProp_(displayLocalItem, theItems)
export const getDisplayItems=()=>  getPropsFromLocalStorage(displayLocalItem)

export const setDisplayItemsType =(theItems)=> setLocalStorageProp_(displayLocalItem, theItems)
export const getDisplayItemsType =()=>  getPropsFromLocalStorage(displayLocalItem)

export const navigateDisplayItems = (theItems, chosenItemType) => {
    console.log('theItem: ', theItems)
    setDisplayItems(theItems)
    setDisplayItemsType(chosenItemType)
};