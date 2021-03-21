import React, { useState, useContext, useEffect } from 'react';

import LoginComponent from '../../components/Login';

import { GlobalContext } from '../../context/Provider';
import login from '../../context/actions/auth/login';
import { useRoute } from '@react-navigation/core';

const Login = () => {

    const [form, setForm] = useState({});
    const [justSignedUp, setJustSignedUp] = useState(false);
    const { params } = useRoute();

    useEffect(() => {
        if (params?.data) {
            console.log(params.data);
            setJustSignedUp(true);
            setForm({ ...form, userName: params.data.username });
        }
    }, [params]);

    const {
        authDispatch,
        authState: { error, loading }
    } = useContext(GlobalContext);

    const onSubmit = () => {
        if (form.userName && form.password) {
            login(form)(authDispatch);
        }
    }

    const onChange = ({ name, value }) => {
        setForm({ ...form, [name]: value });
        setJustSignedUp(false);
    }

    return (
        <LoginComponent
            onSubmit={onSubmit}
            onChange={onChange}
            form={form}
            error={error}
            loading={loading}
            justSignedUp={justSignedUp}
        />
    )
}

export default Login;