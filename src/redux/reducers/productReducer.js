import { ActionTypes } from '../constants/action-types'


// create reducer here
// data coming from fake api
const initialState = {
    products: [] // no dummy data here
}

// eslint-disable-next-line import/no-anonymous-default-export
export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        // to fetch all data from api
    case ActionTypes.SET_PRODUCTS:
        return { ...state, products: payload }; // state is empty(no dummy data)

    default:
        return state;
    }
}


