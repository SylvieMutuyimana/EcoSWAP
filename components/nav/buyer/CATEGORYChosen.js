import React, { useMemo, memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Border, Color, Padding, FontSize, FontFamily } from "../../../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CATEGORYChosen = memo(
  ({
    cATEGORYChosenPosition,
    cATEGORYChosenMarginLeft,
    onCATEGORYChosenPress,
  }) => {
    const cATEGORYChosenStyle = useMemo(() => {
      return {
        ...getStyleValue("position", cATEGORYChosenPosition),
        ...getStyleValue("marginLeft", cATEGORYChosenMarginLeft),
      };
    }, [cATEGORYChosenPosition, cATEGORYChosenMarginLeft]);

    return (
      <Pressable
        style={[styles.categoryChosen, styles.iconFlexBox, cATEGORYChosenStyle]}
        onPress={onCATEGORYChosenPress}
      >
        <View style={[styles.icon, styles.iconFlexBox]}>
          <Image
            style={styles.groupIcon}
            contentFit="cover"
            source={require("../../../assets/images/nav/buyer/group4.png")}
          />
        </View>
        <Text style={styles.categories}>CATEGORIES</Text>
      </Pressable>
    );
  }
);

const styles = StyleSheet.create({
  iconFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
  groupIcon: {
    width: 14,
    height: 14,
  },
  icon: {
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
  categoryChosen: {
    backgroundColor: Color.primaryPureWhite,
    flexDirection: "row",
  },
});

export default CATEGORYChosen;
