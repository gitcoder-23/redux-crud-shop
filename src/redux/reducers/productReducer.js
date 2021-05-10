import { ActionTypes } from '../constants/action-types'


// create reducer here
// data coming from fake api
const initialState = {
    products: [
        {
            id: 1,
            title: 'Prabhat',
            category: 'Jr.Software Engineer'
        }
    ] // no dummy data here
}

// eslint-disable-next-line import/no-anonymous-default-export
export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case ActionTypes.SET_PRODUCTS:
        return state; // state is empty(no dummy data)

    default:
        return state;
    }
}


