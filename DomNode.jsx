import React from 'react';
import ReactDOM from 'react-dom';

class DomNode extends React.Component {
  constructor() {
    super();
    this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
  };

  findDomNodeHandler() {
    var myDiv = document.getElementById('myDiv');
    ReactDOM.findDOMNode(myDiv).style.color = 'green';
  }

  render() {
    return (
      <div>
        <button onClick={this.findDomNodeHandler}>Find DOM Node</button>
        <div id="myDiv">Node</div>
      </div>
    );
  }
}

export default DomNode;