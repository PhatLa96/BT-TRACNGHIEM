import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from "redux-thunk";
import question from "./reducer/question"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
   question,

})
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store