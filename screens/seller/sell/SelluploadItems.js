import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { Image } from "expo-image";
import { UploaderContStyles, selluploadStyles } from "../../../assets/styles/pages/seller/SelluploadStyles";
import { ItemsDisplayPageHeader } from "../../../components/pages/item/ItemsDisplayPageHeader";
import ItemPageTemplate from "../../item/Template";
import { authStyles } from "../../../assets/styles/auth/authStyles";
import { useNavigation } from "@react-navigation/native";
import { otherPagesStyles } from "../../../assets/styles/pageStyles";
import { typeItemPageStyles } from "../../../assets/styles/pages/item/typeItemPageStyles";
import ErrorContainer from "../../../components/errorContainer";

const SelluploadItems = () => {
  const navigation = useNavigation()
  const [itemDetails, setDetails] = useState({
    name:'this data', category: null, description:null, price:null,
    province:null, district:null, cell:null, street:null, 
  });
  const handleChange = (fieldName, text) => {
    setDetails(prev => ({ ...prev, [fieldName]: text }));
  };
  const [errorInput, setErrorInput] =useState(null)
  const [successMessage, setSuccess] =useState(null)
  const [firstClick, setClick] = useState(false)
  const ImageUploaderContainer = ()=>{
    return(
      <View style={UploaderContStyles.container}>
        <Image style={UploaderContStyles.uploadIcon} contentFit="cover"
          source={require("../../../assets/images/icons/img_uploader.png")}
        />
        <View style={UploaderContStyles.uploaderTextCont}>
          <Text style={UploaderContStyles.uploaderText}>Upload Image</Text>
        </View>
      </View>
    )
  }
  
  const SecondHeader =()=>{
    return(
      <ItemsDisplayPageHeader heading={'Sell Items'} page_type={'SellItems'}/>
    )
  }
  const onSubmit =()=>{
    console.log('itemDetails: ', itemDetails); 
    if(firstClick){
      setErrorInput('Important details are missing')
      setSuccess(null)
    }else{
      setSuccess('Item successfully added')
      setErrorInput(null)
      setClick(true)
    }
  }

  const successFull =()=>{
    navigation.navigate('MyItems')
  }

  const AFieldRow =({label, placeholder, fieldName})=>{
    return(
      <View style={selluploadStyles.theField}>
        <View style={[authStyles.fieldHead, selluploadStyles.row]}>
          <Text style={selluploadStyles.label}>{label}</Text>
        </View>
        <TextInput style={[authStyles.input, selluploadStyles.row1]} placeholder={placeholder}
          onChangeText={(text) => handleChange(fieldName, text)}
        />
      </View>
    )
  }


  return (
    <ItemPageTemplate SecondHeader={SecondHeader}>
      {
        successMessage&& (
          <View style={typeItemPageStyles.errorContainer}>
            <ErrorContainer onRetry={successFull}  errorText={successMessage} buttonText='OK'/>
          </View>
        )
      }
      <View style={[otherPagesStyles.container, selluploadStyles.container]} >
        <View style={selluploadStyles.details}>
          {
            errorInput && (
              <View>
                <Text style={{color:'brown', fontSize: 16}}>{errorInput}</Text>
              </View>
            )
          }
          <ImageUploaderContainer />
          <AFieldRow label={'Item Name'} placeholder={'Item Name'} 
            fieldName={'name'}  key="name" 
          /> 
          <View style={selluploadStyles.theField}>
            <View style={[authStyles.fieldHead, selluploadStyles.row]}>
              <Text style={selluploadStyles.label}>Item Name</Text>
            </View>
            <TextInput style={[authStyles.input, selluploadStyles.row1]} placeholder={'name'}
              onChangeText={(text) => handleChange('name', text)}
            />
          </View>
          <AFieldRow label={'Item Category'} placeholder={'Item Category'} 
            fieldName={'category'} key="category"
          />
          <AFieldRow label={'Item Description'} placeholder={'Item Description'} 
            fieldName={'description'} key="description"
          />
          <AFieldRow label={'Price'} placeholder={'Price'} 
            fieldName={'price'} key="price"
          />
          <View>
            <Text>Location</Text>
          </View>
          <AFieldRow label={'Province'} placeholder={'Province'} 
            fieldName={'province'} key="province"
          />
          <AFieldRow label={'District'} placeholder={'District'} 
            fieldName={'district'} key="district"
          />
          <AFieldRow label={'Cell'} placeholder={'Cell'} 
            fieldName={'cell'} key="cell"
          />
          <AFieldRow label={'Street Number'} placeholder={'Street Number'} 
            fieldName={'street'} key="street"
          />
        </View>
        <Pressable style={selluploadStyles.button} onPress={()=>onSubmit()}>
          <Text style={selluploadStyles.buttonText}>UPLOAD</Text>
        </Pressable>
      </View>
    </ItemPageTemplate>
  );
};

export default SelluploadItems;
