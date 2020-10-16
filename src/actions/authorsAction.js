
export const GET_AUTHORS = 'GET AUTHORS'
export const GET_AUTHORS_SUCCESS = 'GET_AUTHORS_SUCCESS'
export const GET_AUTHORS_FAILURE = 'GET_AUTHORS_FAILURE'

export const getAuthors = () => ({ type: GET_AUTHORS})
export const getAuthorsSuccess = author => ({
  type: GET_AUTHORS_SUCCESS,
  payload: author,
})
export const getAuthorFailure = () => ({ type: GET_AUTHORS_FAILURE })

export function fetchAuthors() {
  return async dispatch => {
    dispatch(getAuthors())

    try {
      const response = await fetch('http://localhost:3000/author')
      const data = await response.json()
      console.log(data);

      dispatch(getAuthorsSuccess(data))
    } catch (error) {
      dispatch(getAuthorFailure())
    }
  }
}
