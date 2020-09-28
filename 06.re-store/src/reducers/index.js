import { actionTypes } from '../actions';
const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [
    {
      id: 1,
      name: 'book1',
      count: 3,
      total: 50
    },
    {
      id: 2,
      name: 'book2',
      count: 2,
      total: 70
    },
    {
      id: 3,
      name: 'book3',
      count: 4,
      total: 60
    }
  ],
  orderTotal: 300
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.FETCH_BOOKS_REQUEST: 
      return {
        ...state,
        books: [],
        loading: true,
        error: null,
      };

    case actionTypes.FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null
      };

    case actionTypes.FETCH_BOOKS_ERROR:
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload
      };
    default: 
      return state;
  }
  
}

export default reducer;