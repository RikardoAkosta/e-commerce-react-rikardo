import { purchasesActions } from "../actions";

const INITIAL_STATE = []

const purchasesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case purchasesActions.setPurchases:
            return action.payload
    
        default:
            return state;
    }
}

export default purchasesReducer;
