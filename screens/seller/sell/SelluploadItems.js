import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import PriceContainer from "../../../components/PriceContainer";
import { Color, Border, FontFamily, FontSize, Padding } from "../../../GlobalStyles";

const ImageStyles = StyleSheet.create({
  emailSpaceBlock: {
    marginLeft: 10,
    overflow: "hidden",
  },
  vectorIcon: {
    width: 60,
    height: 60,
  },
  uploadIcon: {
    width: 24,
    height: 24,
  },
  email1: {
    position: "absolute",
    top: 11,
    left: 18,
    fontSize: FontSize.size_base,
    fontStyle: "italic",
    fontFamily: FontFamily.interLight,
    color: Color.colorsDefault,
    textAlign: "left",
    width: 68,
  },
  email: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorWhitesmoke,
    elevation: 4,
    width: 220,
    height: 41,
  },
  vectorParent: {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingBottom: Padding.item_p_h,
    overflow: "hidden",
  },
});

const SelluploadItems = () => {
  return (
    <View style={[styles.selluploadItems, styles.frameParentSpaceBlock]}>
      <View style={[styles.newItesmWrapper, styles.frameParentSpaceBlock]}>
        <View style={styles.newItesm}>
          <Text style={styles.selldonateYourItem}>Sell/Donate your item</Text>
          <View style={styles.details}>
            <View style={[styles.frameParent, styles.frameParentSpaceBlock]}>
              <View style={ImageStyles.vectorParent}>
                <Image style={ImageStyles.vectorIcon} contentFit="cover"
                  source={require("../../../assets/images/icons/img_uploader.png")}
                />
                <Image style={[ImageStyles.uploadIcon, ImageStyles.emailSpaceBlock]}
                  contentFit="cover"
                  source={require("../../../assets/images/icons/upload.png")}
                />
                <View style={[ImageStyles.email, ImageStyles.emailSpaceBlock]}>
                  <Text style={ImageStyles.email1}>Image</Text>
                </View>
              </View>
              <View style={[styles.email, styles.emailShadowBox]}>
                <Text style={[styles.email1, styles.emailTypo]}>Item Name</Text>
              </View>
              <View style={[styles.email2, styles.emailShadowBox]}>
                <Text style={[styles.email3, styles.emailTypo]}>
                  Item Category
                </Text>
                <Image style={styles.vectorIcon} contentFit="cover"
                  source={require("../../../assets/images/icons/cursor_bottom.png")}
                />
              </View>
              <View style={[styles.email4, styles.emailShadowBox]}>
                <Text style={[styles.email1, styles.emailTypo]}>
                  Description
                </Text>
              </View>
              <PriceContainer/>
              <PriceContainer/>
              <View style={[styles.email6, styles.emailShadowBox]}>
                <Text style={[styles.email1, styles.emailTypo]}>Sector</Text>
              </View>
              <View style={[styles.email8, styles.emailShadowBox]}>
                <Text style={[styles.email1, styles.emailTypo]}>Cell</Text>
              </View>
              <View style={[styles.email10, styles.emailShadowBox]}>
                <Text style={[styles.email1, styles.emailTypo]}>
                  Location Description
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.login}>
            <Text style={styles.upload}>UPLOAD</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameParentSpaceBlock: {
    paddingHorizontal: 0,
    alignItems: "center",
    overflow: "hidden",
  },
  emailShadowBox: {
    marginTop: 15,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_8xs,
    overflow: "hidden",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  emailTypo: {
    fontFamily: FontFamily.interLight,
    fontStyle: "italic",
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorsDefault,
  },
  selldonateYourItem: {
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    height: 21,
    width: 290,
    textAlign: "left",
    color: Color.colorsDefault,
  },
  email1: {
    top: 11,
    left: 18,
    width: 185,
    position: "absolute",
    fontFamily: FontFamily.interLight,
    fontStyle: "italic",
  },
  email: {
    height: 41,
    marginTop: 15,
    backgroundColor: Color.colorWhitesmoke,
    width: 290,
  },
  email3: {
    width: 200,
  },
  vectorIcon: {
    width: 15,
    height: 7,
    marginLeft: 49,
  },
  email2: {
    flexDirection: "row",
    paddingHorizontal: Padding.p_smi,
    paddingVertical: Padding.item_p_v,
    marginTop: 15,
    backgroundColor: Color.colorWhitesmoke,
    justifyContent: "center",
    alignItems: "center",
  },
  email4: {
    height: 41,
    marginTop: 15,
    backgroundColor: Color.colorWhitesmoke,
    width: 290,
  },
  email6: {
    height: 41,
    marginTop: 15,
    backgroundColor: Color.colorWhitesmoke,
    width: 290,
  },
  email8: {
    height: 41,
    marginTop: 15,
    backgroundColor: Color.colorWhitesmoke,
    width: 290,
  },
  email10: {
    height: 41,
    marginTop: 15,
    backgroundColor: Color.colorWhitesmoke,
    width: 290,
  },
  frameParent: {
    paddingVertical: Padding.p_9xs,
  },
  details: {
    paddingTop: Padding.p_4xs,
    paddingBottom: Padding.p_lg,
    overflow: "hidden",
  },
  upload: {
    top: 15,
    left: 23,
    fontWeight: "900",
    fontFamily: FontFamily.interBlack,
    color: Color.primaryPureWhite,
    textAlign: "center",
    width: 96,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  login: {
    backgroundColor: Color.colorsDefault,
    width: 142,
    height: 50,
    borderRadius: Border.br_8xs,
    overflow: "hidden",
  },
  newItesm: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  newItesmWrapper: {
    width: 360,
    height: 676,
    paddingVertical: Padding.p_mini,
  },
  selluploadItems: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.grey,
    flex: 1,
    width: "100%",
    height: 800,
    paddingVertical: Padding.p_28xl,
    justifyContent: "center",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    paddingHorizontal: 0,
  },
});

export default SelluploadItems;
