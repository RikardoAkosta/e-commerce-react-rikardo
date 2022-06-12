import axios from "axios";
import { setIsLoading } from "./appActions";

export const categoriesActions = {
    getCategories: "GET_CATEGORIES"
}

export const getCategories = id => ({
    type: categoriesActions.getCategories,
    payload: id
});

export const getCategoriesThunk = () => {
    return dispatch => {
        dispatch(setIsLoading(true));
        return axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products/categories')
            .then(res => dispatch(getCategories(res.data.data.categories)))
            .finally(() => dispatch(setIsLoading(false)));
    }
}
