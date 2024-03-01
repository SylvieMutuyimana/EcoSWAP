import React, { memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HomeAppliances from "./HomeAppliances";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const CategoryFilterContainer2 = memo(() => {
  const navigation = useNavigation();

  return (
    <View style={[styles.categories, styles.categoriesFlexBox]}>
      <Image
        style={styles.cursorIconLayout}
        contentFit="cover"
        source={require("../assets/left-cursor.png")}
      />
      <View style={[styles.homeAppliancesParent, styles.categoriesFlexBox]}>
        <HomeAppliances
          homeAppliancesYoullLoveAn={require("../assets/5homeappliancesyoullloveandrelyoneveryday1-11.png")}
          homeApplicances="Home Applicances"
          homeAppliancesPosition="unset"
          homeAppliancesBackgroundColor="unset"
          homeAppliancesWidth={95}
          homeAppliancesHeight={95}
          frameViewBorderStyle="unset"
          frameViewBorderColor="unset"
          homeApplicancesFontSize={9}
          homeApplicancesFontFamily="Inter-Regular"
          homeApplicancesFontWeight="unset"
          onHomeAppliancesPress={() => navigation.navigate("CATEGORIES1")}
        />
        <View style={styles.homeLayout}>
          <View
            style={[
              styles.istockphoto583851138612x612Wrapper,
              styles.wrapperLayout,
            ]}
          >
            <Image
              style={styles.istockphoto583851138612x612Icon}
              contentFit="cover"
              source={require("../assets/istockphoto583851138612x612-14.png")}
            />
          </View>
          <Text style={[styles.phonestablets, styles.computerstvsLayout]}>
            Phones/Tablets
          </Text>
        </View>
        <View style={[styles.homeAppliances1, styles.homeLayout]}>
          <View style={[styles.download11Wrapper, styles.wrapperLayout]}>
            <Image
              style={styles.download11}
              contentFit="cover"
              source={require("../assets/download-1-11.png")}
            />
          </View>
          <Text style={[styles.computerstvs, styles.computerstvsLayout]}>
            Computers/TVs
          </Text>
        </View>
      </View>
      <Image
        style={[styles.rightCursorIcon, styles.cursorIconLayout]}
        contentFit="cover"
        source={require("../assets/right-cursor.png")}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  categoriesFlexBox: {
    flexDirection: "row",
    overflow: "hidden",
    alignItems: "center",
  },
  wrapperLayout: {
    height: 60,
    width: 60,
    backgroundColor: Color.orangeLighter,
    borderRadius: Border.br_81xl,
    overflow: "hidden",
  },
  computerstvsLayout: {
    height: 13,
    textAlign: "center",
    color: Color.colorsDefault,
    fontSize: FontSize.size_4xs,
    width: 95,
  },
  homeLayout: {
    marginLeft: 15,
    height: 95,
    width: 95,
    borderRadius: Border.br_mini,
    overflow: "hidden",
  },
  cursorIconLayout: {
    height: 20,
    width: 10,
  },
  istockphoto583851138612x612Icon: {
    width: 77,
    height: 70,
  },
  istockphoto583851138612x612Wrapper: {
    top: 11,
    left: 18,
    position: "absolute",
  },
  phonestablets: {
    top: 72,
    left: 0,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  download11: {
    width: 70,
    height: 79,
  },
  download11Wrapper: {
    borderStyle: "solid",
    borderColor: Color.grey,
    borderWidth: 1,
  },
  computerstvs: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    marginTop: 1,
  },
  homeAppliances1: {
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_7xs_5,
    alignItems: "center",
  },
  homeAppliancesParent: {
    marginLeft: 8.5,
    alignItems: "center",
  },
  rightCursorIcon: {
    marginLeft: 8.5,
  },
  categories: {
    backgroundColor: Color.colorDarkslategray_100,
    elevation: 4,
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: 0,
    alignItems: "center",
  },
});

export default CategoryFilterContainer2;
