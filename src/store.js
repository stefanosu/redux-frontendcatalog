import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunk from 'redux-thunk';
import booksReducer from './reducers/booksReducer'
import authorReducer from './reducers/authorReducer';
import categoriesReducer from './reducers/categoriesReducer';
import {updateBookReducer,  bookReducer } from './reducers/bookReducer'



const reducer = combineReducers({
  books: booksReducer,
  book: bookReducer, 
  authors: authorReducer,
  categories: categoriesReducer,
  updateBook: updateBookReducer
}) 

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose; 


const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))



export default store 