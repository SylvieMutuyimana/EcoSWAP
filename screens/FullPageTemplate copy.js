import * as React from "react";
import { Platform, ScrollView, StyleSheet, View } from "react-native";
import StatusBar1 from "../components/nav/StatusBar1";
import { Border, Color, Width } from "../GlobalStyles";
import { getUserTypeFromLocalStorage } from "../components/data/localStorage";

const FullPageTemplate = ({ children, TheFooter, page_name, SecondFooter, SecondHeader, ThirdHeader}) => {
  const userType = getUserTypeFromLocalStorage();
  console.log('page_name: ', page_name)
  const SecondHeaderCont = ()=>{
    return(
      <>
      {SecondHeader && (
        <View style={[pageStyles.SecondHeader,page_name==='MyItems'||page_name==='Categories'||ThirdHeader?pageStyles.HeaderCat:null]}>
          {SecondHeader()}
          {ThirdHeader&& ThirdHeader()}
        </View>
      )}
      </>
    )
  }
  const WebContentPage = ()=>{
    return(
      <View style={[contentStyles.thePage, contentStyles.webPage,
        page_name==='MyItems'||page_name==='Categories'?contentStyles.catPage:null,
        ThirdHeader?contentStyles.withThirdHeader:null
      ]}>
        {
          React.Children.map(children, (child) => {
            return React.cloneElement(child, { userType: userType });
          })
        }
      </View>
    )
  }
  const IosContentPage = ()=>{
    return(
      <ScrollView vertical contentContainerStyle={[contentStyles.thePage, contentStyles.iosPage,
        page_name==='MyItems'||page_name==='Categories'?contentStyles.catPage:null,
        ThirdHeader?contentStyles.withThirdHeader:null
      ]}>
        {
          React.Children.map(children, (child) => {
            return React.cloneElement(child, { userType: userType });
          })
        }
      </ScrollView>
    )
  }
  return (
    <View style={[pageStyles.fullPage, 
      Platform.OS === 'ios' ? pageStyles.iosFullPage : pageStyles.webFullPage,
      
    ]}>
      { Platform.OS !== 'ios' && <StatusBar1 />}
      <SecondHeaderCont/>
      { Platform.OS === 'ios' ? <IosContentPage />: <WebContentPage />}

      {SecondFooter && (
        <View style={pageStyles.SecondFooter}>
          {SecondFooter()}
        </View>
      )}
      
      {
        page_name!=='menu' && TheFooter && (
          <View style={pageStyles.footer}>
            {TheFooter()}
          </View>
        )
      }
    </View>
  );
};

const height = {
  full_page : 800,
  footer: 80,
  secondFoooter: 50,
  SecondHeader:50,
  HeaderCat: 113,
  ThirdHeader: 300

}


const pageStyles = StyleSheet.create({
  fullPage: {
    flex: 1,
    overflow: "hidden",
    alignItems:'center',
    alignContent:'center'
  },
  iosFullPage:{
    width: "100%",
    height: "100%",
    paddingTop: 40,
  },
  webFullPage:{
    width: "100%",
    height: height.full_page,
  },
  withFooter:{
  },
  auth: {
    backgroundColor: Color.green,
  },
  notAuth: {
    backgroundColor: Color.grey,
  },

  SecondHeader:{
    height:height.SecondHeader,
    width: '100%',
    minWidth: Width.minPageWidth,
    maxWidth: Width.maxPageWidth,
    borderBottomWidth: 1,
    borderBottomColor: Color.green,
    marginBottom: 20,
  },

  HeaderCat:{
    height: height.HeaderCat,
  },
  SecondFooter:{
    height:height.secondFoooter,
    width: '100%',
    minWidth: 300,
    maxWidth: 360,
    position:"fixed",
    bottom:height.footer + 10,
    zIndex:1
  },

  footer: {
    backgroundColor: Color.footerBackground,
    height: height.footer,
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
    position: 'absolute',
    bottom:0
  }
});

const contentStyles = StyleSheet.create({
  thePage: {
    overflowY: "scroll",
    overflowX: 'hidden',
    width: '100%',
    height: 'calc(100% - 40px)',
    alignItems:'center',
    alignContent:'center',
  },
  iosPage:{
    overflowY: 'hidden',
    overflowX: 'hidden',
    paddingBottom: height.footer + 10,

  },
  webPage:{
    maxWidth: Width.maxPageWidth,
    minWidth: Width.minPageWidth,
    height: height.full_page,
    paddingBottom: 40,
  },
  catPage:{
    height: 'calc(100% - 40px - 113px)',
  },

  
  withThirdHeader:{
    height: 'calc(100% - 40px - 300px)',
  },
})

export default FullPageTemplate;
