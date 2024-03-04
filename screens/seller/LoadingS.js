import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import StatusBar1 from "../../components/nav/StatusBar1";
import EwasteSlideshowContainer from "../../components/EwasteSlideshowContainer";
import NavHomeS from "../../components/nav/seller/NavHomeS";
import { Padding, Color, Border, FontSize, FontFamily } from "../../GlobalStyles";

const LoadingS = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loadingS}>
      <StatusBar1
        wiFi={require("../../assets/images/other/wifi.png")}
      />
      <View style={styles.thepage}>
        <View style={styles.pagecontent}>
          <View style={styles.homepageitems}>
            <EwasteSlideshowContainer />
            <View style={[styles.newItems, styles.newSpaceBlock]}>
              <View style={styles.heading}>
                <View style={styles.rectangleParent}>
                  <View style={[styles.frameChild, styles.framePosition]} />
                  <View style={[styles.frameItem, styles.framePosition]} />
                </View>
              </View>
              <View style={[styles.theItems, styles.itemsFlexBox]}>
                <View style={styles.itemFlexBox}>
                  <View style={styles.mainQimg01b073ed640cf6946b11} />
                  <View style={[styles.frameParent, styles.view1SpaceBlock]}>
                    <View style={styles.rectangleWrapper}>
                      <View style={[styles.frameInner, styles.childLayout]} />
                    </View>
                    <View
                      style={[styles.rectangleView, styles.frameChild1Layout]}
                    />
                    <View
                      style={[styles.frameChild1, styles.frameChild1Layout]}
                    />
                  </View>
                </View>
                <View style={[styles.item7, styles.itemFlexBox]}>
                  <View style={styles.mainQimg01b073ed640cf6946b11} />
                  <View style={[styles.frameParent, styles.view1SpaceBlock]}>
                    <View style={styles.rectangleWrapper}>
                      <View style={[styles.frameInner, styles.childLayout]} />
                    </View>
                    <View
                      style={[styles.rectangleView, styles.frameChild1Layout]}
                    />
                    <View
                      style={[styles.frameChild1, styles.frameChild1Layout]}
                    />
                  </View>
                </View>
                <View style={[styles.item7, styles.itemFlexBox]}>
                  <View style={styles.mainQimg01b073ed640cf6946b11} />
                  <View style={[styles.frameParent, styles.view1SpaceBlock]}>
                    <View style={styles.rectangleWrapper}>
                      <View style={[styles.frameInner, styles.childLayout]} />
                    </View>
                    <View
                      style={[styles.rectangleView, styles.frameChild1Layout]}
                    />
                    <View
                      style={[styles.frameChild1, styles.frameChild1Layout]}
                    />
                  </View>
                </View>
                <View style={[styles.item7, styles.itemFlexBox]}>
                  <View style={styles.mainQimg01b073ed640cf6946b11} />
                  <View style={[styles.frameParent, styles.view1SpaceBlock]}>
                    <View style={styles.rectangleWrapper}>
                      <View style={[styles.frameInner, styles.childLayout]} />
                    </View>
                    <View
                      style={[styles.rectangleView, styles.frameChild1Layout]}
                    />
                    <View
                      style={[styles.frameChild1, styles.frameChild1Layout]}
                    />
                  </View>
                </View>
                <View style={[styles.item7, styles.itemFlexBox]}>
                  <View style={styles.mainQimg01b073ed640cf6946b11} />
                  <View style={[styles.frameParent, styles.view1SpaceBlock]}>
                    <View style={styles.rectangleWrapper}>
                      <View style={[styles.frameInner, styles.childLayout]} />
                    </View>
                    <View
                      style={[styles.rectangleView, styles.frameChild1Layout]}
                    />
                    <View
                      style={[styles.frameChild1, styles.frameChild1Layout]}
                    />
                  </View>
                </View>
                <View style={[styles.item7, styles.itemFlexBox]}>
                  <View style={styles.mainQimg01b073ed640cf6946b11} />
                  <View style={[styles.frameParent, styles.view1SpaceBlock]}>
                    <View style={styles.rectangleWrapper}>
                      <View style={[styles.frameInner, styles.childLayout]} />
                    </View>
                    <View
                      style={[styles.rectangleView, styles.frameChild1Layout]}
                    />
                    <View
                      style={[styles.frameChild1, styles.frameChild1Layout]}
                    />
                  </View>
                </View>
                <View style={[styles.item7, styles.itemFlexBox]}>
                  <View style={styles.mainQimg01b073ed640cf6946b11} />
                  <View style={[styles.frameParent, styles.view1SpaceBlock]}>
                    <View style={styles.rectangleWrapper}>
                      <View style={[styles.frameInner, styles.childLayout]} />
                    </View>
                    <View
                      style={[styles.rectangleView, styles.frameChild1Layout]}
                    />
                    <View
                      style={[styles.frameChild1, styles.frameChild1Layout]}
                    />
                  </View>
                </View>
                <View style={[styles.item7, styles.itemFlexBox]}>
                  <View style={styles.mainQimg01b073ed640cf6946b11} />
                  <View style={[styles.frameParent, styles.view1SpaceBlock]}>
                    <View style={styles.rectangleWrapper}>
                      <View style={[styles.frameInner, styles.childLayout]} />
                    </View>
                    <View
                      style={[styles.rectangleView, styles.frameChild1Layout]}
                    />
                    <View
                      style={[styles.frameChild1, styles.frameChild1Layout]}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.newItems1, styles.newSpaceBlock]}>
              <Text style={styles.soldItems}>{`SOLD ITEMS -->`}</Text>
              <View style={styles.itemsFlexBox}>
                <View style={styles.parent}>
                  <View style={styles.view}>
                    <View style={styles.istockphoto583851138612x612} />
                    <View style={[styles.child, styles.childLayout]} />
                  </View>
                  <View style={[styles.view1, styles.view1SpaceBlock]}>
                    <View style={styles.istockphoto583851138612x612} />
                    <View style={[styles.child, styles.childLayout]} />
                  </View>
                  <View style={[styles.view1, styles.view1SpaceBlock]}>
                    <View style={styles.istockphoto583851138612x612} />
                    <View style={[styles.child, styles.childLayout]} />
                  </View>
                  <View style={[styles.view1, styles.view1SpaceBlock]}>
                    <View style={styles.istockphoto583851138612x612} />
                    <View style={[styles.child, styles.childLayout]} />
                  </View>
                  <View style={[styles.view1, styles.view1SpaceBlock]}>
                    <View style={styles.istockphoto583851138612x612} />
                    <View style={[styles.child, styles.childLayout]} />
                  </View>
                  <View style={[styles.view1, styles.view1SpaceBlock]}>
                    <View style={styles.istockphoto583851138612x612} />
                    <View style={[styles.child, styles.childLayout]} />
                  </View>
                  <View style={[styles.view1, styles.view1SpaceBlock]}>
                    <View style={styles.istockphoto583851138612x612} />
                    <View style={[styles.child, styles.childLayout]} />
                  </View>
                  <View style={[styles.view1, styles.view1SpaceBlock]}>
                    <View style={styles.istockphoto583851138612x612} />
                    <View style={[styles.child, styles.childLayout]} />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <NavHomeS
        navHomeSPosition="unset"
        navHomeSBorderStyle="solid"
        navHomeSBorderColor="#8d8a8a"
        navHomeSBorderTopWidth={1}
        onHOMEChosenPress={() => navigation.navigate("HOME1")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  newSpaceBlock: {
    marginTop: 11,
    paddingTop: Padding.p_8xs,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  framePosition: {
    height: 10,
    backgroundColor: Color.colorWhitesmoke_200,
    top: 0,
    position: "absolute",
  },
  itemsFlexBox: {
    marginTop: 5,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  view1SpaceBlock: {
    marginLeft: 10,
    overflow: "hidden",
  },
  childLayout: {
    height: 6,
    backgroundColor: Color.lightGrey,
  },
  frameChild1Layout: {
    width: 55,
    height: 6,
    backgroundColor: Color.lightGrey,
    position: "absolute",
  },
  itemFlexBox: {
    paddingVertical: Padding.p_2xs,
    paddingHorizontal: Padding.p_3xs,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.primaryPureWhite,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
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
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  mainQimg01b073ed640cf6946b11: {
    width: 60,
    height: 38,
    backgroundColor: Color.silver,
  },
  frameInner: {
    top: 2,
    left: -1,
    width: 62,
    position: "absolute",
  },
  rectangleWrapper: {
    top: 26,
    height: 11,
    width: 61,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleView: {
    top: 14,
    left: -3,
  },
  frameChild1: {
    top: 4,
    left: 0,
  },
  frameParent: {
    height: 39,
    width: 61,
  },
  item7: {
    marginLeft: 24,
  },
  theItems: {
    width: 358,
    paddingHorizontal: Padding.p_base_5,
    paddingVertical: 0,
  },
  newItems: {
    paddingHorizontal: Padding.p_12xs,
    marginTop: 11,
    paddingTop: Padding.p_8xs,
  },
  soldItems: {
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorsDefault,
    textAlign: "left",
    width: 303,
    height: 13,
  },
  istockphoto583851138612x612: {
    width: 70,
    height: 44,
    backgroundColor: Color.silver,
  },
  child: {
    width: 46,
    marginTop: 2,
  },
  view: {
    alignItems: "center",
    overflow: "hidden",
  },
  view1: {
    alignItems: "center",
  },
  parent: {
    width: 336,
    paddingVertical: Padding.p_8xs,
    backgroundColor: Color.primaryPureWhite,
    flexWrap: "wrap",
    flexDirection: "row",
    paddingHorizontal: Padding.p_12xs,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  newItems1: {
    paddingHorizontal: Padding.p_xs,
  },
  homepageitems: {
    paddingTop: Padding.p_xl,
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
  loadingS: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.grey,
    flex: 1,
    width: "100%",
    height: 800,
    alignItems: "center",
    overflow: "hidden",
  },
});

export default LoadingS;
