import React from 'react';
import * as firebase from 'firebase'
import db from '../config.js'
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet, KeyboardAvoidingView, Alert } from 'react-native';

export default class LoginScreen extends React.Component{

    constructor(){
        super();
        this.state={
        emailadrdress:'',
        password:''
        }

    }

    login=async(email,password)=>{
     if(email && password){
         try{
        const response=await firebase.auth().signInWithEmailAndPassword(email, password)
        if(response){
        this.props.navigation.navigate("Transaction")
        }
         }
         catch(error){
             switch(error.code){
             case "auth/user-!-found":
                 Alert.alert("User does not exist");
                 break;
                 case "auth/invalid-email":
                 Alert.alert("Incorrect email or password");
                 break;


             }
         }
     }
     else{
         Alert.alert("Enter email and password");
     }

    }

    render(){
        return(

            <KeyboardAvoidingView  style = {{alignItems:'center',marginTop:20}}>
           <Text>LoginScreen</Text>
           <View>
               
          
          <TextInput style={styles.loginBox}  placeholder="abc@gmail.com" keyBoardType="email-address"
          onChangeText={(text)=>{
            this.setState={
                emailaddress:text
            }
          }}
          >
              
              
               </TextInput>


               <TextInput placeholder="Enter password" secureTextEntry={true}
          onChangeText={(text)=>{
            this.setState={
                password:text
            }
          }}
          >
              
              
               </TextInput>
               </View>

               <View>
                   <TouchableOpacity style={styles.button}
                   onPress={()=>{
                       this.login(this.state.emailaddress,this.state.password);
                   }}
                   >
                       <Text style={{textAlign:'center'}}>Login</Text>
                   </TouchableOpacity>
               </View>
            </KeyboardAvoidingView>
        )
    }

}


const styles = StyleSheet.create({
    loginBox:
    {
      width: 300,
    height: 40,
    borderWidth: 1.5,
    fontSize: 20,
    margin:10,
    paddingLeft:10
    },

    button:
        {height:30,
            width:90,
            borderWidth:1,
            marginTop:20,
            paddingTop:5,
            borderRadius:7}
    
  })