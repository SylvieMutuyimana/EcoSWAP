import React, { useMemo, memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import HOMEChosen from "../../buyer/old/HOMEChosen";
import UPLOADS from "./UPLOADS";
import SOLDS from "./SOLDS";
import PROFILES1 from "./PROFILES1";
import { Border, Color, Padding } from "../../../../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const NavHomeS = memo(
  ({
    navHomeSPosition,
    navHomeSBorderStyle,
    navHomeSBorderColor,
    navHomeSBorderTopWidth,
    onHOMEChosenPress,
    onUPLOADSPress,
    onSOLDSPress,
    onPROFILESPress,
  }) => {
    const navHomeSStyle = useMemo(() => {
      return {
        ...getStyleValue("position", navHomeSPosition),
        ...getStyleValue("borderStyle", navHomeSBorderStyle),
        ...getStyleValue("borderColor", navHomeSBorderColor),
        ...getStyleValue("borderTopWidth", navHomeSBorderTopWidth),
      };
    }, [
      navHomeSPosition,
      navHomeSBorderStyle,
      navHomeSBorderColor,
      navHomeSBorderTopWidth,
    ]);

    return (
      <View style={[styles.navHomeS, navHomeSStyle]}>
        <HOMEChosen
          hOMEChosenPosition="unset"
          onHOMEChosenPress={() => navigation.navigate("HOMES")}
        />
        <UPLOADS
          uPLOADSPosition="unset"
          uPLOADSMarginLeft={33}
          onUPLOADSPress={() => navigation.navigate("SELL1")}
        />
        <SOLDS
          sOLDSPosition="unset"
          sOLDSMarginLeft={33}
          onSOLDSPress={() => navigation.navigate("MYITEMS")}
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
  navHomeS: {
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

export default NavHomeS;
