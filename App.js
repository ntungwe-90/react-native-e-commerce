import React from 'react';
import { View, StyleSheet, Text, TextInput,Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 import Jackets from './jackets';
import JacketDetails from './jacketDetails';
 



const Stack = createStackNavigator()
export default function App() {
  return (
<NavigationContainer>
 <Stack.Navigator>
    <Stack.Screen name="JacketDetails" component={JacketDetails}/>
    <Stack.Screen name="Jackets" component={Jackets}/>
       
    
    </Stack.Navigator> 
   </NavigationContainer>

);
}





