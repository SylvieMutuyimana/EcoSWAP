import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import EwasteSlideshowContainer from "../../components/EwasteSlideshowContainer";
import SellerPageTemplate from "./Template";
import { SellerLoadingStyles } from "../../assets/styles/pages/seller/SellerLoadingStyles";

const SellerLoading = () => {
  const navigation = useNavigation();
  useEffect(() => {
    console.log('waiting for timetimer')
    const timer = setTimeout(() => {
      navigation.navigate("SellerHome");
      console.log('timer done')
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);
  const soldItems = ()=>{
    return(
      <View style={SellerLoadingStyles.itemsFlexBox}>
        <View style={SellerLoadingStyles.parent}>
          {[...Array(4)].map((_, index) => (
            <React.Fragment key={index}>
              <View style={SellerLoadingStyles.view}>
                <View style={SellerLoadingStyles.istockphoto583851138612x612} />
                <View style={[SellerLoadingStyles.child, SellerLoadingStyles.childLayout]} />
              </View>
              <View style={[SellerLoadingStyles.view1, SellerLoadingStyles.view1SpaceBlock]}>
                <View style={SellerLoadingStyles.istockphoto583851138612x612} />
                <View style={[SellerLoadingStyles.child, SellerLoadingStyles.childLayout]} />
              </View>
            </React.Fragment>
          ))}
        </View>
      </View>
    )
  }
const requests = ()=>{
  return(
    <View style={[SellerLoadingStyles.theItems, SellerLoadingStyles.itemsFlexBox]}>
      {[...Array(8)].map((_, index)=>(
        <React.Fragment key={index}>
          <View style={[(index % 2 === 0)?SellerLoadingStyles.item_right: null, SellerLoadingStyles.itemFlexBox]}>
            <View style={SellerLoadingStyles.mainQimg01b073ed640cf6946b11} />
            <View style={[SellerLoadingStyles.frameParent, SellerLoadingStyles.view1SpaceBlock]}>
              <View style={SellerLoadingStyles.rectangleWrapper}>
                <View style={[SellerLoadingStyles.frameInner, SellerLoadingStyles.childLayout]} />
              </View>
              <View
                style={[SellerLoadingStyles.rectangleView, SellerLoadingStyles.frameChild1Layout]}
              />
              <View
                style={[SellerLoadingStyles.frameChild1, SellerLoadingStyles.frameChild1Layout]}
              />
            </View>
          </View>
        </React.Fragment>
      ))}
    </View>
  )
}
  return (
    <SellerPageTemplate page_name ='Loading'>
      <View style={SellerLoadingStyles.homepageitems}>
        <EwasteSlideshowContainer />
        <View style={[SellerLoadingStyles.newItems, SellerLoadingStyles.newSpaceBlock]}>
          <View style={SellerLoadingStyles.heading}>
            <View style={SellerLoadingStyles.rectangleParent}>
              <View style={[SellerLoadingStyles.frameChild, SellerLoadingStyles.framePosition]} />
              <View style={[SellerLoadingStyles.frameItem, SellerLoadingStyles.framePosition]} />
            </View>
          </View>
          <>{requests()}</>
        </View>
        <View style={[SellerLoadingStyles.newItems1, SellerLoadingStyles.newSpaceBlock]}>
          <Text style={SellerLoadingStyles.soldItems}>{`SOLD ITEMS -->`}</Text>
          <>{soldItems()}</>
        </View>
      </View>
    </SellerPageTemplate>
  );
};

export default SellerLoading;
