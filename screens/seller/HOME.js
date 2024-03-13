import React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { sellerHomeStyles } from "../../assets/styles/pages/seller/sellerHomeStyles";
import { Image } from "expo-image";
import RequestsContainer from "../../components/pages/seller/home/RequestsContainer";
import SellerPageTemplate from "./Template";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const SellerHome = () => {
  const navigation = useNavigation();
  const ContainerSlideshow = () => {
    return (
      <View style={ContainerStyles.slideshow}>
        <View style={[ContainerStyles.slideshowChild, ContainerStyles.childLayout]} />
        <View style={ContainerStyles.frameParent}>
          <View style={ContainerStyles.groupWrapper}>
            <View style={[ContainerStyles.rectangleParent, ContainerStyles.groupItemPosition]}>
              <View style={[ContainerStyles.groupChild, ContainerStyles.childLayout]} />
              <View style={[ContainerStyles.rectangleParent, ContainerStyles.groupItemPosition]}>
                <Image style={[ContainerStyles.rectangleParent, ContainerStyles.groupItemPosition]}
                  contentFit="cover" source={require("../../assets/images/mask-group4.png")}
                />
                <View style={[ContainerStyles.groupItem, ContainerStyles.groupItemPosition]} />
                <Image style={ContainerStyles.groupInner} contentFit="cover"
                  source={require("../../assets/images/samples/transparent3.png")}
                />
                <View style={[ContainerStyles.ourServiceWrapper, ContainerStyles.ourPosition]}>
                  <Text style={[ContainerStyles.ourService, ContainerStyles.ourPosition]}>
                    E-WASTE MANAGEMENT RE-IMAGINED
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={ContainerStyles.groupContainer}>
            <View style={[ContainerStyles.rectangleParent, ContainerStyles.groupItemPosition]}>
              <View style={[ContainerStyles.groupChild, ContainerStyles.childLayout]} />
              <View style={[ContainerStyles.rectangleParent, ContainerStyles.groupItemPosition]}>
                <Image style={[ContainerStyles.rectangleParent, ContainerStyles.groupItemPosition]}
                  contentFit="cover" source={require("../../assets/images/mask-group5.png")}
                />
                <View style={[ContainerStyles.groupItem, ContainerStyles.groupItemPosition]} />
                <Image style={ContainerStyles.groupInner} contentFit="cover" 
                  source={require("../../assets/images/samples/transparent3.png")}
                />
                <View style={[ContainerStyles.ourServiceContainer, ContainerStyles.ourPosition]}>
                  <Text style={[ContainerStyles.ourService, ContainerStyles.ourPosition]}>
                    Turn Trash into Treasure: Buy, Sell, Recycle Electronic
                    Waste Today!
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
  const soldItems = ()=>{
    return(
      <View style={[sellerHomeStyles.parent, sellerHomeStyles.parentFlexBox]}>
        {[...Array(4)].map((_, index)=>(
          <React.Fragment key={index}>
            <View style={sellerHomeStyles.viewFlexBox}>
              <Image style={sellerHomeStyles.istockImage}
                contentFit="cover"
                source={require("../../assets/images/samples/crack_phone-2.png")}
              />
              <Text style={sellerHomeStyles.rwf}>20,000 rwf</Text>
            </View>
            <View style={[sellerHomeStyles.view1, sellerHomeStyles.viewFlexBox]}>
              <Image style={sellerHomeStyles.istockImage}
                contentFit="cover"
                source={require("../../assets/images/samples/crack_phone-2.png")}
              />
              <Text style={sellerHomeStyles.rwf}>20,000 rwf</Text>
            </View>
          </React.Fragment>
        ))}
      </View>
    )
  }
  return (
    <SellerPageTemplate page_name ='SellerHome'>
      <View style={sellerHomeStyles.homepageitems}>
        <ContainerSlideshow />
        <View style={[sellerHomeStyles.newItems, sellerHomeStyles.newSpaceBlock]}>
          <Text style={[sellerHomeStyles.requests, sellerHomeStyles.requestsLayout]}>
            REQUESTS
          </Text>
          <RequestsContainer
            onrequestPress={() => navigation.navigate("Item")}
          />
        </View>
        <View style={[sellerHomeStyles.newItems1, sellerHomeStyles.newSpaceBlock]}>
          <Text style={[sellerHomeStyles.soldItems, sellerHomeStyles.requestsLayout]}>
            SOLD ITEMS 
          </Text>
          <View style={[sellerHomeStyles.newItemsInner, sellerHomeStyles.parentFlexBox]}>
            {soldItems()}
          </View>
        </View>
      </View>
    </SellerPageTemplate>
  );
};


const ContainerStyles = StyleSheet.create({
  childLayout: {
    height: 16,
    width: 229,
    backgroundColor: Color.colorGray_400,
    top: 124,
    position: "absolute",
  },
  groupItemPosition: {
    left: 0,
    top: 0,
    position: "absolute",
    height: 140,
  },
  ourPosition: {
    height: 47,
    width: 131,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  slideshowChild: {
    left: 78,
  },
  groupChild: {
    left: 53,
  },
  rectangleParent: {
    width: 315,
  },
  groupItem: {
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_81xl,
    borderBottomRightRadius: Border.br_81xl,
    borderBottomLeftRadius: Border.br_3xs,
    backgroundColor: Color.colorSeagreen_200,
    width: 173,
  },
  groupInner: {
    top: 21,
    left: 26,
    width: 49,
    height: 54,
    position: "absolute",
  },
  ourService: {
    marginTop: -23.35,
    marginLeft: -65.5,
    fontSize: FontSize.size_2xs,
    lineHeight: 25,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.primaryPureWhite,
    textAlign: "left",
  },
  ourServiceWrapper: {
    marginTop: -26,
    marginLeft: -138.5,
  },
  groupWrapper: {
    width: 315,
    height: 140,
  },
  ourServiceContainer: {
    marginTop: -36,
    marginLeft: -142.5,
  },
  groupContainer: {
    marginLeft: 14,
    width: 315,
    height: 140,
  },
  frameParent: {
    left: 25,
    flexDirection: "row",
    top: 0,
    position: "absolute",
  },
  slideshow: {
    width: 359,
    height: 140,
  },
});
export default SellerHome;