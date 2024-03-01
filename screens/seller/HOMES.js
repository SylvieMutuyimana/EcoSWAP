import React, { useState, useCallback } from "react";
import { Text, StyleSheet, View, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import Menu1 from "../../components/Menu1";
import { useNavigation } from "@react-navigation/native";
import ProductSearchContainer from "../../components/ProductSearchContainer";
import EwasteManagementContainer from "../../components/EwasteManagementContainer";
import CategoryContainerPhonesTablets from "../../components/CategoryContainerPhonesTablets";
import ItemContainer from "../../components/ItemContainer";
import NavHome from "../../components/NavHome";
import { Padding, Color, FontFamily, FontSize, Border } from "../../GlobalStyles";

const HOMES = () => {
  const [menuiconVisible, setMenuiconVisible] = useState(false);
  const navigation = useNavigation();

  const openMenuicon = useCallback(() => {
    setMenuiconVisible(true);
  }, []);

  const closeMenuicon = useCallback(() => {
    setMenuiconVisible(false);
  }, []);

  return (
    <>
      <View style={styles.home}>
        <View style={styles.thepage}>
          <View style={[styles.pagecontent, styles.pagecontentPosition]}>
            <ProductSearchContainer onMenuiconPress={openMenuicon} />
            <View style={styles.homepageitems}>
              <View style={styles.slideshow}>
                <View style={styles.slideshowChild} />
                <View style={[styles.frameParent, styles.pagecontentPosition]}>
                  <EwasteManagementContainer
                    eWasteDimensions={require("../../assets/frame1625.png")}
                    eWasteDescription="E-WASTE MANAGEMENT RE-IMAGINED"
                  />
                  <EwasteManagementContainer
                    eWasteDimensions={require("../../assets/frame1626.png")}
                    eWasteDescription="Turn Trash into Treasure: Buy, Sell, Recycle Electronic Waste Today!"
                    propMarginLeft={14}
                    propBackgroundColor="rgba(54, 105, 201, 0.8)"
                    propHeight={72}
                  />
                </View>
              </View>
              <View style={[styles.categories, styles.newItemsSpaceBlock]}>
                <View style={[styles.heading, styles.headingFlexBox]}>
                  <View
                    style={[styles.categoriesParent, styles.headingFlexBox]}
                  >
                    <Text style={styles.categories1}>CATEGORIES</Text>
                    <Pressable
                      style={styles.seeAll}
                      onPress={() => navigation.navigate("CATEGORIES1")}
                    >
                      <Text style={styles.seeTypo}>See All</Text>
                    </Pressable>
                  </View>
                </View>
                <View style={styles.categories2}>
                  <CategoryContainerPhonesTablets
                    dimensionId={require("../../assets/images/cat1.png")}
                    dimensionCode={require("../../assets/images/cat1.png")}
                    dimensionIdentifier={require("../../assets/images/cat1.png")}
                    dimensionCodeText={require("../../assets/images/cat1.png")}
                    dimensionCodeValue={require("../../assets/images/cat1.png")}
                    propOverflow="unset"
                    propMarginTop="unset"
                    propPosition="absolute"
                    propTop={0}
                    propLeft={0}
                    onHomeAppliancesPress={() =>
                      navigation.navigate("CATEGORIES1")
                    }
                  />
                </View>
              </View>
              <View style={[styles.newItems, styles.newItemsSpaceBlock]}>
                <View style={[styles.heading, styles.headingFlexBox]}>
                  <View
                    style={[styles.categoriesParent, styles.headingFlexBox]}
                  >
                    <Text style={styles.categories1}>NEW ITEMS</Text>
                    <Text style={[styles.seeAll2, styles.seeTypo]}>
                      See All
                    </Text>
                  </View>
                </View>
                <ItemContainer
                  onItem1Press={() => navigation.navigate("Item2")}
                  onItem2Press={() => navigation.navigate("Item2")}
                  onItem3Press={() => navigation.navigate("Item2")}
                  onItem4Press={() => navigation.navigate("Item2")}
                  onItem5Press={() => navigation.navigate("Item2")}
                  onItem6Press={() => navigation.navigate("Item2")}
                  onItem11Press={() => navigation.navigate("Item2")}
                  onItem12Press={() => navigation.navigate("Item2")}
                />
              </View>
            </View>
          </View>
        </View>
        <NavHome
          navHomePosition="unset"
          navHomeBorderStyle="solid"
          navHomeBorderColor="#8d8a8a"
          navHomeBorderTopWidth={1}
          onCATEGORYPress={() => navigation.navigate("CATEGORIES1")}
          onCARTPress={() => navigation.navigate("CART")}
          onPROFILEPress={() => navigation.navigate("PROFILE")}
        />
      </View>

      <Modal animationType="fade" transparent visible={menuiconVisible}>
        <View style={styles.menuiconOverlay}>
          <Pressable style={styles.menuiconBg} onPress={closeMenuicon} />
          <Menu1 onClose={closeMenuicon} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  pagecontentPosition: {
    top: 0,
    position: "absolute",
  },
  newItemsSpaceBlock: {
    marginTop: 11,
    paddingTop: Padding.p_8xs,
    paddingHorizontal: Padding.p_12xs,
    justifyContent: "center",
    overflow: "hidden",
  },
  headingFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  seeTypo: {
    height: 12,
    width: 39,
    color: Color.blue,
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  menuiconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  menuiconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  slideshowChild: {
    top: 124,
    left: 78,
    backgroundColor: Color.colorGray_400,
    width: 229,
    height: 16,
    position: "absolute",
  },
  frameParent: {
    left: 25,
    flexDirection: "row",
  },
  slideshow: {
    width: 359,
    height: 140,
  },
  categories1: {
    fontSize: FontSize.size_3xs,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorsDefault,
    textAlign: "left",
  },
  seeAll: {
    marginLeft: 230,
  },
  categoriesParent: {
    width: 343,
    flexDirection: "row",
  },
  heading: {
    height: 18,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: 0,
  },
  categories2: {
    height: 76,
    marginTop: 5,
    width: 360,
  },
  categories: {
    width: 360,
  },
  seeAll2: {
    marginLeft: 230,
  },
  newItems: {
    alignItems: "center",
  },
  homepageitems: {
    marginTop: 10,
    overflow: "hidden",
  },
  pagecontent: {
    left: 0,
    height: 676,
    width: 360,
    alignItems: "center",
    overflow: "hidden",
  },
  thepage: {
    height: 696,
    width: 360,
  },
  home: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.grey,
    flex: 1,
    width: "100%",
    height: 800,
    alignItems: "center",
    overflow: "hidden",
  },
});

export default HOMES;
