import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'

import Content from '../Home/Content';


const HomeScreen = () => {
  return (
    <SafeAreaView  >
                
        <Content/>
    </SafeAreaView>
  )
}



export default HomeScreen