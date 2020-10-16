export const GET_BOOKS = 'GET BOOKS'
export const GET_BOOKS_SUCCESS = 'GET_BOOKS_SUCCESS'
export const GET_BOOKS_FAILURE = 'GET_BOOKS_FAILURE'

export const getBooks = () => ({ type: GET_BOOKS})
export const getBooksSuccess = books => ({
  type: GET_BOOKS_SUCCESS,
  payload: books,
})
export const getBooksFailure = () => ({ type: GET_BOOKS_FAILURE })

export function fetchBooks() {
  return async dispatch => {
    dispatch(getBooks())

    try {
      const response = await fetch('http://localhost:3000/book')
      const data = await response.json()
      console.log(data);

      dispatch(getBooksSuccess(data))
    } catch (error) {
      dispatch(getBooksFailure())
    }
  }
}
