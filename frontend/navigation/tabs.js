import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, TouchableOpacity, View ,StyleSheet} from 'react-native';


import HomeScreen from '../screens/HomeScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ChatScreen from '../screens/ChatScreen';

import Home_SVG from '../assets/svg/Home.svg'
import Message_SVG from '../assets/svg/Messages.svg'
import Notifications_SVG from '../assets/svg/Notification-bell.svg'
import GlobalStyles from '../Components/styles/GlobalStyles';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator 
        screenOptions={{
            tabBarStyle: [
                {
                    height:60,
                },
            ],
            
            tabBarLabelStyle: {
                fontSize: 15, 
            },
        }}
        
        >
            <Tab.Screen
                name="YeRaju"
                component={HomeScreen}
                options={({ navigation }) => ({
                    tabBarLabel: 'Home',
                    headerRight: () => (
                        <TouchableOpacity
                            style={{ marginRight: 15,}}
                            onPress={() => navigation.navigate('Profile')}
                        >
                            <Image
                                source={require('../assets/images/profilePic.png')}
                                style={{ width: 50, height: 50, borderRadius: 25 }}
                            />
                        </TouchableOpacity>
                    ),
                    
                    tabBarIcon: ({ color, size }) => (
                        <Home_SVG width={size+5} height={size+5} color={color} />
                    ),
                })}
            />
            <Tab.Screen
                name="Chat"
                component={ChatScreen}
                options={{
                    tabBarLabel: 'Chat',
                    tabBarIcon: ({ color, size }) => (
                    <Message_SVG width={size+5} height={size+5} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={NotificationScreen}
                options={{
                    tabBarLabel: 'Notifications',
                    tabBarIcon: ({ color, size }) => (
                    <Notifications_SVG width={size+5} height={size+5} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}





export default Tabs;
