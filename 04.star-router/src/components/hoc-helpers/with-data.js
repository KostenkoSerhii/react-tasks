import React, { Component } from 'react';

import ErrorIndicator from 'components/error-indicator';
import Spinner from 'components/spinner';

const withData = (View) => {
  return class WithData extends Component{
    
    state = {
      data: null,
      loading: true,
      hasError: false
    }

    componentDidUpdate(prevProps) {
      if(this.props.getData !== prevProps.getData) this.update()
    }
    
    componentDidMount(){
      this.update()
    }

    componentDidCatch() {
      this.onError()
    }
    
    update(){
      this.props.getData()
      .then( data => {
        this.setState({
          data,
          loading: false
        })
      })
      .catch(this.onError)
    }
  
    onError = () => {
      this.setState(({hasError}) => { 
        return { 
          hasError: true,
          loading: false
         }
      });
    }

    render(){
      const { data, loading, hasError } = this.state;

      if(hasError) return <ErrorIndicator/>;
      if(loading) return <Spinner/>;
   
      return <View {...this.props} data={data} />
    }
  }
};

export default withData;