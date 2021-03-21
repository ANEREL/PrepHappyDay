import React from 'react';
import { Alert, SafeAreaView, View, Image, Text, TouchableOpacity } from 'react-native';

import Container from '../../components/common/Container';
import { LOGIN, SETTINGS } from '../../constants/routeNames';

import logoutUser from '../../context/actions/auth/logout';

import styles from './style';

const SideMenu = ({ navigation, authDispatch }) => {

    const handleLogout = () => {
        navigation.toggleDrawer();
        Alert.alert("Logout", "Are you sure you want to logout?", [
            {
                text: 'Cancel',
                onPress: () => { },
            },
            {
                text: 'Ok',
                onPress: () => { logoutUser()(authDispatch); },
            }
        ])
    };

    const menuItems = [
        { icon: <Text>T</Text>, name: "Settings", onPress: () => { navigation.navigate(SETTINGS) } },
        { icon: <Text>T</Text>, name: "Logout", onPress: handleLogout },
    ]

    return (
        <SafeAreaView>
            <Container>
                <Image source={require('../../assets/images/logo.png')} style={styles.logoImage} />
                <View style={{ paddingHorizontal: 55 }}>
                    {menuItems.map(({ name, icon, onPress }) =>
                    (
                        <TouchableOpacity key={name} style={styles.item} onPress={onPress}>
                            {icon}
                            <Text style={styles.itemText}>{name}</Text>
                        </TouchableOpacity>
                    ))}</View>
            </Container>
        </SafeAreaView>
    );
}

export default SideMenu;