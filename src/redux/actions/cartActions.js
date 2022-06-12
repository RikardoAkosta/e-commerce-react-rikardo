import { getConfig } from "../../utils";
import axios from "axios";
import { setIsLoading } from "./appActions";

export const cartActions = {
    setCart: "SET_CART"
}

export const setCart = cart => ({
    type: cartActions.setCart,
    payload: cart
});

export const getCartThunk = () => {
    return dispatch => {
        dispatch(setIsLoading(true))
        return axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/cart', getConfig())
            .then(res => dispatch(setCart(res.data.data.cart)))
            .catch(error => {
                if(error.response.status === 404){
                    console.log("Me ejecuté")
                    dispatch(setCart({}));
                }
            })
            .finally(() => dispatch(setIsLoading(false)));
    }
}

export const addToCartThunk = (productId, quantity) => {
    return dispatch => {
        const item = { id: productId, quantity}
        dispatch(setIsLoading(true));
        return axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/cart', item, getConfig())
            .then(() => dispatch(getCartThunk()))
            .finally(() => dispatch(setIsLoading(false)));
    }
}

export const removeFromCartThunk = productId => {
    return dispatch => {
        dispatch(setIsLoading(true));
        return axios.delete(`https://ecommerce-api-react.herokuapp.com/api/v1/cart/${productId}`, getConfig())
            .then(() => dispatch(getCartThunk()))
            .finally(() => setIsLoading(false));
    }
}
