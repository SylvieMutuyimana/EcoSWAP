import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const PriceContainer =  () => {
  return (
    <View style={styles.emailParent}>
      <View style={styles.emailShadowBox}>
        <Text style={styles.email1}>Price</Text>
        <Image style={styles.vectorIcon} contentFit="cover" 
          source={require("../assets/images/icons/cursor_bottom.png")}
        />
      </View>
      <View style={[styles.email2, styles.emailShadowBox]}>
        <Text style={styles.email1}>Free</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  emailShadowBox: {
    paddingVertical: Padding.item_p_v,
    paddingHorizontal: Padding.p_smi,
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_8xs,
    flexDirection: "row",
    overflow: "hidden",
  },
  email1: {
    fontSize: FontSize.size_base,
    fontStyle: "italic",
    fontFamily: FontFamily.interLight,
    color: Color.colorsDefault,
    textAlign: "left",
    width: 68,
  },
  vectorIcon: {
    width: 15,
    height: 7,
    marginLeft: 31,
  },
  vectorIcon1: {
    width: 15,
    height: 17,
    marginLeft: 31
  },
  email2: {
    marginLeft: 10,
  },
  emailParent: {
    alignItems: "flex-end",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_10xs,
    marginTop: 15,
    flexDirection: "row",
    overflow: "hidden",
  },
});

export default PriceContainer;
