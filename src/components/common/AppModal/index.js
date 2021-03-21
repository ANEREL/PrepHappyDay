import React from 'react';
import { View, ScrollView, Modal, Text, TouchableOpacity } from 'react-native';
import styles from './style';

const AppModal = ({ modalVisible, setModalVisible, title, modalBody, modalFooter }) => {
    return (
        <Modal visible={modalVisible} transparent>
            <View style={styles.wrapper}>
                <View style={styles.modalView}>
                    <ScrollView>

                        <View style={styles.header}>
                            <Text>Info</Text>
                            <Text>{title}</Text>
                            <TouchableOpacity onPress={() => { setModalVisible(false) }}><Text>Close</Text></TouchableOpacity>
                        </View>

                        <View style={styles.body}>{modalBody}</View>

                        <View style={styles.footer}>
                            <View></View>
                            <Text>{modalFooter}</Text>
                            <View></View>
                        </View>

                        {!modalFooter &&
                            (<View style={styles.footer}>
                                <Text>Info</Text>
                                <Text>Title</Text>
                                <TouchableOpacity><Text>Close</Text></TouchableOpacity>
                            </View>)
                        }

                    </ScrollView>
                </View>
            </View>
        </Modal>
    )
}

export default AppModal;