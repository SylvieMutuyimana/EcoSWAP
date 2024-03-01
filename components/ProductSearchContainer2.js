import React, { memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const ProductSearchContainer2 = memo(() => {
  return (
    <View style={styles.terakhirDicariParent}>
      <Text style={[styles.terakhirDicari, styles.tma2WirelessTypo]}>
        Terakhir Dicari
      </Text>
      <View style={styles.lastSearchLists}>
        <View style={styles.lastItemFlexBox}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/icon--clock.png")}
          />
          <Text style={[styles.tma2Wireless, styles.tma2WirelessTypo]}>
            TMA2 Wireless
          </Text>
          <Image
            style={[styles.iconX, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon--x.png")}
          />
        </View>
        <View style={[styles.lastSearchItem1, styles.lastItemFlexBox]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/icon--clock.png")}
          />
          <Text style={[styles.tma2Wireless, styles.tma2WirelessTypo]}>
            Cable
          </Text>
          <Image
            style={[styles.iconX, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon--x.png")}
          />
        </View>
        <View style={[styles.lastSearchItem1, styles.lastItemFlexBox]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/icon--clock.png")}
          />
          <Text style={[styles.tma2Wireless, styles.tma2WirelessTypo]}>
            Macbook
          </Text>
          <Image
            style={[styles.iconX, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon--x.png")}
          />
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  tma2WirelessTypo: {
    textAlign: "left",
    color: Color.blueShadow,
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.font_size,
  },
  iconLayout: {
    overflow: "hidden",
    height: 20,
    width: 20,
  },
  lastItemFlexBox: {
    flexDirection: "row",
    width: 306,
    alignItems: "center",
  },
  terakhirDicari: {
    fontWeight: "500",
    fontFamily: FontFamily.dMSansMedium,
  },
  tma2Wireless: {
    flex: 1,
    fontFamily: FontFamily.dMSansRegular,
    marginLeft: 10,
  },
  iconX: {
    marginLeft: 10,
  },
  lastSearchItem1: {
    marginTop: 25,
  },
  lastSearchLists: {
    justifyContent: "center",
    marginTop: 20,
    alignItems: "center",
    width: 311,
  },
  terakhirDicariParent: {
    marginTop: 10,
    width: 311,
  },
});

export default ProductSearchContainer2;
