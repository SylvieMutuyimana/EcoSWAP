import React, { useMemo, memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable } from "react-native";
import { Border, Padding } from "../../../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SOLDS = memo(({ sOLDSPosition, sOLDSMarginLeft, onSOLDSPress }) => {
  const sOLDSStyle = useMemo(() => {
    return {
      ...getStyleValue("position", sOLDSPosition),
      ...getStyleValue("marginLeft", sOLDSMarginLeft),
    };
  }, [sOLDSPosition, sOLDSMarginLeft]);

  return (
    <Pressable
      style={[styles.soldS, styles.iconFlexBox, sOLDSStyle]}
      onPress={onSOLDSPress}
    >
      <View style={[styles.icon, styles.iconFlexBox]}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../../../assets/vector22.png")}
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
  soldS: {
    flexDirection: "row",
  },
});

export default SOLDS;
