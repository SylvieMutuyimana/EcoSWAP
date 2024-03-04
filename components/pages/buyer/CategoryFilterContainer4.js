import React, { memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Border, Padding, Color, FontSize, FontFamily } from "../../../GlobalStyles";

const CategoryFilterContainer = memo(() => {
  return (
    <View style={styles.navCategories}>
      <View style={[styles.home, styles.antFlexBox]}>
        <View style={[styles.antDesignhomeFilled, styles.antFlexBox]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../../../assets/vector6.png")}
          />
        </View>
      </View>
      <View style={[styles.home1, styles.homeFlexBox]}>
        <View style={[styles.antDesignhomeFilled1, styles.antFlexBox]}>
          <Image
            style={styles.groupIcon}
            contentFit="cover"
            source={require("../../../assets/group1.png")}
          />
        </View>
        <Text style={styles.categories}>CATEGORIES</Text>
      </View>
      <View style={styles.homeFlexBox}>
        <View style={[styles.antDesignhomeFilled, styles.antFlexBox]}>
          <Image
            style={[styles.antDesigncloudUploadOutlinIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../../../assets/antdesignclouduploadoutlined.png")}
          />
        </View>
      </View>
      <View style={styles.homeFlexBox}>
        <View style={[styles.antDesignhomeFilled, styles.antFlexBox]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../../../assets/vector2.png")}
          />
        </View>
      </View>
      <View style={styles.homeFlexBox}>
        <View style={[styles.antDesignhomeFilled, styles.antFlexBox]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../../../assets/vector3.png")}
          />
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  antFlexBox: {
    borderRadius: Border.br_xl,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  homeFlexBox: {
    marginLeft: 24.5,
    borderRadius: Border.br_xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  iconLayout: {
    height: 22,
    width: 22,
  },
  antDesignhomeFilled: {
    padding: Padding.p_7xs,
  },
  home: {
    flexDirection: "row",
    borderRadius: Border.br_xl,
  },
  groupIcon: {
    width: 14,
    height: 14,
  },
  antDesignhomeFilled1: {
    backgroundColor: Color.colorsDefault,
    padding: Padding.p_3xs,
  },
  categories: {
    fontSize: FontSize.size_4xs,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorsDefault,
    textAlign: "left",
    width: 63,
    height: 11,
    marginLeft: 2,
  },
  home1: {
    backgroundColor: Color.grey,
  },
  antDesigncloudUploadOutlinIcon: {
    overflow: "hidden",
    height: 22,
    width: 22,
  },
  navCategories: {
    backgroundColor: Color.green,
    paddingHorizontal: Padding.p_sm_5,
    paddingVertical: Padding.p_mini,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
});

export default CategoryFilterContainer;
