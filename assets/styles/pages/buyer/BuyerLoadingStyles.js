import { StyleSheet } from "react-native";
import { Padding, Color, Border, FontSize, FontFamily } from "../../../../GlobalStyles";






export const BuyerLoadingStyles = StyleSheet.create({
  search: {
    paddingLeft: Padding.item_p_h,
    paddingTop: Padding.item_p_h,
    paddingRight: Padding.p_12xs,
    alignItems: "center",
    justifyContent:"center",
    textAlign:"center"
  },
  searchFlexBox: {
    flexDirection: "row",
    overflow: "hidden",
  },
  searchContainer: {
    borderRadius: Border.br_8xs,
    width: 290,
    paddingHorizontal: Padding.p_mini,
    backgroundColor: Color.primaryPureWhite,
    paddingVertical: 0,
    flexDirection: "row",
    overflow: "hidden",
  },
  headingFlexBox: {
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
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
  searchButton: {
    width: 21,
    height: 25,
    marginLeft: 10,
    overflow: "hidden",
  },
  menuicon: {
    width: 44,
    height: 33,
    marginLeft: 10,
    overflow: "hidden",
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
    paddingVertical: Padding.item_p_v,
    paddingHorizontal: Padding.item_p_h,
    borderRadius: Border.item_br,
    justifyContent: "center",
    backgroundColor: Color.primaryPureWhite,
    flexDirection: "row",
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
  }
});
