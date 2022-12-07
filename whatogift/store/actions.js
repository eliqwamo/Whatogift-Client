import AsyncStorage from '@react-native-async-storage/async-storage';
export const LOGIN = 'LOGIN';


export const loginDispatch = (data) => {
    return dispatch => {
        dispatch({ type: LOGIN, data: data })
    }
}
export const login = (email,password) => {
    return async dispatch => {
        try {
            const url = 'http://10.100.8.1:3001/api/account/login';
            const request = await fetch(url, {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            const data = await request.json();
            if(data.status){
                AsyncStorage.setItem('Account', JSON.stringify({
                    token: data.token,
                    _id: data.message._id,
                    firstName: data.message.firstName,
                    lastName: data.message.lastName,
                    email: data.message.email,
                    avatar: data.message.avatar
                }));
                dispatch(loginDispatch(data))
            } else {
                let message = data.message;
                throw new Error(message);
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }
}