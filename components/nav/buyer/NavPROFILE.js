import React, { useMemo, memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import HOME2 from "./HOME2";
import CATEGORY from "./CATEGORY";
import ContainerForm from "./ContainerForm";
import PROFILEChosen from "./PROFILEChosen";
import { Border, Color, Padding } from "../../../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const NavPROFILE = memo(
  ({
    navProfilePosition,
    onHOMEPress,
    onCATEGORYPress,
    onCARTPress,
    onPROFILEChosenPress,
  }) => {
    const navProfileStyle = useMemo(() => {
      return {
        ...getStyleValue("position", navProfilePosition),
      };
    }, [navProfilePosition]);

    return (
      <View style={[styles.navProfile, navProfileStyle]}>
        <HOME2
          hOMEPosition="unset"
          onHOMEPress={() => navigation.navigate("HOMES")}
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
        <PROFILEChosen
          pROFILEChosenPosition="unset"
          pROFILEChosenMarginLeft={33}
          onPROFILEChosenPress={() => navigation.navigate("PROFILE")}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  navProfile: {
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

export default NavPROFILE;
