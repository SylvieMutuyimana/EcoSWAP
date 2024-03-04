import React, { useMemo, memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Border, Color, Padding, FontSize, FontFamily } from "../../../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CARTChosen = memo(
  ({ cARTChosenPosition, cARTChosenMarginLeft, onCARTChosenPress }) => {
    const cARTChosenStyle = useMemo(() => {
      return {
        ...getStyleValue("position", cARTChosenPosition),
        ...getStyleValue("marginLeft", cARTChosenMarginLeft),
      };
    }, [cARTChosenPosition, cARTChosenMarginLeft]);

    return (
      <Pressable
        style={[styles.cartChosen, styles.iconFlexBox, cARTChosenStyle]}
        onPress={onCARTChosenPress}
      >
        <View style={[styles.icon, styles.iconFlexBox]}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../../../assets/images/nav/buyer/vector27.png")}
          />
        </View>
        <Text style={styles.cart}> CART</Text>
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
  vectorIcon: {
    width: 14,
    height: 14,
  },
  icon: {
    backgroundColor: Color.colorsDefault,
    padding: Padding.p_3xs,
  },
  cart: {
    fontSize: FontSize.size_4xs,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorsDefault,
    textAlign: "left",
    width: 63,
    height: 11,
    marginLeft: 2,
  },
  cartChosen: {
    backgroundColor: Color.primaryPureWhite,
    flexDirection: "row",
  },
});

export default CARTChosen;
