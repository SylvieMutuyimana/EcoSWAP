import { StyleSheet } from "react-native";
import { Color, FontSize, Border, Padding } from "../../../GlobalStyles";

export const styles = StyleSheet.create({
  searchWrapper: {
    height: 55,
    width: "100%",
    flexDirection: "row",
    alignItems: "center", // Align items vertically in the center
  },
  icon_left: {
    marginLeft: 20, // Adjust margin left instead of top and left
    width: 24,
    height: 24,
  },
  SearchContainer: {
    flex: 1, // Let it take remaining space
    fontWeight: "500",
    color: Color.colorsDefault,
    textAlign: "center",
    height: 50,
    borderRadius: Border.item_br,
    backgroundColor: Color.secondaryOffGrey,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_base,
    alignItems: "center",
  },
  input: {
    fontSize: FontSize.font_size,
    lineHeight: 18,
    fontWeight: "500",
    color: Color.secondaryHalfGrey,
    textAlign: "left",
    flex: 1, // Let it take remaining space
    marginLeft: 10, // Adjust margin left
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10, // Adjust margin right
    color: Color.secondaryHalfGrey,
  },
  searchButton: {
    width: 70,
    marginRight: 20, // Adjust margin right
  },
});


export const contStyles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: 'indigo',
  },
});

export const returnListStyles = StyleSheet.create({
  theItem: {
    height:80,
    flexDirection: "row",
    width: '93%',
    alignItems: "center",
    marginTop: 10,
    borderBottomColor: 'rgba(2, 1, 2, 0.5)', // Adjust alpha value as needed
    borderBottomWidth: 1,
  },
  firstItem: {
    marginTop: 0
  },
  leftside: {
    height:'90%',
    width:'30%'
  },
  img: {
    height:'100%',
    width:'100%'
  },
  rightside: {
    height:'90%',
    width:'60%',
    backgroundColor:'purple'
  },
  description: {
    width: "100%",
    height: 50,
    backgroundColor: 'orange',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    numberOfLines: 2,
  },
  seemore:{
    marginBottom:20,
    marginTop:10,
    padding:10,
    backgroundColor: Color.navCat,
    height:40,
    width: "70%",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
  },
  seemoreText:{
    textDecorationStyle: ["underline", "italic"],
  }
});

export const suggestionListStyles = StyleSheet.create({

});
