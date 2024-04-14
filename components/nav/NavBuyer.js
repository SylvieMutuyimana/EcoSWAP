import React, { useState } from "react";
import { Image } from "expo-image";
import { View, Text, Pressable } from "react-native";
import { footerPages } from "../../page_links";
import { useNavigation } from "@react-navigation/core";
import { theIcons } from "./navImages";
import { navStyles, ChosenStyles, unChosenStyles } from "./navStyles";

const NavBuyer = ({ page_name, userType }) => {
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

export default NavBuyer;
