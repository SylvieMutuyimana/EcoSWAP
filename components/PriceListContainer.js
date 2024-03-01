import React, { memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const PriceListContainer = memo(
  ({ phoneDescription, phoneIssueDescription, phonePrice }) => {
    return (
      <View style={[styles.item2, styles.item2FlexBox]}>
        <Image
          style={styles.istockphoto583851138612x612Icon}
          contentFit="cover"
          source={phoneDescription}
        />
        <View style={styles.descriptionParent}>
          <Text style={[styles.description, styles.rwfTypo]}>
            {phoneIssueDescription}
          </Text>
          <View style={[styles.rwfParent, styles.item2FlexBox]}>
            <Text style={[styles.rwf, styles.rwfTypo]}>{phonePrice}</Text>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector.png")}
            />
          </View>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  item2FlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  rwfTypo: {
    textAlign: "left",
    color: Color.colorsDefault,
    fontSize: FontSize.size_5xs,
  },
  istockphoto583851138612x612Icon: {
    width: 60,
    height: 38,
  },
  description: {
    fontFamily: FontFamily.interRegular,
    width: 55,
    height: 20,
  },
  rwf: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    width: 52,
    height: 11,
  },
  vectorIcon: {
    width: 6,
    height: 6,
    marginLeft: 3,
  },
  rwfParent: {
    marginTop: 4,
  },
  descriptionParent: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_11xs,
    marginLeft: 10,
    overflow: "hidden",
  },
  item2: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.primaryPureWhite,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_2xs,
    marginLeft: 24,
  },
});

export default PriceListContainer;
