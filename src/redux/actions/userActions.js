import axios from "axios"
import { setIsLoading } from "./appActions"


export const loginThunk = data => {
    return dispatch => {
        dispatch(setIsLoading(true));
        return axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/users/login', data)
            .then(res => {
                localStorage.setItem("token", res.data.data.token);
                localStorage.setItem("userName", res.data.data.user.firstName + " " + res.data.data.user.lastName);
            })
            .finally(() => dispatch(setIsLoading(false)));
    }
}

export const signUpThunk = data => {
    return dispatch => {
        dispatch(setIsLoading(true));
        return axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/users', data)
            .finally(() => dispatch(setIsLoading(false)));
    }
}
