import React, { memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const ImageContainer = memo(({ imageDimensions, productCode }) => {
  return (
    <View style={styles.vectorParent}>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={imageDimensions}
      />
      <Image
        style={[styles.icoutlineCloudUploadIcon, styles.emailSpaceBlock]}
        contentFit="cover"
        source={productCode}
      />
      <View style={[styles.email, styles.emailSpaceBlock]}>
        <Text style={styles.email1}>Image</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  emailSpaceBlock: {
    marginLeft: 10,
    overflow: "hidden",
  },
  vectorIcon: {
    width: 60,
    height: 60,
  },
  icoutlineCloudUploadIcon: {
    width: 24,
    height: 24,
  },
  email1: {
    position: "absolute",
    top: 11,
    left: 18,
    fontSize: FontSize.size_base,
    fontStyle: "italic",
    fontFamily: FontFamily.interLight,
    color: Color.colorsDefault,
    textAlign: "left",
    width: 68,
  },
  email: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorWhitesmoke,
    elevation: 4,
    width: 220,
    height: 41,
  },
  vectorParent: {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingBottom: Padding.p_3xs,
    overflow: "hidden",
  },
});

export default ImageContainer;
