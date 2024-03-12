import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native"; // Added Pressable
import { useNavigation } from "@react-navigation/native";
import FullPageTemplate from "../FullPageTemplate";
import { pageStyles } from "../../assets/styles/pageStyles";
import { authStyles } from "../../assets/styles/auth/authStyles";
import { unauthoriseUser } from "./navigate";
import { getUserFromLocalStorage } from "../../components/data/localStorage";

const CreateAccount = ({authMessage}) => {
  const userType = getUserFromLocalStorage();

  const navigation = useNavigation();
  const [signupDetails, setDetails] = useState({
    firstName: null, lastName: null, email: null, phoneNum: null,
    type: userType, password: null, password1: null
  });
  const [signupError, setError] = useState(null);
  const formFields = [
    { name: 'firstName', label: 'First Name', placeholder: 'Enter First Name' },
    { name: 'lastName', label: 'Last Name', placeholder: 'Enter Last Name' },
    { name: 'email', label: 'Email', placeholder: 'Enter Email', keyboardType: 'email-address' },
    { name: 'phoneNum', label: 'Phone Number', placeholder: 'Enter Phone Number', keyboardType: 'phone-pad' },
    { name: 'password', label: 'Password', placeholder: 'Enter Password', secureTextEntry: true },
    { name: 'password1', label: 'Confirm Password', placeholder: 'Enter Confirm Password', secureTextEntry: true }
  ];

  const handleChange = (name, value) => {
    setDetails({ ...signupDetails, [name]: value });
  };

  const unauthorisedUser= ()=>{
    const funct_ = unauthoriseUser(userType)
    navigation.navigate(funct_, { userType: userType});
  }

  const handleSubmit = () => {
    let missing_field = null; // Initialize with null
    for (const [key, value] of Object.entries(signupDetails)) {
      if (!value) {
        missing_field = key;
        break;
      }
    }
    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
    const acceptedPhone = ['078', '079', '073', '072']
    const wrongPhone = (Num)=>{
      if(Num.length !== 10 || isNaN(Num) || 
        !acceptedPhone.some(prefix => Num.startsWith(prefix))){
          return true
      }
    }
    if (missing_field && missing_field!=='password1') {
      const labe_ = formFields.find(field=>field.name === missing_field).label
      setError(`Missing ${labe_}`);
    } else if (wrongPhone(signupDetails.phoneNum)) {
      setError('Invalid phone number');
    } else if(isValidEmail(signupDetails.email)){
      setError('Invalid email');
    }else if((signupDetails.password !== signupDetails.password1) || missing_field==='password1'){
      setError('Passwords do not match')
    }else{
      navigation.navigate("Pin", { userType: userType });
    }
  };

  return (
    <FullPageTemplate status_bar={true} green_back={true} footer = {false}>
      <View style={[pageStyles.pageContent, pageStyles.auth]}>
        <View style={authStyles.authHeader}>
          <Pressable style={authStyles.back} onPress={()=>navigation.goBack()}>
            <Pressable style={authStyles.pressable} onPress={() => navigation.goBack()}>
              <Text style={authStyles.text}>{`<--`}</Text>
            </Pressable>
          </Pressable>
          <Pressable style={authStyles.cancel} onPress={() => unauthorisedUser()}>
            <Text style={authStyles.cancel1}>Skip</Text>
          </Pressable>
        </View>
        <View style={[authStyles.details, authStyles.detailsFlexBox, authStyles.register]}>
          <View style={authStyles.detailsFlexBox}>
            <Text style={[authStyles.signIn, authStyles.signInLayout]}>Create Account</Text>
          </View>
          <View style={[authStyles.form, authStyles.formFlexBox]}>
            <View style={authStyles.formfields}>
              {signupError&&(<Text style={authStyles.error}>{signupError}</Text>)}
              {authMessage&&(<Text style={authStyles.message}>{authMessage}</Text>)}
              {formFields.map((field, index) => (
                <React.Fragment key={index}>
                  <View style={authStyles.fieldHead}><Text>{field.label}</Text></View>
                  <TextInput
                    style={authStyles.input}
                    placeholder={field.placeholder}
                    onChangeText={(text) => handleChange(field.name, text)}
                    keyboardType={field.keyboardType}
                    secureTextEntry={field.secureTextEntry}
                  />
                </React.Fragment>
              ))}
            </View>
            <View style={[authStyles.down, authStyles.downFlexBox]}>
              <Pressable
                style={[authStyles.login, authStyles.downFlexBox]}
                onPress={handleSubmit}
              >
                <Text style={[authStyles.login1, authStyles.login1Typo]}>
                  REGISTER
                </Text>
              </Pressable>
              <Pressable 
                style={[authStyles.createAccount, authStyles.login1Typo]}
                onPress={()=>navigation.navigate('Login', { userType: userType })} 
              >
                <Text style={[authStyles.createAccount, authStyles.login1Typo]}>
                  Already have an account?
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </FullPageTemplate>
  );
};

export default CreateAccount;
