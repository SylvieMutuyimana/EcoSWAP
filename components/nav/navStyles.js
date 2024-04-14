import { StyleSheet } from "react-native";
import { Border, Color, Padding, FontSize, FontFamily } from "../../GlobalStyles";

export const navStyles = StyleSheet.create({
  nav: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: Padding.p_mini,
  },
  item: {
    flexDirection: "row",
    marginLeft: 33,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
  chosenItem: {
    backgroundColor: Color.primaryPureWhite,
  },
  firstChild: {
    marginLeft: 0,
  },
  iconFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
});

export const ChosenStyles = StyleSheet.create({
  chosenPage: {
    position: "unset",
    backgroundColor: Color.primaryPureWhite,
  },
  vectorIcon: {
    width: 14,
    height: 14,
  },
  icon: {
    backgroundColor: Color.colorsDefault,
    padding: Padding.item_p_h,
  },
  text: {
    fontSize: FontSize.size_4xs,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorsDefault,
    textAlign: "left",
    width: 63,
    height: 11,
    marginLeft: 2,
  },
});

export const unChosenStyles = StyleSheet.create({
  vectorIcon: {
    width: 22,
    height: 22,
  },
  icon: {
    padding: Padding.p_7xs,
    backgroundColor: 'transparent',
  },
});