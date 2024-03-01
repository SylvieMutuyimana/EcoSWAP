import React, { memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const EwasteSlideshowContainer = memo(() => {
  return (
    <View style={styles.slideshow}>
      <View style={[styles.slideshowInner, styles.slideshowInnerPosition]}>
        <View style={styles.frameParent}>
          <View
            style={[styles.ourServiceParent, styles.slideshowInnerPosition]}
          >
            <Text style={styles.ourService}>
              E-WASTE MANAGEMENT RE-IMAGINED
            </Text>
            <View style={[styles.frameChild, styles.framePosition]} />
            <View style={[styles.frameItem, styles.framePosition]} />
          </View>
          <View style={styles.frameInner} />
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  slideshowInnerPosition: {
    top: 0,
    position: "absolute",
  },
  framePosition: {
    height: 10,
    left: 17,
    position: "absolute",
  },
  ourService: {
    top: 46,
    fontSize: FontSize.size_2xs,
    lineHeight: 25,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.primaryPureWhite,
    textAlign: "left",
    height: 49,
    width: 131,
    left: 17,
    position: "absolute",
  },
  frameChild: {
    top: 77,
    width: 79,
    backgroundColor: Color.silver,
  },
  frameItem: {
    top: 52,
    backgroundColor: Color.grey,
    width: 131,
  },
  ourServiceParent: {
    left: 0,
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_81xl,
    borderBottomRightRadius: Border.br_81xl,
    borderBottomLeftRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkgray,
    width: 165,
    overflow: "hidden",
    height: 140,
  },
  frameInner: {
    top: 134,
    left: 53,
    backgroundColor: Color.blueShadow,
    width: 229,
    height: 6,
    position: "absolute",
  },
  frameParent: {
    width: 315,
    backgroundColor: Color.silver,
    height: 140,
  },
  slideshowInner: {
    left: 25,
    flexDirection: "row",
  },
  slideshow: {
    width: 359,
    height: 140,
  },
});

export default EwasteSlideshowContainer;
