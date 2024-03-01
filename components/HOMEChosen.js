import React, { useMemo, memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Border, Color, Padding, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const HOMEChosen = memo(({ hOMEChosenPosition, onHOMEChosenPress }) => {
  const hOMEChosenStyle = useMemo(() => {
    return {
      ...getStyleValue("position", hOMEChosenPosition),
    };
  }, [hOMEChosenPosition]);

  return (
    <Pressable
      style={[styles.homeChosen, styles.iconFlexBox, hOMEChosenStyle]}
      onPress={onHOMEChosenPress}
    >
      <View style={[styles.icon, styles.iconFlexBox]}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector7.png")}
        />
      </View>
      <Text style={styles.home}> HOME</Text>
    </Pressable>
  );
});

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
  home: {
    fontSize: FontSize.size_4xs,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorsDefault,
    textAlign: "left",
    width: 63,
    height: 11,
    marginLeft: 2,
  },
  homeChosen: {
    backgroundColor: Color.primaryPureWhite,
    flexDirection: "row",
  },
});

export default HOMEChosen;
