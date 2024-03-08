import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import ItemContainer1 from "../../components/ItemContainer1";
import SoldItemsContainer from "../../components/pages/seller/SoldItemsContainer";
import SaleItemsContainer from "../../components/pages/seller/SaleItemsContainer";
import { Padding} from "../../GlobalStyles";
import SellerPageTemplate from "./Template";

const SELL = () => {
  const navigation = useNavigation();

  return (
    <SellerPageTemplate page_name ='SELL'>
      <View style={[styles.newItesmParent, styles.sellSpaceBlock]}>
        <ItemContainer1 />
        <View style={styles.items}>
          <SoldItemsContainer />
          <SaleItemsContainer />
        </View>
      </View>
    </SellerPageTemplate>
  );
};

const styles = StyleSheet.create({
  sellSpaceBlock: {
    paddingHorizontal: 0,
    alignItems: "center",
    overflow: "hidden",
  },
  items: {
    marginTop: 20,
    alignItems: "center",
    overflow: "hidden",
  },
  newItesmParent: {
    width: 360,
    height: 676,
    paddingVertical: Padding.p_mini,
  },
});

export default SELL;
