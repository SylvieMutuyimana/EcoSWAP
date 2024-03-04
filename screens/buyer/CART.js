import React from "react";
import { useNavigation } from "@react-navigation/native";
import BuyerPageTemplate from "./Template";
import CartContainer from "../../components/pages/buyer/CartContainer";
import WishlistContainer1 from "../../components/pages/buyer/WishlistContainer1";
import WishlistContainer from "../../components/pages/buyer/WishlistContainer";
const CART = () => {
  const navigation = useNavigation();

  return (
    <BuyerPageTemplate page_name ='Cart'>
      <CartContainer />
      <WishlistContainer1 listHeadingText={`My Wishlist -->`} />
      <WishlistContainer actionLabel={`similar items -->`} />
    </BuyerPageTemplate>
  );
};

export default CART;