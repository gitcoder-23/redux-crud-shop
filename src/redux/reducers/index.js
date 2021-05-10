import { combineReducers } from 'redux'
import { productReducer } from './productReducer'

// to access multiple reducers
export const reducers = combineReducers({
    //  fetch all datas
    // productState."products" this is accessable
    // to solve this "contactsData.map is not a function"
    // products: productReducer
    // key: createReducer
    allProducts: productReducer,
})