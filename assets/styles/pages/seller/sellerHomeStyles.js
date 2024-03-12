import { StyleSheet } from "react-native";
import { Padding, Color, FontSize, FontFamily } from "../../../../GlobalStyles";

export const sellerHomeStyles = StyleSheet.create({
  viewFlexBox: {
    alignItems: "center",
    overflow: "hidden",
  },
  newSpaceBlock: {
    marginTop: 11,
    paddingTop: Padding.p_8xs,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  requestsLayout: {
    height: 13,
    width: 303,
    textAlign: "left",
    color: Color.colorsDefault,
  },
  parentFlexBox: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  requests: {
    fontSize: FontSize.size_4xs,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
  },
  newItems: {
    paddingHorizontal: Padding.p_12xs,
  },
  soldItems: {
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
  },
  istockImage: {
    width: 70,
    height: 44,
  },
  rwf: {
    fontSize: FontSize.size_5xs,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "center",
    width: 49,
    height: 8,
    color: Color.colorsDefault,
  },
  view1: {
    marginLeft: 10,
  },
  parent: {
    backgroundColor: Color.primaryPureWhite,
    width: 336,
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_12xs,
  },
  newItemsInner: {
    marginTop: 5,
  },
  newItems1: {
    paddingHorizontal: Padding.p_xs,
  },
  homepageitems: {
    paddingTop: Padding.p_xl,
    overflow: "hidden",
  },
});
