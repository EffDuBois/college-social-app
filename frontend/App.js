import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import Tabs from './navigation/tabs';


export default function App() {
  return (
  <NavigationContainer>
    <Tabs />
  </NavigationContainer>
  );
}


