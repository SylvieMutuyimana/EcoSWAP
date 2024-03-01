import { StyleSheet, Text, View, Pressable, Modal } from "react-native";
import { Color, Padding, Border, FontFamily, FontSize } from "../../GlobalStyles";

export const WelcomeStyles = StyleSheet.create({
  wasteFlexBox: {
    textAlign: "center",
    color: Color.primaryPureWhite,
  },
  aboutSpaceBlock: {
    marginTop: 30,
    width: 309,
    alignItems: "center",
    overflow: "hidden",
  },
  buyFlexBox: {
    paddingVertical: Padding.p_mini,
    paddingHorizontal: Padding.p_11xl,
    flexDirection: "row",
    width: 162,
    backgroundColor: Color.colorsDefault,
    borderRadius: Border.br_8xs,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  electronicRecycling1Icon: {
    borderRadius: Border.br_21xl,
    width: 57,
    height: 59,
  },
  eWasteManagement: {
    fontFamily: FontFamily.interRegular,
    marginTop: 11,
    fontSize: FontSize.size_xs,
    color: Color.primaryPureWhite,
  },
  title: {
    justifyContent: "center",
    width: 309,
    alignItems: "center",
    overflow: "hidden",
  },
  aboutChild: {
    width: 160,
    height: 80,
    borderRadius: Border.br_8xs,
    overflow: "hidden",
  },
  readMoreTextOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  readMoreTextBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  readMore1: {
    fontStyle: "italic",
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    width: 226,
    height: 18,
    fontSize: FontSize.size_xs,
    color: Color.primaryPureWhite,
  },
  readMore: {
    marginTop: 6,
  },
  about: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xs,
  },
  sellEWaste: {
    fontSize: FontSize.size_base,
    fontWeight: "900",
    fontFamily: FontFamily.interBlack,
    width: 132,
  },
  buy: {
    marginTop: 25,
  },
  userNav: {
    paddingHorizontal: Padding.p_41xl,
    paddingTop: Padding.p_26xl,
  },
});

