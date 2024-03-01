import React, { memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const ContainerItem3 = memo(() => {
  return (
    <View style={styles.item1}>
      <Image
        style={styles.biheartFillIcon}
        contentFit="cover"
        source={require("../assets/biheartfill.png")}
      />
      <Image
        style={styles.nokia1Icon}
        contentFit="cover"
        source={require("../assets/nokia-11.png")}
      />
      <Text style={styles.description}>
        <Text style={styles.nokiaPhoneCantStart20000}>
          <Text style={styles.nokiaPhoneCant}>{`Nokia phone can’t start
`}</Text>
          <Text style={styles.rwf}>{`20,000 rwf
`}</Text>
          <Text style={styles.nokiaPhoneCant}> </Text>
        </Text>
        <Text style={styles.checkItem}>Check item Bid wish</Text>
      </Text>
    </View>
  );
});

const styles = StyleSheet.create({
  biheartFillIcon: {
    top: 41,
    left: 295,
    width: 10,
    height: 12,
    position: "absolute",
    overflow: "hidden",
  },
  nokia1Icon: {
    top: 5,
    left: 15,
    width: 100,
    height: 54,
    position: "absolute",
  },
  nokiaPhoneCant: {
    fontFamily: FontFamily.interRegular,
  },
  rwf: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  nokiaPhoneCantStart20000: {
    fontSize: FontSize.size_4xs,
    color: Color.colorsDefault,
  },
  checkItem: {
    fontSize: FontSize.size_5xs,
    fontStyle: "italic",
    fontFamily: FontFamily.interLight,
    color: Color.colorMediumblue_100,
  },
  description: {
    height: "76.92%",
    width: "58.46%",
    top: "12.31%",
    left: "40%",
    textAlign: "left",
    position: "absolute",
  },
  item1: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.primaryPureWhite,
    width: 325,
    height: 65,
    overflow: "hidden",
  },
});

export default ContainerItem3;
