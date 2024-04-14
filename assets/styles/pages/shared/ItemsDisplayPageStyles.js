import { StyleSheet } from "react-native";
import { Color, FontSize, item_size } from "../../../../GlobalStyles";

export const ItemsDisplayPageStyles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: Color.green,
    justifyContent:"center",
    alignContent:"center",
    textAlign:"center",
    width: "100%",
    marginBottom:20,
    height:50
  },
  backiconCont:{
    width: "5%",
  },
  backicon:{
    fontSize: item_size.icon.back_fontsize
  },
  headerTitle: {
    fontSize: FontSize.headings.h2,
    fontWeight: "bold",
    width: "95%",
    textAlign:"center",
  },
  pageContent: {
    flex: 1,
    width: "100%",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: Color.colorDarkgray,
    width: "100%",
    backgroundColor:Color.colorWhitesmoke,
    marginTop:10
  },
  image: {
    width: 150, 
    height: 80,
    borderRadius: 8,
  },
  itemDetails: {
    flex: 1, 
    marginLeft: 10,
  },
  name: {
    fontSize: FontSize.size_default,
    fontWeight: "bold",
    marginBottom: 5,
  },
  price: {
    fontSize: FontSize.size_default,
    color: "#666666",
  },
});

export const ThirdHeaderStyles = StyleSheet.create({
  container:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 30,
    marginTop: 10,
  },
  item:{
    height: '100%',
    paddingHorizontal:9
  },
  chosenItem:{
    borderBottomColor: Color.brightOrange,
    borderBottomWidth: 1
  },
  itemText:{
    fontSize: 16,
  },
  chosenItemText:{
  }
})
