import React, { memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable } from "react-native";
import { Color, Border } from "../GlobalStyles";

const ApplianceExample = memo(({ homeAppliancesYoullLoveAn, onApplianceExamplePress }) => {
    return (
      <Pressable style={styles.applianceExample}
        onPress={onApplianceExamplePress}
      >
        <View style={[
            styles.homeAppliancesYoullLoveAndWrapper,
            styles.applianceExampleChildBg,
          ]}
        >
          <Image
            style={styles.homeAppliancesYoullLoveAndIcon}
            contentFit="cover"
            source={homeAppliancesYoullLoveAn}
          />
        </View>
        <View
          style={[styles.applianceExampleChild, styles.applianceExampleChildBg]}
        />
      </Pressable>
    );
  }
);

const styles = StyleSheet.create({
  applianceExampleChildBg: {
    backgroundColor: Color.silver,
    position: "absolute",
  },
  homeAppliancesYoullLoveAndIcon: {
    width: 70,
    display: "none",
    height: 60,
  },
  homeAppliancesYoullLoveAndWrapper: {
    top: 1,
    left: 10,
    borderRadius: Border.br_81xl,
    width: 60,
    height: 60,
    overflow: "hidden",
  },
  applianceExampleChild: {
    top: 64,
    left: 5,
    width: 72,
    height: 6,
  },
  applianceExample: {
    borderRadius: Border.br_mini,
    width: 80,
    height: 76,
    overflow: "hidden",
  },
});

export default ApplianceExample;
