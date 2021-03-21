import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Contacts from '../screens/Contacts'
import ContactDetail from '../screens/ContactDetail'
import CreateContact from '../screens/CreateContact'
import Settings from '../screens/Settings'
import { Text } from 'react-native';

const HomeNavigator = () => {
    const HomeStack = createStackNavigator();
    return (
        <HomeStack.Navigator initialRouteName="Contacts">
            <HomeStack.Screen name="Contacts" component={Contacts} options={{ headerLeft: () => { <Text>Help</Text> } }}></HomeStack.Screen>
            <HomeStack.Screen name="Contact Detail" component={ContactDetail}></HomeStack.Screen>
            <HomeStack.Screen name="Create Contact" component={CreateContact}></HomeStack.Screen>
            <HomeStack.Screen name="Settings" component={Settings}></HomeStack.Screen>
        </HomeStack.Navigator>
    )
}

export default HomeNavigator;