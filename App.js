import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadScreen from './screens/ReadScreen';
import LoginScreen from './screens/LoginScreen';

export default class App extends React.Component {
  render(){
    return (
      
        <AppContainer />
      
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  WriteStory: {screen: WriteStoryScreen},
  Read: {screen: ReadScreen},
},
{ 
  defaultNavigationOptions:({navigation})=>({
tabBarIcon:()=>{
const routeName=navigation.state.routeName
if(routeName==='WriteStory'){
  return(
    <Image
    source={require("./assets/write.png")}
    style={{width:40,height:40}}
    
    />
  )
}
else
if(routeName==='Read'){
  return(
    <Image
    source={require("./assets/read.png")}
    style={{width:40,height:40}}
    />
  )
}

}

})}
);


const SwitchNavigator=createSwitchNavigator({
  LoginScreen:{screen:LoginScreen},
  TabNavigator:{screen:TabNavigator}
})

const AppContainer =  createAppContainer(SwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
