// and adding reducers to it
import products from './productsReducer.js'
import categories from './categoriesReducer.js'
import cart from './cartReducer'
import {createStore, combineReducers,applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

let reducers = combineReducers({categories, products,cart});

const store = () => {
    return createStore(reducers, composeWithDevTools(applyMiddleware(ReduxThunk)))
}

export default store();