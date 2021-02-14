// and adding reducers to it
import products from './productsReducer.js'
import categories from './categoriesReducer.js'

import {createStore, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// add as many reducers as you want
let reducers = combineReducers({categories, products});

const store = () => {
    return createStore(reducers, composeWithDevTools())
}

export default store();