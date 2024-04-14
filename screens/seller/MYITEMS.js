import React, { useState, useEffect } from "react";
import { Text, View, TextInput, Platform } from "react-native";
import { SelectList } from 'react-native-dropdown-select-list'
import { Image } from "expo-image";
import ContainerItem from "../../components/pages/item/itemscontainer/ContainerItem";
import CategoryNav from "../../components/pages/buyer/category/CategoryNav";
import { sampleCategories, getItems } from "../../components/data/sampleData";
import { CategoryPageStyles } from "../../assets/styles/pages/shared/CategoryPageStyles";
import { otherPagesStyles } from "../../assets/styles/pageStyles";
import { navigateSellerItem } from "../item/navigateItem";
import { useNavigation } from "@react-navigation/native";
import SellerPageTemplate from "./Template";
import { Picker } from "react-native"; // Import Picker from react-native


const MYITEMS = ({route}) => {
  const chosenCat = route?.params?.chosenCat;
  const chosenType = route?.params?.chosenType;
  console.log('chosenType:', chosenType)
  const theItems = getItems('my items')
  const theCategories_ = sampleCategories
  const [selectedCat, setSelectedCat] = useState(chosenCat ? chosenCat : theCategories_[0].name);
  const [categoryItems, setCategoryItems] = useState(theItems.filter(item => item?.category === selectedCat));
  const [filteredItems, setFilteredItems] = useState(categoryItems);
  const [searchQuery, setSearchQuery] = useState(null);
  const [filteredType, setFilteredType] = useState(chosenType ? chosenType :'All');
  console.log('selectedCat:', selectedCat)
  console.log('categoryItems:', categoryItems)
  console.log('filteredItems:', filteredItems)
  const item_link = 'SellerItem'
  const navigation =useNavigation()
  const chooseItem = (item)=>{
    navigateSellerItem(item, 'new')
    navigation.navigate(item_link)
  }

  useEffect(() => {
    const categoryData = theItems?.filter(item => item?.category === selectedCat) || []
    setCategoryItems(categoryData)
  }, [selectedCat]);

  useEffect(() => {
    let filteredData
    if (filteredType !== 'All') {
      filteredData = categoryItems?.filter(item => item?.type === filteredType) || []
    }else{
      filteredData = categoryItems
    }
    if (searchQuery && searchQuery !== '') {
      filteredData = filterItems(filteredData)
    } 
    setFilteredItems(filteredData)
  }, [categoryItems, searchQuery, filteredType]);

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
    const category_types = [
      {key:'1', value:'All'},
      {key:'2', value:'sold'},
      {key:'3', value:'In Stock'},
      {key:'4', value:'Pending Payment'}
    ];
    return (
      <View style={CategoryPageStyles.search}>
        {
          Platform.OS === 'ios'?(
            <SelectList  style={CategoryPageStyles.listedItems} 
              setSelected={(val) => setFilteredType(val)} 
              data={category_types} 
              save="value"
            />
          ):(
            <Picker style={CategoryPageStyles.listedItems} selectedValue={filteredType}
              onValueChange={(value) => setFilteredType(value)}
            >
              {category_types.map(type=> (
                <Picker.Item label={type.value} value={type.value} key={type.key} />
              ))}
            </Picker>
          )
        }
        <></>
        <View style={CategoryPageStyles.searchContainer}>
          <TextInput style={CategoryPageStyles.searchProductName}
            placeholder={'Search Product Name'}
            onChangeText={(text) => setSearchQuery(text)}
          />
          <Image style={CategoryPageStyles.searchButton}
            resizeMode="cover"
            source={require("../../assets/images/icons/searchButton.png")}
          />
        </View>
      </View>
    );
  };

  const CatHeader = ()=>{
    return(
      <View style={CategoryPageStyles.nav}>
        <CategoryNav changeCat={changeCat} selectedCat={selectedCat}/>
      </View>
    )
  }

  return (
    <SellerPageTemplate page_name='MyItems' SecondHeader = {CatHeader}>
      <View style={otherPagesStyles.container}> 
        <View style={CategoryPageStyles.content}>
          <>{SearchPart()}</>
          <Text style={CategoryPageStyles.headText}>{selectedCat}</Text>
          <View style={CategoryPageStyles.theitems}>
            {(filteredItems && filteredItems?.length>0) ?
              filteredItems.map((item, index) => (
                <React.Fragment key={index}>
                  <ContainerItem theItem={item} chooseItem={chooseItem}/>
                </React.Fragment>
              )):(
                <View><Text>No items to display</Text></View>
              )
            }
          </View>
        </View>
      </View>
    </SellerPageTemplate>
  );
};

export default MYITEMS;