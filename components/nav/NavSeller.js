import React, { useEffect, useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Border, Color, Padding, FontSize, FontFamily } from "../../GlobalStyles";
import { footerPages } from "../../page_links";
import homeunChosen from "../../assets/images/nav/buyer/vector20.png";
import uploadunChosen from "../../assets/images/nav/seller/vector23.png";
import myItemsunChosen from "../../assets/images/nav/seller/vector22.png";
import profileunChosen from "../../assets/images/nav/buyer/vector9.png";
import homeChosen from "../../assets/images/nav/buyer/vector7.png";
import uploadChosen from "../../assets/images/nav/seller/vector21.png";
import myItemsChosen from "../../assets/images/nav/seller/vector25.png";
import profileChosen from "../../assets/images/nav/buyer/vector24.png";

const NavSeller = ({ page_name, userType }) => {
  const footer_pages = footerPages?.[userType];
  const thePage = (theName) => {
    return footer_pages?.find(page => page?.name === theName)?.footerName;
  };
  const [currentPage, setPage] = useState(thePage(page_name));

  useEffect(() => {
    setPage(thePage(page_name));
  }, [page_name]); 

  const theIcons = {
    "HOME": { unchosen: homeunChosen, chosen: homeChosen },
    "SELL": { unchosen: uploadunChosen, chosen: uploadChosen },
    "MY ITEMS": { unchosen: myItemsunChosen, chosen: myItemsChosen },
    "PROFILE": { unchosen: profileunChosen, chosen: profileChosen},
  };

  const changePage = (theName) => {
    setPage(theName);
  };
  console.log('page_name: ', page_name)
  console.log('currentPage: ', currentPage)
  return (
    <View style={[navStyles.nav]}>
      {
        footer_pages?.map((page, index) => (
          <Pressable key={index} onPress={() => changePage(page?.footerName)}
            style={[
              navStyles.item, navStyles.iconFlexBox,
              page?.footerName === 'HOME' ? navStyles.firstChild : null,
              page?.footerName === currentPage ? navStyles.chosenItem : null
            ]}>
            {
              page?.footerName === currentPage ? (
                <React.Fragment>
                  <View style={[ChosenStyles.icon, navStyles.iconFlexBox]}>
                    <Image style={ChosenStyles.vectorIcon}
                      contentFit="cover"
                      source={theIcons[page?.footerName]?.chosen}
                    />
                  </View>
                  <Text style={ChosenStyles.text}> {page?.footerName}</Text>
                </React.Fragment>
              ) : (
                <View style={[unChosenStyles.icon, navStyles.iconFlexBox]}>
                  <Image style={unChosenStyles.vectorIcon}
                    contentFit="cover"
                    source={theIcons[page?.footerName]?.unchosen}
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
    width: "100%",
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: Padding.p_mini,
  },
  item: {
    flexDirection: "row",
    marginLeft: 33,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
  chosenItem: {
    backgroundColor: Color.primaryPureWhite,
  },
  firstChild: {
    marginLeft: 0,
  },
  iconFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
});

const ChosenStyles = StyleSheet.create({
  chosenPage: {
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
    backgroundColor: 'transparent',
  },
});

export default NavSeller;
