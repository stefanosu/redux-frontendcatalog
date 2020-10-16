export const GET_AUTHORS = 'GET COMMENTS'
export const GET_AUTHORS_SUCCESS = 'GET_AUTHORS_SUCCESS'
export const GET_AUTHORS_FAILURE = 'GET_AUTHORS_FAILURE'

export const getAuthor = () => ({ type: GET_AUTHORS })
export const getAuthorsSuccess = authors => ({
  type: GET_AUTHORS_SUCCESS,
  payload: authors,
})
export const getAuthorsFailure = () => ({ type: GET_AUTHORS_FAILURE })

export function fetchAuthor(authorID) {
  return async dispatch => {
    dispatch(getAuthor())

    try {
      const response = await fetch(
        `http://localhost:3000/author/${authorID}`
      
      )
      const data = await response.json()
      console.log(data);

      dispatch(getAuthorsSuccess(data))
    } catch (error) {
      dispatch(getAuthorsFailure())
    }
  }
}
