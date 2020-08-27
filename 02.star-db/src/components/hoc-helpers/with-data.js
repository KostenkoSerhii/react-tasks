import React, { Component } from 'react';

import Spinner from 'components/spinner';

const withData = (View) => {
  return class extends Component{
    
    state = {
      data: null,
      error: false
    }
  
    componentDidMount(){
        this.props.getData()
        .then( data => {
          this.setState({
            data
          })
        })
        .catch(this.onError)
    }
  
    onError = err => {
      console.log(`errrroooorr!!!!`)
    }

    render(){
      const { data } = this.state;

      if(!data) return <Spinner/>
   
      return <View {...this.props} data={data} />
    }
  }
};

export default withData;