import { StyleSheet } from "react-native";
import { Color, Border, Padding, FontSize, fontWeight, Width, item_size } from "../../../../GlobalStyles";


export const BuyerPageItemDetailsStyles = StyleSheet.create({
  itemContainer:{
    marginTop: 5,
    width: "100%",
    color: Color.colorsDefault,
  },

  header: {
    justifyContent: "center",
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    width:"100%",
  },
  back: {
    fontWeight: "800",
    textAlign: "left",
    color: Color.colorsDefault,
    fontSize: item_size.icon.back_fontsize
  }, 
  HeaderText: {
    fontSize: FontSize.headings.h2,
    fontWeight: "bold",
    width: "800%",
    textAlign: "center",
  },
  headerMenuIcon: {
    width: 4,
    height: 17,
    overflow: "hidden",
  },

  itemdetails: {
    width: "100%",
    alignItems: "center",
    overflow: "hidden",
    fontSize: FontSize.size_default,
    fontWeight: fontWeight.fontDefault,
    marginTop: 5,
  },
  theItem: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    overflow: "hidden",
  },
  imagesContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 360, 
    width: "100%",
    minWidth: Width.maxContWidth
  },
  imgItem: {
    width: "100%",
    height: "100%",
  },

  descriptionParent: {
    marginTop: 12,
    justifyContent: "center",
    overflow: "hidden",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  priceCont: {
    width:  "70%",
    textAlign: "left",
    fontSize: 18,
    fontWeight:"700",
  },
  WishListCont: {
    width:  "30%",
    justifyContent: "center",
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
  },
  WishListText: {
    width:  "80%",
    textAlign: "right",
    color: Color.colorMediumblue_100,
    fontStyle: "italic",
    marginRight:5,
    fontSize: 18,
    fontWeight:"700",
  },
  WishIcon: {
    height: 14,
    width: 12,
  },

  descriptionWrapper: {
    width: "100%",
    overflow: "hidden",
    textAlign: "left",
    fontSize:FontSize.size_default,
    fontWeight:fontWeight.fontDefault
  },

  detailsContainer: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "left",
    textAlign: "left",
    overflow: "hidden",
    width:"100%",

  },
  subscribeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    justifyContent: "left",
    overflow: "hidden",
    width:"100%",
    fontSize:FontSize.size_default,
    fontWeight:fontWeight.fontDefault
  },
  bidText: {
    fontStyle: "italic",
    textAlign: "left",
    fontSize:FontSize.size_default,
    fontWeight:fontWeight.fontDefault
  },
  inputCont: {
    backgroundColor: Color.colorWhitesmoke,
    marginLeft: 10,
    elevation: 4,
    padding: Padding.p_8xs,
    borderRadius: Border.br_8xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    fontSize:FontSize.size_default,
    fontWeight:fontWeight.fontDefault
  },
  priceInput: {
    width: 100,
    fontStyle: "italic",
    textAlign: "left",
    color: Color.colorsDefault,
    fontSize:FontSize.size_default,
    fontWeight:fontWeight.fontDefault
  },
  purchaseButton: {
    marginLeft: 10,
    width: "70",
    backgroundColor: Color.colorsDefault,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: Border.br_8xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    fontSize:FontSize.size_default,
    fontWeight:fontWeight.fontDefault,
    overflow: "hidden",
  },
  purchaseButtonText: {
    color: Color.primaryPureWhite,
    width: "100%",
    textAlign: "center",
  },

  moreContainer: {
    width: "100%",
    marginTop: 10,
    justifyContent: "left",
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
  },
  aboutText: {
    textAlign: "left",
    fontSize:FontSize.size_default,
    fontWeight:fontWeight.fontDefault
  },
  moreIcon: {
    width: 20,
    height: 10,
    marginLeft: 10
  }
});

