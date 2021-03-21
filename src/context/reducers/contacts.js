import { GET_CONTACTS_SUCCESS, GET_CONTACTS_LOADING, GET_CONTACTS_FAIL } from "../../constants/actionTypes";

const contacts = (state, { type, payload }) => {

    // used because API not authing because login not working
    const tempData = [
        {id: "1", first_name: 'ting1'}, 
        {id: "2", first_name: 'ting2'}, 
        {id: "3", first_name: 'ting3'},
        {id: "4", first_name: 'ting1'}, 
        {id: "5", first_name: 'ting2'}, 
        {id: "6", first_name: 'ting3'},
        {id: "7", first_name: 'ting1'}, 
        {id: "8", first_name: 'ting2'}, 
        {id: "9", first_name: 'ting3'},
        {id: "10", first_name: 'ting1'}, 
        {id: "11", first_name: 'ting2'}, 
        {id: "12", first_name: 'ting3'},
        {id: "13", first_name: 'ting1'}, 
        {id: "14", first_name: 'ting2'}, 
        {id: "15", first_name: 'ting3'},
        {id: "16", first_name: 'ting1'}, 
        {id: "17", first_name: 'ting2'}, 
        {id: "18", first_name: 'ting3'},
    ]

    switch (type) {
        case GET_CONTACTS_LOADING:
            return {
                ...state,
                getContacts: {
                    ...state.getContacts,
                    loading: true,
                    error: null
                },
            };

        case GET_CONTACTS_SUCCESS:
            return {
                ...state,
                getContacts: {
                    ...state.getContacts,
                    loading: false,
                    data: payload,
                    error: null
                },
            };

        case GET_CONTACTS_FAIL:
            return {
                ...state,
                getContacts: {
                    ...state.getContacts,
                    loading: false,
                    // error: payload <--- supposed to end with this
                    // for testing we will return contacts anyways
                    data: tempData,
                    error: null
                },
            };

        default:
            return state;
    }

};

export default contacts;