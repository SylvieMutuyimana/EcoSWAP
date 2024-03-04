import React, { memo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../../../GlobalStyles";

const GalleryContainer = memo(() => {
  return (
    <View style={styles.slideshow}>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <View style={[styles.maskGroupParent, styles.maskGroupPosition]}>
          <Image
            style={[styles.maskGroupParent, styles.maskGroupPosition]}
            contentFit="cover"
            source={require("../../../assets/mask-group.png")}
          />
          <View style={[styles.groupItem, styles.groupItemPosition]} />
          <Image
            style={[styles.groupInner, styles.groupPosition]}
            contentFit="cover"
            source={require("../../../assets/group-35.png")}
          />
          <View style={[styles.ourServiceWrapper, styles.ourLayout1]}>
            <Text style={[styles.ourService, styles.moreClr]}>
              E-WASTE MANAGEMENT RE-IMAGINED
            </Text>
          </View>
        </View>
        <View style={[styles.maskGroupGroup, styles.maskGroupPosition]}>
          <Image
            style={[styles.maskGroupIcon1, styles.maskGroupPosition]}
            contentFit="cover"
            source={require("../../../assets/mask-group1.png")}
          />
          <View style={[styles.rectangleView, styles.groupItemPosition]} />
          <Image
            style={[styles.groupIcon, styles.groupPosition]}
            contentFit="cover"
            source={require("../../../assets/group-351.png")}
          />
          <View style={[styles.ourServiceParent, styles.ourLayout]}>
            <Text style={[styles.ourService1, styles.ourLayout]}>
              Her Life Journey Art Gallery
            </Text>
            <Text style={[styles.more, styles.moreClr]}>
              Teenage mothers at work
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  maskGroupPosition: {
    width: 315,
    top: 0,
    position: "absolute",
  },
  groupItemPosition: {
    borderBottomLeftRadius: Border.br_3xs,
    borderBottomRightRadius: Border.br_81xl,
    borderTopRightRadius: Border.br_81xl,
    borderTopLeftRadius: Border.br_3xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupPosition: {
    width: 49,
    left: 26,
    position: "absolute",
  },
  ourLayout1: {
    height: 47,
    width: 131,
    left: "50%",
    top: "50%",
  },
  moreClr: {
    color: Color.primaryPureWhite,
    textAlign: "left",
    position: "absolute",
  },
  ourLayout: {
    width: 150,
    position: "absolute",
  },
  groupChild: {
    top: 124,
    left: 53,
    backgroundColor: Color.colorGray_400,
    width: 229,
    height: 16,
    position: "absolute",
  },
  maskGroupParent: {
    height: 140,
    left: 0,
  },
  groupItem: {
    backgroundColor: Color.colorSeagreen_100,
    width: 164,
    height: 140,
  },
  groupInner: {
    top: 21,
    height: 54,
  },
  ourService: {
    marginTop: -23.35,
    marginLeft: -65.5,
    fontSize: FontSize.size_2xs,
    lineHeight: 25,
    textAlign: "left",
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    height: 47,
    width: 131,
    left: "50%",
    top: "50%",
  },
  ourServiceWrapper: {
    marginTop: -47.6,
    marginLeft: -139.5,
    position: "absolute",
  },
  maskGroupIcon1: {
    left: 0,
    height: 150,
  },
  rectangleView: {
    backgroundColor: Color.colorRoyalblue_100,
    width: 190,
    height: 150,
  },
  groupIcon: {
    top: 22,
    height: 58,
  },
  ourService1: {
    fontSize: FontSize.size_base,
    lineHeight: 30,
    color: Color.colorWhitesmoke_100,
    textAlign: "left",
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    left: 0,
    top: 0,
  },
  more: {
    top: 67,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.dMSansRegular,
    width: 138,
    textAlign: "left",
    left: 0,
  },
  ourServiceParent: {
    top: 40,
    left: 20,
    height: 80,
  },
  maskGroupGroup: {
    left: 330,
    height: 150,
  },
  rectangleParent: {
    left: 25,
    width: 645,
    top: 0,
    position: "absolute",
    height: 150,
  },
  slideshow: {
    width: 350,
    marginTop: 10,
    height: 150,
  },
});

export default GalleryContainer;
