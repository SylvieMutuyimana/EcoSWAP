import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native"; // Added Pressable
import { useNavigation } from "@react-navigation/native";
import FullPageTemplate from "../FullPageTemplate";
import { pageStyles } from "../../assets/styles/pageStyles";
import { authStyles } from "../../assets/styles/auth/authStyles";

const CreateAccount = ({authMessage, userType}) => {
  const navigation = useNavigation();
  const [signupDetails, setDetails] = useState({
    firstName: null, lastName: null, email: null, phoneNum: null,
    type: userType, password: null, password1: null
  });
  const [signupError, setError] = useState(null);
  const formFields = [
    { name: 'firstName', placeholder: 'Enter First Name' },
    { name: 'lastName', placeholder: 'Enter Last Name' },
    { name: 'email', placeholder: 'Enter Email', keyboardType: 'email-address' },
    { name: 'phoneNum', placeholder: 'Enter Phone Number', keyboardType: 'phone-pad' },
    { name: 'password', placeholder: 'Enter Password', secureTextEntry: true },
    { name: 'password1', placeholder: 'Confirm Password', secureTextEntry: true }
  ];

  const handleChange = (name, value) => {
    setDetails({ ...signupDetails, [name]: value });
  };
  
  const handleSubmit = () => {
    let missing_field = null; // Initialize with null
    Object.entries(signupDetails).forEach(([key, value]) => {
      if (!value) {
        missing_field = key;
      }
    });
    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
    
    if (missing_field) {
      setError(`Missing ${missing_field}`);
    } else if (
      signupDetails.phoneNum.length !== 10 ||
      isNaN(signupDetails.phoneNum) || // Corrected isInteger to isNaN
      !['078', '079', '073', '072'].some(prefix => signupDetails.phoneNum.startsWith(prefix))
    ) {
      setError('Invalid phone number');
    } else if(isValidEmail(signupDetails.email)){
      setError('Invalid email');
    }else{
      navigation.navigate("Pin");
    }
  };

  return (
    <FullPageTemplate status_bar={true} green_back={true}>
      <View style={[pageStyles.pageContent, pageStyles.auth]}>
        <View style={authStyles.authHeader}>
          <Pressable style={authStyles.back} onPress={()=>navigation.goBack()}>
            <Pressable style={authStyles.pressable} onPress={() => navigation.goBack()}>
              <Text style={authStyles.text}>{`<--`}</Text>
            </Pressable>
          </Pressable>
          <Pressable style={authStyles.cancel} onPress={() => navigation.navigate("LoadingS")}>
            <Text style={authStyles.cancel1}>Skip</Text>
          </Pressable>
        </View>
        <View style={[authStyles.details, authStyles.detailsFlexBox, authStyles.register]}>
          <View style={authStyles.detailsFlexBox}>
            <Text style={[authStyles.ecoSwap, authStyles.signInLayout]}>
              ECO-SWAP
            </Text>
            <Text style={[authStyles.signIn, authStyles.signInLayout]}>SIGN IN</Text>
          </View>
          <View style={[authStyles.form, authStyles.formFlexBox]}>
            <View style={authStyles.formfields}>
              {signupError&&(<Text style={authStyles.error}>{signupError}</Text>)}
              {authMessage&&(<Text style={authStyles.message}>{authMessage}</Text>)}
              {formFields.map((field, index) => (
                <TextInput
                  key={index}
                  style={authStyles.input}
                  placeholder={field.placeholder}
                  onChangeText={(text) => handleChange(field.name, text)}
                  keyboardType={field.keyboardType}
                  secureTextEntry={field.secureTextEntry}
                />
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
                onPress={()=>navigation.navigate('Login')} 
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
