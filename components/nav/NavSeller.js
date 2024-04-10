import React, { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Border, Color, Padding, FontSize, FontFamily } from "../../GlobalStyles";
import { footerPages } from "../../page_links";
import { useNavigation } from "@react-navigation/core";
import { theIcons } from "./navImages";

const NavSeller = ({ page_name, userType }) => {
  const footer_pages = footerPages?.[userType];
  const navigation = useNavigation()
  const thePage = (theName) => {
    return footer_pages?.find(page => page?.name === theName)?.footerName;
  };
  const [currentPage, setPage] = useState(thePage(page_name));
  const changePage = (theName) => {
    setPage(theName);
    navigation.navigate(footer_pages?.find(page => page?.footerName === theName)?.name)
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
    padding: Padding.item_p_h,
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
