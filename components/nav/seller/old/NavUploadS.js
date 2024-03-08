import React, { useMemo, memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import HOME2 from "../../buyer/old/HOME2";
import UPLOADSChosen from "./UPLOADSChosen";
import SOLDS from "./SOLDS";
import PROFILES1 from "./PROFILES1";
import { Border, Color, Padding } from "../../../../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const NavUploadS = memo(
  ({
    navUploadSPosition,
    navUploadSBorderStyle,
    navUploadSBorderColor,
    navUploadSBorderTopWidth,
    onHOMEPress,
    onUPLOADSChosenPress,
    onSOLDSPress,
    onPROFILESPress,
  }) => {
    const navUploadSStyle = useMemo(() => {
      return {
        ...getStyleValue("position", navUploadSPosition),
        ...getStyleValue("borderStyle", navUploadSBorderStyle),
        ...getStyleValue("borderColor", navUploadSBorderColor),
        ...getStyleValue("borderTopWidth", navUploadSBorderTopWidth),
      };
    }, [
      navUploadSPosition,
      navUploadSBorderStyle,
      navUploadSBorderColor,
      navUploadSBorderTopWidth,
    ]);

    return (
      <View style={[styles.navUploadS, navUploadSStyle]}>
        <HOME2
          hOMEPosition="unset"
          onHOMEPress={() => navigation.navigate("HOME1")}
        />
        <UPLOADSChosen
          uPLOADSChosenPosition="unset"
          uPLOADSChosenMarginLeft={33}
          onUPLOADSChosenPress={() => navigation.navigate("SELL1")}
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
  navUploadS: {
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

export default NavUploadS;
