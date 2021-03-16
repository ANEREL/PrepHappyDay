import React from 'react';

import LoginComponent from '../../components/Login';

const Login = () => {

    const [value, onChangeText] = React.useState('Useless Placeholder');

    return (
        <LoginComponent/>
    )
}

export default Login;