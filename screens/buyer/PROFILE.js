import React, { useCallback, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import BuyerPageTemplate from "./Template";
import { Text, StyleSheet, View, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import BuyerMenu from "../../components/nav/BuyerMenu";
import TITLEPAGE from "../../components/nav/TITLEPAGE";
import { Color, FontSize, Border, Padding, FontFamily } from "../../GlobalStyles";

const BuyerProfile = () => {
  const [fluentnavigation16FilledIconVisible,
    setFluentnavigation16FilledIconVisible,
  ] = useState(false);
  const navigation = useNavigation();
  const userType  = 'buyer'; 

  const openFluentnavigation16FilledIcon = useCallback(() => {
    setFluentnavigation16FilledIconVisible(true);
  }, []);

  const closeFluentnavigation16FilledIcon = useCallback(() => {
    setFluentnavigation16FilledIconVisible(false);
  }, []);

  return (
    <BuyerPageTemplate page_name ='BuyerProfile'>
      <View style={styles.titlePage} >
      <TITLEPAGE onFluentnavigation16FilledPress={openFluentnavigation16FilledIcon}/>

      </View>
      <View style={[styles.image, styles.imageSpaceBlock]}>
        <Image style={styles.imageChild} contentFit="cover"
          source={require("../../assets/images/samples/user_image.png")}
        />
      </View>
      <View style={[styles.details, styles.imageSpaceBlock]}>
        <Text style={[ styles.dataContainer,
            styles.dataContainer1,
          ]}>
          <Text style={styles.name}>Name: </Text>
          <Text style={styles.text}>Muneza Lionel</Text>
        </Text>
        <Text style={[ styles.accountTypeRegularContainer,
            styles.dataContainer1,
          ]}
        >
          <Text style={styles.name}>Account type: </Text>
          <Text style={styles.text}>{userType}</Text>
        </Text>
        <Text style={[styles.username, styles.dataContainer1]}>
          <Text style={styles.name}>Username:</Text>
          <Text style={styles.text}>l_muneza</Text>
        </Text>
      </View>
      <Modal animationType="fade" transparent
        visible={fluentnavigation16FilledIconVisible}
      >
        <View style={styles.fluentnavFilledIconOverlay}>
          <Pressable style={styles.fluentnaviFilledIcon}
            onPress={closeFluentnavigation16FilledIcon}
          />
          <BuyerMenu onClose={closeFluentnavigation16FilledIcon} />
        </View>
      </Modal>
    </BuyerPageTemplate>
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
  dataContainer1: {
    width: 122,
    textAlign: "left",
    color: Color.colorsDefault,
    fontSize: FontSize.size_smi,
    left: 5,
    position: "absolute",
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
  dataContainer: {
    top: 9,
    height: 42,
  },
  accountTypeRegularContainer: {
    top: 107,
    height: 39,
  },
  username: {
    top: 58,
    height: 41,
  },
  details: {
    width: 298,
    height: 146,
  },
});

export default BuyerProfile;