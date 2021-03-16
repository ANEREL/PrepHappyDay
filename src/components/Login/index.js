import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Text, Image, View, TouchableOpacity } from 'react-native';

import Input from '../common/Input';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';

import styles from './style';

import {REGISTER} from '../../constants/routeNames';

const LoginComponent = () => {

    const {navigate} = useNavigation();

    return (
        <Container>

            <Image source={require('../../assets/images/logo.png')} style={styles.logoImage} />

            <View>

                <Text style={styles.title}>Welcome to RNContacts</Text>
                <Text style={styles.subTitle}>Please login here</Text>

                <View style={styles.form}>
                    <Input
                        label="Username"
                        placeholder="Enter Username"
                    // error={'This field is required'}
                    />

                    <Input
                        label="Password"
                        placeholder="Enter Password"
                        secureTextEntry={true}
                        icon={<Text>Show</Text>}
                        iconPosition='right'
                    />

                    <CustomButton title="Submit" loading={false} primary />
                </View>

                <View style={styles.createSection}>
                    <Text style={styles.infoText}>Need a new account?</Text>
                    <TouchableOpacity onPress={()=>{navigate(REGISTER)}}>
                        <Text style={styles.linkBtn}>Register</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </Container>
    )
}

export default LoginComponent;