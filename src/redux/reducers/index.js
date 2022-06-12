import categoriesReducer from './categoriesReducer';
import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import cartReducer from './cartReducer';
import purchasesReducer from './purchasesReducer';
import appReducer from './appReducer';

const rootReducer = combineReducers({
    app: appReducer,
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
    purchases: purchasesReducer
});

export default rootReducer;
