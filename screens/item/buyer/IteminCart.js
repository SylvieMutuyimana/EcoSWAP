import * as React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SimilarItemsContainer from "../../../components/SimilarItemsContainer";
import { ItemPagestyles } from "../../../assets/styles/pages/item/ItemPageStyles";
import ItemBuyerPageContainer from "../../../components/pages/item/itemPages/buyer/ItemPageContainer";

const IteminCart = () => {
  const navigation = useNavigation();
  const item_link = 'Item1'

  return (
    <View style={ItemPagestyles.item}>
      <View style={[ItemPagestyles.thepage, ItemPagestyles.thepageLayout]}>
        <View style={[ItemPagestyles.pagecontent, ItemPagestyles.thepageLayout]}>
          <ItemBuyerPageContainer
            onPressablePress={() => navigation.goBack()}
            onVectorPress={() => navigation.navigate(item_link)}
          />
          <SimilarItemsContainer />
        </View>
      </View>
    </View>
  );
};


export default IteminCart;
