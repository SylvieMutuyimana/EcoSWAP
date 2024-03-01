import React, { useState, useCallback } from "react";
import { Text, StyleSheet, View, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import Menu1 from "../../components/Menu1";
import { useNavigation } from "@react-navigation/native";
import TITLEPAGE from "../../components/TITLEPAGE";
import NavPROFILE from "../../components/NavPROFILE";
import { Color, FontSize, Border, Padding, FontFamily } from "../../GlobalStyles";

const PROFILE = () => {
  const [
    fluentnavigation16FilledIconVisible,
    setFluentnavigation16FilledIconVisible,
  ] = useState(false);
  const navigation = useNavigation();

  const openFluentnavigation16FilledIcon = useCallback(() => {
    setFluentnavigation16FilledIconVisible(true);
  }, []);

  const closeFluentnavigation16FilledIcon = useCallback(() => {
    setFluentnavigation16FilledIconVisible(false);
  }, []);

  return (
    <>
      <View style={styles.profile}>
        <View style={styles.thepage}>
          <View style={styles.pagecontent}>
            <TITLEPAGE
              pROFILE="PROFILE"
              icon={require("../../assets/fluentnavigation16filled1.png")}
              headerProfilePosition="unset"
              headerProfileBorderBottomRightRadius={15}
              headerProfileBorderBottomLeftRadius={15}
              headerProfileTop="unset"
              headerProfileLeft="unset"
              pROFILEColor="#d9d9d9"
              fluentnavigation16FilledOverflow="unset"
              onFluentnavigation16FilledPress={openFluentnavigation16FilledIcon}
            />
            <View style={[styles.image, styles.imageSpaceBlock]}>
              <Image
                style={styles.imageChild}
                contentFit="cover"
                source={require("../../assets/frame-1644.png")}
              />
            </View>
            <View style={[styles.details, styles.imageSpaceBlock]}>
              <Text
                style={[
                  styles.nameMunezaLionelContainer,
                  styles.munezaContainerTypo,
                ]}
              >
                <Text style={styles.name}>{`Name:
`}</Text>
                <Text style={styles.munezaLionel}>Muneza Lionel</Text>
              </Text>
              <Text
                style={[
                  styles.accountTypeRegularContainer,
                  styles.munezaContainerTypo,
                ]}
              >
                <Text style={styles.name}>{`Account type:
`}</Text>
                <Text style={styles.munezaLionel}>{`Regular
`}</Text>
              </Text>
              <Text
                style={[styles.usernameLMuneza, styles.munezaContainerTypo]}
              >
                <Text style={styles.name}>{`Username:
`}</Text>
                <Text style={styles.munezaLionel}>l_muneza</Text>
              </Text>
            </View>
          </View>
        </View>
        <NavPROFILE
          navProfilePosition="unset"
          onHOMEPress={() => navigation.navigate("HOMES")}
          onCATEGORYPress={() => navigation.navigate("CATEGORIES1")}
          onCARTPress={() => navigation.navigate("CART")}
          onPROFILEChosenPress={() => navigation.navigate("PROFILE")}
        />
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
    </>
  );
};

const styles = StyleSheet.create({
  imageSpaceBlock: {
    marginTop: 10,
    overflow: "hidden",
  },
  munezaContainerTypo: {
    width: 122,
    textAlign: "left",
    color: Color.colorsDefault,
    fontSize: FontSize.size_smi,
    left: 5,
    position: "absolute",
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
  imageChild: {
    width: 246,
    height: 150,
  },
  image: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.primaryPureWhite,
    paddingHorizontal: Padding.p_16xl,
    paddingVertical: Padding.p_11xl,
    alignItems: "center",
  },
  name: {
    fontWeight: "900",
    fontFamily: FontFamily.interBlack,
  },
  munezaLionel: {
    fontFamily: FontFamily.interRegular,
  },
  nameMunezaLionelContainer: {
    top: 9,
    height: 42,
  },
  accountTypeRegularContainer: {
    top: 107,
    height: 39,
  },
  usernameLMuneza: {
    top: 58,
    height: 41,
  },
  details: {
    width: 298,
    height: 146,
  },
  pagecontent: {
    top: 0,
    left: 0,
    height: 676,
    position: "absolute",
    width: 360,
    alignItems: "center",
    overflow: "hidden",
  },
  thepage: {
    height: 696,
    width: 360,
    overflow: "hidden",
  },
  profile: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.grey,
    flex: 1,
    width: "100%",
    height: 800,
    alignItems: "center",
    overflow: "hidden",
  },
});

export default PROFILE;
