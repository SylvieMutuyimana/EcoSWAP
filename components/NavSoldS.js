import React, { useMemo, memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import HOMES1 from "./HOMES1";
import UPLOADS from "./UPLOADS";
import MyitemsSChosen from "./MyitemsSChosen";
import PROFILES1 from "./PROFILES1";
import { Border, Color, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const NavSoldS = memo(
  ({
    navSoldSPosition,
    navSoldSBorderStyle,
    navSoldSBorderColor,
    navSoldSBorderTopWidth,
    onHOMESPress,
    onUPLOADSPress,
    onMyitemsSChosenPress,
    onPROFILESPress,
  }) => {
    const navSoldSStyle = useMemo(() => {
      return {
        ...getStyleValue("position", navSoldSPosition),
        ...getStyleValue("borderStyle", navSoldSBorderStyle),
        ...getStyleValue("borderColor", navSoldSBorderColor),
        ...getStyleValue("borderTopWidth", navSoldSBorderTopWidth),
      };
    }, [
      navSoldSPosition,
      navSoldSBorderStyle,
      navSoldSBorderColor,
      navSoldSBorderTopWidth,
    ]);

    return (
      <View style={[styles.navSoldS, navSoldSStyle]}>
        <HOMES1
          hOMESPosition="unset"
          onHOMESPress={() => navigation.navigate("HOME1")}
        />
        <UPLOADS
          uPLOADSPosition="unset"
          uPLOADSMarginLeft={33}
          onUPLOADSPress={() => navigation.navigate("SELL1")}
        />
        <MyitemsSChosen
          myitemsSChosenPosition="unset"
          myitemsSChosenMarginLeft={33}
          onMyitemsSChosenPress={() => navigation.navigate("MYITEMS")}
        />
        <PROFILES1
          pROFILESPosition="unset"
          pROFILESMarginLeft={33}
          onPROFILESPress={() => navigation.navigate("PROFILES")}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  navSoldS: {
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

export default NavSoldS;
