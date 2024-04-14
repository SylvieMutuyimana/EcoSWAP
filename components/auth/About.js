import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../../GlobalStyles";

const About = ({ closeReadMore }) => {
  return (
    <View style={[styles.about, styles.aboutLayout]}>
      <View style={[styles.thepage, styles.aboutLayout]}>
        <View style={styles.pagecontent}>
          <View style={styles.frameParent}>
            <Pressable style={[styles.vectorWrapper, styles.vectorFlexBox]} onPress={closeReadMore}>
              <Image style={styles.vectorIcon} source={require("../../assets/images/auth/about/cancel.png")} />
            </Pressable>
            <Image style={styles.frameChild} source={require("../../assets/images/auth/about/logo.png")} />
          </View>
          <Text style={styles.ecoSWAPTechWas}>
            ecoSWAP was developed in 2022 with the goal of reducing the number of E-waste products that were being dumped. ecoSWAP aims to connect E-waste and second-hand appliances to exchange these products either for a fee or donation so that those who can, can put to use these electronics and stop them from being dumped.
          </Text>
          <View style={styles.recycleLogoVectorPngVectorParent}>
            <Image style={styles.recycleLogoVectorPngVectorIcon} source={require("../../assets/images/auth/about/recyclelogo.png")} />
            <Text style={styles.noElectronicIs}>
              No electronic is ever a waste, it can always be put to use or recycled. Waste electronics are harmful and toxic for our planet.
            </Text>
          </View>
          <Image style={styles.spoiltElectronics1} source={require("../../assets/images/auth/about/spoilt_electronics.png")} />
          <Text style={styles.goGreenThe}>
            Go Green! The future of our planet is in our hands.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  aboutLayout: {
    width: "100%",
    overflow: "hidden",
    paddingTop: 40
  },
  vectorFlexBox: {
    flexDirection: "row",
    overflow: "hidden",
  },
  goGreenTheLayout: {
    width: 288,
    marginTop: 30,
  },
  goGreenTheTypo: {
    textAlign: "justify",
    color: Color.colorsDefault,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
  },
  vectorIcon: {
    width: 20,
    height: 20,
  },
  vectorWrapper: {
    justifyContent: "flex-end",
    paddingLeft: 275,
  },
  frameChild: {
    borderRadius: Border.br_8xs,
    width: 154,
    height: 57,
    marginTop: 10,
    overflow: "hidden",
  },
  frameParent: {
    justifyContent: "center",
    overflow: "hidden",
  },
  ecoSWAPTechWas: {
    height: 138,
    marginTop: 30,
    textAlign: "justify",
    color: Color.colorsDefault,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
  },
  recycleLogoVectorPngVectorIcon: {
    width: 131,
    height: 124,
  },
  noElectronicIs: {
    width: 141,
    height: 125,
    marginLeft: 16,
  },
  recycleLogoVectorPngVectorParent: {
    marginTop: 30,
    alignItems: "center",
  },
  spoiltElectronics1: {
    height: 158,
    marginTop: 30,
  },
  goGreenThe: {
    height: 72,
    marginTop: 30,
    textAlign: "justify",
    color: Color.colorsDefault,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
  },
  pagecontent: {
    position: "absolute",
    top: 0,
    left: 20,
    width: 319,
    paddingTop: 25,
    alignItems: "center",
    overflow: "hidden",
  },
  thepage: {
    height: 760,
    overflow: "hidden",
  },
  about: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.primaryPureWhite,
    height: 800,
    paddingHorizontal: Padding.p_mid,
    paddingVertical: 0,
    maxWidth: "100%",
    maxHeight: "100%",
    alignItems: "center",
    overflow: "hidden",
  },
});

export default About;
