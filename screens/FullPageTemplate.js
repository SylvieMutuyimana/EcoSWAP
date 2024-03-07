import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import StatusBar1 from "../components/nav/StatusBar1";
import { Border, Color, Width } from "../GlobalStyles";
import { getUserTypeFromLocalStorage } from "../components/data/localStorage";

const FullPageTemplate = ({ status_bar, green_back, children, TheFooter, the_page}) => {
  const userType = getUserTypeFromLocalStorage();
  console.log('the_page: ', the_page)
  return (
    <View style={[styles.fullPage, green_back ? styles.auth : styles.notAuth]}>
      {status_bar && <StatusBar1 />}
      <View style={[styles.thePage, (TheFooter && the_page !== 'menu') ? styles.withfooter : styles.withoutfooter]}>
        {
          React.Children.map(children, (child) => {
            return React.cloneElement(child, { userType: userType });
          })
        }
      </View>
      {
        the_page!=='menu' && TheFooter && (
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
  auth: {
    backgroundColor: Color.green,
  },
  notAuth: {
    backgroundColor: Color.grey,
  },
  thePage: {
    width: 360,
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
