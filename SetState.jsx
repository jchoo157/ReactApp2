import React from 'react';

class SetState extends React.Component {
  constructor() {
    super();

    this.state = {
      data: []
    }

    this.addToArray = this.addToArray.bind(this);
  };

  addToArray() {
    var number = Math.random()
    var myArray = this.state.data;
    myArray.push(number);
    this.setState({data: myArray})
  };

  render() {
    return (
      <div>
        <button onClick={this.addToArray}>Add To Array</button>
        <h2>[{this.state.data}]</h2>
      </div>
    );
  }
}

export default SetState;