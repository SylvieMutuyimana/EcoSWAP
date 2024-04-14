import { StyleSheet } from "react-native";
import { Border, Color, FontSize, Padding } from "../../../../GlobalStyles";

export const UploaderContStyles = StyleSheet.create({
  uploadIcon: {
    width: 60,
    height: 60,
  },
  uploaderText: {
    fontSize: FontSize.size_base,
    fontStyle: "italic",
    color: Color.colorsDefault,
    textAlign: "left",
  },
  uploaderTextCont: {
    elevation: 4,
    marginLeft: 10,
    overflow: "hidden",
  },
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingBottom: Padding.item_p_h,
    overflow: "hidden",
    width: "100%",
  },
});

export const selluploadStyles = StyleSheet.create({
  container: {
    paddingBottom:110,
    paddingVertical:10,
    alignItems: "center",
    backgroundColor: "red",
  },
  details: {
    overflow: "hidden",
    width: "100%",
    alignItems: "center",
    paddingBottom:20,
  },
  theField:{
    width: "100%",
  },
  row:{
    width: "100%",
  },
  row1:{
    width: "100%",
    color:"black",
  },
  label:{
    fontSize: 17
  },
  button: {
    backgroundColor: Color.colorsDefault,
    width: 142,
    height: 50,
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    marginTop: 10,
    borderRadius: Border.br_8xs
  },
  buttonText: {
    fontWeight: "900",
    color: Color.primaryPureWhite,
    textAlign: "center",
    fontSize: FontSize.size_base,
  },
});

