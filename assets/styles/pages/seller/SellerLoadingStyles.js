import { StyleSheet } from "react-native";
import { Padding, Color, Border, FontSize, FontFamily } from "../../../../GlobalStyles";

export const SellerLoadingStyles = StyleSheet.create({
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
    paddingVertical: Padding.item_p_v,
    paddingHorizontal: Padding.item_p_h,
    borderRadius: Border.item_br,
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
    widthheight: 68,
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
  item_right: {
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
});
