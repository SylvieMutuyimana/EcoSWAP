import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native"; // Added Pressable
import { useNavigation } from "@react-navigation/native";
import FullPageTemplate from "../FullPageTemplate";
import { pageStyles } from "../../assets/styles/pageStyles";
import { authStyles } from "../../assets/styles/auth/authStyles";
import { authoriseUser, unauthoriseUser } from "./navigate";

const Login = ({authMessage, route }) => {
  const navigation = useNavigation();
  const [loginDetails, setDetails] = useState({
    phoneNum: null, password: null
  });
  const [loginError, setError] = useState(null);
  const formFields = [
    { name: 'phoneNum', label: 'Phone Number', placeholder: 'Enter Phone Number', keyboardType: 'phone-pad' },
    { name: 'password', label: 'Password', placeholder: 'Enter Password', secureTextEntry: true },
  ];

  const handleChange = (name, value) => {
    setDetails({ ...loginDetails, [name]: value });
  };
  const { userType } = route.params;
  console.log('userType: ',userType)

  const unauthorisedUser= ()=>{
    const funct_ = unauthoriseUser(userType)
    if(funct_){
      navigation.navigate(funct_, { userType: userType});
    }
  }
  const authorisedUser = () => {
    const funct_ = authoriseUser(userType, loginDetails)
    navigation.navigate(funct_, { userType: userType});
  }
  const handleSubmit = () => {
    let missing_field = null;
    for (const [key, value] of Object.entries(loginDetails)) {
      if (!value) {
        missing_field = key;
        break;
      }
    }
    const acceptedPhone = ['078', '079', '073', '072']
    const wrongPhone = (Num)=>{
      if(Num.length !== 10 || isNaN(Num) || 
        !acceptedPhone.some(prefix => Num.startsWith(prefix))){
          return true
      }
    }
    if (missing_field) {
      const labe_ = formFields.find(field=>field.name === missing_field).label
      setError(`Missing ${labe_}`);
    } else if (wrongPhone(loginDetails.phoneNum)) {
      setError(`Invalid phone number`);
    } else {
      setError(null)
      authorisedUser()
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
        <View style={[authStyles.details, authStyles.detailsFlexBox]}>
          <View style={authStyles.detailsFlexBox}>
            <Text style={[authStyles.ecoSwap, authStyles.signInLayout]}>
              ECO-SWAP
            </Text>
            <Text style={[authStyles.signIn, authStyles.signInLayout]}>SIGN IN</Text>
          </View>
          <View style={[authStyles.form, authStyles.formFlexBox]}>
            <View style={authStyles.formfields}>
              {loginError&&(<Text style={authStyles.error}>{loginError}</Text>)}
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
                onPress={()=>handleSubmit()} 
              >
                <Text style={[authStyles.login1, authStyles.login1Typo]}>
                  LOGIN
                </Text>
              </Pressable>
              <Pressable 
                style={[authStyles.createAccount, authStyles.login1Typo]}
                onPress={()=>navigation.navigate('CreateAccount', { userType: userType })} 
              >
                <Text style={[authStyles.createAccount, authStyles.login1Typo]}>
                  Create Account
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </FullPageTemplate>
  );
};

export default Login;
