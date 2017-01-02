import React from 'react';

class AddItems extends React.Component {
  constructor() {
    super();

    this.state = {
      data: []
    }

    this.addToArray = this.addToArray.bind(this);
  };

  addToArray() {
    var num = "hi "
    var myArray = this.state.data;
    myArray.push(num);
    this.setState({data: myArray});
  }

  render() {
    return (
      <div>
        <button onClick={this.addToArray}>Click Me!</button>
        <h1>[{this.state.data}]</h1>
      </div>
    );
  }

}

export default AddItems;