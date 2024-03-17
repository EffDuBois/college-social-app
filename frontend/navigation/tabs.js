import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, TouchableOpacity } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ChatScreen from '../screens/ChatScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="YeRAju"
                component={HomeScreen}
                options={({ navigation }) => ({
                    tabBarLabel: 'Home',
                    headerRight: () => (
                        <TouchableOpacity
                            style={{ marginRight: 10 }}
                            onPress={() => navigation.navigate('Profile')}
                        >
                            <Image
                                source={require('../assets/images/profilePic.png')}
                                style={{ width: 30, height: 30, borderRadius: 15 }}
                            />
                        </TouchableOpacity>
                    )
                })}
            />
            <Tab.Screen
                name="Chat"
                component={ChatScreen}
                options={{
                    tabBarLabel: 'Chat'
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={NotificationScreen}
                options={{
                    tabBarLabel: 'Notifications'
                }}
            />
        </Tab.Navigator>
    );
}

export default Tabs;
