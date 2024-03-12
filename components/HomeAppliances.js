import React, { useMemo, memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const HomeAppliances = memo(
  ({
    homeAppliancesYoullLoveAn,
    homeApplicances,
    homeAppliancesPosition,
    homeAppliancesBackgroundColor,
    homeAppliancesWidth,
    homeAppliancesHeight,
    frameViewBorderStyle,
    frameViewBorderColor,
    frameViewBorderWidth,
    homeApplicancesFontSize,
    homeApplicancesFontFamily,
    homeApplicancesFontWeight,
    onHomeAppliancesPress,
  }) => {
    const homeAppliancesStyle = useMemo(() => {
      return {
        ...getStyleValue("position", homeAppliancesPosition),
        ...getStyleValue("backgroundColor", homeAppliancesBackgroundColor),
        ...getStyleValue("width", homeAppliancesWidth),
        ...getStyleValue("height", homeAppliancesHeight),
      };
    }, [
      homeAppliancesPosition,
      homeAppliancesBackgroundColor,
      homeAppliancesWidth,
      homeAppliancesHeight,
    ]);

    const frameViewStyle = useMemo(() => {
      return {
        ...getStyleValue("borderStyle", frameViewBorderStyle),
        ...getStyleValue("borderColor", frameViewBorderColor),
        ...getStyleValue("borderWidth", frameViewBorderWidth),
      };
    }, [frameViewBorderStyle, frameViewBorderColor, frameViewBorderWidth]);

    const homeApplicancesStyle = useMemo(() => {
      return {
        ...getStyleValue("fontSize", homeApplicancesFontSize),
        ...getStyleValue("fontFamily", homeApplicancesFontFamily),
        ...getStyleValue("fontWeight", homeApplicancesFontWeight),
      };
    }, [
      homeApplicancesFontSize,
      homeApplicancesFontFamily,
      homeApplicancesFontWeight,
    ]);

    return (
      <View style={[styles.homeAppliances, styles.homeBg, homeAppliancesStyle]}
        onPress={onHomeAppliancesPress}
      >
        <View
          style={[ styles.homeAppliancesYoullLoveAndWrapper,
            styles.homeBg, frameViewStyle,
          ]}
        >
          <Image style={styles.homeAppliancesYoullLoveAndIcon}
            contentFit="cover" source={homeAppliancesYoullLoveAn}
          />
        </View>
        <Text style={[styles.homeApplicances, homeApplicancesStyle]}>
          {homeApplicances}
        </Text>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  homeBg: {
    overflow: "hidden",
    backgroundColor: Color.orangeLighter,
  },
  homeAppliancesYoullLoveAndIcon: {
    width: 70,
    height: 60,
  },
  homeAppliancesYoullLoveAndWrapper: {
    borderRadius: Border.br_81xl,
    width: 60,
    height: 60,
  },
  homeApplicances: {
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.interRegular,
    color: Color.colorsDefault,
    textAlign: "center",
    height: 13,
    marginTop: 1,
    width: 95,
  },
  homeAppliances: {
    borderRadius: Border.br_mini,
    height: 95,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_7xs_5,
    width: 95,
  },
});

export default HomeAppliances;
