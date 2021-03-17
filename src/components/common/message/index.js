import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './style';

const Message = ({ message, primary, danger, success, info, retry, retryFn, onDismiss }) => {

    const [userDismissed, setDismissed] = React.useState(false);

    const getBackgroundColor = () => {
        if (primary) return colors.primary;
        if (info) return colors.secondary;
        if (danger) return colors.danger;
        if (success) return colors.success;
    }

    return (
        <>
            {userDismissed ? null : (
                <TouchableOpacity style={[styles.wrapper, { backgroundColor: getBackgroundColor() }]}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: colors.white, flex: 1 }}>{message}</Text>
                        {retry && typeof onDismiss !== 'function' && (
                            <TouchableOpacity onPress={retryFn}>
                                <Text style={{ color: colors.white }}>Retry</Text>
                            </TouchableOpacity>
                        )}
                        {typeof onDismiss === 'function' && (
                            <TouchableOpacity onPress={() => { setDismissed(true); onDismiss(); }}>
                                <Text style={{ color: colors.white }}>X</Text>
                            </TouchableOpacity>
                        )}
                    </View>

                </TouchableOpacity>
            )}
        </>
    )
}

export default Message;