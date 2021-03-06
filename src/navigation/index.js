import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './AuthNavigator'
import DrawerNavigator from './DrawerNavigator';

import { GlobalContext } from '../context/Provider';
import { useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from 'react-native';

const AppNavContainer = () => {

    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    const [authLoaded, setAuthLoaded] = React.useState(false);

    const { authState: { isLoggedIn } } = useContext(GlobalContext);

    const getUser = async () => {
        try {

            const user = await AsyncStorage.getItem("user");

            if (user) {
                setAuthLoaded(true);
                setIsAuthenticated(true);
            } else {
                setAuthLoaded(true);
                setIsAuthenticated(false);
            }

        } catch (error) {

        }
    }

    useEffect(() => {
        getUser();
    }, [isLoggedIn]);

    return (
        <>

            {authLoaded ?
                // should be able to remove isLogged in from the below when everything is working correctly
                (<NavigationContainer>
                    {isLoggedIn || isAuthenticated ? <DrawerNavigator /> : <AuthNavigator />}
                </NavigationContainer>)

                : (<ActivityIndicator/>)}
        </>
    );
};

export default AppNavContainer;