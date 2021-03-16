import React from 'react';
import { Text, TextInput, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './style';

const CustomButton = ({ title, primary, secondary, danger, disabled, loading, onPress }) => {

    const getBackgroundColor = () => {
        if (disabled) return colors.grey;
        if (primary) return colors.primary;
        if (secondary) return colors.secondary;
        if (danger) return colors.danger;
    }

    return (
        <TouchableOpacity onPress={onPress} style={[styles.wrapper, { backgroundColor: getBackgroundColor() }]} disabled={disabled}>

            <View style={[styles.loaderSection]}>
                {title && <Text style={{ color: disabled ? "black" : colors.white, paddingRight: loading?5:0 }}>{title}</Text>}
                {loading && <ActivityIndicator color={primary?colors.secondary:colors.primary}/>}
            </View>

        </TouchableOpacity>
    )
}

export default CustomButton;