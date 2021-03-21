import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Text, Image, View, TouchableOpacity } from 'react-native';

import Input from '../common/Input';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';

import styles from './style';

import { REGISTER } from '../../constants/routeNames';
import Message from '../common/message';

const LoginComponent = ({ error, onChange, justSignedUp, onSubmit, loading, form }) => {

    const { navigate } = useNavigation();

    return (
        <Container>

            <Image source={require('../../assets/images/logo.png')} style={styles.logoImage} />

            <View>

                <Text style={styles.title}>Welcome to RNContacts</Text>
                <Text style={styles.subTitle}>Please login here</Text>

                <View style={styles.form}>

                    {justSignedUp &&
                        <Message
                            onDismiss={() => {}}
                            success
                            message="Registration Successful!" />
                    }

                    {error && !error.error && (
                        < Message
                            onDismiss={() => { console.log('dismiss') }}
                            danger
                            message="Invalid Credentials" />)}

                    {error &&
                        <Message
                            onDismiss={() => { console.log('dismiss') }}
                            danger
                            message={error.error} />

                    }

                    <Input
                        label="Username"
                        placeholder="Enter Username"
                        error={error?.username?.[0]}
                        value={form.userName || null}
                        onChangeText={(value) => {
                            onChange({ name: 'userName', value });
                        }}
                    />

                    <Input
                        label="Password"
                        placeholder="Enter Password"
                        secureTextEntry={true}
                        icon={<Text>Show</Text>}
                        iconPosition='right'
                        error={error?.password?.[0]}
                        onChangeText={(value) => {
                            onChange({ name: 'password', value });
                        }}
                    />

                    <CustomButton loading={loading} disabled={loading} onPress={onSubmit} title="Submit" loading={false} primary />
                </View>

                <View style={styles.createSection}>
                    <Text style={styles.infoText}>Need a new account?</Text>
                    <TouchableOpacity onPress={() => { navigate(REGISTER) }}>
                        <Text style={styles.linkBtn}>Register</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </Container>
    )
}

export default LoginComponent;