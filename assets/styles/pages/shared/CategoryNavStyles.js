import { StyleSheet } from "react-native";
import { Color, Border } from "../../../../GlobalStyles";

export const CategoryNavStyles = StyleSheet.create({
  catContainer: {
    height: 113,
  },
  homeCat: {
    height: 113,
  },
  catCat: {
    height: 113,
  },
  circle: {
    borderRadius: Border.br_81xl,
    width: 60,
    height: 60,
    overflow: "hidden",
    backgroundColor: Color.orangeLighter,
  },
  text: {
    color: Color.colorsDefault,
    textAlign: "center",
    height: 13,
    marginTop: 1,
    width: '100%',
    fontSize: 11
  },
  chosentext: {
    fontWeight:'bold'
  },
  catItem: {
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    height: '100%',
    width: 82,
    overflow: "hidden",
  },
  catCatItem: {
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    height: '100%',
    width: 120,
    overflow: "hidden",
  },
  chosenItem: {
    backgroundColor:Color.silver
  },
});

