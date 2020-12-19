import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet,Image,KeyboardAvoidingView,ToastAndroid,Alert} from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { TextInput } from 'react-native-gesture-handler';

export default class WriteStoryScreen extends React.Component {
    

    

    render() {
     
        
        
          
        
      

     
          <KeyboardAvoidingView

          <Image
            
          source={require("../assets/story.jpg")}
          style={{width:200,height:200}}
         
         />
           
           <Text style={{fontSize:50,textAlign:'center'}}> StoryHub</Text>
           

           <View style={styles.inputView}>

            <TextInput placeholder='Story title'
            style={styles.inputBox}
            >
              
             
            </TextInput>

           
           </View>
         
           <View style={styles.inputView}>
            <TextInput placeholder='Author'
            style={styles.inputBox}
            >
              
             
            </TextInput>

            
           </View>
         
           <View style={styles.inputView}>
            <TextInput placeholder='Write your story'
            style={styles.write}
            >
              
             
            </TextInput>

            
           </View>

           <TouchableOpacity>
             <Text style={styles.submit}>Submit</Text>
             Alert.alert("The story is submitted");
           </TouchableOpacity>

       
</KeyboardAvoidingView>


      }
          
      
    
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    displayText:{
      fontSize: 15,
      textDecorationLine: 'underline'
    },
    
    
    buttonText:{
      fontSize: 20,
    },
    inputView:{
      flexDirection:"row",
      margin:20,
      
    },
    inputBox:{
      width:200,
      height:40,
      borderWidth:1.5,
      fontSize:20
    },
    write:{
      width:400,
      height:100,
      borderWidth:3,
      fontSize:29
    },
    submit:{
      
      background:"orange",
      padding:10
    }
  });