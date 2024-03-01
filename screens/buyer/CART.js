import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import CartContainer from "../../components/CartContainer";
import WishlistContainer1 from "../../components/WishlistContainer1";
import WishlistContainer from "../../components/WishlistContainer";
import NavCart from "../../components/NavCart";
import { Border, Color } from "../../GlobalStyles";

const CART = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.cart}>
      <View style={[styles.thepage, styles.thepageLayout]}>
        <View style={[styles.pagecontent, styles.thepageLayout]}>
          <CartContainer />
          <WishlistContainer1 listHeadingText={`My Wishlist -->`} />
          <WishlistContainer actionLabel={`similar items -->`} />
        </View>
      </View>
      <NavCart
        navCartPosition="unset"
        navCartBorderStyle="solid"
        navCartBorderColor="#8d8a8a"
        navCartBorderTopWidth={1}
        navCartOverflow="hidden"
        onHOMEPress={() => navigation.navigate("HOMES")}
        onCATEGORYPress={() => navigation.navigate("CATEGORIES1")}
        onCARTChosenPress={() => navigation.navigate("CART")}
        onPROFILEPress={() => navigation.navigate("PROFILE")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  thepageLayout: {
    width: 360,
    overflow: "hidden",
  },
  pagecontent: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 676,
    alignItems: "center",
  },
  thepage: {
    height: 696,
  },
  cart: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.grey,
    flex: 1,
    width: "100%",
    height: 800,
    alignItems: "center",
    overflow: "hidden",
  }
});

export default CART;
