import React, { memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const SoldItemsContainer = memo(() => {
  return (
    <View style={styles.soldItems}>
      <Text style={[styles.soldItems1, styles.viewAllFlexBox]}>Sold items</Text>
      <View style={styles.soldItems2}>
        <View style={styles.itemLayout}>
          <Text style={[styles.description, styles.descriptionLayout]}>
            <Text style={styles.crackedScreenDellLaptop91}>
              <Text style={styles.crackedScreenDellLaptop911}>
                <Text
                  style={styles.crackedScreenDell}
                >{`Cracked Screen Dell Laptop
`}</Text>
                <Text style={styles.rwf}>{`91,000 rwf
`}</Text>
              </Text>
              <Text style={styles.blankLine}> </Text>
            </Text>
            <Text style={styles.checkItem}>Check item</Text>
          </Text>
          <Image
            style={styles.mainQimg01b073ed640cf6946b11Icon}
            contentFit="cover"
            source={require("../assets/mainqimg01b073ed640cf6946b110844b663b2b6pjlq-13.png")}
          />
        </View>
        <View style={[styles.item2, styles.itemLayout]}>
          <Text style={[styles.description1, styles.descriptionLayout]}>
            <Text style={styles.crackedScreenDellLaptop91}>
              <Text style={styles.crackedScreenDellLaptop911}>
                <Text
                  style={styles.crackedScreenDell}
                >{`Smashed screen iphone 4, front camera broken
`}</Text>
                <Text style={styles.rwf}>{`56,000 rwf
`}</Text>
              </Text>
              <Text style={styles.blankLine}> </Text>
            </Text>
            <Text style={styles.checkItem}>Check item</Text>
          </Text>
          <Image
            style={styles.istockphoto583851138612x612Icon}
            contentFit="cover"
            source={require("../assets/istockphoto583851138612x612-16.png")}
          />
        </View>
        <Text
          style={[styles.viewAll, styles.viewAllFlexBox]}
        >{`View all -->`}</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  viewAllFlexBox: {
    textAlign: "left",
    color: Color.colorsDefault,
  },
  descriptionLayout: {
    height: "76.86%",
    position: "absolute",
    textAlign: "left",
  },
  itemLayout: {
    height: 70,
    width: 325,
    backgroundColor: Color.primaryPureWhite,
    overflow: "hidden",
  },
  soldItems1: {
    fontSize: FontSize.size_xs,
    width: 163,
    height: 15,
    fontFamily: FontFamily.interRegular,
  },
  crackedScreenDell: {
    fontFamily: FontFamily.interRegular,
  },
  rwf: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  crackedScreenDellLaptop911: {
    fontSize: FontSize.size_4xs,
  },
  blankLine: {
    fontSize: FontSize.size_9xs,
    fontFamily: FontFamily.interRegular,
  },
  crackedScreenDellLaptop91: {
    color: Color.colorsDefault,
  },
  checkItem: {
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.interLight,
    color: Color.colorMediumblue_100,
    fontStyle: "italic",
  },
  description: {
    width: "59.08%",
    top: "15.43%",
    left: "34.15%",
  },
  mainQimg01b073ed640cf6946b11Icon: {
    height: "88%",
    width: "24.95%",
    top: "10%",
    right: "70.74%",
    bottom: "2%",
    left: "4.31%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  description1: {
    width: "61.23%",
    top: "12.29%",
    left: "33.23%",
  },
  istockphoto583851138612x612Icon: {
    top: 5,
    left: 15,
    width: 81,
    height: 56,
    position: "absolute",
  },
  item2: {
    marginTop: 10,
  },
  viewAll: {
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    width: 52,
    height: 10,
    marginTop: 10,
    fontStyle: "italic",
    fontSize: FontSize.size_4xs,
  },
  soldItems2: {
    borderRadius: Border.br_8xs,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    marginTop: 4,
    backgroundColor: Color.primaryPureWhite,
    overflow: "hidden",
  },
  soldItems: {
    backgroundColor: Color.colorDarkgreen,
    overflow: "hidden",
  },
});

export default SoldItemsContainer;
