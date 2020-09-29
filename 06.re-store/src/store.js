import {createStore, applyMiddleware} from 'redux';

import thunkMiddleware from 'redux-thunk';

import reducer from './reducers';

const logMiddleware = () => next => action => {
  console.log(action.type)
  next(action)
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware, logMiddleware));

// const myActionCreator = (timeout) =>(dispatch) => {
//   setTimeout(() => dispatch({
//     type: 'TIME_OUT'
//   }), timeout) 
// }

// store.dispatch(myActionCreator(3000))
export default store;