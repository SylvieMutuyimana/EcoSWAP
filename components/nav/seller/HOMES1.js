import React, { useMemo, memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable } from "react-native";
import { Border, Padding } from "../../../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const HOMES1 = memo(({ hOMESPosition, onHOMESPress }) => {
  const hOMESStyle = useMemo(() => {
    return {
      ...getStyleValue("position", hOMESPosition),
    };
  }, [hOMESPosition]);

  return (
    <Pressable
      style={[styles.homeS, styles.iconFlexBox, hOMESStyle]}
      onPress={onHOMESPress}
    >
      <View style={[styles.icon, styles.iconFlexBox]}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../../../assets/images/nav/buyer/vector20.png")}
        />
      </View>
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
    width: 22,
    height: 22,
  },
  icon: {
    padding: Padding.p_7xs,
  },
  homeS: {
    flexDirection: "row",
  },
});

export default HOMES1;
