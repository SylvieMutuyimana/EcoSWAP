import React, { useMemo, memo } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ProductSearchContainer = memo(({ propMarginTop, onMenuiconPress }) => {
  const searchStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  return (
    <View style={[styles.search, styles.searchFlexBox, searchStyle]}>
      <View style={[styles.searchProductNameParent, styles.searchFlexBox]}>
        <Text style={styles.searchProductName}>Search Product Name</Text>
        <Image
          style={styles.bitcoinIconssearchOutline}
          contentFit="cover"
          source={require("../assets/bitcoiniconssearchoutline.png")}
        />
      </View>
      <Pressable style={styles.menuicon} onPress={onMenuiconPress}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/menuicon.png")}
        />
      </Pressable>
    </View>
  );
});

const styles = StyleSheet.create({
  searchFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  searchProductName: {
    fontSize: FontSize.size_2xs,
    lineHeight: 18,
    fontStyle: "italic",
    fontFamily: FontFamily.dMSansItalic,
    color: Color.colorGray_300,
    textAlign: "left",
    width: 222,
    height: 17,
  },
  bitcoinIconssearchOutline: {
    width: 21,
    height: 25,
    marginLeft: 10,
    overflow: "hidden",
  },
  searchProductNameParent: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.primaryPureWhite,
    width: 290,
    justifyContent: "center",
    paddingHorizontal: Padding.p_mini,
    paddingVertical: 0,
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  menuicon: {
    width: 44,
    height: 33,
    marginLeft: 10,
  },
  search: {
    paddingLeft: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
    paddingRight: Padding.p_12xs,
  },
});

export default ProductSearchContainer;
