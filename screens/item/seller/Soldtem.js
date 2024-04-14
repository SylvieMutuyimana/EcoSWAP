import React from "react";
import { View } from "react-native";
import ItemPageTemplate from "../Template";
import { cartStyles } from "../../../assets/styles/pageStyles";
import { typeItemPageStyles } from "../../../assets/styles/pages/item/typeItemPageStyles";
import { getSellerLocalItem } from "../navigateItem";
import SoldItemDetailsContainer from "../../../components/pages/item/itemPages/seller/SoldItemDetailsContainer";
import { ItemsDisplayPageHeader } from "../../../components/pages/item/ItemsDisplayPageHeader";

const SoldItem = () => {
  const theItem = getSellerLocalItem()
  const SecondHeader =()=>{
    return(
      <ItemsDisplayPageHeader heading={theItem.name} page_type={'item'}/>
    )
  }

  return (
    <ItemPageTemplate SecondHeader={SecondHeader}>
      <View style={[typeItemPageStyles.thepage, cartStyles.container]}>
        <View style={typeItemPageStyles.pagecontent}>
          <View style={typeItemPageStyles.theitem}>
            <SoldItemDetailsContainer
              theItem={theItem}
            />
          </View>
        </View>
      </View>
    </ItemPageTemplate>
  );
};


export default SoldItem;
