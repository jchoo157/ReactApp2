import React from 'react';

class ComplexForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "INITIAL MOFUGGIN STATE"
    }

    this.updateState = this.updateState.bind(this);
  };

  updateState(e) {
    this.setState({data: e.target.value});
  }

  render() {
    return (
      <div>
        <Content initialData={this.state.data} updateData={this.updateState} />
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <div>
        <input type="text" value={this.props.initialData} onChange={this.props.updateData} />
        <h3>{this.props.initialData}</h3>
      </div>
    );
  }
}

export default ComplexForm;