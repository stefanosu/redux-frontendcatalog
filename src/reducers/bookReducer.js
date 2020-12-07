import *  as actions from '../actions/bookAction'

export const initialState = {
  loading: false,
  hasErrors: false,
  book: {},
}

export const bookReducer = (state = initialState, action) => {
  console.log('payload')
  console.log(action.payload);
  switch (action.type) {
    case actions.GET_BOOK:
      return { ...state, loading: true }
    case actions.GET_BOOK_SUCCESS:
      return { book: action.payload, loading: false, hasErrors: false }
    case actions.GET_BOOK_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    default:
      return state
  }
}


export const updateBookReducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.UPDATE_BOOK:
      return {...state, loading: true } 
    case actions.UPDATE_BOOK_SUCCESS:
      return { book: action.payload, loading: false, hasErrors: false } 
    case actions.UPDATE_BOOK_FAIL:
      return { ...state, loading: false, hasErrors: true }
    default: 
      return true
  }
}