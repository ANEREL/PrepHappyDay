import React from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './style';

const Input = ({ onChangeText, icon, iconPosition, style, value, label, error, secureTextEntry, ...props }) => {

    const [focused, setFocused] = React.useState(false);
    const [secure, setSecure] = React.useState(()=>{return secureTextEntry? true:false});

    const getFlexDirection = () => {
        if (icon && iconPosition) {
            if (iconPosition == 'right') return 'row-reverse';
        }
        return 'row';
    }

    const getBorderColor = () => {
        if (error) return colors.danger;
        if (focused) return colors.primary;
        else return colors.grey;
    }

    return (
        <View style={styles.inputContainer}>
            {label && <Text>{label}</Text>}
            <View style={[styles.wrapper, { borderColor: getBorderColor(), flexDirection: getFlexDirection() }]}>
                <View>{icon && <TouchableOpacity onPress={()=>{setSecure((prev)=>!prev)}}>{secure?<Text>Show</Text>:<Text>Hide</Text>}</TouchableOpacity>}</View>
                <TextInput
                    style={[styles.textInput, style]}
                    onChangeText={onChangeText}
                    value={value}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    secureTextEntry={secure}
                    {...props}
                />
            </View>
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    )
}

export default Input;