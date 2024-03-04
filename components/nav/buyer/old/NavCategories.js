import React, { useMemo, memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import HOME2 from "./HOME2";
import CATEGORYChosen from "./CATEGORYChosen";
import ContainerForm from "./ContainerForm";
import ProfileContainer1 from "./ProfileContainer1";
import { Border, Color, Padding } from "../../../../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const NavCategories = memo(
  ({
    navCategoryPosition,
    navCategoryBorderStyle,
    navCategoryBorderColor,
    navCategoryBorderTopWidth,
    onHOMEPress,
    onCATEGORYChosenPress,
    onCARTPress,
    onPROFILEPress,
  }) => {
    const navCategoryStyle = useMemo(() => {
      return {
        ...getStyleValue("position", navCategoryPosition),
        ...getStyleValue("borderStyle", navCategoryBorderStyle),
        ...getStyleValue("borderColor", navCategoryBorderColor),
        ...getStyleValue("borderTopWidth", navCategoryBorderTopWidth),
      };
    }, [
      navCategoryPosition,
      navCategoryBorderStyle,
      navCategoryBorderColor,
      navCategoryBorderTopWidth,
    ]);

    return (
      <View style={[styles.navCategory, navCategoryStyle]}>
        <HOME2
          hOMEPosition="unset"
          onHOMEPress={() => navigation.navigate("HOMES")}
        />
        <CATEGORYChosen
          cATEGORYChosenPosition="unset"
          cATEGORYChosenMarginLeft={33}
          onCATEGORYChosenPress={() => navigation.navigate("CATEGORIES1")}
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
  navCategory: {
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

export default NavCategories;
