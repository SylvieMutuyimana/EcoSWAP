import React, { useMemo, memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import HomeAppliances from "../../HomeAppliances";
import { Color, Border, FontFamily, FontSize, Padding } from "../../../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CategoryFilterContainer3 = memo(({ computersTVsMarginTop }) => {
  const cATEGORIES1Style = useMemo(() => {
    return {
      ...getStyleValue("marginTop", computersTVsMarginTop),
    };
  }, [computersTVsMarginTop]);

  return (
    <View
      style={[styles.categories, styles.categoriesFlexBox, cATEGORIES1Style]}
    >
      <Image
        style={styles.cursorIconLayout}
        contentFit="cover"
        source={require("../../../assets/left-cursor1.png")}
      />
      <View style={styles.categoriesInner}>
        <View
          style={[styles.homeAppliancesParent, styles.phonestabletsPosition]}
        >
          <HomeAppliances
            homeAppliancesYoullLoveAn={require("../../../assets/images/cat1.png")}
            homeApplicances="Home Applicances"
            homeAppliancesPosition="unset"
            homeAppliancesBackgroundColor="unset"
            homeAppliancesWidth={95}
            homeAppliancesHeight={95}
            frameViewBorderStyle="solid"
            frameViewBorderColor="#d9d9d9"
            frameViewBorderWidth={1}
            homeApplicancesFontSize={9}
            homeApplicancesFontFamily="Inter-Bold"
            homeApplicancesFontWeight="700"
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
                source={require("../../../assets/istockphoto583851138612x612-12.png")}
              />
            </View>
            <Text style={[styles.phonestablets, styles.computerstvsTypo]}>
              Phones/Tablets
            </Text>
          </View>
          <View style={[styles.homeAppliances1, styles.homeLayout]}>
            <View style={styles.wrapperLayout}>
              <Image
                style={styles.download11}
                contentFit="cover"
                source={require("../../../assets/download-1-1.png")}
              />
            </View>
            <Text style={[styles.computerstvs, styles.computerstvsTypo]}>
              Computers/TVs
            </Text>
          </View>
          <View style={[styles.homeAppliances1, styles.homeLayout]}>
            <View style={styles.wrapperLayout}>
              <Image
                style={styles.download11}
                contentFit="cover"
                source={require("../../../assets/download-1-1.png")}
              />
            </View>
            <Text style={[styles.computerstvs, styles.computerstvsTypo]}>
              Computers/TVs
            </Text>
          </View>
        </View>
      </View>
      <Image
        style={[styles.rightCursorIcon, styles.cursorIconLayout]}
        contentFit="cover"
        source={require("../../../assets/right-cursor1.png")}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  categoriesFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  phonestabletsPosition: {
    left: 0,
    position: "absolute",
  },
  wrapperLayout: {
    height: 60,
    width: 60,
    backgroundColor: Color.orangeLighter,
    borderRadius: Border.br_81xl,
    overflow: "hidden",
  },
  computerstvsTypo: {
    height: 13,
    textAlign: "center",
    color: Color.colorsDefault,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_4xs,
    width: 95,
  },
  homeLayout: {
    marginLeft: 15,
    width: 95,
    borderRadius: Border.br_mini,
    height: 95,
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
    width: 60,
    backgroundColor: Color.orangeLighter,
    borderRadius: Border.br_81xl,
  },
  phonestablets: {
    top: 72,
    left: 0,
    position: "absolute",
  },
  download11: {
    width: 70,
    height: 79,
  },
  computerstvs: {
    marginTop: 1,
  },
  homeAppliances1: {
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_7xs_5,
    alignItems: "center",
  },
  homeAppliancesParent: {
    top: 0,
    alignItems: "center",
    flexDirection: "row",
  },
  categoriesInner: {
    width: 316,
    marginLeft: 8.5,
    height: 95,
  },
  rightCursorIcon: {
    marginLeft: 8.5,
  },
  categories: {
    backgroundColor: Color.footerBackground,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    elevation: 4,
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: 0,
    marginTop: 10,
    alignItems: "center",
    overflow: "hidden",
    flexDirection: "row",
  },
});

export default CategoryFilterContainer3;
