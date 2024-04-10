import React, { useState, useEffect } from "react";
import { Text, View, TextInput, Picker } from "react-native";
import { Image } from "expo-image";
import BuyerPageTemplate from "./Template";
import ContainerItem from "../../components/pages/item/itemscontainer/ContainerItem";
import { Width } from "../../GlobalStyles";
import CategoryNav from "../../components/pages/buyer/category/CategoryNav";
import HomePageItemsContTemplate from "../../components/pages/shared/HomePageItemsContainer";
import { sampleCategories, getItems } from "../../components/data/sampleData";
import { CategoryPageStyles } from "../../assets/styles/pages/shared/CategoryPageStyles";
import { otherPagesStyles } from "../../assets/styles/pageStyles";
import { navigateSellerItem } from "../item/navigateItem";
import { useNavigation } from "@react-navigation/native";

const item_types = ['All','sold', 'In Stock', 'Pending Payment'];

const MYITEMS = ({route}) => {
  const chosenCat = route?.params?.chosenCat;
  const theItems = getItems('my items')
  const theCategories_ = sampleCategories
  const [selectedCat, setSelectedCat] = useState(chosenCat ? chosenCat : theCategories_[0].name);
  const [categoryItems, setCategoryItems] = useState(theItems.filter(item => item.category === selectedCat));
  const [filteredItems, setFilteredItems] = useState(categoryItems);
  const [searchQuery, setSearchQuery] = useState(null);
  const [filteredType, setFilteredType] = useState('All');
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
    const categoryData = theItems?.filter(item => item.category === selectedCat) || []
    setCategoryItems(categoryData)
  }, [selectedCat]);

  useEffect(() => {
    let filteredData
    if (filteredType !== 'All') {
      filteredData = categoryItems?.filter(item => item.type === filteredType) || []
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
    return (
      <View style={CategoryPageStyles.search}>
        <Picker style={CategoryPageStyles.listedItems} selectedValue={filteredType}
          onValueChange={(value) => setFilteredType(value)}
        >
          {item_types.map((type, index) => (
            <Picker.Item label={type} value={type} key={index} />
          ))}
        </Picker>
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

  return (
    <BuyerPageTemplate page_name='MyItems'>
      <View style={[CategoryPageStyles.container, otherPagesStyles.container]}>
        <HomePageItemsContTemplate maxWidth={Width.maxContWidth}>
          <View style={CategoryPageStyles.nav}>
            <CategoryNav changeCat={changeCat} selectedCat={selectedCat}/>
          </View>
        </HomePageItemsContTemplate>
        <View style={CategoryPageStyles.content}>
          <Text style={CategoryPageStyles.headText}>{selectedCat}</Text>
          <>{SearchPart()}</>
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
    </BuyerPageTemplate>
  );
};

export default MYITEMS;