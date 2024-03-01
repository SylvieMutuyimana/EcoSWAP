import React, { useState, useCallback } from "react";
import { Text, StyleSheet, View, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import Menu1 from "../components/Menu1";
import Search from "./Search";
import GalleryContainer from "../components/GalleryContainer";
import CategoryContainer from "../components/CategoryContainer";
import NewItemsContainer from "../components/NewItemsContainer";
import TITLEPAGE from "../components/TITLEPAGE";
import HomeContainer from "../components/HomeContainer";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const HOME = () => {
  const [
    fluentnavigation16FilledIconVisible,
    setFluentnavigation16FilledIconVisible,
  ] = useState(false);
  const [frameContainerVisible, setFrameContainerVisible] = useState(false);

  const openFluentnavigation16FilledIcon = useCallback(() => {
    setFluentnavigation16FilledIconVisible(true);
  }, []);

  const closeFluentnavigation16FilledIcon = useCallback(() => {
    setFluentnavigation16FilledIconVisible(false);
  }, []);

  const openFrameContainer = useCallback(() => {
    setFrameContainerVisible(true);
  }, []);

  const closeFrameContainer = useCallback(() => {
    setFrameContainerVisible(false);
  }, []);

  return (
    <>
      <View style={styles.home}>
        <View style={[styles.frameParent, styles.frameLayout]}>
          <View style={[styles.frameWrapper, styles.frameLayout]}>
            <Pressable
              style={styles.guysimmmonsgmailcomParent}
              onPress={openFrameContainer}
            >
              <Text style={styles.guysimmmonsgmailcom}>
                Search Product Name
              </Text>
              <Image
                style={styles.regularsearchIcon}
                contentFit="cover"
                source={require("../assets/regularsearch.png")}
              />
            </Pressable>
          </View>
          <GalleryContainer />
          <CategoryContainer />
          <NewItemsContainer />
        </View>
        <TITLEPAGE
          pROFILE="HOME"
          icon={require("../assets/fluentnavigation16filled.png")}
          headerProfilePosition="absolute"
          headerProfileTop={0}
          headerProfileLeft={0}
          pROFILEColor="#000"
          fluentnavigation16FilledOverflow="unset"
          onFluentnavigation16FilledPress={openFluentnavigation16FilledIcon}
        />
        <HomeContainer />
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={fluentnavigation16FilledIconVisible}
      >
        <View style={styles.fluentnavigation16FilledIconOverlay}>
          <Pressable
            style={styles.fluentnavigation16FilledIconBg}
            onPress={closeFluentnavigation16FilledIcon}
          />
          <Menu1 onClose={closeFluentnavigation16FilledIcon} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={frameContainerVisible}>
        <View style={styles.frameContainerOverlay}>
          <Pressable
            style={styles.frameContainerBg}
            onPress={closeFrameContainer}
          />
          <Search onClose={closeFrameContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    width: 360,
    overflow: "hidden",
  },
  fluentnavigation16FilledIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  fluentnavigation16FilledIconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  frameContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  guysimmmonsgmailcom: {
    fontSize: FontSize.size_3xs,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: FontFamily.dMSansMedium,
    color: Color.colorGray_300,
    textAlign: "left",
    display: "flex",
    width: 139,
    alignItems: "center",
  },
  regularsearchIcon: {
    width: 14,
    height: 14,
    overflow: "hidden",
  },
  guysimmmonsgmailcomParent: {
    position: "absolute",
    height: "69.44%",
    marginLeft: -163,
    top: "16.67%",
    bottom: "13.89%",
    left: "50%",
    borderRadius: Border.br_8xs,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    width: 325,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_base,
    zIndex: 0,
    alignItems: "center",
  },
  frameWrapper: {
    height: 36,
  },
  frameParent: {
    height: 798,
    zIndex: 0,
  },
  home: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.grey,
    flex: 1,
    width: "100%",
    height: 916,
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_28xl,
    alignItems: "center",
    overflow: "hidden",
  },
});

export default HOME;
