import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';

export default StyleSheet.create({
    wrapper: {
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        flex: 1,
        justifyContent: 'center'
    },
    modalView: {
        backgroundColor: colors.white,
        minHeight: 300,
        marginHorizontal: 20,
        borderRadius: 5
    },
    header: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-between'
    },
    body: {
        minHeight: 300,
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    footer: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-between'
    },
});