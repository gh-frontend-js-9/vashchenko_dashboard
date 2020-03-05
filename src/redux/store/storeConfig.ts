import {createStore, applyMiddleware} from 'redux'
import thunk from "redux-thunk";

import allReducers from '../reducers/combineReducers'

const store = createStore(allReducers, applyMiddleware(thunk));

export default store;
