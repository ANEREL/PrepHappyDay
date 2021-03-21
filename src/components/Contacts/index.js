import React from 'react';
import { Text, Image, View, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import AppModal from '../common/AppModal';
import Container from '../common/Container';
import Message from '../common/message';
import CustomButton from '../../components/common/CustomButton';
import colors from '../../assets/theme/colors';

const ContactsComponent = ({ modalVisible, data, loading, setModalVisible }) => {

    const ListEmptyComponent = () => {
        return (
            <View style={{ paddingVertical: 80, paddingHorizontal: 80 }}>

                <Message info message="Nothing to show" />
            </View>
        )
    }

    const renderItem = ({ item }) => {
        
        const {first_name} = item;

        return (
            <TouchableOpacity>
                <View style={{alignItems: 'center', flexDirection: 'row', paddingHorizontal:20, paddingVertical:7}}>
                    <View style={{marginRight: 20, width: 45, height: 45, backgroundColor: colors.grey}}></View>
                    <Text>{first_name}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View>
            {/* MODAL STUFF */}
            {/* <Text>Hello from contacts!!!</Text> */}
            {/* <AppModal
                title="My Modal"
                modalBody={<Text>Help</Text>}
                modalFooter="Footer"
                modalVisible={modalVisible}
                setModalVisible={setModalVisible} /> */}
            {/* <CustomButton
                title="Open Modal"
                primary
                onPress={() => { setModalVisible(true) }} /> */}

            {loading &&
                <View style={{ paddingVertical: 80, paddingHorizontal: 80 }}>
                    <ActivityIndicator
                        color={colors.primary}
                        size="large"
                    />
                </View>
            }

            {!loading && <FlatList
                renderItem={renderItem}
                keyExtractor={(item) => String(item.id)}
                data={data}
                ListEmptyComponent={ListEmptyComponent} 
                ListFooterComponent={<View style={{height:100}}></View>} />
            }
        </View>
    )
}

export default ContactsComponent;