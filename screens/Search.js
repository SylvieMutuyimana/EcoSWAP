import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";
import React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Search = () => {
  const ProductSearchContainer2 =() => {
    return (
      <View style={ProductContStyles.container}>
        <Text style={[ProductContStyles.terakhirDicari, ProductContStyles.tma2WirelessTypo]}>
          Terakhir Dicari
        </Text>
        <View style={ProductContStyles.lastSearchLists}>
          <View style={ProductContStyles.lastItemFlexBox}>
            <Image style={ProductContStyles.iconLayout} contentFit="cover"
              source={require("../../assets/images/icons/icon--clock.png")}
            />
            <Text style={[ProductContStyles.tma2Wireless, ProductContStyles.tma2WirelessTypo]}>
              TMA2 Wireless
            </Text>
            <Image style={[ProductContStyles.iconX, ProductContStyles.iconLayout]}
              contentFit="cover"
              source={require("../../assets/images/icons/icon--x.png")}
            />
          </View>
          <View style={[ProductContStyles.lastSearchItem1, ProductContStyles.lastItemFlexBox]}>
            <Image style={ProductContStyles.iconLayout} contentFit="cover"
              source={require("../../assets/images/icons/icon--clock.png")}
            />
            <Text style={[ProductContStyles.tma2Wireless, ProductContStyles.tma2WirelessTypo]}>
              Cable
            </Text>
            <Image style={[ProductContStyles.iconX, ProductContStyles.iconLayout]}
              contentFit="cover"
              source={require("../../assets/images/icons/icon--x.png")}
            />
          </View>
          <View style={[ProductContStyles.lastSearchItem1, ProductContStyles.lastItemFlexBox]}>
            <Image style={ProductContStyles.iconLayout}
              contentFit="cover"
              source={require("../../assets/images/icons/icon--clock.png")}
            />
            <Text style={[ProductContStyles.tma2Wireless, ProductContStyles.tma2WirelessTypo]}>
              Macbook
            </Text>
            <Image style={[ProductContStyles.iconX, ProductContStyles.iconLayout]}
              contentFit="cover"
              source={require("../../assets/images/icons/icon--x.png")}
            />
          </View>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.search}>
      <View style={[styles.thepage, styles.thepagePosition]}>
        <View style={[styles.pagecontent, styles.thepagePosition]}>
          <View style={styles.searchWrapper}>
            <View style={[SearchContainerstyles.property1title1]}>
              <Image style={SearchContainerstyles.left_icon} contentFit="cover"
                source={require("../assets/images/icons/left_icon.png")}
              />
              <Text style={[SearchContainerstyles.megaMall]}>{'Search'}</Text>
            </View>
          </View>
          <View style={styles.field}>
            <View style={styles.guysimmmonsgmailcomParent}>
              <Text style={styles.guysimmmonsgmailcom}>
                Search Product Name
              </Text>
              <Image
                style={styles.regularsearchIcon}
                contentFit="cover"
                source={require("../assets/images/icons/regularsearch1.png")}
              />
            </View>
          </View>
          <ProductSearchContainer2 />
        </View>
      </View>
    </View>
  );
};
const ProductContStyles = StyleSheet.create({
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
  container: {
    marginTop: 10,
    width: 311,
  },
});

const SearchContainerstyles = StyleSheet.create({
  left_icon: {
    top: 16,
    left: 20,
    width: 24,
    height: 24,
    overflow: "hidden",
    position: "absolute",
  },
  megaMall: {
    left: 161,
    top: 18,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.dMSansMedium,
    color: Color.colorsDefault,
    textAlign: "center",
    position: "absolute",
  },
  property1title1: {
    backgroundColor: Color.primaryPureWhite,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 3, elevation: 3,
    shadowOpacity: 1,
    width: 360,position: 'absolute',
    height: 55,marginLeft: -180,
    left: "50%", top:0
  },
});
const styles = StyleSheet.create({
  thepagePosition: {
    left: 0,
    width: 360,
    position: "absolute",
    overflow: "hidden",
  },
  searchWrapper: {
    height: 55,
    width: 360,
  },
  guysimmmonsgmailcom: {
    fontSize: FontSize.font_size,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: FontFamily.dMSansMedium,
    color: Color.secondaryHalfGrey,
    textAlign: "left",
    display: "flex",
    width: 251,
    alignItems: "center",
  },
  regularsearchIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  guysimmmonsgmailcomParent: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.secondaryOffGrey,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_base,
    alignItems: "center",
    position: "absolute",
    width: "100%",
  },
  field: {
    width: 325,
    height: 50,
    marginTop: 10,
  },
  pagecontent: {
    top: 0,
    height: 676,
    alignItems: "center",
    width: 360,
  },
  thepage: {
    top: 40,
    height: 696,
    width: 360,
  },
  search: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.grey,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Search;
