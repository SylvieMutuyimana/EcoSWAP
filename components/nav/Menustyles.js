import { StyleSheet } from "react-native";
import { Padding, Border, FontSize, FontFamily, Color } from "../../GlobalStyles";
export const Menustyles = StyleSheet.create({
  parentFlexBox: {
    padding: Padding.p_base,
    borderRadius: Border.br_xl,
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  cancelboldIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  rectangleIcon: {
    borderRadius: Border.br_31xl,
    width: 56,
    height: 56,
    marginLeft: 225,
  },
  cancelboldParent: {
    paddingHorizontal: Padding.p_12xs,
    paddingVertical: Padding.p_xs,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  home: {
    fontSize: FontSize.size_lg,
    lineHeight: 23,
    textTransform: "uppercase",
    fontFamily: FontFamily.interRegular,
    color: Color.primaryPureWhite,
    textAlign: "left",
    width: 158,
    height: 26,
  },
  vectorIcon: {
    width: 6,
    height: 12,
    marginLeft: 130,
  },
  frameParent: {
    marginTop: 10,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  details: {
    alignItems: "center",
    height:'100%',
    width:'100%',
    overflow: "hidden",
    backgroundColor: Color.green,
    minHeight: 900,
    minWidth: 420,
    position: 'absolute',
    zIndex: 1,
    paddingTop: 50
  },
});

