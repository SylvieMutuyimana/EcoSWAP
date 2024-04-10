import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Color, FontSize, item_size } from "../../GlobalStyles";
import ItemPageTemplate from "./Template";
import { cartStyles } from "../../assets/styles/pageStyles";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { getDisplayItems, getDisplayItemsType } from "./navigateItem";

const ItemsDisplayPage = () => {
  const navigation = useNavigation();
  const theItems = getDisplayItems();
  const displayName = getDisplayItemsType();

  const renderItem = (item) => (
    <View style={styles.itemContainer} key={item._id}>
      <Image source={item.image}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.itemDetails}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{item.price} RWF</Text>
      </View>
    </View>
  );

  const handleBack = () => {
    navigation.goBack();
  };

  const SecondHeader = () => (
    <View style={styles.header}>
      <TouchableOpacity onPress={()=> handleBack()}  style={styles.backiconCont} >
        <Ionicons name="arrow-back" size={item_size.icon.back}  color="black" style={styles.backicon} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{displayName}</Text>
    </View>
  );
  return (
    <ItemPageTemplate SecondHeader={SecondHeader} page_name={'Cart'}>
      <View style={[styles.pageContent, cartStyles.container]}>
        {theItems ? (
          theItems.map((item) => renderItem(item))
        ) : (
          <Text>No items chosen</Text>
        )}
      </View>
    </ItemPageTemplate>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: Color.green,
    justifyContent:"center",
    alignContent:"center",
    textAlign:"center",
    width: "100%",
    marginBottom:20,
    height:50
  },
  backiconCont:{
    width: "5%",
  },
  backicon:{
    fontSize: item_size.icon.back_fontsize
  },
  headerTitle: {
    fontSize: FontSize.headings.h2,
    fontWeight: "bold",
    width: "95%",
    textAlign:"center",
  },
  pageContent: {
    flex: 1,
    width: "100%",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: Color.colorDarkgray,
    width: "100%",
    backgroundColor:Color.colorWhitesmoke,
    marginTop:10
  },
  image: {
    width: 150, 
    height: 80,
    borderRadius: 8,
  },
  itemDetails: {
    flex: 1, 
    marginLeft: 10,
  },
  name: {
    fontSize: FontSize.size_default,
    fontWeight: "bold",
    marginBottom: 5,
  },
  price: {
    fontSize: FontSize.size_default,
    color: "#666666",
  },
});

export default ItemsDisplayPage;
