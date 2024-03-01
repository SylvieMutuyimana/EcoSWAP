import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import StatusBar1 from "../../components/nav/StatusBar1";
import EwasteSlideshowContainer from "../../components/EwasteSlideshowContainer";
import ApplianceExample from "../../components/ApplianceExample";
import NavHome from "../../components/NavHome";
import { Padding, Color, Border, FontSize, FontFamily } from "../../GlobalStyles";

const Loading = () => {
  return (
    <View style={styles.loading}>
      <StatusBar1
        wiFi={require("../../assets/images/other/wifi.png")}
      />
      <View style={styles.thepage}>
        <View style={styles.pagecontent}>
          <View style={[styles.search, styles.searchFlexBox]}>
            <View
              style={[styles.searchProductNameParent, styles.headingFlexBox]}
            >
              <Text style={styles.searchProductName}>Search Product Name</Text>
              <Image
                style={styles.bitcoinIconssearchOutline}
                contentFit="cover"
                source={require("../../assets/bitcoiniconssearchoutline.png")}
              />
            </View>
            <Image
              style={styles.menuicon}
              contentFit="cover"
              source={require("../../assets/menuicon.png")}
            />
          </View>
          <View style={styles.homepageitems}>
            <EwasteSlideshowContainer />
            <View style={[styles.categories, styles.newItemsSpaceBlock]}>
              <View style={[styles.heading, styles.headingFlexBox]}>
                <View style={styles.rectangleParent}>
                  <View style={[styles.frameChild, styles.framePosition]} />
                  <View style={[styles.frameItem, styles.framePosition]} />
                </View>
              </View>
              <View style={styles.categories1}>
                <View style={styles.categories2}>
                  <ApplianceExample
                    homeAppliancesYoullLoveAn={require("../../assets/5homeappliancesyoullloveandrelyoneveryday1-13.png")}
                  />
                  <ApplianceExample
                    homeAppliancesYoullLoveAn={require("../../assets/5homeappliancesyoullloveandrelyoneveryday1-14.png")}
                  />
                  <ApplianceExample
                    homeAppliancesYoullLoveAn={require("../../assets/5homeappliancesyoullloveandrelyoneveryday1-14.png")}
                  />
                  <ApplianceExample
                    homeAppliancesYoullLoveAn={require("../../assets/5homeappliancesyoullloveandrelyoneveryday1-14.png")}
                  />
                  <ApplianceExample
                    homeAppliancesYoullLoveAn={require("../../assets/5homeappliancesyoullloveandrelyoneveryday1-14.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.newItems, styles.newItemsSpaceBlock]}>
              <View style={[styles.heading, styles.headingFlexBox]}>
                <View style={styles.rectangleParent}>
                  <View style={[styles.frameChild, styles.framePosition]} />
                  <View style={[styles.frameItem, styles.framePosition]} />
                </View>
              </View>
              <View style={[styles.theItems, styles.headingFlexBox]}>
                <View style={styles.viewFlexBox}>
                  <View style={styles.mainQimg01b073ed640cf6946b11} />
                  <View style={[styles.frameParent, styles.frameParentLayout]}>
                    <View
                      style={[
                        styles.rectangleWrapper,
                        styles.frameParentLayout,
                      ]}
                    >
                      <View style={styles.frameChild1} />
                    </View>
                    <View
                      style={[styles.frameChild2, styles.frameChildLayout]}
                    />
                    <View
                      style={[styles.frameChild3, styles.frameChildLayout]}
                    />
                  </View>
                </View>
                <View style={[styles.view1, styles.viewFlexBox]}>
                  <View style={styles.mainQimg01b073ed640cf6946b11} />
                  <View style={[styles.frameParent, styles.frameParentLayout]}>
                    <View
                      style={[
                        styles.rectangleWrapper,
                        styles.frameParentLayout,
                      ]}
                    >
                      <View style={styles.frameChild1} />
                    </View>
                    <View
                      style={[styles.frameChild2, styles.frameChildLayout]}
                    />
                    <View
                      style={[styles.frameChild3, styles.frameChildLayout]}
                    />
                  </View>
                </View>
                <View style={[styles.view1, styles.viewFlexBox]}>
                  <View style={styles.mainQimg01b073ed640cf6946b11} />
                  <View style={[styles.frameParent, styles.frameParentLayout]}>
                    <View
                      style={[
                        styles.rectangleWrapper,
                        styles.frameParentLayout,
                      ]}
                    >
                      <View style={styles.frameChild1} />
                    </View>
                    <View
                      style={[styles.frameChild2, styles.frameChildLayout]}
                    />
                    <View
                      style={[styles.frameChild3, styles.frameChildLayout]}
                    />
                  </View>
                </View>
                <View style={[styles.view1, styles.viewFlexBox]}>
                  <View style={styles.mainQimg01b073ed640cf6946b11} />
                  <View style={[styles.frameParent, styles.frameParentLayout]}>
                    <View
                      style={[
                        styles.rectangleWrapper,
                        styles.frameParentLayout,
                      ]}
                    >
                      <View style={styles.frameChild1} />
                    </View>
                    <View
                      style={[styles.frameChild2, styles.frameChildLayout]}
                    />
                    <View
                      style={[styles.frameChild3, styles.frameChildLayout]}
                    />
                  </View>
                </View>
                <View style={[styles.view1, styles.viewFlexBox]}>
                  <View style={styles.mainQimg01b073ed640cf6946b11} />
                  <View style={[styles.frameParent, styles.frameParentLayout]}>
                    <View
                      style={[
                        styles.rectangleWrapper,
                        styles.frameParentLayout,
                      ]}
                    >
                      <View style={styles.frameChild1} />
                    </View>
                    <View
                      style={[styles.frameChild2, styles.frameChildLayout]}
                    />
                    <View
                      style={[styles.frameChild3, styles.frameChildLayout]}
                    />
                  </View>
                </View>
                <View style={[styles.view1, styles.viewFlexBox]}>
                  <View style={styles.mainQimg01b073ed640cf6946b11} />
                  <View style={[styles.frameParent, styles.frameParentLayout]}>
                    <View
                      style={[
                        styles.rectangleWrapper,
                        styles.frameParentLayout,
                      ]}
                    >
                      <View style={styles.frameChild1} />
                    </View>
                    <View
                      style={[styles.frameChild2, styles.frameChildLayout]}
                    />
                    <View
                      style={[styles.frameChild3, styles.frameChildLayout]}
                    />
                  </View>
                </View>
                <View style={[styles.view1, styles.viewFlexBox]}>
                  <View style={styles.mainQimg01b073ed640cf6946b11} />
                  <View style={[styles.frameParent, styles.frameParentLayout]}>
                    <View
                      style={[
                        styles.rectangleWrapper,
                        styles.frameParentLayout,
                      ]}
                    >
                      <View style={styles.frameChild1} />
                    </View>
                    <View
                      style={[styles.frameChild2, styles.frameChildLayout]}
                    />
                    <View
                      style={[styles.frameChild3, styles.frameChildLayout]}
                    />
                  </View>
                </View>
                <View style={[styles.view1, styles.viewFlexBox]}>
                  <View style={styles.mainQimg01b073ed640cf6946b11} />
                  <View style={[styles.frameParent, styles.frameParentLayout]}>
                    <View
                      style={[
                        styles.rectangleWrapper,
                        styles.frameParentLayout,
                      ]}
                    >
                      <View style={styles.frameChild1} />
                    </View>
                    <View
                      style={[styles.frameChild2, styles.frameChildLayout]}
                    />
                    <View
                      style={[styles.frameChild3, styles.frameChildLayout]}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <NavHome
        navHomePosition="unset"
        navHomeBorderStyle="solid"
        navHomeBorderColor="#8d8a8a"
        navHomeBorderTopWidth={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchFlexBox: {
    flexDirection: "row",
    overflow: "hidden",
  },
  headingFlexBox: {
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  newItemsSpaceBlock: {
    marginTop: 11,
    paddingTop: Padding.p_8xs,
    paddingHorizontal: Padding.p_12xs,
    justifyContent: "center",
    overflow: "hidden",
  },
  framePosition: {
    height: 10,
    backgroundColor: Color.colorWhitesmoke_200,
    top: 0,
    position: "absolute",
  },
  frameParentLayout: {
    width: 61,
    overflow: "hidden",
  },
  frameChildLayout: {
    width: 55,
    height: 6,
    backgroundColor: Color.lightGrey,
    position: "absolute",
  },
  viewFlexBox: {
    paddingVertical: Padding.p_2xs,
    paddingHorizontal: Padding.p_3xs,
    borderRadius: Border.br_3xs,
    justifyContent: "center",
    backgroundColor: Color.primaryPureWhite,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  searchProductName: {
    fontSize: FontSize.size_2xs,
    lineHeight: 18,
    fontStyle: "italic",
    fontFamily: FontFamily.dMSansItalic,
    color: Color.colorGray_300,
    textAlign: "left",
    width: 222,
    height: 17,
  },
  bitcoinIconssearchOutline: {
    width: 21,
    height: 25,
    marginLeft: 10,
    overflow: "hidden",
  },
  searchProductNameParent: {
    borderRadius: Border.br_8xs,
    width: 290,
    paddingHorizontal: Padding.p_mini,
    backgroundColor: Color.primaryPureWhite,
    paddingVertical: 0,
    flexDirection: "row",
    overflow: "hidden",
  },
  menuicon: {
    width: 44,
    height: 33,
    marginLeft: 10,
    overflow: "hidden",
  },
  search: {
    paddingLeft: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
    paddingRight: Padding.p_12xs,
    alignItems: "center",
  },
  frameChild: {
    left: 299,
    width: 39,
  },
  frameItem: {
    left: 5,
    width: 68,
  },
  rectangleParent: {
    width: 343,
    height: 12,
  },
  heading: {
    height: 18,
    paddingHorizontal: Padding.p_5xs,
  },
  categories2: {
    paddingRight: Padding.p_base_5,
    justifyContent: "center",
    flexDirection: "row",
    left: 0,
    top: 0,
    position: "absolute",
    alignItems: "center",
  },
  categories1: {
    height: 76,
    marginTop: 5,
    width: 360,
  },
  categories: {
    width: 360,
  },
  mainQimg01b073ed640cf6946b11: {
    backgroundColor: Color.silver,
    width: 60,
    height: 38,
  },
  frameChild1: {
    top: 2,
    left: -1,
    width: 62,
    height: 6,
    backgroundColor: Color.lightGrey,
    position: "absolute",
  },
  rectangleWrapper: {
    top: 26,
    height: 11,
    left: 0,
    position: "absolute",
    width: 61,
  },
  frameChild2: {
    top: 14,
    left: -3,
  },
  frameChild3: {
    top: 4,
    left: 0,
  },
  frameParent: {
    height: 39,
    marginLeft: 10,
  },
  view1: {
    marginLeft: 24,
  },
  theItems: {
    width: 358,
    flexWrap: "wrap",
    paddingHorizontal: Padding.p_base_5,
    marginTop: 5,
    flexDirection: "row",
    overflow: "hidden",
  },
  newItems: {
    alignItems: "center",
  },
  homepageitems: {
    marginTop: 10,
    overflow: "hidden",
  },
  pagecontent: {
    height: 676,
    left: 0,
    top: 0,
    position: "absolute",
    width: 360,
    alignItems: "center",
    overflow: "hidden",
  },
  thepage: {
    height: 696,
    width: 360,
  },
  loading: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.grey,
    flex: 1,
    width: "100%",
    height: 800,
    alignItems: "center",
    overflow: "hidden",
  },
});

export default Loading;
