import { Pressable, Text, TextInput, View } from "react-native";
import { Image } from "expo-image";
import React, { useEffect, useState } from "react";
import { contStyles, returnListStyles, styles, suggestionListStyles } from "../assets/styles/pages/SearchStyles";
import { getItems } from "../components/data/sampleData";
import FullPageTemplate from "./FullPageTemplate";
import { MaterialIcons } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/core";
import { suggestable_items } from "../components/data/suggestable_items";

const Search = () => {
  const allItems = getItems('search Data')
  const navigation = useNavigation()
  const [searchQuery, setSearchQuery] = useState(null);
  const [pageError, setError] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null)
  const [n_items, setn_items] = useState(8)
  const [suggestedItems, setSuggestions] = useState(suggestable_items?.slice(0,8))
  console.log('suggestedItems: ',suggestedItems)
  console.log('n_items: ',n_items)
  console.log('filteredItems: ',filteredItems?.length)

  const [callSearch, setSearchCall] = useState(null)
  const filter__ = (allItems) => {
    const filtered = allItems?.filter(item => {
      if (typeof item === 'string') {
        return item?.toLowerCase()?.includes(searchQuery?.toLowerCase());
      } else {
        return item?.name.toLowerCase()?.includes(searchQuery?.toLowerCase());
      }
    });
    return filtered;
  }  
  useEffect(()=>{
    if(callSearch){
      if(searchQuery && searchQuery!==''){
        const filtered = filter__(allItems)
        if (filtered && filtered?.length > 0) {
          setFilteredItems(filtered);
          setError(null);
        } else {
          setFilteredItems(null)
          setError("No matching items found");
        }
      }else{
        setError("Enter the item name or category");
      }
    }else{
      if(searchQuery && searchQuery!==''){
        const suggested = filter__(suggestable_items)
        setSuggestions(suggested?.slice(0,8));
      }else{
        setSuggestions(suggestable_items?.slice(0,8));
      }
    }
  },[searchQuery, callSearch])
  const returnItems = ()=>{
    return(
      <>
        {
          filteredItems?.slice(0,n_items).map((item_, index)=>(
            <View style={[returnListStyles.theItem, index===0?returnListStyles.firstItem:null]} key={index}>
              <View ext style={returnListStyles.leftside}>
                <Image style={returnListStyles.img} contentFit="cover"
                  source={{ uri: item_.image }} 
                />
              </View>
              <View style={returnListStyles.rightside}>
                <Text style={returnListStyles.description}>{item_?.description}</Text>
                <Text style={returnListStyles.price}>{item_?.price} {' Rwf'}</Text>
              </View>
            </View>
          ))
        }
        {
          filteredItems?.length > n_items ?(
            <Pressable style={returnListStyles.seemore} onPress={()=>{
              setn_items((filteredItems?.length-n_items)>8 ? n_items+8: n_items + filteredItems?.length-n_items)
            }}>
              <Text style={returnListStyles.seemoreText}>
                See More <MaterialIcons name="keyboard-arrow-down" size={20} color="black" />
              </Text>
            </Pressable>
          ):null
        }
      </>
    )
  }
  const suggestedSearching = ()=>{
    return(
      <>
        {
          suggestedItems?.slice(0,8).map((item_, index)=>(
            <View style={suggestionListStyles.theItem} key={index}>
              <Text style={suggestionListStyles.itemText}>
                {item_}
              </Text>
              <MaterialIcons name="chevron-right" style={suggestionListStyles.rightIcon}/>
            </View>
          ))
        }
      </>
    )
  }
  return (
    <FullPageTemplate page_name ='Search'  status_bar={true} >
      <View style={[styles.pagecontent]}>
        <View style={styles.searchWrapper}>
          <MaterialIcons name="arrow-back" style={styles.icon_left}  onPress={()=>navigation.goBack()}/>
          <View style={[styles.SearchContainer]}>
            <Image style={styles.searchIcon} contentFit="cover"
              source={require("../assets/images/icons/search.png")}
            />
            <TextInput style={styles.input} 
              placeholder={'Search Product Name'} onChangeText={(text)=>setSearchQuery(text)}/>
          </View>
          <Pressable style={styles.searchButton} onPress={()=> setSearchCall(true)}>
            <Text style={styles.searchButtonText}>SEARCH</Text>
          </Pressable>
        </View>
        <View style={contStyles.container}>
          {
            pageError?(
              <View style={suggestionListStyles.theItem}>
                <Text style={suggestionListStyles.itemText}>
                  {pageError}
                </Text>
              </View>   
            ):callSearch?(
              <>{returnItems()}</>
            ):(
              <>{suggestedSearching()}</>
            )
          }
        </View>      
      </View>
    </FullPageTemplate>

  );
};

export default Search;
