import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { useState, useContext } from 'react';
import ContactsComponent from '../../components/Contacts';
import { GlobalContext } from '../../context/Provider';
import getContacts from '../../context/actions/contacts/getContacts';

const Contacts = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const { 
        contactsDispatch,
        contactsState: { getContacts: { data, loading } } 
    } = useContext(GlobalContext);

    // const { setOptions, toggleDrawer } = useNavigation();
    React.useEffect(() => {
        getContacts()(contactsDispatch);
        // setOptions({headerLeft:()=>{<Text>Help</Text>}});
        // toggleDrawer();
    }, []);

    return (
        <ContactsComponent
            modalVisible={modalVisible}
            setModalVisible={setModalVisible} 
            data={data}
            loading={loading}/>
    )
}

export default Contacts;