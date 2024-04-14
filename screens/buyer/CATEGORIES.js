import React, { useState, useEffect } from "react";
import { Text, View, TextInput, Pressable } from "react-native";
import { Image } from "expo-image";
import BuyerPageTemplate from "./Template";
import ContainerItem from "../../components/pages/item/itemscontainer/ContainerItem";
import CategoryNav from "../../components/pages/buyer/category/CategoryNav";
import { sampleCategories, getItems } from "../../components/data/sampleData";
import { CategoryPageStyles } from "../../assets/styles/pages/shared/CategoryPageStyles";
import { returnListStyles } from "../../assets/styles/pages/SearchStyles";
import { useNavigation } from "@react-navigation/core";
import { navigateBuyerItem } from "../item/navigateItem";

const CATEGORIES = ({route}) => {
  const chosenCat = route?.params?.chosenCat;
  const navigation = useNavigation()
  const theItems = getItems('cat Items')
  const theCategories_ = sampleCategories
  const [selectedCat, setSelectedCat] = useState(chosenCat?chosenCat:theCategories_[0].name)
  const returnCatItems = ()=>{
    return theItems?.filter(item => item.category === selectedCat) || null
  }

  const [categoryItems, setCategoryItems] = useState(returnCatItems());
  const [filteredItems, setFilteredItems] = useState(categoryItems);
  const [n_items, setn_items] = useState(8)
  const [searchQuery, setSearchQuery] = useState(null);

  console.log('selectedCat:', selectedCat)
  console.log('categoryItems:', categoryItems)
  console.log('filteredItems:', filteredItems)

  useEffect(() => {
    const categoryData = theItems?.filter(item => item.category === selectedCat) || []
    setCategoryItems(categoryData)
  }, [selectedCat]);

  useEffect(() => {
    let filteredData = returnCatItems() 
    setCategoryItems(filteredData)
    if (searchQuery && searchQuery !== '') {
      filteredData = filterItems(filteredData)
    } 
    setFilteredItems(filteredData)
  }, [categoryItems, searchQuery]);

  const filterItems = (items) => {
    const filtered = items?.filter(item => 
      item?.name?.toLowerCase().includes(searchQuery.toLowerCase())
      || item?.description?.toLowerCase().includes(searchQuery.toLowerCase())
    )
    return filtered || []
  };

  const changeCat = (name) => {
    setSelectedCat(name);
  };

  const SearchPart = () => {
    return (
      <View style={CategoryPageStyles.search}>
        <View style={[CategoryPageStyles.searchContainer, CategoryPageStyles.catSearch]}>
          <TextInput style={CategoryPageStyles.searchProductName}
            placeholder={'Search Product Name'} onChangeText={(text)=>setSearchQuery(text)}/>
          <Image style={CategoryPageStyles.searchButton} resizeMode="cover"
            source={require("../../assets/images/icons/searchButton.png")}
          />
        </View>
      </View>
    );
  };

  const item_link = 'BuyerItem'

  const chooseItem = (item)=>{
    navigateBuyerItem(item, 'cat')
    navigation.navigate(item_link)
  }
  const CatHeader = ()=>{
    return(
      <View style={CategoryPageStyles.nav}>
        <CategoryNav changeCat={changeCat} selectedCat={selectedCat}/>
      </View>
    )
  }
  return (
    <BuyerPageTemplate page_name ='Categories' SecondHeader={CatHeader}>
      <View style={CategoryPageStyles.container}>
        <View style={CategoryPageStyles.content}>
          <Text style={CategoryPageStyles.headText}>{selectedCat}</Text>
          <>{SearchPart()}</>
          <View style={CategoryPageStyles.theitems}>
            {(filteredItems && filteredItems?.length>0) ?
              (filteredItems.slice(0, n_items)).map((item, index) => (
                <React.Fragment key={index}>
                  <ContainerItem key={index} theItem={item} chooseItem={chooseItem}/>
                </React.Fragment>
              )):(
                <View><Text>No items to display</Text></View>
              )
            }
          </View>
          {
            filteredItems?.length > n_items ?(
              <Pressable style={returnListStyles.seemore} onPress={()=>{
                setn_items((filteredItems?.length-n_items)>8 ? n_items+8: n_items + filteredItems?.length-n_items)
              }}>
                <Text style={returnListStyles.seemoreText}>
                  See More
                </Text>
              </Pressable>
            ):null
          }
        </View>
      </View>
    </BuyerPageTemplate>
  );
};

export default CATEGORIES;