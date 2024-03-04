import React, { useMemo, memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable } from "react-native";
import { Border, Padding } from "../../../../../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ProfileContainer1 = memo(
  ({ pROFILEPosition, pROFILEMarginLeft, onPROFILEPress }) => {
    const pROFILEStyle = useMemo(() => {
      return {
        ...getStyleValue("position", pROFILEPosition),
        ...getStyleValue("marginLeft", pROFILEMarginLeft),
      };
    }, [pROFILEPosition, pROFILEMarginLeft]);

    return (
      <Pressable
        style={[styles.profile, styles.iconFlexBox, pROFILEStyle]}
        onPress={onPROFILEPress}
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
  profile: {
    flexDirection: "row",
  },
});

export default ProfileContainer1;
