import { StyleSheet } from "react-native";
import { Color, FontSize, fontWeight } from "../../../../GlobalStyles";

export const typeItemPageStyles = StyleSheet.create({
  thepage: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    paddingVertical: 10,
    fontSize: FontSize.size_default,
    position: 'relative',
    backgroundColor:'red'
  },
  errorContainer: {
    position: 'absolute',
    width: 300,
    height: 150,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding:30,
    zIndex:1,
    borderRadius:10,
    top:420,
    fontSize:FontSize.fontDefault,
    borderWidth: 1,
    borderColor: Color.colorDarkgray
  },
  pagecontent: {
    height: "100%",
    alignItems: "center",
    width: "100%",
    backgroundColor:'green'
  },
  theitem: {
    alignItems: "center",
    backgroundColor:'indigo'
  },
  moredetails: {
    width: "100%",
    justifyContent: "center",
    marginTop: 15,
  },
  moredetailsRow: {
    width: "100%",
    height: "auto",
    textAlign: "left",
    color: Color.colorsDefault,
    fontWeight: fontWeight.fontDefault,
    fontStyle: "italic",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    marginTop: 10,
    fontSize:FontSize.size_default
  },
  seller: {
    marginTop: 0
  },
  heading: {
    fontStyle: "none",
    fontWeight:'bold'
  },
  button: {
    marginTop: 10,
    marginLeft: 0,
    width: 300
  },
  descriptionInput: {
    height: 50,
  },
  inputField:{
    textAlign:'left',
    width: "90%",
    margin:0,
    marginTop:10,
    marginLeft: 0
  },
  input:{
    textAlign:'left',
    width: "100%",
  }
});

