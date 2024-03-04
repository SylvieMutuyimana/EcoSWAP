import React, { useMemo, memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable } from "react-native";
import { Border, Padding } from "../../../../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const HOME2 = memo(({ hOMEPosition, onHOMEPress }) => {
  const hOMEStyle = useMemo(() => {
    return {
      ...getStyleValue("position", hOMEPosition),
    };
  }, [hOMEPosition]);

  return (
    <Pressable
      style={[styles.home, styles.homeFlexBox, hOMEStyle]}
      onPress={onHOMEPress}
    >
      <View style={[styles.icon, styles.homeFlexBox]}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../../../../assets/images/nav/buyer/vector20.png")}
        />
      </View>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  homeFlexBox: {
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
  home: {
    flexDirection: "row",
  },
});

export default HOME2;
