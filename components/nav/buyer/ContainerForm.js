import React, { useMemo, memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable } from "react-native";
import { Border, Padding } from "../../../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ContainerForm = memo(({ cARTPosition, cARTMarginLeft, onCARTPress }) => {
  const cARTStyle = useMemo(() => {
    return {
      ...getStyleValue("position", cARTPosition),
      ...getStyleValue("marginLeft", cARTMarginLeft),
    };
  }, [cARTPosition, cARTMarginLeft]);

  return (
    <Pressable
      style={[styles.cart, styles.cartFlexBox, cARTStyle]}
      onPress={onCARTPress}
    >
      <View style={[styles.icon, styles.cartFlexBox]}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../../../assets/images/nav/buyer/vector8.png")}
        />
      </View>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  cartFlexBox: {
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
  cart: {
    flexDirection: "row",
  },
});

export default ContainerForm;
