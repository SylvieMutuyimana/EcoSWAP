import { StyleSheet } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../../../GlobalStyles";

export const StarterPageStyles = StyleSheet.create({
  thePage: {
    flex: 1,
    width: 360,
    height: 800,
    overflow: "hidden",
  },
  pageData: {
    width: "100%",
    height:"100%",
    alignItems: "center",
  },
  rectangle: {
    height: 140, width: 286,
    paddingVertical: 40,
    borderRadius: Border.br_6xl,
    backgroundColor: "#D2BD9699",
    marginTop:180
  },
  Text: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.alfaSlabOneRegular,
    color: Color.colorsDefault,
    textAlign: "center",
  },
  buttonContainer: {
    width: 260,
    height: 60,
    borderRadius: 20,
    alignItems:"center",
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginTop:280
  },
  page1Button:{
    backgroundColor: "#063e2a"
  },
  page2Button:{
    backgroundColor: "#3669c9"
  },
  buttonText: {
    fontSize: FontSize.font_size,
    fontWeight: "500",
    fontFamily: FontFamily.font,
    color: Color.primaryPureWhite,
    textAlign: "center",
  },

});