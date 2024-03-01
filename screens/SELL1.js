import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import ImageContainer from "../components/ImageContainer";
import PriceContainer from "../components/PriceContainer";
import NavUploadS from "../components/NavUploadS";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const SELL1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.sell}>

      <View style={[styles.thepage, styles.thepageLayout]}>
        <View style={[styles.pagecontent, styles.thepageLayout]}>
          <View style={[styles.newItesm, styles.newItesmSpaceBlock]}>
            <Text style={styles.selldonateYourItem}>Sell/Donate your item</Text>
            <View style={styles.details}>
              <View style={[styles.frameParent, styles.newItesmSpaceBlock]}>
                <ImageContainer
                  imageDimensions={require("../assets/vector16.png")}
                  productCode={require("../assets/icoutlinecloudupload1.png")}
                />
                <View style={[styles.email, styles.emailShadowBox]}>
                  <Text style={[styles.email1, styles.emailTypo]}>
                    Item Name
                  </Text>
                </View>
                <View style={[styles.email2, styles.emailShadowBox]}>
                  <Text style={[styles.email3, styles.emailTypo]}>
                    Item Category
                  </Text>
                  <Image
                    style={styles.vectorIcon}
                    contentFit="cover"
                    source={require("../assets/vector17.png")}
                  />
                </View>
                <View style={[styles.email4, styles.emailShadowBox]}>
                  <Text style={[styles.email1, styles.emailTypo]}>
                    Description
                  </Text>
                </View>
                <PriceContainer
                  listingDetails="Price"
                  listingIdentifier={require("../assets/vector18.png")}
                  locationType="Free"
                  dimensionIdentifier={require("../assets/vector19.png")}
                  propWidth={10}
                  propHeight={10}
                />
                <PriceContainer
                  listingDetails="Province"
                  listingIdentifier={require("../assets/vector17.png")}
                  locationType="District"
                  dimensionIdentifier={require("../assets/vector17.png")}
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
            <View style={styles.login}>
              <Text style={styles.upload}>UPLOAD</Text>
            </View>
          </View>
        </View>
      </View>
      <NavUploadS
        navUploadSPosition="unset"
        navUploadSBorderStyle="solid"
        navUploadSBorderColor="#8d8a8a"
        navUploadSBorderTopWidth={1}
        onHOMEPress={() => navigation.navigate("HOME1")}
        onUPLOADSChosenPress={() => navigation.navigate("SELL1")}
        onSOLDSPress={() => navigation.navigate("MYITEMS")}
        onPROFILESPress={() => navigation.navigate("PROFILES")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  thepageLayout: {
    width: 360,
    overflow: "hidden",
  },
  newItesmSpaceBlock: {
    paddingHorizontal: 0,
    alignItems: "center",
    overflow: "hidden",
  },
  emailShadowBox: {
    marginTop: 15,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_8xs,
    overflow: "hidden",
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
  },
  email: {
    height: 41,
    marginTop: 15,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
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
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorWhitesmoke,
    justifyContent: "center",
    alignItems: "center",
  },
  email4: {
    height: 41,
    marginTop: 15,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorWhitesmoke,
    width: 290,
  },
  email6: {
    height: 41,
    marginTop: 15,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorWhitesmoke,
    width: 290,
  },
  email8: {
    height: 41,
    marginTop: 15,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorWhitesmoke,
    width: 290,
  },
  email10: {
    height: 41,
    marginTop: 15,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
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
    paddingVertical: Padding.p_xl,
    justifyContent: "center",
    paddingHorizontal: 0,
  },
  pagecontent: {
    top: 0,
    left: 0,
    height: 676,
    position: "absolute",
    alignItems: "center",
  },
  thepage: {
    height: 696,
  },
  sell: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.grey,
    flex: 1,
    width: "100%",
    height: 800,
    alignItems: "center",
    overflow: "hidden",
  },
});

export default SELL1;
