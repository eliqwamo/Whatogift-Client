import { LOGIN } from './actions';

const initialState = {

}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return{
                ...state,
                appReducer: action.data
            }
        default:
            return state;
    }
}