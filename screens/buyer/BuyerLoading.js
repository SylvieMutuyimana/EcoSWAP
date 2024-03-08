import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { Image } from "expo-image";
import EwasteSlideshowContainer from "../../components/EwasteSlideshowContainer";
import ApplianceExample from "../../components/ApplianceExample";
import NavHome from "../../components/nav/buyer/old/NavHome";
import { useNavigation } from "@react-navigation/native";
import { LoadingStyles } from "../../assets/styles/pages/buyer/BuyerLoadingStyles";
import BuyerPageTemplate from "./Template";
import { getUserTypeFromLocalStorage } from "../../components/data/localStorage";
const BuyerLoading = () => {
  const navigation = useNavigation();
  const userType = "buyer"
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
        <View style={[LoadingStyles.heading, LoadingStyles.headingFlexBox]}>
          <View style={LoadingStyles.rectangleParent}>
            <View style={[LoadingStyles.frameChild, LoadingStyles.framePosition]} />
            <View style={[LoadingStyles.frameItem, LoadingStyles.framePosition]} />
          </View>
        </View>
        <View style={[LoadingStyles.theItems, LoadingStyles.headingFlexBox]}>
          {[...Array(4)].map((_, index) => (
            <React.Fragment key={index}>
              <View style={LoadingStyles.viewFlexBox}>
                <View style={LoadingStyles.mainQimg01b073ed640cf6946b11} />
                <View style={[LoadingStyles.frameParent, LoadingStyles.frameParentLayout]}>
                  <View style={[LoadingStyles.rectangleWrapper, LoadingStyles.frameParentLayout]}>
                    <View style={LoadingStyles.frameChild1} />
                  </View>
                  <View style={[LoadingStyles.frameChild2, LoadingStyles.frameChildLayout]} />
                  <View style={[LoadingStyles.frameChild3, LoadingStyles.frameChildLayout]} />
                </View>
              </View>
              <View style={[LoadingStyles.view1, LoadingStyles.viewFlexBox]}>
                <View style={LoadingStyles.mainQimg01b073ed640cf6946b11} />
                <View style={[LoadingStyles.frameParent, LoadingStyles.frameParentLayout]}>
                  <View style={[LoadingStyles.rectangleWrapper, LoadingStyles.frameParentLayout]}>
                    <View style={LoadingStyles.frameChild1} />
                  </View>
                  <View style={[LoadingStyles.frameChild2, LoadingStyles.frameChildLayout]} />
                  <View style={[LoadingStyles.frameChild3, LoadingStyles.frameChildLayout]} />
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
        <View style={[LoadingStyles.heading, LoadingStyles.headingFlexBox]}>
          <View style={LoadingStyles.rectangleParent}>
            <View style={[LoadingStyles.frameChild, LoadingStyles.framePosition]} />
            <View style={[LoadingStyles.frameItem, LoadingStyles.framePosition]} />
          </View>
        </View>
        <View style={LoadingStyles.categories1}>
          <View style={LoadingStyles.categories2}>
          {[...Array(5)].map((_, index) => (
              <ApplianceExample key={index}
              homeAppliancesYoullLoveAn={require("../../assets/images/cat.png")}
            />
            ))}
          </View>
        </View>
      </React.Fragment>
    )
  }
  const theFooter = ()=>{
    return(
      <NavHome
        navHomePosition="unset"
        navHomeBorderStyle="solid"
        navHomeBorderColor="#8d8a8a"
        navHomeBorderTopWidth={1}
      />
    )
  }
  return (
    <BuyerPageTemplate specificFooter={theFooter} page_name ='Loading'>
      {/*search*/}
      <View style={[LoadingStyles.search, LoadingStyles.searchFlexBox]}>
          <View style={[LoadingStyles.searchProductNameParent, LoadingStyles.headingFlexBox]} >
            <Text style={LoadingStyles.searchProductName}>Search Product Name</Text>
            <Image style={LoadingStyles.searchButton} contentFit="cover"
              source={require("../../assets/images/app/searchButton.png")}
            />
          </View>
          <Image style={LoadingStyles.menuicon} contentFit="cover"
            source={require("../../assets/menuicon.png")}
          />
      </View>
      <View style={LoadingStyles.homepageitems}>
          {/*slideshow*/}
          <EwasteSlideshowContainer />
          <View style={[LoadingStyles.categories, LoadingStyles.newItemsSpaceBlock]}>
            {theCategories()}
          </View>
          {/*items*/}
          <View style={[LoadingStyles.newItems, LoadingStyles.newItemsSpaceBlock]}>
            {newItems()}
          </View>
      </View>
    </BuyerPageTemplate>
  );
};

export default BuyerLoading;