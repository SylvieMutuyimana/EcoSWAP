import React, { useMemo, memo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ButtonPrimaryInactiveBig = memo(
  ({
    pRIMARY,
    buttonPrimaryInactiveBigPosition,
    buttonPrimaryInactiveBigWidth,
    buttonPrimaryInactiveBigHeight,
    buttonPrimaryInactiveBigMarginLeft,
    buttonPrimaryInactiveBigTop,
    buttonPrimaryInactiveBigLeft,
    rectangleBackgroundColor,
    pRIMARYTop,
    pRIMARYLeft,
    pRIMARYFontWeight,
    pRIMARYFontFamily,
    onButtonPrimaryInactiveBigPress,
  }) => {
    const buttonPrimaryInactiveBigStyle = useMemo(() => {
      return {
        ...getStyleValue("position", buttonPrimaryInactiveBigPosition),
        ...getStyleValue("width", buttonPrimaryInactiveBigWidth),
        ...getStyleValue("height", buttonPrimaryInactiveBigHeight),
        ...getStyleValue("marginLeft", buttonPrimaryInactiveBigMarginLeft),
        ...getStyleValue("top", buttonPrimaryInactiveBigTop),
        ...getStyleValue("left", buttonPrimaryInactiveBigLeft),
      };
    }, [
      buttonPrimaryInactiveBigPosition,
      buttonPrimaryInactiveBigWidth,
      buttonPrimaryInactiveBigHeight,
      buttonPrimaryInactiveBigMarginLeft,
      buttonPrimaryInactiveBigTop,
      buttonPrimaryInactiveBigLeft,
    ]);

    const rectangleStyle = useMemo(() => {
      return {
        ...getStyleValue("backgroundColor", rectangleBackgroundColor),
      };
    }, [rectangleBackgroundColor]);

    const pRIMARYStyle = useMemo(() => {
      return {
        ...getStyleValue("top", pRIMARYTop),
        ...getStyleValue("left", pRIMARYLeft),
        ...getStyleValue("fontWeight", pRIMARYFontWeight),
        ...getStyleValue("fontFamily", pRIMARYFontFamily),
      };
    }, [pRIMARYTop, pRIMARYLeft, pRIMARYFontWeight, pRIMARYFontFamily]);

    return (
      <View
        style={[styles.buttonprimaryinactivebig, buttonPrimaryInactiveBigStyle]}
        onPress={onButtonPrimaryInactiveBigPress}
      >
        <View style={[styles.rectangle, rectangleStyle]} />
        <Text style={[styles.primary, pRIMARYStyle]}>{pRIMARY}</Text>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  rectangle: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_6xl,
    backgroundColor: Color.primary,
    elevation: 8,
    position: "absolute",
  },
  primary: {
    top: "29.17%",
    left: "40.52%",
    fontSize: FontSize.font_size,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.font,
    color: Color.primaryPureWhite,
    textAlign: "center",
    position: "absolute",
  },
  buttonprimaryinactivebig: {
    width: 343,
    height: 48,
  },
});

export default ButtonPrimaryInactiveBig;
