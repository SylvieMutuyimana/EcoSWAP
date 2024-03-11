import React, { memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import HomeAppliances from "../../HomeAppliances";
import { Color, Border, FontSize, FontFamily, Padding } from "../../../GlobalStyles";

const CategoryFilterContainer1 = memo(() => {
  return (
    <View style={[styles.categories, styles.categoriesFlexBox]}>
      <Image
        style={styles.cursorIconLayout}
        contentFit="cover"
        source={require("../../../assets/images/icons/left-cursor.png")}
      />
      <View style={[styles.homeAppliancesParent, styles.categoriesFlexBox]}>
        <HomeAppliances
          homeAppliancesYoullLoveAn={require("../../../assets/images/samples/cat1.png")}
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
        />
        <View style={styles.homeLayout}>
          <View
            style={[
              styles.stockphotoWrapper,
              styles.wrapperLayout,
            ]}
          >
            <Image style={styles.stockphotoIcon} contentFit="cover"
              source={require("../../../assets/images/samples/cracked_phone_s.png")}
            />
          </View>
          <Text style={[styles.phonestablets, styles.computerstvsLayout]}>
            Phones/Tablets
          </Text>
        </View>
        <View style={[styles.homeAppliances1, styles.homeLayout]}>
          <View style={styles.wrapperLayout}>
            <Image style={styles.download11} contentFit="cover"
              source={require("../../../assets/images/samples/tvs1.png")}
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
        source={require("../../../assets/images/icons/right-cursor.png")}
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
  stockphotoIcon: {
    width: 77,
    height: 70,
  },
  stockphotoWrapper: {
    top: 11,
    left: 18,
    borderStyle: "solid",
    borderColor: Color.grey,
    borderWidth: 1,
    position: "absolute",
  },
  phonestablets: {
    top: 72,
    left: 0,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    position: "absolute",
  },
  download11: {
    width: 70,
    height: 79,
  },
  computerstvs: {
    fontFamily: FontFamily.interRegular,
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

export default CategoryFilterContainer1;
