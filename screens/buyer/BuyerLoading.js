import React, { useEffect } from "react";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { Image } from "expo-image";
import EwasteSlideshowContainer from "../../components/EwasteSlideshowContainer";
import { useNavigation } from "@react-navigation/native";
import { BuyerLoadingStyles } from "../../assets/styles/pages/buyer/BuyerLoadingStyles";
import { Color, Border } from "../GlobalStyles";

import BuyerPageTemplate from "./Template";
const BuyerLoading = () => {
  const navigation = useNavigation();
  useEffect(() => {
    console.log('waiting for timetimer')
    const timer = setTimeout(() => {
      navigation.navigate("BuyerHome");
      console.log('timer done')
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);
  const newItems =()=>{
    return(
      <React.Fragment>
        <View style={[BuyerLoadingStyles.heading, BuyerLoadingStyles.headingFlexBox]}>
          <View style={BuyerLoadingStyles.rectangleParent}>
            <View style={[BuyerLoadingStyles.frameChild, BuyerLoadingStyles.framePosition]} />
            <View style={[BuyerLoadingStyles.frameItem, BuyerLoadingStyles.framePosition]} />
          </View>
        </View>
        <View style={[BuyerLoadingStyles.theItems, BuyerLoadingStyles.headingFlexBox]}>
          {[...Array(4)].map((_, index) => (
            <React.Fragment key={index}>
              <View style={BuyerLoadingStyles.viewFlexBox}>
                <View style={BuyerLoadingStyles.mainQimg01b073ed640cf6946b11} />
                <View style={[BuyerLoadingStyles.frameParent, BuyerLoadingStyles.frameParentLayout]}>
                  <View style={[BuyerLoadingStyles.rectangleWrapper, BuyerLoadingStyles.frameParentLayout]}>
                    <View style={BuyerLoadingStyles.frameChild1} />
                  </View>
                  <View style={[BuyerLoadingStyles.frameChild2, BuyerLoadingStyles.frameChildLayout]} />
                  <View style={[BuyerLoadingStyles.frameChild3, BuyerLoadingStyles.frameChildLayout]} />
                </View>
              </View>
              <View style={[BuyerLoadingStyles.view1, BuyerLoadingStyles.viewFlexBox]}>
                <View style={BuyerLoadingStyles.mainQimg01b073ed640cf6946b11} />
                <View style={[BuyerLoadingStyles.frameParent, BuyerLoadingStyles.frameParentLayout]}>
                  <View style={[BuyerLoadingStyles.rectangleWrapper, BuyerLoadingStyles.frameParentLayout]}>
                    <View style={BuyerLoadingStyles.frameChild1} />
                  </View>
                  <View style={[BuyerLoadingStyles.frameChild2, BuyerLoadingStyles.frameChildLayout]} />
                  <View style={[BuyerLoadingStyles.frameChild3, BuyerLoadingStyles.frameChildLayout]} />
                </View>
              </View>
              <br/><br/><br/><br/>
            </React.Fragment>
          ))}
        </View>
      </React.Fragment>
    )
  }
  const theCategories = ()=>{
    return(
      <React.Fragment>
        <View style={[BuyerLoadingStyles.heading, BuyerLoadingStyles.headingFlexBox]}>
          <View style={BuyerLoadingStyles.rectangleParent}>
            <View style={[BuyerLoadingStyles.frameChild, BuyerLoadingStyles.framePosition]} />
            <View style={[BuyerLoadingStyles.frameItem, BuyerLoadingStyles.framePosition]} />
          </View>
        </View>
        <View style={BuyerLoadingStyles.categories1}>
          <View style={BuyerLoadingStyles.categories2}>
          {[...Array(5)].map((_, index) => (
              <TheItem key={index}
            />
          ))}
          </View>
        </View>
      </React.Fragment>
    )
  }
  const TheItem = () => {
    return (
      <View style={applianceStyles.TheItem}>
        <View style={applianceStyles.applianceContainer}>
          <Image style={applianceStyles.applianceImage} contentFit="cover"
            source={require("../../assets/images/samples/cat.png")}
          />
        </View>
        <View style={applianceStyles.TheItemChild}/>
      </View>
    );
  }
  return (
    <BuyerPageTemplate page_name ='Loading'>
      {/*search*/}
      <View style={[BuyerLoadingStyles.search, BuyerLoadingStyles.searchFlexBox]}>
          <View style={[BuyerLoadingStyles.searchProductNameParent, BuyerLoadingStyles.headingFlexBox]} >
            <Text style={BuyerLoadingStyles.searchProductName}>Search Product Name</Text>
            <Image style={BuyerLoadingStyles.searchButton} contentFit="cover"
              source={require("../../assets/images/icons/searchButton.png")}
            />
          </View>
          <Image style={BuyerLoadingStyles.menuicon} contentFit="cover"
            source={require("../../assets/images/icons/menuicon.png")}
          />
      </View>
      <View style={BuyerLoadingStyles.homepageitems}>
          {/*slideshow*/}
          <EwasteSlideshowContainer />
          <View style={[BuyerLoadingStyles.categories, BuyerLoadingStyles.newItemsSpaceBlock]}>
            {theCategories()}
          </View>
          {/*items*/}
          <View style={[BuyerLoadingStyles.newItems, BuyerLoadingStyles.newItemsSpaceBlock]}>
            {newItems()}
          </View>
      </View>
    </BuyerPageTemplate>
  );
};

const applianceStyles = StyleSheet.create({
  applianceImage: {
    width: 70,
    display: "none",
    height: 60,
  },
  applianceContainer: {
    backgroundColor: Color.silver,
    position: "absolute",
    top: 1,
    left: 10,
    borderRadius: Border.br_81xl,
    width: 60,
    height: 60,
    overflow: "hidden",
  },
  TheItemChild: {
    backgroundColor: Color.silver,
    position: "absolute",
    top: 64,
    left: 5,
    width: 72,
    height: 6,
  },
  TheItem: {
    borderRadius: Border.br_mini,
    width: 80,
    height: 76,
    overflow: "hidden",
  },
});

export default BuyerLoading;