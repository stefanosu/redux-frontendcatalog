import * as actions from '../actions/categoriesAction'

export const initialState = {
  loading: false,
  hasErrors: false,
  categories: [],
}

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_CATEGORIES:
      return { ...state, loading: true }
    case actions.GET_CATEGORIES_SUCCESS:
      return { categories: action.payload, loading: false, hasErrors: false }
    case actions.GET_CATEGORIES_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    default:
      return state
  }
}
