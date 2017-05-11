import React from 'react';

class ItemDetail extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1>{this.props.item.name}</h1>
        <h1>Happiness: {this.props.item.happiness}</h1>
        <h1>Price: {this.props.item.price}</h1>
      </div>
    );
  }
}

export default ItemDetail;
