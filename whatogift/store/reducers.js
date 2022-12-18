import { LOGIN, GET_OVERVIEW } from './actions';

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
        case GET_OVERVIEW:
            return {
                ...state,
                appReducer: action.data
            }
        default:
            return state;
    }
}