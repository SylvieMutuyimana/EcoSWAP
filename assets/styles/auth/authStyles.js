import { StyleSheet } from "react-native";
import { Color, FontSize, FontFamily, Padding, Border  } from "../../../GlobalStyles";

export const authStyles = StyleSheet.create({
  formFlexBox: {
    alignItems: "center",
    overflow: "hidden",
  },
  detailsFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  signInLayout: {
    width: 264,
    textAlign: "center",
    color: Color.grey,
  },
  ecoSwap: {
    fontSize: FontSize.size_5xl,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    height: 35,
  },
  signIn: {
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    marginTop: 10,
  },
  form: {
    marginTop: 20,
  },
  details: {
    paddingTop: Padding.p_97xl,
    marginTop: 30,
  },
  register: {
    paddingTop: 0,
    marginTop: 0,
  },
  fieldHead:{
    marginTop:15, fontSize: 15
  },
  input: {
    width: 250, height: 40,
    paddingHorizontal: 10,
    shadowOpacity: 1,  elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorSilver,
    borderRadius: Border.br_8xs,
    fontSize: FontSize.size_base,
    fontStyle: "italic",
    fontFamily: FontFamily.interLight,
    color: 'white',
    textAlign: "left",
  },
  text: {
    height: "100%",
    width: "100%",
    fontSize: FontSize.size_3xl,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    color: Color.primaryPureWhite,
    textAlign: "center",

  },
  pressable: {
    position: "absolute",
    left: "0%",
    top: "0%",
  },
  back: {
    width: 55,
    height: 33,
  },
  cancel1: {
    fontSize: FontSize.size_base,
    fontWeight: "900",
    fontFamily: FontFamily.interBlack,
    color: Color.error,
    textAlign: "right",
    width: 59,
    height: 18,
  },
  cancel: {
    marginLeft: 210,
  },
  authHeader: {
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_12xs,
    paddingVertical: Padding.p_xs,
    marginTop:10
  },


  downFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  login1Typo: {
    textAlign: "center",
    fontSize: FontSize.size_base,
  },
  login1: {
    fontWeight: "900",
    fontFamily: FontFamily.interBlack,
    color: Color.primaryPureWhite,
    width: 132,
  },
  login: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorsDefault,
    width: 162,
    flexDirection: "row",
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: Padding.p_mini,
  },
  createAccount: {
    fontStyle: "italic",
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    color: Color.colorsDefault,
    marginTop: 15,
  },
  down: {
    marginTop: 43,
  },
  error:{
    color: Color.error,
    textAlign: 'center'
  },
  message:{
    color:Color.blue,
    textAlign: 'center'
  }
});