import React, { useMemo, memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import HOMEChosen from "./HOMEChosen";
import CATEGORY from "./CATEGORY";
import ContainerForm from "./ContainerForm";
import ProfileContainer1 from "./ProfileContainer1";
import { Border, Color, Padding } from "../../../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const NavHome = memo(
  ({
    navHomePosition,
    navHomeBorderStyle,
    navHomeBorderColor,
    navHomeBorderTopWidth,
    onHOMEChosenPress,
    onCATEGORYPress,
    onCARTPress,
    onPROFILEPress,
  }) => {
    const navHomeStyle = useMemo(() => {
      return {
        ...getStyleValue("position", navHomePosition),
        ...getStyleValue("borderStyle", navHomeBorderStyle),
        ...getStyleValue("borderColor", navHomeBorderColor),
        ...getStyleValue("borderTopWidth", navHomeBorderTopWidth),
      };
    }, [
      navHomePosition,
      navHomeBorderStyle,
      navHomeBorderColor,
      navHomeBorderTopWidth,
    ]);

    return (
      <View style={[styles.navHome, navHomeStyle]}>
        <HOMEChosen
          hOMEChosenPosition="unset"
          onHOMEChosenPress={() => navigation.navigate("HOMES")}
        />
        <CATEGORY
          cATEGORYPosition="unset"
          cATEGORYMarginLeft={33}
          onCATEGORYPress={() => navigation.navigate("CATEGORIES1")}
        />
        <ContainerForm
          cARTPosition="unset"
          cARTMarginLeft={33}
          onCARTPress={() => navigation.navigate("CART")}
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
  navHome: {
    borderTopLeftRadius: Border.br_6xl,
    borderTopRightRadius: Border.br_6xl,
    backgroundColor: Color.footerBackground,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: Padding.p_mini,
  },
});

export default NavHome;
