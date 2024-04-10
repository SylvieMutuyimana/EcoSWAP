import { StyleSheet } from "react-native";
import { Color } from "../../../../GlobalStyles";

export const cartItemsStyles = StyleSheet.create({
  itemsContainer:{
    width:'100%',
    marginTop:10
  },
  itemContainer:{
    width:'100%',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "left",
  },
  selectIconCont:{
    width:'5%',
  },
  selectIcon:{
    width:20,
    height:20,
    backgroundColor:'white',
    borderRadius:'50%',
    alignItems: "center",
    justifyContent: "center",
  },
  clickedIcon:{
    backgroundColor:Color.green,
    width:10,
    height:10,
    borderRadius:'50%',
  },
  theItem:{
    width:'94%',
    marginLeft:'1%',
  },
  not_first_item:{
    marginTop: 10,
  },
});
