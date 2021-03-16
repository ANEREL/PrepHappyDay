import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Text, Image, View, TouchableOpacity } from 'react-native';

import Input from '../common/Input';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';

import styles from './style';

import { LOGIN } from '../../constants/routeNames';

const RegisterComponent = ({ onSubmit, onChange, form, errors, error, loading }) => {

    const { navigate } = useNavigation();

    return (
        <Container>

            <Image source={require('../../assets/images/logo.png')} style={styles.logoImage} />

            <View>

                <Text style={styles.title}>Welcome to RNContacts</Text>
                <Text style={styles.subTitle}>Create a free account</Text>

                <View style={styles.form}>

                    {error && <Text>{error.error}</Text>}

                    <Input
                        label="Username"
                        placeholder="Enter Username"
                        error={errors.userName || error?.username?.[0]}
                        onChangeText={(value) => {
                            onChange({ name: 'userName', value });
                        }}
                    />

                    <Input
                        label="First name"
                        placeholder="Enter first name"
                        onChangeText={(value) => {
                            onChange({ name: 'firstName', value });
                        }}
                        error={errors.firstName || error?.first_name?.[0]}
                    />

                    <Input
                        label="Last name"
                        placeholder="Enter last name"
                        error={errors.lastName || error?.last_name?.[0]}
                        onChangeText={(value) => {
                            onChange({ name: 'lastName', value });
                        }}
                    />

                    <Input
                        label="Email"
                        placeholder="Enter email"
                        error={errors.email || error?.email?.[0]}
                        onChangeText={(value) => {
                            onChange({ name: 'email', value });
                        }}
                    />

                    <Input
                        label="Password"
                        placeholder="Enter Password"
                        secureTextEntry={true}
                        icon={<Text>Show</Text>}
                        iconPosition='right'
                        error={errors.password || error?.password?.[0]}
                        onChangeText={(value) => {
                            onChange({ name: 'password', value });
                        }}
                    />

                    <CustomButton
                        loading={loading}
                        onPress={onSubmit}
                        title="Submit"
                        loading={loading}
                        disabled={loading}
                        primary />
                </View>

                <View style={styles.createSection}>
                    <Text style={styles.infoText}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => { navigate(LOGIN) }}>
                        <Text style={styles.linkBtn}>Login</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </Container>
    )
}

export default RegisterComponent;