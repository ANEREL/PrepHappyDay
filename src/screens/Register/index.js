import React, { useState, useContext } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import RegisterComponent from '../../components/Register';
import { LOGIN } from '../../constants/routeNames';
import register, { clearAuthState } from '../../context/actions/auth/register';
import { GlobalContext } from '../../context/Provider';

const Register = () => {

    const { navigate } = useNavigation();

    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});

    const {
        authDispatch,
        authState: { error, loading, data }
    } = useContext(GlobalContext);

    useFocusEffect(
        React.useCallback(() => {

            // This will run on entry into the screen
            // console.log('Hello')

            // This will run on exit of screen
            // 'Clean up function'
            return () => {
                if (data) {
                    clearAuthState()(authDispatch);
                }
            }
        }, [data, error])
    );

    const onChange = ({ name, value }) => {
        setForm({ ...form, [name]: value });
        if (name === 'password') {
            if (value.length < 6) {
                setErrors((prev) => { return { ...prev, [name]: 'Password needs to be 6 characters.' } });
            }
            else {
                setErrors((prev) => { return { ...prev, [name]: null } });
            }
        }
        else {
            if (value !== '') {
                setErrors((prev) => { return { ...prev, [name]: null } });
            }
            else {
                setErrors((prev) => { return { ...prev, [name]: 'This field is required.' } });
            }
        }
    }

    const onSubmit = () => {
        //validations

        if (!form.userName) {
            setErrors((prev) => { return { ...prev, userName: "Please add a username" } });
        }
        if (!form.lastName) {
            setErrors((prev) => { return { ...prev, lastName: "Please add a last name" } });
        }
        if (!form.firstName) {
            setErrors((prev) => { return { ...prev, firstName: "Please add a first name" } });
        }
        if (!form.email) {
            setErrors((prev) => { return { ...prev, email: "Please add an email" } });
        }
        if (!form.password) {
            setErrors((prev) => { return { ...prev, password: "Please add a password" } });
        }

        if (Object.values(form).length === 5 &&
            Object.values(form).every((item) => item.trim().length > 0) &&
            Object.values(errors).every((item) => !item)) {

            register(form)(authDispatch)((response)=>{
                navigate(LOGIN, {data: response});
            });
        }
    }

    return (
        <RegisterComponent
            onSubmit={onSubmit}
            onChange={onChange}
            form={form}
            errors={errors}
            error={error}
            loading={loading}
        />
    )
}

export default Register;