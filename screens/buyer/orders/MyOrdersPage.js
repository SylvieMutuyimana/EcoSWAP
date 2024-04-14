import React, { useEffect, useState } from "react";
import { View, Text, Image, Pressable, ScrollView } from "react-native";
import { cartStyles } from "../../../assets/styles/pageStyles";
import { useNavigation } from "@react-navigation/native";
import { getDisplayItems, navigateBuyerItem, navigateSellerItem } from "../../item/navigateItem";
import { getUserFromLocalStorage } from "../../../components/data/localStorage";
import { ItemsDisplayPageHeader } from "../../../components/pages/item/ItemsDisplayPageHeader";
import ItemPageTemplate from "../../item/Template";
import { ItemsDisplayPageStyles, ThirdHeaderStyles } from "../../../assets/styles/pages/shared/ItemsDisplayPageStyles";

const MyOrdersPage = ({route}) => {
  const order_type = route?.params?.orderType;
  const [orderType, setOrderType] = useState(order_type?order_type:'All')
  const changeOrderType =(type)=>{
    console.log('new order type: ', type)
    setOrderType(type)
  }
  const orderTypes = [
    { name: 'All', type: 'All'}, 
    { name: 'My Item Bids', type: 'ItemBids'}, 
    { name: 'Accepted Offers', type: 'AcceptedOffers'},
    { name: 'In Transit (Shipping)', type: 'InTransit'}
  ];
  const userType = getUserFromLocalStorage()
  const navigation = useNavigation();
  const theOrdersSet = ()=>{
    const items____ = getDisplayItems();
    const new_items = []
    items____.map((item__, index)=>{
      let order_type
      if(index %4 === 0 || index %3 === 0){
        order_type =  'ItemBids'
      }else if(index %2 === 0){
        order_type =  'AcceptedOffers'
      }else{
        order_type =  'InTransit'
      }
      item__['orderType'] = order_type
      new_items.push(item__)
    })
    return new_items
  }
  const all_items = theOrdersSet();

  const returnItems = ()=>{
    let the_orders
    if(orderType!=='All'){
      the_orders = all_items.filter(item=>item?.['orderType'] === orderType) 
    }else{
      the_orders = all_items
    }
    return the_orders
  }

  const [theItems, setTheItems] = useState(returnItems())

  useEffect(()=>{
    const order_items = returnItems()
    console.log('new items : ', order_items)
    setTheItems(order_items)
  },[orderType])

  const item_link = 'BuyerItem'
  const onItemPress = (theItem)=>{
    if(userType==='buyer'){
      navigateBuyerItem(theItem, 'type')
    }else{
      navigateSellerItem(theItem, 'type')
    }
    navigation.navigate(item_link)
  }

  const renderItem = (item) => (
    <Pressable style={ItemsDisplayPageStyles.itemContainer} key={item._id} onPress={()=>onItemPress(item)}>
      <Image source={item.image}
        style={ItemsDisplayPageStyles.image}
        resizeMode="cover"
      />
      <View style={ItemsDisplayPageStyles.itemDetails}>
        <Text style={ItemsDisplayPageStyles.name}>{item.name}</Text>
        <Text style={ItemsDisplayPageStyles.price}>{item.price} RWF</Text>
      </View>
    </Pressable>
  );

  const ThirdHeader = ({theOrderTypes})=>{
    return(
      <View style={ThirdHeaderStyles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {
            theOrderTypes.map((order___ty, index)=>(
              <Pressable key={index} onPress={()=>changeOrderType(order___ty.type)} style={[ThirdHeaderStyles.item, order___ty.type===orderType? ThirdHeaderStyles.chosenItem:null]}> 
                <Text style={[ThirdHeaderStyles.itemText, order___ty.type===orderType? ThirdHeaderStyles.chosenItemText:null]}>{order___ty.name}</Text>
              </Pressable>
            ))
          }
        </ScrollView>
      </View>
    )
  }

  const SecondHeader =()=>{
    return(
      <ItemsDisplayPageHeader heading={'My Orders'} page_type={'MyOrders'} />
    )
  }

  return (
    <ItemPageTemplate SecondHeader={SecondHeader}>
      <ThirdHeader theOrderTypes={orderTypes}/>
      <View style={[ItemsDisplayPageStyles.pageContent, cartStyles.container]}>
        {theItems ? (
          theItems.map((item) => renderItem(item))
        ) : (
          <Text>No items chosen</Text>
        )}
      </View>
    </ItemPageTemplate>
  );
};

export default MyOrdersPage;
