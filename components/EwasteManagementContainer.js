import React, { useMemo, memo } from "react";
import { Text, StyleSheet, View, ImageBackground} from "react-native";
import { Padding, FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const EwasteManagementContainer = memo(({eWasteDimensions,
    eWasteDescription, propMarginLeft, propBackgroundColor, propHeight,
  }) => {
    const frameIconStyle = useMemo(() => {
      return {...getStyleValue("marginLeft", propMarginLeft)};
    }, [propMarginLeft]);

    const frameView1Style = useMemo(() => {
      return {...getStyleValue("backgroundColor", propBackgroundColor)};
    }, [propBackgroundColor]);

    const ourServiceStyle = useMemo(() => {
      return {...getStyleValue("height", propHeight)};
    }, [propHeight]);

    return (
      <ImageBackground resizeMode="cover"  source={eWasteDimensions}
        style={[ styles.frameParent, styles.frameParentSpaceBlock, frameIconStyle]}
      >
        <View style={[ styles.ourServiceWrapper, styles.frameParentSpaceBlock,frameView1Style]}>
          <Text style={[styles.ourService, ourServiceStyle]}>
            {eWasteDescription}
          </Text>
        </View>
        <View style={styles.frameChild} />
      </ImageBackground>
    );
  }
);

const styles = StyleSheet.create({
  frameParentSpaceBlock: {
    paddingVertical: Padding.p_xl,
    height: 140,
  },
  ourService: {
    fontSize: FontSize.size_2xs,
    lineHeight: 25,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.primaryPureWhite,
    textAlign: "left",
    width: 131,
    height: 49,
  },
  ourServiceWrapper: {
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_81xl,
    borderBottomRightRadius: Border.br_81xl,
    borderBottomLeftRadius: Border.br_3xs,
    backgroundColor: Color.colorSeagreen_200,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_mid,
    zIndex: 0,
  },
  frameChild: {
    position: "absolute",
    top: 134,
    left: 53,
    backgroundColor: Color.blueShadow,
    width: 229,
    height: 6,
    zIndex: 1,
  },
  frameParent: {
    width: 315,
    justifyContent: "center",
    paddingHorizontal: 0,
  },
});

export default EwasteManagementContainer;
