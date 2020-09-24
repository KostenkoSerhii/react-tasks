import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

const Counter = ({counter, inc, dec, rnd}) => {
  return(
    <div className="jumbotron">
    <h2 id="counter">{counter}</h2>
    <button id="dec" className="btn btn-primary btn-large" onClick={dec}>DEC</button>
    <button id="inc" className="btn btn-primary btn-large" onClick={inc}>INC</button>
    <button id="rnd" className="btn btn-primary btn-large" onClick={rnd}>RND</button>
  </div>
  )
} 

const mapStateToProps = (state) => {
  return {
    counter: state
  }
}

// const mapDispatchToProps = (dispatch)  => {
//   return bindActionCreators(actions, dispatch);
// }

export default connect(mapStateToProps, actions)(Counter);