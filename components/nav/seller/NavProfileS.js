import React, { useMemo, memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import HOME2 from "../buyer/HOME2";
import UPLOADS from "./UPLOADS";
import SOLDS from "./SOLDS";
import PROFILESChosen from "./PROFILESChosen";
import { Border, Color, Padding } from "../../../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const NavProfileS = memo(
  ({
    navProfileSPosition,
    onHOMEPress,
    onUPLOADSPress,
    onSOLDSPress,
    onPROFILESChosenPress,
  }) => {
    const navProfileSStyle = useMemo(() => {
      return {
        ...getStyleValue("position", navProfileSPosition),
      };
    }, [navProfileSPosition]);

    return (
      <View style={[styles.navProfileS, navProfileSStyle]}>
        <HOME2
          hOMEPosition="unset"
          onHOMEPress={() => navigation.navigate("HOME1")}
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
        <PROFILESChosen
          pROFILESChosenPosition="unset"
          pROFILESChosenMarginLeft={33}
          onPROFILESChosenPress={() => navigation.navigate("PROFILES")}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  navProfileS: {
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

export default NavProfileS;
