import { StyleSheet } from "react-native";
import { Border, Color } from "../../../../GlobalStyles";

export const cartItemStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    borderRadius: Border.item_br,
    backgroundColor: Color.primaryPureWhite,
    height: 90, 
    overflow: "hidden",
    width: '100%'
  },
  leftSide: {
    width: "35%",
    justifyContent: "center",
    alignItems: "center",
  },
  rightSide: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  img: {
    width: "100%",
    height: "90%",
  },
  price: {
    fontWeight: "700",
    fontSize: 13,
    marginTop:5
  },
  description: {
    fontSize: 13,
    color: Color.colorsDefault,
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  options: {
    flexDirection: "row",
    alignItems: "center",
    fontWeight: "700",
    marginTop: 1, 
  },
  wish: {
    flexDirection: "row",
    fontWeight: "700",
    alignItems: "center",
    marginLeft: 10, 
  },
  optionText: {
    fontSize: 13,
    fontStyle: "italic",
    color: Color.colorMediumblue_200,
    marginRight: 15,
  },
  icon: {
    marginLeft: 5, 
  },
});
