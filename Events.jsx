import React from 'react';

class Events extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "Initial Data"
    }

    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    this.setState({data: "DATA UPDATED! WOW!"})
  }

  render() {
    return (
      <div>
        <Content initialStateProp={this.state.data} updateStateProp={this.updateState} />
      </div>
    );
  }
}

// quick way to create a component with props
function Content(props) {
  return (
    <div>
      <button onClick={props.updateStateProp}>UPDATE LE DATA</button>
      <h1>{props.initialStateProp}</h1>
    </div>
  );
}

// longer way to create a component that takes props
// class Content extends React.Component {
//   render() {
//     return (
//       <div>
//         <button onClick={this.props.updateStateProp}>Update le prop</button>
//         <h1>{this.props.initialStateProp}</h1>
//       </div>
//     );
//   }
// }



export default Events;