import AsyncStorage from '@react-native-async-storage/async-storage';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const GET_OVERVIEW = 'GET_OVERVIEW';

export const logout = () => {
    AsyncStorage.removeItem('Account');
    return { type:LOGOUT }
} 

export const loginDispatch = (data) => {
    return dispatch => {
        dispatch({ type: LOGIN, data: data })
    }
}


export const getOverviewDispatch = (data) => {
    return dispatch => {
        dispatch({ type: GET_OVERVIEW, data: data })
    }
}
export const getOverview = (token, location) => {
    return async dispatch => {
        try {
            const url = 'http://10.100.6.1:3001/api/company/get_companies_by_location';
            const request = await fetch(url, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    latitude: location.coords.latitude,
                    longtitude: location.coords.longitude
                })
            })
            const data = await request.json();

            if(data.status){
                console.log(JSON.stringify(data));
                dispatch(getOverviewDispatch(data.message))
            } else {
                let message = data.message;
                throw new Error(message);
            }
        } catch (error) {
            console.log('ERRRRRR: ' + JSON.stringify(error));
        }
    }
}


export const login = (email,password) => {
    return async dispatch => {
        try {
            const url = 'http://10.100.6.1:3001/api/account/login';
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
                dispatch(loginDispatch(data.message))
            } else {
                let message = data.message;
                throw new Error(message);
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }
}