import { StyleSheet } from "react-native";
import { Color, FontSize, Width } from "../../../../GlobalStyles";

export const CategoryPageStyles = StyleSheet.create({
  search: {
    margin: 0,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchContainer: {
    paddingHorizontal: 5,
    backgroundColor: "white",
    paddingVertical: 0,
    overflow: "hidden",
    width: 210,
    marginLeft: 10,


    flex: 1, // Let it take remaining space
    fontWeight: "500",
    color: "red",
    textAlign: "center",
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  catSearch:{
    width:130+210,
  },
  listedItems: {
    width: 130,
    height: 50,
    margin: 0,
  },
  searchProductName: {
    fontStyle: "italic",
    textAlign: "left",
    flex: 1,
    height: 17,
    fontSize: FontSize.font_size,
    lineHeight: 18,
    padding:3,
    fontWeight: "500",
    color: "black",
  },
  searchButton: {
    width: 25,
    height: 25,
    resizeMode: "cover", 
    marginLeft: 10
  },
  nav:{
    backgroundColor: Color.navCat,
    width: "100%",
    maxWidth: Width.maxPageWidth,
    height: 113,
  },
  content: {
    paddingVertical: 0,
    alignItems: "center",
    overflow: "hidden",
    marginTop: 10,
    width: "100%",
    maxWidth: Width.maxContWidth,
  },
  headText: {
    width: "90%",
    fontSize: 12,
    fontWeight: "600",
    color: Color.colorsDefault,
    textAlign: "left",
  },
  theitems: {
    marginTop: 5,
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
  }
});
