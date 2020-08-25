import React, { Component } from 'react';

import Spinner from 'components/spinner';

import ErrorButton from 'components/error-button';

import './item-details.sass';

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  )
}

export {
  Record
};

export default class ItemDetails extends Component {

  state = { 
    item: null,
    image: null,
    loading: false
  }

  updateItem(){
    const { itemId, getData, getImageUrl } = this.props;
    if(!itemId) return;
    
    getData(itemId)
      .then((item) => {
        console.log(`after`, this.state.loading)
        this.setState({ 
          item,
          image: getImageUrl(item),
          loading: false
        })
      })
      .catch(e => {console.log(`error`, e)})
  }

  componentDidMount(){
    this.updateItem();
  }

  componentDidUpdate(prevProps){
    if(this.props.itemId !== prevProps.itemId){
      this.setState({
        loading: true
      })
      console.log(`before`, this.state.loading) // не совсем понятно почему когда в первый раз кликаю на персонажа то не появляется спиннер
      this.updateItem();
     
    }
  }

  render() {
    const { item, image } = this.state;

    if(!item){
      return <span>Select item from list </span>
    };
    
    if(this.state.loading){
      return <Spinner/>
    };

    const { item: {id, name, gender, birthYear, eyeColor }} = this.state;

    return (
      <div className="item-details card">

        <img className="item-image"
          src={image} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            { React.Children.map(this.props.children, child => {
              return React.cloneElement(child, {item})
            })
            }
          </ul>
        <ErrorButton/>
        </div>
      </div>
    )
  }
}

