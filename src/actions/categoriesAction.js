export const GET_CATEGORIES = 'GET CATEGORIES'
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS'
export const GET_CATEGORIES_FAILURE = 'GET_CATEGORIES_FAILURE'

export const getCategories = () => ({ type: GET_CATEGORIES})
export const getCategoriesSuccess = Categories => ({
  type: GET_CATEGORIES_SUCCESS,
  payload: Categories,
})
export const getCategoriesFailure = () => ({ type: GET_CATEGORIES_FAILURE })

export function fetchCategories() {
  return async dispatch => {
    dispatch(getCategories())

    try {
      const response = await fetch('http://localhost:3000/category')
      const data = await response.json()
      console.log(data);

      dispatch(getCategoriesSuccess(data))
    } catch (error) {
      dispatch(getCategoriesFailure())
    }
  }
}