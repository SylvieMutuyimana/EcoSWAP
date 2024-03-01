import React, { useMemo, memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import HOME2 from "./HOME2";
import CATEGORY from "./CATEGORY";
import CARTChosen from "./CARTChosen";
import ProfileContainer1 from "./ProfileContainer1";
import { Border, Color, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const NavCart = memo(
  ({
    navCartPosition,
    navCartBorderStyle,
    navCartBorderColor,
    navCartBorderTopWidth,
    navCartOverflow,
    onHOMEPress,
    onCATEGORYPress,
    onCARTChosenPress,
    onPROFILEPress,
  }) => {
    const navCartStyle = useMemo(() => {
      return {
        ...getStyleValue("position", navCartPosition),
        ...getStyleValue("borderStyle", navCartBorderStyle),
        ...getStyleValue("borderColor", navCartBorderColor),
        ...getStyleValue("borderTopWidth", navCartBorderTopWidth),
        ...getStyleValue("overflow", navCartOverflow),
      };
    }, [
      navCartPosition,
      navCartBorderStyle,
      navCartBorderColor,
      navCartBorderTopWidth,
      navCartOverflow,
    ]);

    return (
      <View style={[styles.navCart, navCartStyle]}>
        <HOME2
          hOMEPosition="unset"
          onHOMEPress={() => navigation.navigate("HOMES")}
        />
        <CATEGORY
          cATEGORYPosition="unset"
          cATEGORYMarginLeft={33}
          onCATEGORYPress={() => navigation.navigate("CATEGORIES1")}
        />
        <CARTChosen
          cARTChosenPosition="unset"
          cARTChosenMarginLeft={33}
          onCARTChosenPress={() => navigation.navigate("CART")}
        />
        <ProfileContainer1
          pROFILEPosition="unset"
          pROFILEMarginLeft={33}
          onPROFILEPress={() => navigation.navigate("PROFILE")}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  navCart: {
    borderTopLeftRadius: Border.br_6xl,
    borderTopRightRadius: Border.br_6xl,
    backgroundColor: Color.footerBackground,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: Padding.p_mini,
  },
});

export default NavCart;
