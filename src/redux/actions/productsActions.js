import axios from "axios";
import { setIsLoading } from "./appActions";

export const productsActions = {
    setProducts: "SET_PRODUCTS",
    setProductDetail: "SET_PRODUCT_DETAIL",
    filterPrice: "FILTER_PRICE"
}

export const setProducts = products => ({
    type: productsActions.setProducts,
    payload: products
});

export const setProductDetail = product => ({
    type: productsActions.setProductDetail,
    payload: product
});

export const filterPrice = prices => ({
    type: productsActions.filterPrice,
    payload: prices
});

export const getProductsThunk = () => {
    return dispatch => {
        dispatch(setIsLoading(true))
        return axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products')
        .then(res => dispatch(setProducts(res.data.data.products)))
        .finally(() => dispatch(setIsLoading(false)));
    }
}

export const filterCategoryThunk = categoryId => {
    return dispatch => {
        dispatch(setIsLoading(true))
        return axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products?category=${categoryId}`)
            .then(res => dispatch(setProducts(res.data.data.products)))
            .finally(() => dispatch(setIsLoading(false)));
    }
}

export const filterNameThunk = name => {
    return dispatch => {
        dispatch(setIsLoading(true));
        return axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products?query=${name}`)
            .then(res => dispatch(setProducts(res.data.data.products)))
            .finally(() => dispatch(setIsLoading(false)));
    }
}


export const getProductDetailThunk = id => {
    return dispatch => {
        dispatch(setIsLoading(true));
        return axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`)
        .then(res => dispatch(setProductDetail(res.data.data.product)))
        .finally(() => dispatch(setIsLoading(false)));
    }
}
