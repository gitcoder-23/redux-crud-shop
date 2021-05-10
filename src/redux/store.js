import { createStore } from 'redux'
import { reducers } from './reducers/index'


// "createStore"- takes two arguements
// "composeWithDevTools" is the middleware as thunk
// "composeWithDevTools" use as extension as 
// "window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()"
const store = createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;