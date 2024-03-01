import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import TITLEPAGE from "../../components/TITLEPAGE";
import ImageContainer from "../../components/ImageContainer";
import PriceContainer from "../../components/PriceContainer";
import { useNavigation } from "@react-navigation/native";
import NavUPLOAD from "../../components/NavUPLOAD";
import { Color, Border, FontFamily, FontSize, Padding } from "../../GlobalStyles";

const SelluploadItems = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.selluploadItems, styles.frameParentSpaceBlock]}>
      <TITLEPAGE
        pROFILE="SELL"
        headerProfilePosition="unset"
        headerProfileTop="unset"
        headerProfileLeft="unset"
        pROFILEColor="#000"
        fluentnavigation16FilledOverflow="hidden"
      />
      <View style={[styles.newItesmWrapper, styles.frameParentSpaceBlock]}>
        <View style={styles.newItesm}>
          <Text style={styles.selldonateYourItem}>Sell/Donate your item</Text>
          <View style={styles.details}>
            <View style={[styles.frameParent, styles.frameParentSpaceBlock]}>
              <ImageContainer
                imageDimensions={require("../../assets/vector12.png")}
                productCode={require("../../assets/icoutlinecloudupload.png")}
              />
              <View style={[styles.email, styles.emailShadowBox]}>
                <Text style={[styles.email1, styles.emailTypo]}>Item Name</Text>
              </View>
              <View style={[styles.email2, styles.emailShadowBox]}>
                <Text style={[styles.email3, styles.emailTypo]}>
                  Item Category
                </Text>
                <Image
                  style={styles.vectorIcon}
                  contentFit="cover"
                  source={require("../../assets/vector13.png")}
                />
              </View>
              <View style={[styles.email4, styles.emailShadowBox]}>
                <Text style={[styles.email1, styles.emailTypo]}>
                  Description
                </Text>
              </View>
              <PriceContainer
                listingDetails="Price"
                listingIdentifier={require("../../assets/vector14.png")}
                locationType="Free"
                dimensionIdentifier={require("../../assets/vector15.png")}
              />
              <PriceContainer
                listingDetails="Province"
                listingIdentifier={require("../../assets/vector13.png")}
                locationType="District"
                dimensionIdentifier={require("../../assets/vector13.png")}
                propWidth={15}
                propHeight={7}
              />
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
          <Pressable
            style={styles.login}
            onPress={() => navigation.navigate("Pin")}
          >
            <Text style={styles.upload}>UPLOAD</Text>
          </Pressable>
        </View>
      </View>
      <NavUPLOAD navUPLOADPosition="unset" />
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
    paddingVertical: Padding.p_2xs,
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
