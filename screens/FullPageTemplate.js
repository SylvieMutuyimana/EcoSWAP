import * as React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import StatusBar1 from "../components/nav/StatusBar1";
import { Color, Padding } from "../GlobalStyles";

const FullPageTemplate = ({ status_bar, green_back, children, footer}) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.fullPage, green_back ? styles.auth : styles.content]}>
      {status_bar && <StatusBar1 />}
      <View style={[styles.thePage, footer? styles.withfooter: styles.withoutfooter ]}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fullPage: {
    flex: 1,
    width: "100%",
    height: 800,
    alignItems: "center",
    overflow: "hidden",
  },
  auth:{
    backgroundColor: Color.green,
  },
  content:{
    backgroundColor: Color.grey,
  },
  thePage: {
    width: 360,
    overflow:"scroll"
  },
  withoutfooter:{
    height: (800-40),
  },
  withfooter:{
    height: (800-40-64)
  }
});

export default FullPageTemplate;
