// TODO: Fixing overflow on statusbar
//https://stackoverflow.com/questions/51289587/react-native-how-to-use-safeareaview-for-android-notch-devices/55017347

import {StyleSheet} from 'react-native';

//todo: investigate why i need this padding on my device?

export default StyleSheet.create({
    wrapper: {
        padding: 40,
    }
});