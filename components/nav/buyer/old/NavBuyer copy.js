import React, { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Border, Color, Padding, FontSize, FontFamily } from "../../../../../GlobalStyles";
import { footerPages } from "../../../../../page_links";
import homeunChosen from "../../../../assets/images/nav/buyer/vector20.png";
import catunChosen from "../../../../assets/images/nav/buyer/group2.png";
import cartunChosen from "../../../../assets/images/nav/buyer/vector8.png";
import profileunChosen from "../../../../assets/images/nav/buyer/vector9.png";
import homeChosen from "../../../../assets/images/nav/buyer/vector7.png";
import catChosen from "../../../../assets/images/nav/buyer/group4.png";
import cartChosen from "../../../../assets/images/nav/buyer/vector27.png";
import profileChosen from "../../../../assets/images/nav/buyer/vector24.png";
import { useNavigation } from "@react-navigation/core";
import { FooterPages } from "../../../../../next/ECOSWAP_NEW/frontend/components/navigation/page_links";

const NavBuyer = ({page_name}) => {
  const userType = 'buyer';
  const navigation = useNavigation();
  const thePage = (theName) => {
    return footerPages[userType].find(page => page.name === theName).footerName;
  }
  const theIcons = {
    "HOME": {unchosen: homeunChosen, chosen: homeChosen },
    "CATEGORIES": {unchosen: catunChosen, chosen: catChosen },
    "CART": {unchosen: cartunChosen, chosen: cartChosen },
    "PROFILE": {unchosen: profileunChosen, chosen: profileChosen },
  }
  const footer_pages = footerPages[userType]
  const [currentPage, setPage] = useState(thePage(page_name))
  const changePage = (footerName, theName)=>{
    setPage(footerName)
    //navigation.navigate(userType?theName:'SessionTimeOut')
  }
  return (
    <View style={[navStyles.nav]}>
      {
        footer_pages && footer_pages.map((page, index) => (
          <Pressable key={index} onPress={() => changePage(page.footerName, page.name)} 
            style={[
              navStyles.item, navStyles.iconFlexBox, 
              page.footerName==='HOME'? navStyles.firstChild:null,
              page.footerName === currentPage ? navStyles.chosenItem:null
            ]}>
              { page.footerName === currentPage ? (         
                <React.Fragment>
                  <View style={[ChosenStyles.icon, navStyles.iconFlexBox]}>
                    <Image style={ChosenStyles.vectorIcon}
                      contentFit="cover"
                      source={theIcons[page.footerName]?.chosen}
                    />
                  </View>
                  <Text style={ChosenStyles.text}> {page.footerName}</Text>
                </React.Fragment>
              ) : (
                <View style={[unChosenStyles.icon, navStyles.iconFlexBox]}>
                  <Image style={unChosenStyles.vectorIcon}
                    contentFit="cover"
                    source={theIcons[page.footerName]?.unchosen}
                  />
                </View>
              )
            }
          </Pressable>
        ))
      }
    </View>
  );
};

const navStyles = StyleSheet.create({
  nav: {
    width:"100%",
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: Padding.p_mini,
  },
  item:{
    flexDirection: "row",
    marginLeft:33,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
  chosenItem:{
    backgroundColor: Color.primaryPureWhite,
  },
  firstChild:{
    marginLeft:0,
  },
  iconFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
});


const ChosenStyles = StyleSheet.create({
  chosenPage:{
    position: "unset",
    backgroundColor: Color.primaryPureWhite,
  },
  vectorIcon: {
    width: 14,
    height: 14,
  },
  icon: {
    backgroundColor: Color.colorsDefault,
    padding: Padding.p_3xs,
  },
  text: {
    fontSize: FontSize.size_4xs,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorsDefault,
    textAlign: "left",
    width: 63,
    height: 11,
    marginLeft: 2,
  },
});

const unChosenStyles = StyleSheet.create({
  vectorIcon: {
    width: 22,
    height: 22,
  },
  icon: {
    padding: Padding.p_7xs,
    backgroundColor:'transparent'
  },
});

export default NavBuyer;
