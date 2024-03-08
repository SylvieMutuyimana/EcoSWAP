import React, { useMemo, memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable } from "react-native";
import { Border, Padding } from "../../../../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const UPLOADS = memo(
  ({ uPLOADSPosition, uPLOADSMarginLeft, onUPLOADSPress }) => {
    const uPLOADSStyle = useMemo(() => {
      return {
        ...getStyleValue("position", uPLOADSPosition),
        ...getStyleValue("marginLeft", uPLOADSMarginLeft),
      };
    }, [uPLOADSPosition, uPLOADSMarginLeft]);

    return (
      <Pressable
        style={[styles.uploadS, styles.iconFlexBox, uPLOADSStyle]}
        onPress={onUPLOADSPress}
      >
        <View style={[styles.icon, styles.iconFlexBox]}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../../../../assets/images/nav/seller/vector23.png")}
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
  uploadS: {
    flexDirection: "row",
  },
});

export default UPLOADS;
