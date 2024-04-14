import * as React from "react";
import { Platform, StyleSheet, View } from "react-native";
import StatusBar1 from "../components/nav/StatusBar1";
import { Border, Color, Width } from "../GlobalStyles";
import { getUserTypeFromLocalStorage } from "../components/data/localStorage";

const FullPageTemplate = ({ status_bar, green_back, children, TheFooter, page_name, SecondFooter, SecondHeader}) => {
  const userType = getUserTypeFromLocalStorage();
  console.log('page_name: ', page_name)
  return (
    <View style={[styles.fullPage, page_name ==='Search'?styles.search: green_back ? styles.auth : styles.notAuth,
      page_name=== 'Cart'?styles.notScrollPagefullPage:null
    ]}>
      {(status_bar && Platform.OS !== 'ios') && <StatusBar1 />}
      {SecondHeader && (
        <View style={styles.SecondHeader}>
          {SecondHeader()}
        </View>
      )}
      <View style={[styles.thePage, (TheFooter && page_name !== 'menu') ? styles.withfooter : styles.withoutfooter,
        page_name=== 'Cart'?styles.notScrollPage:null
      ]}>
        {
          React.Children.map(children, (child) => {
            return React.cloneElement(child, { userType: userType });
          })
        }
      </View>
      {SecondFooter && (
        <View style={styles.SecondFooter}>
          {SecondFooter()}
        </View>
      )}
      {
        page_name!=='menu' && TheFooter && (
          <View style={styles.footer}>
            {TheFooter()}
          </View>
        )
      }
    </View>
  );
};

const styles = StyleSheet.create({
  fullPage: {
    flex: 1,
    width: "100%",
    height: 800,
    alignItems: "center",
    overflow: "hidden",
  },
  notScrollPagefullPage: {
    position:"relative",
  },
  auth: {
    paddingTop: 40,
    backgroundColor: Color.green,
  },
  notAuth: {
    backgroundColor: Color.grey,
  },
  search:{

  },
  thePage: {
    overflowY: "scroll",
    overflowX: 'hidden',
    width: '100%',
    maxWidth: Width.maxPageWidth,
    minWidth: Width.minPageWidth,
  },
  withoutfooter: {
    height: '100%',

  },
  withfooter: {
    height: 'calc(100% - 40px - 64px)',
  },
  SecondHeader:{
    height:50,
    width: '100%',
    minWidth: Width.minPageWidth,
    maxWidth: Width.maxPageWidth,
  },
  SecondFooter:{
    height:60,
    width: '100%',
    minWidth: 300,
    maxWidth: 360,
    position:"fixed",
    bottom:70,
    zIndex:1
  },
  notScrollPage:{
    overflow: "hidden",
    height: 'calc(100% - 40px - 64px - 50px)',
  },
  footer: {
    backgroundColor: Color.footerBackground,
    height: 64,
    width: '100%',
    minWidth: Width.minPageWidth,
    maxWidth: Width.maxPageWidth,
    borderTopLeftRadius: Border.br_6xl,
    borderTopRightRadius: Border.br_6xl,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    borderStyle: 'solid',
    borderColor: '#8d8a8a',
    borderTopWidth: 1,
  }
});

export default FullPageTemplate;