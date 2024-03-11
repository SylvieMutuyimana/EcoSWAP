import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ItemContainer2 from "../../components/pages/item/ItemContainer2";
import SimilarItemsContainer from "../../components/SimilarItemsContainer";
import { Border, Color } from "../../GlobalStyles";

const Item2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.item}>
      <View style={[styles.thepage, styles.thepageLayout]}>
        <View style={[styles.pagecontent, styles.thepageLayout]}>
          <ItemContainer2
            onPressablePress={() => navigation.goBack()}
            onVectorPress={() => navigation.navigate("Item11")}
          />
          <SimilarItemsContainer />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  thepageLayout: {
    width: 360,
    overflow: "hidden",
  },
  pagecontent: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 676,
    alignItems: "center",
  },
  thepage: {
    height: 696,
  },
  item: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.grey,
    flex: 1,
    width: "100%",
    height: 800,
    alignItems: "center",
    overflow: "hidden",
  },
});

export default Item2;
