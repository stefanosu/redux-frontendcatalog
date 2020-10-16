export const GET_BOOK = 'GET BOOK'
export const GET_BOOK_SUCCESS = 'GET_BOOK_SUCCESS'
export const GET_BOOK_FAILURE = 'GET_BOOK_FAILURE'

export const getBook= () => ({ type: GET_BOOK})
export const getBookSuccess = book => ({
  type: GET_BOOK_SUCCESS,
  payload: book,
})
export const getBookFailure = () => ({ type: GET_BOOK_FAILURE })

export function fetchBook(id) {
  return async dispatch => {
    // debugger
    dispatch(getBook())

    try {
      const response = await fetch(`http://localhost:3000/book/${id}`)
      const data = await response.json()
      console.log(data);

      dispatch(getBookSuccess(data))
    } catch (error) {
      dispatch(getBookFailure())
    }
  }
}

export const CREATE_BOOK = 'CREATE_BOOK'
export const CREATE_BOOK_SUCCESS = 'CREATE_BOOK_SUCCESS'
export const CREATE_BOOK_FAILURE = 'CREATE_BOOK_FAILURE'

export const createBookFailure = 'CREATE_BOOK_FAILURE'


export const makeBook = () => ({ type: CREATE_BOOK})

export function createBook(){
  return async dispatch => {
    dispatch(makeBook()) 

    try {
      const response = await fetch('http://localhost:3000/book')
      const data = await response.json() 
      console.log(data);

      dispatch(getBookSuccess(data)) 
    } catch(error) {
      dispatch(getBookFailure())
    }
  }
}