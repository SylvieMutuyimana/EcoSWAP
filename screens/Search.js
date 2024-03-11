import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import Property1Title from "../components/Property1Title";
import ProductSearchContainer2 from "../components/pages/ProductSearchContainer2";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Search = () => {
  return (
    <View style={styles.search}>
      <View style={[styles.thepage, styles.thepagePosition]}>
        <View style={[styles.pagecontent, styles.thepagePosition]}>
          <View style={styles.searchWrapper}>
            <Property1Title
              megaMall="Search"
              property1Title1Position="absolute"
              property1Title1BackgroundColor="unset"
              property1Title1MarginLeft={-180}
              property1Title1Top={0}
              property1Title1Left="50%"
              property1Title1Width={360}
              property1Title1Height={55}
              megaMallLeft={161}
            />
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
