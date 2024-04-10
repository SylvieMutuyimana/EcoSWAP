import { StyleSheet } from "react-native";
import { Color, Border, Padding, FontFamily, FontSize } from "../../../../GlobalStyles";


export const ItemPagestyles = StyleSheet.create({
  pagecontent: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    alignItems: "center",
    width: "100%",
    overflow: "hidden",
  },
  thepage: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
  },
  item: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.grey,
    flex: 1,
    width: "100%",
    height: 800,
    alignItems: "center",
    overflow: "hidden",
  },
});


export const ItemPageContainerstyles = StyleSheet.create({
  itemContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    overflow: "hidden",
  },
  pagecontent: {
    height: "100%",
    alignItems: "center",
  },
  theitem: {
    backgroundColor: "red",
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.item_p_h,
    alignItems: "center",
    overflow: "hidden",
  },
  moredetails: {
    width: "100%",
    justifyContent: "center",
    marginTop: 15,
    overflow: "hidden",
  },
  moredetailsRow:{
    width: "100%",
    height: 13,
    textAlign: "left",
    color: Color.colorsDefault,
    fontWeight: "300",
    fontStyle: "italic",
    fontSize: FontSize.size_3xs,
    alignItems: "center",
    overflow: "hidden",
    marginTop: 10,
  },
  top: {
    marginTop: 0,
  },
});

