import { StyleSheet } from "react-native";
import { Color, FontSize, Border, FontFamily } from "../../GlobalStyles";

export const ProfileStyles = StyleSheet.create({
  titlePage:{
    width:"100%",
    elevation: 4,
    backgroundColor: Color.green,
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    paddingLeft: 5,
    paddingRight: 5,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
  },
  content:{
    paddingHorizontal:20,
    overflow: "hidden",
    width:'100%',
    alignItems: "center",
  },
  fluentnavFilledIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  fluentnaviFilledIcon: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  }
});


export const ProfilePageStyles = StyleSheet.create({
  topDetails:{
    marginTop:20,
    backgroundColor: Color.lightGrey,
    borderBottomColor: Color.primaryPureWhite,
    width: "100%",
    flexDirection: "row",
    height: 100,
    alignItems:"center",
    justifyContent:"center",
    padding:20
  },
  topDetailsLeft:{
    width: "25%",
    justifyContent:"center",
    height: "100%",
  },
  topDetailsImg: {
    width: 50,
    height: 50,
    borderRadius: "20%",
    borderWidth: 2, 
    borderColor: Color.primaryPureWhite,
    borderStyle: "solid", 
  },  
  topDetailsRight:{
    width: "75%",
    height: "100%",
    justifyContent:"center",
    alignItems:"center",
  },

  details: {
    width: "100%",
    marginTop: 10,
    overflow: "hidden",
    display: "grid", // Set display to grid
    gridTemplateColumns: "repeat(2, 1fr)", // Create two columns with equal width
    gap: 10, // Adjust the gap between grid items as needed
  },
  dataContainer: {
    textAlign: "left",
    color: Color.colorsDefault,
    fontSize: FontSize.size_smi,
    margin: "0", // Remove margin
  },
  
  
  name: {
    fontWeight: "900",
    fontFamily: FontFamily.interBlack,
  },
  text: {
    fontFamily: FontFamily.interRegular,
    width: "100%",
    marginTop:10
  },
});