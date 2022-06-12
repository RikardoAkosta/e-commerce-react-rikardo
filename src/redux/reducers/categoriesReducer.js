import { categoriesActions } from "../actions";

const INITIAL_STATE = [
    // {
    //     id: 1,
    //     name: "Smart TV"
    // },
    // {
    //     id: 2,
    //     name: "Computers"
    // },
    // {
    //     id: 3,
    //     name: "Smartphones"
    // },
];

const categoriesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case categoriesActions.getCategories:
            return action.payload

        default:
            return state;
    }
}

export default categoriesReducer;
