import { LOGIN, GET_OVERVIEW, GET_GIFTS, GET_MY_DATA } from './actions';

const initialState = {

}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                appReducer: action.data,
                token: action.data.token
            }
        case GET_GIFTS:
            return {
                ...state,
                giftsList: action.data
            }
        case GET_MY_DATA:
            return{
                ...state,
                myData: action.data
            }
        case GET_OVERVIEW:
            return {
                ...state,
                appReducer: action.data
            }
        default:
            return state;
    }
}