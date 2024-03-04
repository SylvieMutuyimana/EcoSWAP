import React, { useMemo, memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable } from "react-native";
import { Border, Padding } from "../../../../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CATEGORY = memo(
  ({ cATEGORYPosition, cATEGORYMarginLeft, onCATEGORYPress }) => {
    const cATEGORYStyle = useMemo(() => {
      return {
        ...getStyleValue("position", cATEGORYPosition),
        ...getStyleValue("marginLeft", cATEGORYMarginLeft),
      };
    }, [cATEGORYPosition, cATEGORYMarginLeft]);

    return (
      <Pressable
        style={[styles.category, styles.iconFlexBox, cATEGORYStyle]}
        onPress={onCATEGORYPress}
      >
        <View style={[styles.icon, styles.iconFlexBox]}>
          <Image
            style={styles.groupIcon}
            contentFit="cover"
            source={require("../../../../assets/images/nav/buyer/group2.png")}
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
  groupIcon: {
    width: 22,
    height: 22,
  },
  icon: {
    padding: Padding.p_7xs,
  },
  category: {
    flexDirection: "row",
  },
});

export default CATEGORY;
