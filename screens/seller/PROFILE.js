import React, { useCallback, useState } from "react";
import { Text, StyleSheet, View, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import SellerMenu from "../../components/nav/SellerMenu";
import TITLEPAGE from "../../components/nav/TITLEPAGE";
import { Color, FontSize, Border, Padding, FontFamily } from "../../GlobalStyles";
import SellerPageTemplate from "./Template";

const SellerProfile = () => {
  const [fluentnavigation16FilledIconVisible,
    setFluentnavigation16FilledIconVisible,
  ] = useState(false);
  const userType  = 'seller'; 

  const openFluentnavigation16FilledIcon = useCallback(() => {
    setFluentnavigation16FilledIconVisible(true);
  }, []);

  const closeFilledIcon = useCallback(() => {
    setFluentnavigation16FilledIconVisible(false);
  }, []);

  return (
    <SellerPageTemplate page_name ='SellerProfile'>
      <View style={styles.titlePage} >
      <TITLEPAGE onMenuIconPress={openFluentnavigation16FilledIcon}/>

      </View>
      <View style={[styles.image, styles.imageSpaceBlock]}>
        <Image style={styles.imageChild} contentFit="cover"
          source={require("../../assets/images/samples/user_image.png")}
        />
      </View>
      <View style={[styles.details, styles.imageSpaceBlock]}>
        <Text style={styles.dataContainer}>
          <Text style={styles.name}>Name: </Text>
          <Text style={styles.text}>Muneza Lionel</Text>
        </Text>
        <Text style={styles.dataContainer}>
          <Text style={styles.name}>Account type: </Text>
          <Text style={styles.text}>{userType}</Text>
        </Text>
        <Text style={styles.dataContainer}>
          <Text style={styles.name}>Username:</Text>
          <Text style={styles.text}>l_muneza</Text>
        </Text>
      </View>
      <Modal animationType="fade" transparent
        visible={fluentnavigation16FilledIconVisible}
      >
        <View style={styles.fluentnavFilledIconOverlay}>
          <Pressable style={styles.fluentnaviFilledIcon}
            onPress={closeFilledIcon}
          />
          <SellerMenu onClose={closeFilledIcon} />
        </View>
      </Modal>
    </SellerPageTemplate>
  );
};

const styles = StyleSheet.create({
  titlePage:{
    width:"90%",
    elevation: 4,
    backgroundColor: Color.green,
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    paddingLeft: 5,
    paddingRight: 5,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
  },
  imageSpaceBlock: {
    marginTop: 10,
    overflow: "hidden",
  },
  dataContainer: {
    width: 122,
    textAlign: "left",
    color: Color.colorsDefault,
    fontSize: FontSize.size_smi,
    marginLeft:5,
    marginTop: 10
  },
  fluentnavFilledIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  fluentnaviFilledIcon: {
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
  text: {
    fontFamily: FontFamily.interRegular,
  },
  details: {
    width: 298,
    height: 146,
  },
});

export default SellerProfile;