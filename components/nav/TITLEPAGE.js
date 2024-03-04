import React, { useMemo, memo } from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  ImageSourcePropType,
} from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TITLEPAGE = memo(
  ({
    pROFILE,
    icon,
    headerProfilePosition,
    headerProfileBorderBottomRightRadius,
    headerProfileBorderBottomLeftRadius,
    headerProfileTop,
    headerProfileLeft,
    pROFILEColor,
    fluentnavigation16FilledOverflow,
    onFluentnavigation16FilledPress,
  }) => {
    const headerProfileStyle = useMemo(() => {
      return {
        ...getStyleValue("position", headerProfilePosition),
        ...getStyleValue(
          "borderBottomRightRadius",
          headerProfileBorderBottomRightRadius
        ),
        ...getStyleValue(
          "borderBottomLeftRadius",
          headerProfileBorderBottomLeftRadius
        ),
        ...getStyleValue("top", headerProfileTop),
        ...getStyleValue("left", headerProfileLeft),
      };
    }, [
      headerProfilePosition,
      headerProfileBorderBottomRightRadius,
      headerProfileBorderBottomLeftRadius,
      headerProfileTop,
      headerProfileLeft,
    ]);

    const pROFILE1Style = useMemo(() => {
      return {
        ...getStyleValue("color", pROFILEColor),
      };
    }, [pROFILEColor]);

    const fluentnavigation16FilledStyle = useMemo(() => {
      return {
        ...getStyleValue("overflow", fluentnavigation16FilledOverflow),
      };
    }, [fluentnavigation16FilledOverflow]);

    return (
      <View style={[styles.headerProfile, headerProfileStyle]}>
        <Text style={[styles.profile, pROFILE1Style]}>{pROFILE}</Text>
        <Pressable
          style={[
            styles.fluentnavigation16Filled,
            fluentnavigation16FilledStyle,
          ]}
          onPress={onFluentnavigation16FilledPress}
        >
          <Image style={styles.icon} contentFit="cover" source={icon} />
        </Pressable>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  profile: {
    fontSize: FontSize.size_base,
    fontWeight: "900",
    fontFamily: FontFamily.interBlack,
    color: Color.colorsDefault,
    textAlign: "left",
    width: 176,
    height: 20,
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  fluentnavigation16Filled: {
    width: 44,
    height: 33,
    marginLeft: 110,
  },
  headerProfile: {
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    backgroundColor: Color.green,
    elevation: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: Padding.p_xl,
    paddingTop: Padding.p_sm_5,
    paddingRight: Padding.p_3xs,
    paddingBottom: Padding.p_sm_5,
    overflow: "hidden",
  },
});

export default TITLEPAGE;
