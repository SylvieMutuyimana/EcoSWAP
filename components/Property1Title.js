import React, { useMemo, memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Title = memo(({ megaMall, property1Title1Position,
    property1Title1BackgroundColor, property1Title1MarginLeft,
    property1Title1Top, property1Title1Left, property1Title1Width,
    property1Title1Height, megaMallLeft
  }) => {
    const property1Title1Style = useMemo(() => {
      return {
        ...getStyleValue("position", property1Title1Position),
        ...getStyleValue("backgroundColor", property1Title1BackgroundColor),
        ...getStyleValue("marginLeft", property1Title1MarginLeft),
        ...getStyleValue("top", property1Title1Top),
        ...getStyleValue("left", property1Title1Left),
        ...getStyleValue("width", property1Title1Width),
        ...getStyleValue("height", property1Title1Height),
      };
    }, [property1Title1Position, property1Title1BackgroundColor,
      property1Title1MarginLeft, property1Title1Top, property1Title1Left,
      property1Title1Width, property1Title1Height,
    ]);

    const megaMallStyle = useMemo(() => {
      return {...getStyleValue("left", megaMallLeft)};
    }, [megaMallLeft]);

    return (
      <View style={[styles.property1title1, property1Title1Style]}>
        <Image style={styles.left_icon} contentFit="cover"
          source={require("../assets/images/icons/left_icon.png")}
        />
        <Text style={[styles.megaMall, megaMallStyle]}>{megaMall}</Text>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  left_icon: {
    top: 16,
    left: 20,
    width: 24,
    height: 24,
    overflow: "hidden",
    position: "absolute",
  },
  megaMall: {
    top: 18,
    left: 149,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.dMSansMedium,
    color: Color.colorsDefault,
    textAlign: "center",
    position: "absolute",
  },
  property1title1: {
    backgroundColor: Color.primaryPureWhite,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 3,
    elevation: 3,
    shadowOpacity: 1,
    width: 375,
    height: 55,
  },
});

export default Property1Title;
