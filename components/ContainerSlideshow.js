import React, { memo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const ContainerSlideshow = memo(
  ({
    dimensionsCode,
    productDimensionsCode,
    productDimensionsCode2,
    productDimensions,
  }) => {
    return (
      <View style={styles.slideshow}>
        <View style={[styles.slideshowChild, styles.childLayout]} />
        <View style={styles.frameParent}>
          <View style={styles.groupWrapper}>
            <View style={[styles.rectangleParent, styles.groupItemPosition]}>
              <View style={[styles.groupChild, styles.childLayout]} />
              <View style={[styles.rectangleParent, styles.groupItemPosition]}>
                <Image
                  style={[styles.rectangleParent, styles.groupItemPosition]}
                  contentFit="cover"
                  source={dimensionsCode}
                />
                <View style={[styles.groupItem, styles.groupItemPosition]} />
                <Image
                  style={styles.groupInner}
                  contentFit="cover"
                  source={productDimensionsCode}
                />
                <View style={[styles.ourServiceWrapper, styles.ourPosition]}>
                  <Text style={[styles.ourService, styles.ourPosition]}>
                    E-WASTE MANAGEMENT RE-IMAGINED
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.groupContainer}>
            <View style={[styles.rectangleParent, styles.groupItemPosition]}>
              <View style={[styles.groupChild, styles.childLayout]} />
              <View style={[styles.rectangleParent, styles.groupItemPosition]}>
                <Image
                  style={[styles.rectangleParent, styles.groupItemPosition]}
                  contentFit="cover"
                  source={productDimensionsCode2}
                />
                <View style={[styles.groupItem, styles.groupItemPosition]} />
                <Image
                  style={styles.groupInner}
                  contentFit="cover"
                  source={productDimensions}
                />
                <View style={[styles.ourServiceContainer, styles.ourPosition]}>
                  <Text style={[styles.ourService, styles.ourPosition]}>
                    Turn Trash into Treasure: Buy, Sell, Recycle Electronic
                    Waste Today!
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  childLayout: {
    height: 16,
    width: 229,
    backgroundColor: Color.colorGray_400,
    top: 124,
    position: "absolute",
  },
  groupItemPosition: {
    left: 0,
    top: 0,
    position: "absolute",
    height: 140,
  },
  ourPosition: {
    height: 47,
    width: 131,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  slideshowChild: {
    left: 78,
  },
  groupChild: {
    left: 53,
  },
  rectangleParent: {
    width: 315,
  },
  groupItem: {
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_81xl,
    borderBottomRightRadius: Border.br_81xl,
    borderBottomLeftRadius: Border.br_3xs,
    backgroundColor: Color.colorSeagreen_200,
    width: 173,
  },
  groupInner: {
    top: 21,
    left: 26,
    width: 49,
    height: 54,
    position: "absolute",
  },
  ourService: {
    marginTop: -23.35,
    marginLeft: -65.5,
    fontSize: FontSize.size_2xs,
    lineHeight: 25,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.primaryPureWhite,
    textAlign: "left",
  },
  ourServiceWrapper: {
    marginTop: -26,
    marginLeft: -138.5,
  },
  groupWrapper: {
    width: 315,
    height: 140,
  },
  ourServiceContainer: {
    marginTop: -36,
    marginLeft: -142.5,
  },
  groupContainer: {
    marginLeft: 14,
    width: 315,
    height: 140,
  },
  frameParent: {
    left: 25,
    flexDirection: "row",
    top: 0,
    position: "absolute",
  },
  slideshow: {
    width: 359,
    height: 140,
  },
});

export default ContainerSlideshow;
