import React from 'react';
import { Text, View, } from 'react-native';
import db from '../config.js';
import {ScrollView} from 'react-native-gesture-handler';

export default class ReadScreen extends React.Component {

  constructor(){
    super();
    this.state={
      ReadStory:[],

    }
  }
  componentDidMount=async()=>{
     const query=await db.collection('writeStrory').get();
     query.docs.map((doc)=>{
     this.setState({
       ReadStory:[...this.state.ReadStory,doc.data()]
     })
     })

     }

     

  

    
  
    render() {
      return (
      <ScrollView>{
        this.state.ReadStory.map((story)=>{
          return(
            <View> 
            <Text> {"writeStory:"+ story.writeStory}</Text>
            
            </View>
          )
        })
      }</ScrollView>
      );
      }
    }