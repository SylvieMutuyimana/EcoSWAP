import React, { useMemo, memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable } from "react-native";
import { Border, Padding } from "../../../../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const PROFILES1 = memo(
  ({ pROFILESPosition, pROFILESMarginLeft, onPROFILESPress }) => {
    const pROFILESStyle = useMemo(() => {
      return {
        ...getStyleValue("position", pROFILESPosition),
        ...getStyleValue("marginLeft", pROFILESMarginLeft),
      };
    }, [pROFILESPosition, pROFILESMarginLeft]);

    return (
      <Pressable
        style={[styles.profileS, styles.iconFlexBox, pROFILESStyle]}
        onPress={onPROFILESPress}
      >
        <View style={[styles.icon, styles.iconFlexBox]}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../../../../assets/images/nav/buyer/vector9.png")}
          />
        </View>
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
    width: 22,
    height: 22,
  },
  icon: {
    padding: Padding.p_7xs,
  },
  profileS: {
    flexDirection: "row",
  },
});

export default PROFILES1;
