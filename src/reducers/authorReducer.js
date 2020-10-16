import * as actions from '../actions/authorAction'

export const initialState = {
  loading: false,
  hasErrors: false,
  authors: [],
}

export default function authorReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_AUTHORS:
      return { ...state, loading: true }
    case actions.GET_AUTHORS_SUCCESS:
      return { ...state, authors: action.payload, loading: false, hasErrors: false }
    case actions.GET_AUTHORS_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    default:
      return state
  }
}
